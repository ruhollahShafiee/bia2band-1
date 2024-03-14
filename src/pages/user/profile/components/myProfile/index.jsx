import { Avatar, Card } from "antd";
import {
	YoutubeFilled,
	WhatsAppOutlined,
	InstagramFilled,
	TwitterOutlined,
	FacebookOutlined,
	BookOutlined,
} from "@ant-design/icons";

import { Buttons } from "@/components";

const { Meta } = Card;

const skill = "نوازنده گیتارباس";
const description =
	"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و ";

const MyProfile = ({ user = {} }) => {
	const { firstname = "", lastname = "", ...userSocials } = user;
	const { email, instagramLinkOne, instagramLinkTow, twitterLink, facebookLink } = userSocials;
	// JSX
	const Redirects = ({ children, path }) => {
		return (
			<a href={path} target="_blank" rel="noreferrer">
				{children}
			</a>
		);
	};
	return (
		<Card cover={<img src={"/assets/icon/pic2.svg"} className="h-32 md:h-56 object-cover" />} bordered>
			<Meta
				avatar={[
					<Avatar
						key={"profile-img"}
						src={"/assets/icon/avatar1.png"}
						className="-mt-16 size-20 md:-mt-32 md:size-44"
						alt="profile-img"
					/>,
				]}
			/>
			<div className="flex justify-end gap-4 text-xl md:-mt-10">
				<Redirects path={twitterLink}>
					<YoutubeFilled />
				</Redirects>
				<Redirects path={instagramLinkOne}>
					<WhatsAppOutlined />
				</Redirects>
				<Redirects path={email}>
					<InstagramFilled />
				</Redirects>
				<Redirects path={instagramLinkTow}>
					<TwitterOutlined />
				</Redirects>
				<Redirects path={facebookLink}>
					<FacebookOutlined />
				</Redirects>
			</div>
			<div className="profile-description flex-col md:p-5">
				<h3 className="text-2xl md:text-3xl">{`${firstname} ${lastname}`}</h3>
				<h5 className="text-lg md:text-xl">{skill}</h5>
				<p className="text-justify text-slate-500 md:w-2/3 mb-5">{description}</p>
				<div className="md:flex justify-end gap-3 align-middle items-center">
					<Buttons content={"ارسال درخواست هم گروه شدن"} type="primary" htmlType="button" size="middle" />
					<div className="flex gap-3">
						<Buttons content={"ارسال پیام"} type="default" htmlType="button" size="middle" />
						<BookOutlined className="text-xl md:text-2xl pb-5" />
					</div>
				</div>
			</div>
		</Card>
	);
};

export default MyProfile;
