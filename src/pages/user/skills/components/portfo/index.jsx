import { useState } from "react";
import { Checkbox } from "antd";

const VideoCards = ({ id }) => {
	return (
		<div className="flex flex-col" key={id}>
			<video id={`video-${id}`} poster={"/assets/image/test.jpg"} height={200} width={200} className="rounded-xl object-fill">
				<source src={"/assets/image/test.jpg"} type="video/mp4" />
			</video>
			<Checkbox id={`check-${id}`} className="m-4">
				انتخاب جهت نمایش
			</Checkbox>
		</div>
	);
};

const Portfolio = ({ bgColor }) => {
	const [videos, setVideos] = useState([{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }]); // fake data
	return (
		<section style={{ background: bgColor }} className="p-2 md:p-10 lg:px-20 lg:py-10">
			<h3 className="text-2xl">نمونه کارها</h3>
			<div className="flex justify-center align-middle items-center flex-col md:flex-row gap-3">
				{videos.map((videoItem) => (
					<VideoCards id={videoItem.id} key={videoItem.id} />
				))}
			</div>
		</section>
	);
};

export default Portfolio;
