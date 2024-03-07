import { useTranslation } from "react-i18next";
import { Card, Form, Row, Col, Checkbox } from "antd";
import Meta from "antd/es/card/Meta";
import TextArea from "antd/es/input/TextArea";
import {
	EnvironmentOutlined,
	PhoneOutlined,
	TeamOutlined,
	BuildOutlined,
	CalendarOutlined,
	ClockCircleOutlined,
	CloudUploadOutlined,
} from "@ant-design/icons";
import { Inputs, Selects, Buttons } from "@/components";

const title = "اطلاعات تکمیلی من";

const FurtherInformation = () => {
	const { t } = useTranslation();
	return (
		<>
			<Card bordered>
				<Meta title={title} />
				<Form name="personal-form" className="personal-form md:mt-5 text-xs md:text-sm" layout="vertical">
					<Row gutter={[8, 8]} align={"middle"} className="mt-4 pb-1">
						<Col xs={24} md={16} lg={12}>
							<Selects
								name="address"
								label="آدرس"
								placeholder={
									<div className="flex gap-2 align-middle items-center">
										<EnvironmentOutlined className="pb-1" />
										<span>آدرس محل کار</span>
									</div>
								}
							/>
						</Col>
						<Col xs={24} md={16} lg={12}>
							<Inputs
								name="phone"
								label="شماره محل کار"
								prefix={
									<PhoneOutlined
										style={{
											color: "rgba(0,0,0,.35)",
										}}
									/>
								}
								placeholder={t("02188887547")}
							/>
						</Col>
					</Row>
					<Row gutter={[8, 8]} align={"middle"} className="mt-2 pb-1">
						<Col xs={16} md={12} lg={8}>
							<Inputs
								name="capacity"
								label="گنجایش"
								prefix={
									<TeamOutlined
										style={{
											color: "rgba(0,0,0,.35)",
										}}
									/>
								}
								placeholder={t("50")}
							/>
						</Col>
						<Col xs={8} md={8} lg={4}>
							<label>نفر</label>
						</Col>
						<Col xs={16} md={12} lg={8}>
							<Inputs
								name="meterage"
								label="متراژ"
								prefix={
									<BuildOutlined
										style={{
											color: "rgba(0,0,0,.35)",
										}}
									/>
								}
								placeholder={t("200")}
							/>
						</Col>
						<Col xs={8} md={8} lg={4}>
							<label>مترمربع</label>
						</Col>
					</Row>
					<Row gutter={[8, 8]} align={"middle"} className="mt-4 pb-1">
						<Col xs={24} md={16} lg={12}>
							<label>امکان ضبط کلیپ ویدئویی دارد؟</label>
						</Col>
					</Row>
					<Row gutter={[8, 8]} align={"middle"} className="pb-1">
						<Col xs={22} md={10} lg={8}>
							<Checkbox.Group style={{ width: "100%" }} defaultValue={"B"}>
								<Row>
									<Checkbox value="A" disabled>
										ندارد
									</Checkbox>
									<Checkbox value="B">دارد</Checkbox>
								</Row>
							</Checkbox.Group>
						</Col>
						<Col xs={24} md={10} lg={8}>
							<Inputs name="save" placeholder={t("ارسباران")} />
						</Col>
						<Col xs={18} md={6} lg={8} className="pb-5">
							<Buttons
								content={
									<div className="flex gap-3">
										<span className="pb-2"> {t("آپلود تصویر یا فایل ضمیمه")} </span>
										<CloudUploadOutlined className="pb-3" />
									</div>
								}
								type="dashed"
								htmlType="link"
							/>
						</Col>
					</Row>
					<Row gutter={[8, 8]} align={"middle"} className="mt-4 pb-1">
						<Col xs={24} md={16} lg={12}>
							<label>امکان ضبط صوتی دارد؟</label>
						</Col>
					</Row>
					<Row gutter={[8, 8]} align={"middle"} className="pb-1">
						<Col xs={22} md={10} lg={8}>
							<Checkbox.Group style={{ width: "100%" }} defaultValue={"B"}>
								<Row>
									<Checkbox value="A" defaultChecked>
										ندارد
									</Checkbox>
									<Checkbox value="B" disabled>
										دارد
									</Checkbox>
								</Row>
							</Checkbox.Group>
						</Col>
						<Col xs={24} md={12} lg={8}>
							<Inputs name="save" placeholder={t("ارسباران")} />
						</Col>
					</Row>
					<Row gutter={[8, 8]} align={"middle"} className="mt-4 pb-1">
						<Col xs={24} md={16} lg={12}>
							<label>کدامیک از سازهای زیر را موجود دارد؟</label>
						</Col>
					</Row>
					<Row gutter={[8, 8]} align={"middle"} className="mt-1 pb-2">
						<Col xs={8} md={12} lg={12}>
							<Checkbox.Group style={{ width: "100%" }} defaultValue={"A, H"}>
								<div className="flex  my-2 justify-between align-middle items-center gap-2">
									<Checkbox value="A" defaultChecked>
										هیچ سازی ندارد
									</Checkbox>
									<Checkbox value="B" disabled>
										درامز
									</Checkbox>
									<Checkbox value="C" disabled>
										دف
									</Checkbox>
									<Checkbox value="D" disabled>
										پرکاشن
									</Checkbox>
									<Checkbox value="E" disabled>
										ویلن
									</Checkbox>
									<Checkbox value="F" disabled>
										سنتور
									</Checkbox>
									<Checkbox value="G" disabled>
										کنترباس
									</Checkbox>
									<Checkbox value="H" defaultChecked>
										سایرسازها
									</Checkbox>
								</div>
							</Checkbox.Group>
						</Col>
					</Row>
					<Row gutter={[8, 8]} align={"middle"} className="mt-4 pb-1">
						<Col xs={24} md={16} lg={12}>
							<label>سایر ویژگی ها را مشخص کنید.</label>
						</Col>
					</Row>
					<Row gutter={[8, 8]} align={"middle"} className="mt-2 pb-2">
						<Col xs={8} md={16} lg={12}>
							<Checkbox.Group style={{ width: "100%" }} defaultValue={["A", "H"]}>
								<div className="flex my-2 justify-between align-middle items-center gap-2">
									<Checkbox value="A" defaultChecked>
										آینه
									</Checkbox>
									<Checkbox value="B" disabled>
										تخته وایت برد
									</Checkbox>
									<Checkbox value="C" disabled>
										صندلی
									</Checkbox>
									<Checkbox value="D" disabled>
										نمایشگر
									</Checkbox>
									<Checkbox value="E" disabled>
										پایه نت
									</Checkbox>
									<Checkbox value="F" disabled>
										ویدئو پروژکتور
									</Checkbox>
									<Checkbox value="G" disabled>
										سیستم تهویه
									</Checkbox>
									<Checkbox value="H" defaultChecked>
										سایرسازها
									</Checkbox>
								</div>
							</Checkbox.Group>
						</Col>
					</Row>
					<Row gutter={[8, 8]} align={"middle"} className="mt-4 pb-1">
						<Col xs={24} md={16} lg={12}>
							<label>لطفا روزهای کاری را مشخص کنید.</label>
						</Col>
					</Row>
					<Row gutter={[8, 8]} align={"middle"} className="mt-2 pb-1">
						<Col xs={8} md={8} lg={6}>
							<label>روزهای هفته</label>
						</Col>
						<Col xs={8} md={8} lg={6}>
							<label>از ساعت</label>
						</Col>
						<Col xs={8} md={8} lg={6}>
							<label>تا</label>
						</Col>
					</Row>
					<Row gutter={[8, 8]} align={"middle"}>
						<Col xs={8} md={8} lg={6}>
							<Inputs
								name="week"
								placeholder="شنبه"
								prefix={
									<CalendarOutlined
										style={{
											color: "rgba(0,0,0,.35)",
										}}
									/>
								}
							/>
						</Col>
						<Col xs={8} md={8} lg={6}>
							<Inputs
								name="time1"
								placeholder="11"
								prefix={
									<ClockCircleOutlined
										style={{
											color: "rgba(0,0,0,.35)",
										}}
									/>
								}
							/>
						</Col>
						<Col xs={8} md={8} lg={6}>
							<Inputs
								name="time2"
								placeholder="22"
								prefix={
									<ClockCircleOutlined
										style={{
											color: "rgba(0,0,0,.35)",
										}}
									/>
								}
							/>
						</Col>
						<Col xs={8} md={8} lg={4} className="pb-5">
							<label> + افزودن</label>
						</Col>
					</Row>
					<Row gutter={[8, 8]} align={"middle"} className="mt-4 pb-2">
						<Col xs={22} md={10} lg={8}>
							<label>امکان رزرو از طریق سایت بیاتوبند؟</label>
						</Col>
						<Col xs={22} md={10} lg={8}>
							<Checkbox.Group style={{ width: "100%" }} defaultValue={"A"}>
								<Checkbox value="A" defaultChecked>
									می خواهم
								</Checkbox>
								<Checkbox value="B" disabled>
									نمی خواهم
								</Checkbox>
							</Checkbox.Group>
						</Col>
					</Row>
					<Row gutter={[8, 8]} align={"middle"} className="mt-4 pb-1">
						<Col xs={24} md={16} lg={12}>
							<label>توضیحات دلخواه</label>
						</Col>
					</Row>
					<Row gutter={[8, 8]} align={"middle"}>
						<Col xs={24} md={24} lg={24}>
							<TextArea
								name="description"
								autoSize={{
									minRows: 5,
									maxRows: 8,
								}}
								placeholder={t("اگر توضیحات خاصی مدنظرتون هست در این قسمت بنویسید.")}
							/>
						</Col>
					</Row>
					<Row gutter={[8, 8]} justify={"end"} align={"middle"} className="mt-2">
						<Col xs={18} md={10} lg={5}>
							<Buttons content={t("اضافه کردن مکان جدید")} type="default" htmlType="button" />
						</Col>
					</Row>
				</Form>
			</Card>
		</>
	);
};
export default FurtherInformation;
