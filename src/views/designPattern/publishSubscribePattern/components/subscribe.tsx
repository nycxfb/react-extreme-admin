import React, { useEffect, useState } from "react";
import { Card } from "antd";
import Event from "@/utils/event";

const Subscribe = () => {
	const [message, setMessage] = useState("");
	useEffect(() => {
		Event.listen("message", (msg: any) => {
			setMessage(msg);
		});

		return () => {
			Event.remove("message");
		};
	});
	return (
		<Card title={"订阅者"} style={{ width: 500, height: 400 }}>
			{message}
		</Card>
	);
};

export default Subscribe;
