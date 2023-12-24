import { AppCard } from "@/components";

import img from "../test.jpg";

const title = "سامان حشمتی";
const description = "سام شسیشی  شسی حشمتی سامان حشمتی سامان حشمتی";
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
