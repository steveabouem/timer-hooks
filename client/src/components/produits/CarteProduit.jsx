const CarteProduit = ({name, desc, img}) => {
    return (
        <div className="product-card">
            <div className="product-image" style={{ backgroundImage: `url(${img})`}} />
            <div className="product-name"><div>{name}</div></div>
            <div className="product-desc"><p>{desc}</p></div>
        </div>
    );
};

export default CarteProduit;