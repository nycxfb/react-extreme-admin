import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { Tag, Dropdown, MenuProps } from 'antd';
import { deleteVisitTag, deleteOtherVisitTag, deleteAllTags } from '@/redux/module/header/action';
import { store } from '@/redux';
import { useTranslation } from 'react-i18next';
import { tagItem } from '@/redux/module/header/reducer';
import './index.less';

const Tags = (props: any) => {
  const { tags, deleteVisitTag, deleteOtherVisitTag, deleteAllTags } = props;

  const [contextTag, setContextTag] = useState<tagItem>({} as tagItem);
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <span
          onClick={() => {
            window.location.reload();
          }}
        >
          {t('tagContextmenu.refresh')}
        </span>
      ),
    },
    {
      key: '2',
      disabled: contextTag.path == '/home/index',
      label: (
        <span
          onClick={() => {
            closeCurrent(contextTag);
          }}
        >
          {t('tagContextmenu.closeCurrent')}
        </span>
      ),
    },
    {
      key: '3',
      label: (
        <span
          onClick={() => {
            closeOthers(contextTag);
          }}
        >
          {t('tagContextmenu.closeOthers')}
        </span>
      ),
    },
    {
      key: '4',
      label: (
        <span
          onClick={() => {
            deleteAll();
          }}
        >
          {t('tagContextmenu.closeAll')}
        </span>
      ),
    },
  ];

  const closeCurrent = (removedTag: tagItem) => {
    deleteVisitTag(removedTag.path);
    if (pathname === removedTag.path) {
      const currentTag = store.getState().header.tags;
      navigate(currentTag[currentTag.length - 1].path);
    }
  };

  const closeOthers = (tagItem: tagItem) => {
    deleteOtherVisitTag(tagItem);
  };

  const deleteAll = () => {
    deleteAllTags();
    navigate('/home/index');
  };

  const toTargetPage = (tagItem: tagItem) => {
    navigate(tagItem.path);
  };

  return (
    <>
      {tags.map((tagItem: tagItem) => {
        return (
          <Dropdown menu={{ items }} trigger={['contextMenu']} placement="bottom" key={tagItem.path}>
            <Tag
              onContextMenu={(e) => {
                setContextTag(tagItem);
                e.preventDefault();
              }}
              closable={!(tagItem.path == '/home/index')}
              color={tagItem.active ? 'rgba(132,65,216,0.74)' : ''}
              key={tagItem.path}
              onClick={() => {
                toTargetPage(tagItem);
              }}
              onClose={(e) => {
                e.preventDefault();
                closeCurrent(tagItem);
              }}
            >
              {t(`route.${tagItem.title}`)}
            </Tag>
          </Dropdown>
        );
      })}
    </>
  );
};
const mapStateToProps = (state: any) => {
  return state.header;
};

const mapDispatchToProps = {
  deleteVisitTag,
  deleteOtherVisitTag,
  deleteAllTags,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tags);
