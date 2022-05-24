import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
	return (
		<div className="text-white">
			<div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
				<p className="text-[#00df9a] font-bold pt-2">
					GROWING WITH DATA ANALYTICS
				</p>
				<h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
					Grow with data.
				</h1>
				<div className="flex justify-center item-center">
					<p className="md:text-5xl sm:text-4xl text-xl font-bold">
						Fast, flexible financing for
					</p>
					<Typed
						className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 mb-0"
						strings={['BTB', 'BTC', 'SaaS']}
						typespeed={120}
						backspeed={140}
						loop
					/>
				</div>
				<p className="md:text-2xl text-xl font-bold text-green-200 py-4 pl-2 pt-2">
					Monitor your data analytics to increase revenue for BTB, BTC & SaaS
					platforms.
				</p>
				<button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
					Get Started
				</button>
			</div>
		</div>
	);
};

export default Hero;
