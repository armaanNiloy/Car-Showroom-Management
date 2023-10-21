import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";


const Details = () => {
    const car = useLoaderData();
    const { user } = useContext(AuthContext);
    const userEmail = user.email;
    const { name, brand, type, rating, description, price, photo, brandImage } = car;
    const newCar = { userEmail, name, brand, type, rating, description, price, photo, brandImage };
    let newRating = <>
        <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
    </>
    if (rating === '2') {
        newRating = <>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        </>
    }
    else if (rating === '3') {
        newRating = <>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        </>
    }
    else if (rating === '4') {
        newRating = <>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        </>
    }
    else if (rating === '5') {
        newRating = <>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked />
        </>
    }
    const handleAddCart = () => {
        fetch('https://auto-trader-server-pbif25ges-arman-hossains-projects.vercel.app/cart', {
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
        <div className="hero min-h-screen bg-pink-400">
            <div className="hero-content flex-col lg:flex-row">
                <img src={photo} className="max-w-sm rounded-lg shadow-2xl w-3/4 md:w-fit h-3/4 md:h-fit" />
                <div>
                    <h1 className="text-2xl md:text-5xl font-bold">{name}</h1>
                    <h1 className="text-xl md:text-3xl font-bold">Brand: {brand}</h1>
                    <p className="py-6">{description}</p>
                    <p>${price}</p>
                    <p>Type: {type}</p>
                    <div className="rating">
                        {newRating}
                    </div>
                    <br />

                    <button onClick={handleAddCart} className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Details;