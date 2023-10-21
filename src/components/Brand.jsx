import { useLoaderData, useParams } from "react-router-dom";
import Cars from "./Cars";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Brand = () => {
    const id = useParams();
    console.log(id);
    const cars = useLoaderData();
    const {loading} = useContext(AuthContext);
    console.log(cars);
    const requiredCars = cars.filter(car => car.brand === id.id);
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>;
    }
    
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://www.motortrend.com/uploads/2022/08/2022-Bugatti-Chiron-Super-Sport-2-1.jpg?fit=around%7C875:492" className="w-full h-[500px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fc.ndtvimg.com%2F2022-01%2F0d2m0qkg_car_625x300_12_January_22.jpg&w=1920&q=75" className="w-full h-[500px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://www.motortrend.com/uploads/2022/03/2022-Honda-Civic-Touring-vs-2022-Hyundai-Elantra-Limited-vs-2022-Kia-Forte-GT-vs-2022-Mazda-Mazda3-Sedan-AWD-Turbo-vs-2022-Nissan-Sentra-SR-vs-2022-Volkswagen-Jetta-SEL-19.jpg?fit=around%7C875:492" className="w-full h-[500px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/2022-gr86-premium-trackbred-002-1628887849.jpg?resize=1200:*" className="w-full h-[500px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row text-center justify-center items-center my-10 gap-5">
                <img className="w-32 h-32" src={requiredCars[0].brandImage} alt="" />
                <h2 className="text-2xl md:text-6xl">{id.id} Model</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 mx-2 md:mx-8 lg:mx-20">
                {
                    
                    requiredCars.length> 0?
                    requiredCars.map((car, idx) => <Cars key={idx} car={car}></Cars>)
                    :
                    <h2>NO data found</h2>
                }
            </div>
        </div>
    );
};

export default Brand;