import { LuShieldQuestion } from "react-icons/lu";

type TopBarProps = {
    title: string
}

export default function TopBar({title}: TopBarProps) {
	return (
		<header className="absolute inset-x-0 top-0 z-50 bg-[#7e5991] text-white">
			<nav className="flex items-center justify-between p-3 lg:px-8">
				<div className="flex lg:flex-1">
						<span className="-m-1.5 p-1.5 text-xl font-semibold flex items-center gap-x-2">
							Case: {title}
						</span>
				</div>
				<div className="flex flex-1 justify-end gap-x-4 md:gap-x-8">
				   <button className="cursor-pointer"><LuShieldQuestion size={25}/></button>
				</div>
			</nav>
		</header>
	);
}