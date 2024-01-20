import { Checkbox } from "antd";
import img from "../test.jpg";

const VideoCards = ({ id }) => {
	return (
		<div className="flex flex-col" key={id}>
			<video id={`video-${id}`} poster={img} height={200} width={200} className="rounded-lg">
				<source src={img} type="video/mp4" />
			</video>
			<Checkbox id={`check-${id}`}>انتخاب جهت نمایش</Checkbox>
		</div>
	);
};

export default VideoCards;
