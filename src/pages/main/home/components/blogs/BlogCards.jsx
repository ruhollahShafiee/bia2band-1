import { BlogCard } from "@/components";

import img from "/assets/image/test.jpg";

const title = "سامان حشمتی";
const description = "سام شسیشی  شسی حشمتی سامان حشمتی سامان حشمتیسام شسیشی  شسی حشمتی سامان حشمتی سامان حشمتی";

export default function BlogCards({ id }) {
	return (
		<section
			id={id}
			key={id}
			className="producer-sections flex flex-col md:flex-row justify-between align-middle items-center gap-8"
		>
			<BlogCard id="1" imgUrl={img} {...{ title, description }} />
			<BlogCard id="2" imgUrl={img} {...{ title, description }} />
			<BlogCard id="3" imgUrl={img} {...{ title, description }} />
			<BlogCard id="4" imgUrl={img} {...{ title, description }} />
			<BlogCard id="5" imgUrl={img} {...{ title, description }} />
		</section>
	);
}
