function ProductCard(props) {
    return (
        <div className="card">
            <img 
                src={props.img} 
                alt={props.name}
                className="card-image"
            />
            <div className="card-info">
                <p className="card-name">{props.cloth}</p>
                <h2 className="card-discount">{props.discount.min}-{props.discount.max}% Off</h2>
                <p className="card-price">${props.price}</p>
                <p className="card-btn">Shop Now</p>
            </div>
        </div>
    );
}

export default ProductCard;