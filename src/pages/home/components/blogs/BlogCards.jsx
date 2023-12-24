import { BlogCard } from "@/components";

import img from "../test.jpg";

const title = "سامان حشمتی";
const description = "سام شسیشی  شسی حشمتی سامان حشمتی سامان حشمتیسام شسیشی  شسی حشمتی سامان حشمتی سامان حشمتی";

export default function BlogCards({ id }) {
	return (
		<div className="pb-10 pt-5">
			<section
				id={id}
				key={id}
				className="producer-sections flex flex-col md:flex-row justify-between align-middle items-center gap-8"
			>
				<BlogCard id="1" imgUrl={img} {...{ title, description }} />
				<BlogCard id="2" imgUrl={img} {...{ title, description }} />
				<BlogCard id="3" imgUrl={img} {...{ title, description }} />
			</section>
		</div>
	);
}
