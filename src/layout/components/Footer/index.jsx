const MainFooter = () => {
	return (
		<div className="grid grid-rows-4 grid-flow-col gap-2 h-[300px]">
			<div className="row-span-2 col-span-2 h-full w-full rounded-2xl bg-amber-100"></div>
			<div className="row-span-2 col-span-2 h-full w-full rounded-2xl bg-amber-100"></div>
			<div className="row-span-4 col-span-1 h-full w-full rounded-2xl bg-blue-200"></div>
			<div className="row-span-4 col-span-1 h-full w-full rounded-2xl bg-blue-200"></div>
			<div className="row-span-3 col-span-1 h-full w-full rounded-2xl bg-purple-200"></div>
			<div className="row-span-1 col-span-2 h-full w-full rounded-2xl bg-slate-200"></div>
			<div className="row-span-3 col-span-1 h-full w-full rounded-2xl bg-purple-200"></div>
		</div>
	);
};

export default MainFooter;
