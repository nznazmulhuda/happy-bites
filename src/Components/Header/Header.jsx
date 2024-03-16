import SearchIcon from "../../assets/search.png";
import Avater from "../../assets/avater.png";

function Header() {
	return (
		<>
			<div>
				<div className="navbar bg-base-100">
					<div className="navbar-start">
						<div className="dropdown">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost lg:hidden"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>
								</svg>
							</div>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
							>
								<li>
									<a>Home</a>
								</li>
								<li>
									<a>Recipes</a>
								</li>
								<li>
									<a>About</a>
								</li>
								<li>
									<a>Search</a>
								</li>
							</ul>
						</div>
						<a className="hidden lg:flex btn btn-ghost text-xl">
							Recipe Calorise
						</a>
					</div>

					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal px-1">
							<li>
								<a>Home</a>
							</li>
							<li>
								<a>Recipes</a>
							</li>
							<li>
								<a>About</a>
							</li>
							<li>
								<a>Search</a>
							</li>
						</ul>
					</div>

					<div className="flex lg:hidden navbar-end text-xl">
						Recipe Calorise
					</div>

					<div className="hidden lg:flex items-center navbar-end gap-3">
						<div className="flex items-center gap-3 bg-[#150B2B0D] rounded-[50px] py-3 px-6 w-[50%]">
							<img src={SearchIcon} alt="SearchIcon" />
							<input
								className="border-none outline-none bg-transparent w-[80%]"
								type="text"
								placeholder="Search"
							/>
						</div>

						<div className="p-2 bg-[#0BE58A] rounded-full">
							<img src={Avater} alt="Avater" />
						</div>
					</div>
				</div>
				<div className="navbar">
					<div className="flex lg:hidden items-center justify-between mx-auto gap-3">
						<div className="flex w-[50%] items-center gap-3 bg-[#150B2B0D] dark:bg-slate-500 rounded-[50px] py-3 px-3">
							<img src={SearchIcon} alt="SearchIcon" />
							<input
								className="border-none outline-none bg-transparent w-[80%]"
								type="text"
								placeholder="Search"
							/>
						</div>

						<div className="p-2 bg-[#0BE58A] rounded-full">
							<img src={Avater} alt="Avater" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
