import { useState } from "react";
import { Typography } from "antd";
import { List } from "antd";
import VideoCards from "./VideoCards.jsx";
import Item from "antd/es/list/Item.js";

const { Title } = Typography;

const title = "نمونه کارها";

const Portfolio = ({ bgColor }) => {
	const [videos, setVideos] = useState([{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }]); // fake data

	return (
		<section style={{ background: bgColor }} className="p-4">
			<Title level={5}>{title}</Title>
			<div className="flex gap-3">
				{videos.map((videoItem) => (
					<VideoCards id={videoItem.id} key={videoItem.id} />
				))}
			</div>
		</section>
	);
};

export default Portfolio;
