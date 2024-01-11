import { CloudUploadOutlined } from "@ant-design/icons";
import { Buttons } from "../../../../../components";
import { useTranslation } from "react-i18next";

const InputUpload = () => {
	const { t } = useTranslation();
	return (
		<div className="flex justifu-items-center mt-3 gap-2">
			<div className="pt-2">
				<label> + افزودن</label>
			</div>
			<Buttons
				className="pt-1"
				content={
					<div className="flex gap-3">
						<span className="pb-2"> {t("آپلود تصویر یا فایل ضمیمه")} </span>
						<CloudUploadOutlined className="pb-3" />
					</div>
				}
				type="dashed"
				size="small"
				htmlType="link"
			/>
		</div>
	);
};

export default InputUpload;
