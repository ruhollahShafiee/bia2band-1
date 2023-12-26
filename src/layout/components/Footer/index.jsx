import { Col, Row } from "antd";
import { PhoneOutlined, EnvironmentOutlined } from "@ant-design/icons";

import "./style.css";
import img from "./test.jpg";
import logo from "/vite.svg";

const MainFooter = () => {
	return (
		<Row gutter={[8, 8]} className="footer-container">
			<Col xs={24} lg={8}>
				<div className="flex align-middle items-center">
					<img
						src={logo}
						alt="guaranty-u-img"
						className="rounded-full"
						width={50}
						height={50}
						loading="lazy"
					/>
					<strong className="text-xl">بیا توبند</strong>
				</div>
				<p className="text-xs text-slate-500 px-5">
					توضیح مختصر از بیا توبند توضیح مختصر از بیا توبند توضیح مختصر از بیا توبند توضیح مختصر از بیا توبند
					توضیح مختصر از بیا توبند توضیح مختصر از بیا توبند توضیح مختصر از بیا توبند ...
				</p>
				<div className="flex px-5 mt-8">
					<EnvironmentOutlined className="text-xl" />
					<b className="text-xs text-slate-500 m-2">
						تهران , خیابان ولی عصر , پاسداران جنوبی , خیابان مظفر , ساختمان شماره 17
					</b>
				</div>
				<div className="flex px-5 mt-3">
					<PhoneOutlined className="text-xl" />
					<b className="text-sm text-slate-500 mx-2">09125858595</b>
				</div>
			</Col>
			<Col xs={24} lg={5}>
				<h5 className="text-xl m-2">دسترسی سریع</h5>
				<ul className="list-disc text-slate-500">
					<li className="cursor-pointer">صفحه اصلی</li>
					<li className="cursor-pointer">راهنمای مشتریان</li>
					<li className="cursor-pointer">ورود و ثبت نام</li>
					<li className="cursor-pointer">بلاگ</li>
					<li className="cursor-pointer">فروشگاه</li>
				</ul>
			</Col>
			<Col xs={24} lg={5}>
				<h5 className="text-xl m-2">خدمات ما</h5>
				<ul className="list-disc text-slate-500">
					<li className="cursor-pointer">صفحه اصلی</li>
					<li className="cursor-pointer">راهنمای مشتریان</li>
					<li className="cursor-pointer">ورود و ثبت نام</li>
					<li className="cursor-pointer">بلاگ</li>
					<li className="cursor-pointer">فروشگاه</li>
				</ul>
			</Col>
			<Col xs={24} lg={6}>
				<Row gutter={[2, 2]}>
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
