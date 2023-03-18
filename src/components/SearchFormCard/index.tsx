import React from "react";
import { Card, Col, Row } from "antd";
import style from "./index.module.less";

interface Props extends componentProps {
	extra?: React.ReactNode;
}

const SearchFormCard = (props: Props) => {
	const { children, extra } = props;

	return (
		<section className={style["search-form"]}>
			<Card>
				<Row>
					<Col span={18} className={"search-form-item"}>
						{children}
					</Col>
					<Col className={"search-form-button"} span={6}>
						{extra}
					</Col>
				</Row>
			</Card>
		</section>
	);
};

export default SearchFormCard;
