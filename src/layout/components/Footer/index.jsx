import { Col, Row } from "antd";

import "./style.css";
import img from "./test.jpg";

const MainFooter = () => {
	return (
		<Row gutter={[8, 8]} className="text-center">
			<Col xs={24} lg={8} className="bg-red-100 rounded-2xl"></Col>
			<Col xs={24} lg={5} className="bg-green-100 rounded-2xl"></Col>
			<Col xs={24} lg={5} className="bg-blue-100 rounded-2xl"></Col>
			<Col xs={24} lg={6}>
				<Row gutter={[2,2]}>
					<Col span={12} className="img-fill">
						<img
							src={img}
							alt="guaranty-us-img"
							className="rounded-lg"
							width={150}
							height={200}
							loading="lazy"
						/>
					</Col>
					<Col span={12} className="img-fill">
						<img
							src={img}
							alt="guaranty-u-img"
							className="rounded-lg"
							width={150}
							height={200}
							loading="lazy"
						/>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default MainFooter;
