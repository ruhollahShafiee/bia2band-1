import { Checkbox, Col, Row } from "antd";
import img from "../test.jpg";


const VideoCards = ({id}) => {
	return (
		<div className="pb-10 pt-5">
				<Row gutter={[8, 8]} align={"middle"} >
					<Col xs={24} md={16} lg={12}>
						<video id={id} poster={img} height={200} width={200} className="rounded">
							<source src={img} type="video/mp4" />
						</video>
					</Col>
				</Row>
				<Row gutter={[8, 8]} align={"middle"} >
					<Col xs={24} md={16} lg={12}>
						<Checkbox id={id} >
							انتخاب جهت نمایش
						</Checkbox>
					</Col>
				</Row>
		</div>

	)
}

export default VideoCards;


