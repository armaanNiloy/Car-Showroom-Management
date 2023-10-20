import { Link } from "react-router-dom";



const Home = () => {


    return (
        <div>
            <section>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/LC3nRSh/background-car.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Car buying shaped to your life</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="mx-20">
                    <h2 className="text-5xl text-center my-10 font-extrabold">Shop your favorite brand</h2>
                    <div className="grid grid-cols-3 gap-8">
                        <Link to='brand/BMW'>
                            <div className="p-5 flex items-center gap-8 shadow-lg rounded-md bg-white text-black">
                                <img className="w-32 h-32" src='/public/BMW_logo_(gray).svg.png' alt="" />
                                <h4 className="text-5xl font-semibold">BMW</h4>
                            </div>
                        </Link>
                        <Link to='brand/Ford'>
                            <div className="p-5 flex items-center gap-8 shadow-lg rounded-md bg-white text-black">
                                <img className="w-32 h-32" src='/public/Ford_logo_flat.svg.png' alt="" />
                                <h4 className="text-5xl font-semibold">Ford</h4>
                            </div>
                        </Link>
                        <Link to='brand/Honda'>
                            <div className="p-5 flex items-center gap-8 shadow-lg rounded-md bg-white text-black">
                                <img className="w-32 h-32" src='/public/honda_logo_icon_181334.png' alt="" />
                                <h4 className="text-5xl font-semibold">Honda</h4>
                            </div>
                        </Link>
                        <Link to='brand/Audi'>
                            <div className="p-5 flex items-center gap-8 shadow-lg rounded-md bg-white text-black">
                                <img className="w-32 h-32" src='/public/logo-Audi.png' alt="" />
                                <h4 className="text-5xl font-semibold">Audi</h4>
                            </div>
                        </Link>
                        <Link to='brand/Mercedes-Benz'>
                            <div className="p-5 flex items-center gap-8 shadow-lg rounded-md bg-white text-black">
                                <img className="w-32 h-32" src='/public/m-b.jpeg' alt="" />
                                <h4 className="text-3xl font-semibold">Mercedes-Benz</h4>
                            </div>
                        </Link>
                        <Link to='brand/Toyota'>
                            <div className="p-5 flex items-center gap-8 shadow-lg rounded-md bg-white text-black">
                                <img className="w-32 h-32" src='/public/Toyota_EU.svg.png' alt="" />
                                <h4 className="text-5xl font-semibold">Toyota</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;