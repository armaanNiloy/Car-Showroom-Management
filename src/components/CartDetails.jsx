

const CartDetails = ({ cart }) => {
    const { name, brand, type, rating, description, price, photo, brandImage} = cart;
    
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className="w-1/2"><img className="h-40 w-full" src={photo} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{type}</p>
                <p>${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;