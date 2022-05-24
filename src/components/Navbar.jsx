import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
	const [nav, setnav] = useState(false);

	const handleNav = () => {
		setnav(!nav);
	};

	return (
		<div className="flex justify-between items-center h-24 max-w[1240px] mx-auto px-4 text-white">
			<h1 className="w-full text-3xl font-bold text-[#00df9a] mt-3 ml-3">
				REACT.
			</h1>
			<ul className="hidden md:flex">
				<li className="p-4 hover:underline hover:decoration-[#00df9a]">Home</li>
				<li className="p-4 hover:underline hover:decoration-[#00df9a]">
					Company
				</li>
				<li className="p-4 hover:underline hover:decoration-[#00df9a]">
					Resources
				</li>
				<li className="p-4 hover:underline hover:decoration-[#00df9a]">
					About
				</li>
				<li className="p-4 hover:underline hover:decoration-[#00df9a]">
					Contact
				</li>
			</ul>
			<div onClick={handleNav} className="block md:hidden">
				{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>
			<div
				className={
					nav
						? 'fixed left-0 top-0 w-[90%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
						: 'fixed left-[-100%]'
				}
			>
				<h1 className="w-full text-3xl font-bold text-[#00df9a] mt-3 ml-3">
					REACT.
				</h1>

				<ul className="p-4 uppercase">
					<li className="p-4 border-b border-gray-600">Home</li>
					<li className="p-4 border-b border-gray-600">Company</li>
					<li className="p-4 border-b border-gray-600">Resources</li>
					<li className="p-4 border-b border-gray-600">About</li>
					<li className="p-4">Contact</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
