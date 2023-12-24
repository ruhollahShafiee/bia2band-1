import { Card } from "antd";
import { Buttons } from "@/components";
import { LeftOutlined } from "@ant-design/icons";

const { Meta } = Card;

const BlogCard = ({ id, imgUrl = "", title = "", description = "" }) => (
	<Card hoverable cover={<img alt={`cover-${id}`} src={imgUrl} className="h-40" />}>
		<Meta title={title} description={description} />
		<Buttons
			content={
				<div className="flex gap-1 align-middle items-center">
					<span className="p-1">ادامه مطلب</span>
					<LeftOutlined />
				</div>
			}
			type="dashed"
			htmlType="button"
			size="default"
			classes="text-sm float-end mt-5"
		/>
	</Card>
);

export default BlogCard;
