import { AppCard } from "@/components";

import img from "/assets/icon/banner.png";

const title = "علی احمدی";
const description = "نوازنده گیتارباس/ استاد یار/ تخصص های دیگر فقط به اندازه دو خط ...";
export default function ProducerCards({ id }) {
	return (
		<div className="pb-10 pt-5">
			<section
				id={id}
				key={id}
				className="producer-sections flex flex-col md:flex-row justify-between align-middle items-center gap-8"
			>
				<AppCard id="1" imgUrl={img} {...{ title, description }} />
				<AppCard id="2" imgUrl={img} {...{ title, description }} />
				<AppCard id="3" imgUrl={img} {...{ title, description }} />
			</section>
		</div>
	);
}
