
import {FaTwitter,FaFacebookSquare} from 'react-icons/fa';
import {PiInstagramLogoFill} from 'react-icons/pi';

export default function Footer() {
	// body...


	return (
		<main className="w-full flex items-center bg-black py-14 px-14 flex-col gap-6">
			<div className="grid md:grid-cols-2 grid-cols-1 md:gap-3 gap-5 w-full">
				<div className="flex flex-col gap-5">
					<div className="flex md:flex-row flex-col items-center gap-3">
						<div className="flex items-center gap-3">
							<FaTwitter className="h-10 w-10 text-white"/>
							<PiInstagramLogoFill className="h-10 w-10 text-white"/>
							<FaFacebookSquare className="h-10 w-10 text-white"/>
						</div>
						<h1 className="text-white font-serif text-3xl">#DENMARKAPPAREL</h1>
					</div>
					<div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-10">
						<div className="flex flex-col w-full md:items-start items-center gap-3">
							<h1 className="text-sm text-white hover:underline">Home</h1>
							<h1 className="text-sm text-white hover:underline">About us</h1>
							<h1 className="text-sm text-white hover:underline">Join our team</h1>
						</div>
						<div className="flex flex-col w-full md:items-start items-center gap-3">
							<h1 className="text-sm text-white hover:underline">Customer Service</h1>
							<h1 className="text-sm text-white hover:underline">Gift Cards / Balance</h1>
							<h1 className="text-sm text-white hover:underline">Contact Us</h1>
						</div>
						<div className="flex flex-col w-full md:items-start items-center gap-3">
							<h1 className="text-sm text-white hover:underline">Email Sign Up</h1>
							<h1 className="text-sm text-white hover:underline">Order Tracking</h1>
							<h1 className="text-sm text-white hover:underline">Return Policy</h1>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-5">
					<div className="flex items-center gap-3">
						<h1 className="text-white font-serif text-3xl">STORE LOCATIONS</h1>
					</div>
					<div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
						<div className="flex flex-col gap-2">
							<h1 className="text-sm text-white font-semibold">FLORIDA LOCATION</h1>
							<h1 className="text-sm text-white">4758 Holt Street Boca Raton, FL 33487 (785) 689-4123</h1>
						</div>
						<div>
							<h1 className="text-sm text-white font-semibold">CALIFORNIA LOCATION</h1>
							<h1 className="text-sm text-white">2659 Pike Street San Diego, CA 92103 (858) 610-2828</h1>
						</div>
						<div>
							<h1 className="text-sm text-white font-semibold">TEXAS LOCATION</h1>
							<h1 className="text-sm text-white">1731 Weekley Street San Antonio, TX 78205 (210) 299-7827</h1>
						</div>
						
					</div>
				</div>

			</div>

			<div className="w-full mt-8 h-[1.4px] bg-white"/>
			<div className="mt-8 flex items-center justify-between w-full sm:flex-row flex-col">
				<span className="text-xs text-white">© 2025 Denmark Apparel Co. • 1-800-555-0287</span>
				<span className="text-xs text-white">Site Index • Terms of Use • Privacy Policy</span>
			</div>
		</main>

	)
}