"use client"
import {PiCaretDownFill} from 'react-icons/pi';
import {GiPirateFlag} from 'react-icons/gi';

export default function Header() {
	// body...
	const data = [
		{
			title:'MENSWEAR',
			ref:''
		},{
			title:'FOOTWEAR',
			ref:''
		},{
			title:'ACCESSORIES',
			ref:''
		},{
			title:'CLEARANCE',
			ref:''
		},

	]


	return (
		<main className="w-full flex items-center bg-black justify-between px-10 py-4 shadow-md shadow-white">
			<div className="flex items-center gap-2 text-white">
				<GiPirateFlag className="h-14 w-14"/>
				<h1 className="font-semibold text-xl flex flex-col">
					<span>DENMARK</span>
					<span>APPAREL</span>
				</h1>
			</div>
			<div className="gap-8 md:flex hiddens items-center">
				{
					data?.map((dat,j)=>(
						<div key={j} className="flex items-center hover:text-purple-600 transition-all 
						cursor-pointer duration-200 ease-in-out gap-4 text-white">
							<PiCaretDownFill className="h-6 w-6"/>
							<h1 className="text-lg">{dat?.title}</h1>
						</div>
					))
				}
			</div>	
		</main>

	)
}