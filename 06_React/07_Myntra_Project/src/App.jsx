import { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import clothingItems from './dummy-data';

function App() {
    // State to store the list of products, initialized with clothingItems data.
    let [productArray, setProductArray] = useState(clothingItems);

    // State to track whether sorting by price is active
    let [isSortedByPrice, setIsSortedByPrice] = useState(false);

    // State to track whether sorting by discount is active
    let [isSortByDiscount, setIsSortByDiscount] = useState(false);


    // Function to sort products by price
    // function SortByPrice() {
    //     productArray.sort((a, b) => a.price - b.price);
    //     setProductArray([...productArray]);
    // }


    // Function to toggle sorting by price.
    function ToggleSortByPrice() {
        if(isSortedByPrice) {
            // If already sorted, reset to original data
            setProductArray([...clothingItems]);
        }
        else {
            // If not sorted, sort the array
            // Sort a new copy of the array to prevent mutating the original state
            const sortedArray = [...productArray].sort((a, b) => a.price - b.price);
            setProductArray(sortedArray);
        }
        // Toggle the sorting state
        setIsSortedByPrice(!isSortedByPrice);
    }


    // Function to filter products with price above $40
    function PriceAbove40() {
        const filteredArray = productArray.filter((item) => item.price > 40) ;
        setProductArray(filteredArray);
    }


    // Function to sort products by discount
    // function SortByDiscount() {
    //     productArray.sort((a, b) => b.discount.max - a.discount.max);
    //     setProductArray([...productArray]);
    // }


    // Function to toggle sorting by discount.
    function toggleSortByDiscount() {
        if(isSortByDiscount) {
            // Reset to original data when sorting is already applied
            setProductArray([...clothingItems]);
        }
        else {
            // Sort a new copy of the array by max discount (higher discounts first)
            const sortedArray = [...productArray].sort((a, b) => b.discount.max - a.discount.max);
            setProductArray(sortedArray);
        }
        // Toggle the sorting state
        setIsSortByDiscount(!isSortByDiscount);
    }


    //* Why to use a copy of the original array to modify the state of the array directly?
    // React state should not be mutated directly because React relies on detecting state changes to trigger re-renders. 
    // If we modify the state array directly (without making a copy), React might not detect the change, leading to unexpected behavior.

    // [...productArray], [...clothingItems] creates a new array with the same data but a different reference.
    // This ensures that React can detect the change and trigger a re-render.


    //* Best Practices
    // Always copy the original array when performing updates, rather than mutating it directly. 
    // This ensures that React can track changes, perform the necessary re-renders, and makes your code easier to maintain and debug.


	return (
		<>
			<Header />
            <div className="filter">
                <button className="filter-btn" onClick={ToggleSortByPrice}>{isSortedByPrice ? "Reset Sort" : "Sort by Price"}</button>
                <button className="filter-btn" onClick={PriceAbove40}>Price above $40</button>
                <button className="filter-btn" onClick={toggleSortByDiscount}>{isSortByDiscount ? "Reset Sort" : "Sort by Discount"}</button>
            </div>
			<div id="container">
                {
                    // Iterating over clothingItems array to render a Card component for each item
                    productArray.map((item, index) => {
                        return (
                            <ProductCard
                                key={index}                 // Unique key for each card
                                img={item.img}              // Passing image URL as a prop
                                cloth={item.name}           // Passing the name of the clothing as a prop
                                discount={item.discount}    // Passing the discount information as a prop
                                price={item.price}          // Passing the price of the clothing as a prop
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