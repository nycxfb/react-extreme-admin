import React, { useState } from 'react';
import { Card, Image, message as Message, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import style from './index.module.less';
import { useMount, useLatest } from 'ahooks';
import { http_news_classification, http_news_list } from '@/api/external';
import Tips from '@/components/tips';

const MicroFront: React.FC = () => {
  const [newsArray, setNewsArray] = useState<Array<any>>([]);
  const [newsListArray, setNewsListArray] = useState<Array<any>>([]);
  const [classLoading, setClassLoading] = useState<boolean>(false);
  const [newsLoading, setNewsLoading] = useState<boolean>(false);

  useMount(async () => {
    await getNewsClassification();
  });

  const latestRef = useLatest(newsListArray);

  //获取新闻分类
  const getNewsClassification = async () => {
    setClassLoading(true);
    const { code, data, message } = await http_news_classification();
    if (code == '200') {
      const classicNews = data;
      classicNews.forEach((item: any) => {
        item.active = false;
      });
      classicNews[2].active = true;
      setNewsArray(classicNews);
      setTimeout(() => {
        getNewsList(classicNews[2].typeId);
      }, 1000);
    } else {
      Message.error(message);
    }
    setClassLoading(false);
  };

  // 获取新闻列表
  const getNewsList = async (typeId: string) => {
    newsArray.forEach((newsItem: any) => {
      if (newsItem?.typeId == typeId) {
        newsItem.active = true;
      } else {
        newsItem.active = false;
      }
    });
    setNewsLoading(true);
    const { code, data, message } = await http_news_list({ typeId });
    if (code == '200') {
      const newsList = data;
      newsList.forEach((item: any) => {
        item.active = false;
      });
      newsList[0].active = true;
      setNewsListArray(newsList);
      setTimeout(() => {
        getNewsDetail(newsList[0]?.newsId);
      }, 1000);
    } else {
      Message.error(message);
    }
    setNewsLoading(false);
  };

  // 子应用获取新闻详情
  const getNewsDetail = (id: string) => {
    latestRef.current.forEach((newsItem: any) => {
      if (newsItem?.newsId == id) {
        newsItem.active = true;
      } else {
        newsItem.active = false;
      }
    });
    setNewsListArray([...latestRef.current]);

    const iframe: any = document.getElementById('iframe');
    iframe.contentWindow.postMessage({ type: 'boundFileKeys', data: { id } }, '*');
  };

  return (
    <div className={style.container}>
      <Tips
        message={`iframe是H5自带标签,iframe的优势在于它自带隔离属性,包括样式隔离,元素隔离,完全可以把它当成一个组件使用,适合用于多组件开发
                但iframe 的缺点也很明显 那就是弹窗等元素只能在Iframe
                内部显示,无法做到全局共享,路由刷新之后,iframe 无法保持状态, 只能通过postmessage
                进行通信,白屏时间长。`}
      />

      <div className={'main'}>
        <div className={'left-base'}>
          <Card loading={classLoading} className={'classification-wrapper'}>
            {newsArray.map((newsItem: any) => (
              <span
                key={newsItem.typeId}
                onClick={async () => {
                  await getNewsList(newsItem.typeId);
                }}
                className={['classification-item', newsItem.active ? '\n choose' : ''].join('')}
              >
                {newsItem.typeName}
              </span>
            ))}
          </Card>

          <Spin spinning={newsLoading} indicator={<LoadingOutlined />} style={{ fontSize: 24 }}>
            <div className={'news-wrapper'}>
              {newsListArray.map((newsItem: any) => (
                <Card className={'news-item'} key={newsItem.newsId}>
                  <h2
                    className={newsItem.active ? 'title-click' : ''}
                    onClick={() => {
                      getNewsDetail(newsItem.newsId);
                    }}
                  >
                    {newsItem.title}
                  </h2>
                  {newsItem.imgList && (
                    <div className={'image-wrapper'}>
                      <Image src={newsItem.imgList.length > 0 ? newsItem.imgList[0] : ''} />
                    </div>
                  )}
                  <div className={'source'}>
                    <span>来源:</span>
                    <span>{newsItem.source}</span>
                  </div>
                </Card>
              ))}
            </div>
          </Spin>
        </div>
        <div className={'right-iframe'}>
          <iframe id={'iframe'} src={'http://150.158.155.240/sub/'} />
        </div>
      </div>
    </div>
  );
};

export default MicroFront;
