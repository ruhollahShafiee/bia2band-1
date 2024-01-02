import { Avatar, Card } from "antd";

const ProfileCard = ({
	id,
	imgUrl = "/assets/image/test.jpg",
	userName = "فرهاد فرهاد فر زاده",
	description = "فرهاد فرهاد فر زا فرهاد فرهاد فر زا فرهاد فرهاد فر زا فرهاد فرهاد فر زا فرهاد فر زا فرهاد فرهاد فر زا فرهاد فرهاد فر زا فرهاد فرهاد فر زا",
}) => (
	<Card hoverable cover={<img alt={`cover-profile-${id}`} src={imgUrl} className="h-20" />}>
		<div className="flex flex-col justify-center items-center">
			<Avatar src={imgUrl} className="-mt-14 mb-5 h-24 w-24 shadow-xl" />
			<strong>{userName}</strong>
			<small className="text-xs mt-1 text-slate-400 text-justify">{description}</small>
		</div>
	</Card>
);

export default ProfileCard;
