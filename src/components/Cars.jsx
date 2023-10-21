import { Link } from "react-router-dom";


const Cars = ({ car }) => {
    const { _id, name, brand, type, rating, description, price, photo, brandImage } = car;
    console.log(rating);
    let newRating = <>
        <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
    </>
    if (rating === '2') {
        newRating = <>
            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400"  />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
            <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        </>
    }
    else if (rating === '3') {
        newRating = <>
            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400"  />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" checked/>
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        </>
    }
    else if (rating === '4') {
        newRating = <>
            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400"  />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" checked/>
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        </>
    }
    else if (rating === '5') {
        newRating = <>
            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400"  />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked/>
        </>
    }
    return (
        <div className="card bg-pink-400 shadow-2xl">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>$ {price}</p>
                <p>Type: {type}</p>
                <div className="rating">
                    {newRating}
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/update/${_id}`}><button className="btn btn-accent">Update</button></Link>
                    <Link to={`/details/${_id}`}><button className="btn btn-primary">Detail</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Cars;