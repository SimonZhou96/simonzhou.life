import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import AboutMe from "./about_me/page";
import { Navigation } from "./components/nav";

export default function Home() {
	return (
		<div className="static">
			<Particles
						className="absolute inset-0 -z-10 animate-fade-in"
						quantity={500}
					/>
			<Navigation message={{pos: 'home', fadeClass: "animate-fade-in"}}></Navigation>
			<div className=" bg-gradient-to-tl from-black via-zinc-600/20 to-black">
				<div className="flex flex-col items-center justify-center w-screen h-screen">
					<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
					<div className="items-center justify-center">
						<h1 className="my-16 z-10 text-3xl justify-center text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-8xl whitespace-nowrap bg-clip-text ">
							恭喜你发现了宝藏网站
						</h1>
					</div>
					<div className="my-16 hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
				</div>
				<AboutMe></AboutMe>
			</div>
		</div>
	);
}
