import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import clothingItems from './dummy-data';

function App() {
	return (
		<>
			<Header />
			<div id="container">
                {
                    // Iterating over clothingItems array to render a Card component for each item
                    clothingItems.map((item, index) => {
                        return (
                            <ProductCard
                                key={index}                 // Unique key for each card
                                img={item.img}              // Passing image URL as a prop
                                cloth={item.name}           // Passing the name of the clothing as a prop
                                discount={item.discount}    // Passing the discount information as a prop
                            />
                        );
                    })
                }
            </div>
			<Footer />
		</>
	)
}

export default App;