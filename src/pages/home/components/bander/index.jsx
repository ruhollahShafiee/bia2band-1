
const BanderGrid = () => (
	<section id="bander-grid" className="mx-auto mt-8 p-5 rounded-3xl shadow-2xl border border-gray-200">
		<div className="grid grid-rows-3 grid-flow-col gap-2 h-[350px]">
			<div className="row-span-1 col-span-2 h-full w-full rounded-2xl bg-purple-200"></div>
			<div className="row-span-2 col-span-2 h-full w-full rounded-2xl bg-slate-200"></div>
			<div className="row-span-3 col-span-3 h-full w-full rounded-2xl bg-blue-200"></div>
		</div>
	</section>
);

export default BanderGrid;
