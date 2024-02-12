import { Avatar, Card, Col, Row } from "antd";
import { Buttons } from "@/components";
import { BookOutlined } from "@ant-design/icons";

import img from "/assets/icon/avatar(1).svg";

const { Meta } = Card;

const AppCard = ({ id, imgUrl = "/assets/icon/banner.png",
 title = "", description = "" }) => (
	<Card hoverable cover={<img alt={`cover-${id}`} src={imgUrl} className="h-40" />}>
		<Meta
			avatar={<Avatar src={img} className="-mt-14 h-24 w-24 shadow-xl" />}
			title={title}
			description={description}
		/>
		<Row gutter={[8, 8]} justify={"space-between"} align={"middle"} className="w-full pt-5">
			<Col span={22}>
				<Buttons content="مشاهده اطلاعات" type="dashed" htmlType="button" block={true} size="middle" />
			</Col>
			<Col span={2}>
				<BookOutlined className="text-xl pb-6" />
			</Col>
		</Row>
	</Card>
);

export default AppCard;
