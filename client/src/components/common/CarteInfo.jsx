const CarteInfo = ({name, desc, img, full}) => {
    return (
        <div className="product-card">
            <div className={'product-image' + (full ? ' full' : '')} style={{ backgroundImage: `url(${img})`}} />
            <div className="product-name"><div>{name}</div></div>
            <div className="product-desc"><p>{desc}</p></div>
        </div>
    );
};

export default CarteInfo;