
import {GiPriceTag} from 'react-icons/gi';
import {HiTruck} from 'react-icons/hi';
import {SiHomeassistantcommunitystore } from 'react-icons/si'

export default function SmallInfo() {

	const data = [
		{
			title:"FREE SHIPPING",
			description:"When you spend $50.00 minimum before taxes on all online orders.",
			icon:<HiTruck className="h-[70px] w-[70px] text-[#61413f]"/>
		},
		{
			title:"PRICE MATCHING",
			description:"Present a qualifying competitor's ad and we'll gladly price match!",
			icon:<GiPriceTag  className="h-[70px] w-[70px] text-[#61413f]"/>
		},
		{
			title:"STORE PICK UP",
			description:"Buy online, and then pick up your order in store or curbside.",
			icon:<SiHomeassistantcommunitystore  className="h-[70px] w-[70px] text-[#61413f]"/>
		},
	]

	return (
		<main className="w-full flex items-center bg-[#61413f] p-14 px-[60px] md:flex-row flex-col gap-6">
			{
				data?.map((dat,j)=>(
					<div className="flex md:items-start items-center gap-4">
						<div className="">
							<div className="bg-white rounded-lg p-3">
								{dat?.icon}
							</div>
						</div>
						<div className="flex flex-col gap-1">
							<h1 className="text-lg text-white">{dat?.title}</h1>
							<p className="text-sm text-white">{dat?.description}</p>
							<p className="text-sm text-white underline cursor-pointer">details</p>
						</div>
					</div>
				))
			}	
		</main>
	)
}