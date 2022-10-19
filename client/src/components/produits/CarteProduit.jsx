const CarteProduit = ({name, desc, img}) => {
    return (
        <div className="product-card">
            <div className="product-image" style={{background: `url(${img})`}} />
            <div>{name}</div>
            <div>{desc}</div>
        </div>
    );
};

export default CarteProduit;