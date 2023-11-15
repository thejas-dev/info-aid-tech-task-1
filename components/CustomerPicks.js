

import {IoIosStar} from 'react-icons/io';

export default function CustomerPicks() {
	// body...
	const data = [
		{
			title:"DENMARK CLASSIC SIGNATURE MEN'S SUIT",
			star:[
				'yes',
				'yes',
				'yes',
				'yes',
				'no'
			],
			description:'"With the custom fitting options, I finally found a suit that fits comfortably! Great material too!"',
			location:'Todd Alejandra, California',
			button:'BROWSE SUITS',
			image:'https://s3.amazonaws.com/image-library.venngage.com/b2d5defa387ac6302eb64a19452fdd06.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyjhchbfawqiojm4otczfq'
		},{
			title:'DENMARK MEN"S LUX LEATHER WATCH',
			star:[
				'yes',
				'yes',
				'yes',
				'yes',
				'yes'
			],
			description:'"I bought this as a gift for my husband and he loved it! Can be worn for different occasions!"',
			location:'Alex Brown, Florida',
			button:'BROWSE WATCHES',
			image:'https://s3.amazonaws.com/image-library.venngage.com/408b39d6aa4110307a21abdc4a0e6842.jpg'
		}
	]


	return (
		<main className="w-full flex items-center bg-[#61413f] p-14 px-[60px] flex-col gap-6">
			<div className="w-full flex items-center justify-around">
				<div className="w-[35%] md:block hidden h-[1.4px] bg-white"/>
				<h1 className="md:w-[30%] w-[90%] text-3xl text-center font-serif text-white">CUSTOMER PICKS</h1>
				<div className="w-[35%] h-[2px] bg-white md:block hidden"/>
			</div>
			<div className='grid md:grid-cols-2 grid-cols-1 gap-5 md:px-7 px-3'>
				{
					data?.map((dat,j)=>(
						<div key={j} className="bg-white flex flex-col gap-6 p-5 px-6">
							<div className="flex md:gap-7 gap-3 h-full">
								<img src={dat?.image} className="w-[40%] object-cover h-[100%]"/>
								<div className="flex flex-col overflow-hidden md:gap-5 gap-3">
									<h1 className="md:text-2xl text-xl text-black">{dat?.title}</h1>
									<div className="star flex items-center justify-between pr-10">
										{
											dat?.star?.map((str,k)=>(
												<IoIosStar className={`h-5 w-5 ${str === 'yes' ? 'text-[#61413f]' : 'text-gray-200'} `}/>
											))
										}
									</div>
									<h1 className="md:text-xl text-lg text-serif text-black">
										{dat?.description}
									</h1>
									<p className="md:text-xl text-lg font-serif text-black">{dat?.location}</p>
								</div>
							</div>
							<div className="w-full flex items-center justify-center">
								<button className="md:w-[60%] w-[80%] py-3 text-xl text-white bg-black font-serif">{dat?.button}</button>
							</div>

						</div>
					))
				}
			</div>
		</main>
	)
}