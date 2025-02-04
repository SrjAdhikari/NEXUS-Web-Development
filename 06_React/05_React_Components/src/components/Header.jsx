function Header() {
    return(
        <div className="header">
            <img 
                src="./src/assets/myntra-logo.png" 
                alt="myntra-logo" 
                className="logo"
            />
            <div className="header-content">
                <button className="btn">Men</button>
                <button className="btn">Women</button>
                <button className="btn">Kids</button>
                <button className="btn">Home & Living</button>
                <button className="btn">Beauty</button>
                <button className="btn">Studio</button>
            </div>
            <input 
                type="text" 
                id="search" 
                name="brands" 
                placeholder="Search for products, brands & more" 
            />
            <div className="cart-content">
                <button className="btn">Profiles</button>
                <button className="btn">Wishlist</button>
                <button className="btn">Cart</button>
            </div>
        </div>
    )
}

export default Header;