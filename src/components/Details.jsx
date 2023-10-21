import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Details = () => {
    const car = useLoaderData();
    const { name, brand, type, rating, description, price, photo, brandImage } = car;
    const newCar = { name, brand, type, rating, description, price, photo, brandImage };
    const handleAddCart = () => {
        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Added in cart',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <h1 className="text-3xl font-bold">Brand: {brand}</h1>
                    <p className="py-6">{description}</p>
                    <p>${price}</p>
                    <p>Type: {type}</p>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <br />

                    <button onClick={handleAddCart} className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Details;