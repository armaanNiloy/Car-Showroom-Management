import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateDetails = () => {
    const car = useLoaderData();
    const {_id, name, brand, type, rating, description, price, photo} = car;

    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const price = form.price.value;
        const photo = form.photo.value;
        let brandImage;
        if(brand === 'Toyota')brandImage = 'https://i.ibb.co/N1HFJWb/Toyota-EU-svg.png';
        else if(brand === 'BMW')brandImage = 'https://i.ibb.co/VWVb7N3/BMW-logo-gray-svg.png';
        else if(brand === 'Ford')brandImage = 'https://i.ibb.co/844YqWN/Ford-logo-flat-svg.png';
        else if(brand === 'Honda')brandImage = 'https://i.ibb.co/dftYzPn/honda-logo-icon-181334.png';
        else if(brand === 'Mercedes-Benz')brandImage = 'https://i.ibb.co/s5b9h87/m-b.jpg';
        else if(brand === 'Audi')brandImage = 'https://i.ibb.co/w6sKZ9q/logo-Audi.png';
        const newCar = { name, brand, type, rating, description, price, photo, brandImage};
        console.log(newCar);
        fetch(`https://auto-trader-server-pbif25ges-arman-hossains-projects.vercel.app/cars/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Car Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }
    return (
        <div className="p-2 md:p-24">
            <h2 className="text-3xl font-extrabold">Update car: {name}</h2>
            <form onSubmit={handleUpdateProduct}>
                
                <div className="md:flex flex-col md:flex-row mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Car Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Car Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-0 md:ml-4">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <select defaultValue={brand} className="input input-bordered w-full" name="brand">
                                <option value="Toyota">Toyota</option>
                                <option value="BMW">BMW</option>
                                <option value="Ford">Ford</option>
                                <option value="Honda">Honda</option>
                                <option value="Mercedes-Benz">Mercedes-Benz</option>
                                <option value="Audi">Audi</option>
                            </select>
                        </label>
                    </div>
                </div>
                
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label defaultValue={type} className="input-group">
                            <select className="input input-bordered w-full" name="type">
                                <option value="Hatchback">Hatchback</option>
                                <option value="Convertible">Convertible</option>
                                <option value="Minivan">Minivan</option>
                                <option value="Sedan">Sedan</option>
                                <option value="Coupe">Coupe</option>
                                <option value="Sports car">Sports car</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-0 md:ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
               
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <select defaultValue={rating} className="input input-bordered w-full" name="rating">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-0 md:ml-4">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={description} name="description" placeholder="Short description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={photo} type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Car" className="btn btn-block" />

            </form>
        </div>
    );
};

export default UpdateDetails;