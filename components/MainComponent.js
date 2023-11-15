
import Hero from './Hero';
import Header from './Header';
import SmallInfo from './SmallInfo';
import FeaturedOn from './FeaturedOn';
import CustomerPicks from './CustomerPicks';
import Footer from './Footer';


export default function MainComponent() {
	// body...


	return (
		<main className="h-full w-full">
			<Header />
			<Hero />
			<SmallInfo />
			<FeaturedOn />
			<CustomerPicks />
			<Footer />
		</main>


	)
}