import React from 'react';
import { Card, Col, Row } from 'antd';
import style from './index.module.less';
import { componentProps } from '@/@types/global';

interface Props extends componentProps {
  extra?: React.ReactNode;
}

const SearchFormCard = (props: Props) => {
  const { children, extra } = props;

  return (
    <section className={style['search-form']}>
      <Card>
        <Row>
          <Col span={extra ? 18 : 24} className={extra ? 'search-form-item-3' : 'search-form-item-4'}>
            {children}
          </Col>
          {extra && (
            <Col className={'search-form-button'} span={6}>
              {extra}
            </Col>
          )}
        </Row>
      </Card>
    </section>
  );
};

export default SearchFormCard;
