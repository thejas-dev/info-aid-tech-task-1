


export default function FeaturedOn() {
	// body...


	return (
		<main className="w-full bg-white p-10 flex flex-col">
			<div className="w-full flex items-center justify-around">
				<div className="w-[35%] md:block hidden h-[1.4px] bg-black"/>
				<h1 className="md:w-[30%] w-[90%] text-3xl text-center font-serif text-black">FEATURED ON</h1>
				<div className="w-[35%] h-[2px] bg-black md:block hidden"/>


			</div>
			<div className="grid mt-10 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 w-full">
				<img src="https://logodix.com/logo/608706.jpg" alt=""
				className="h-[100px] mx-auto"/>
				<img src="https://i.pinimg.com/originals/87/34/07/87340705b51a12d6bbdd99f0d6c4a910.png" alt=""
				className="h-[100px] mx-auto"/>
				<img src="https://th.bing.com/th/id/OIP.Tv5mnOlzGI4rPdJSkHJj7wHaEZ?pid=ImgDet&rs=1" alt=""
				className="h-[100px] mx-auto"/>
				<img src="https://th.bing.com/th/id/R.d7424d51fca23ab85700d6b807bfedb0?rik=jnuq5y9%2bk6lv3A&riu=http%3a%2f%2f1.bp.blogspot.com%2f-b58H300zSnc%2fUTXV9LoqXEI%2fAAAAAAAACko%2f4Mt6kEygYi4%2fs1600%2fAdidas%2blogos.jpg&ehk=y%2bP1iJ%2f0NA8xfwjlhFUg2bf2%2bVSYYCxNuNgNsDkOmDQ%3d&risl=&pid=ImgRaw&r=0" alt=""
				className="h-[100px] mx-auto"/>
			</div>
		</main>

	)
}