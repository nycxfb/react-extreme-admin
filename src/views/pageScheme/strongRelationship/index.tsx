import React from "react";
import { Alert, Card } from "antd";
import Tips from "@/components/tips";

const StrongRelationship = () => {
	return (
		<>
			<Tips
				message={
					"当页面内容联系较强时,页面操作内容较少,应该以弹窗形式展示在同一个页面内完成操作，避免用户视觉焦点离开！"
				}
			/>
			<Card></Card>
		</>
	);
};

export default StrongRelationship;
