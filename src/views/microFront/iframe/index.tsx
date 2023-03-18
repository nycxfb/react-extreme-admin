import React from "react";
import { Card } from "antd";
import style from "./index.module.less";

const MicroFont: React.FC = () => {
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
				<Card className={"left-base"}></Card>
				<iframe />
			</div>
		</div>
	);
};

export default MicroFont;
