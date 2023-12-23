import { SingleCard } from "@/components";

export default function ProducerCards({ id }) {
	return (
		<div className="py-10 px-3 lg:px-10">
			<section
				id={id}
				key={id}
				className="producer-sections flex flex-col md:flex-row justify-between align-middle items-center gap-8"
			>
				<SingleCard id="1" color={"Blue"} />
				<SingleCard id="2" color={"Orange"} />
				<SingleCard id="3" color={"Grey"} />
			</section>
		</div>
	);
}
