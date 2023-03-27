import React, { useState } from "react";
import { Button, Card, Col, Image, message, Row } from "antd";
import style from "./index.module.less";
import { useMount } from "ahooks";
import { http_news_classification, http_news_list } from "@/api/external";

const MicroFront: React.FC = () => {
	const [newsArray, setNewsArray] = useState([]);
	const [newsListArray, setNewsListArray] = useState([]);
	const [baseLoading, setBaseLoading] = useState<boolean>(false);

	useMount(async () => {
		await getNewsClassification();
	});

	const getNewsClassification = async () => {
		setBaseLoading(true);
		const res = await http_news_classification();
		if (res.code == "200") {
			setNewsArray(res.data);
		} else {
			message.error(res.message);
		}
		setBaseLoading(false);
	};

	const getNewsList = async (typeId: string) => {
		const res = await http_news_list({ typeId });
		if (res.code == "200") {
			setNewsListArray(res.data);
		} else {
			message.error(res.message);
		}
	};

	const getNewsDetail = (id: string) => {
		const iframe: any = document.getElementById("iframe");
		iframe.contentWindow.postMessage({ type: "boundFileKeys", data: { id } }, "*");
	};

	return (
		<div className={style.container}>
			<div className={"tips"}>
				iframe 是H5 自带标签 ,
				iframe的优势在于它自带隔离属性,包括样式隔离,元素隔离,完全可以把它当成一个组件使用,适合用于多组件开发
				但iframe 的缺点也很明显 那就是弹窗等元素只能在Iframe
				内部显示，无法做到全局共享,路由刷新之后,iframe 无法保持状态, 只能通过postmessage
				进行通信,白屏时间长
			</div>

			<div className={"main"}>
				<Card className={"left-base"} loading={baseLoading}>
					<div className={"classification_wrapper"}>
						{newsArray.map((newsItem: any) => (
							<span
								key={newsItem.typeId}
								onClick={() => {
									getNewsList(newsItem.typeId);
								}}
								className={"classification_item"}
							>
								{newsItem.typeName}
							</span>
						))}
					</div>

					<div className={"news_wrapper"}>
						{newsListArray.map((newsItem: any) => (
							<Row
								className={"news_item"}
								key={newsItem.newsId}
								onClick={() => {
									getNewsDetail(newsItem.newsId);
								}}
							>
								<Col span={20}>
									<div>{newsItem.title}</div>
								</Col>
								<Col span={4}>
									{newsItem.imgList && (
										<Image src={newsItem.imgList.length > 0 ? newsItem.imgList[0] : ""} />
									)}
								</Col>
							</Row>
						))}
					</div>
				</Card>
				<iframe id={"iframe"} src={"http://localhost:8082/"} />
			</div>
		</div>
	);
};

export default MicroFront;
