import "./style.css";

const BanderGrid = () => (
	<div className="grid grid-rows-3 grid-flow-col gap-2 h-[300px]">
		<div className="row-span-1 col-span-2 bander-grid-cover bg-purple-200"></div>
		<div className="row-span-2 col-span-2 bander-grid-cover bg-slate-200"></div>
		<div className="row-span-3 col-span-3 bander-grid-cover bg-blue-200"></div>
	</div>
);

export default BanderGrid;
