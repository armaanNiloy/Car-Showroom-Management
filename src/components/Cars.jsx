import { Link } from "react-router-dom";


const Cars = ({ car }) => {
    const { _id, name, brand, type, rating, description, price, photo, brandImage} = car;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>$ {price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/update/${_id}`}><button className="badge badge-outline">Update</button></Link>
                    <Link to={`/details/${_id}`}><button className="badge badge-outline">Detail</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Cars;