import { useLoaderData, useParams } from "react-router-dom";


const Brand = () => {
    const id = useParams();
    const cars = useLoaderData();
    const requiredCars = cars.filter(car => car.brand == id);
    console.log(requiredCars);
    return (
        <div>
            
        </div>
    );
};

export default Brand;