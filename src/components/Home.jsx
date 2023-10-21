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
                            <Link to='/signUp'><button className="btn btn-primary">Sign Up</button></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="mx-3 md:mx-8 lg:mx-20">
                    <h2 className="text-5xl text-center my-10 font-extrabold">Shop your favorite brand</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
                        <Link to='brand/BMW'>
                            <div className="p-5 flex flex-col md:flex-row items-center gap-8 shadow-lg rounded-md bg-white text-black">
                                <img className="w-32 h-32" src='BMW_logo_(gray).svg.png' alt="" />
                                <h4 className="text-5xl font-semibold">BMW</h4>
                            </div>
                        </Link>
                        <Link to='brand/Ford'>
                            <div className="p-5 flex flex-col md:flex-row items-center gap-8 shadow-lg rounded-md bg-white text-black">
                                <img className="w-32 h-32" src='Ford_logo_flat.svg.png' alt="" />
                                <h4 className="text-5xl font-semibold">Ford</h4>
                            </div>
                        </Link>
                        <Link to='brand/Honda'>
                            <div className="p-5 flex flex-col md:flex-row items-center gap-8 shadow-lg rounded-md bg-white text-black">
                                <img className="w-32 h-32" src='honda_logo_icon_181334.png' alt="" />
                                <h4 className="text-5xl font-semibold">Honda</h4>
                            </div>
                        </Link>
                        <Link to='brand/Audi'>
                            <div className="p-5 flex flex-col md:flex-row items-center gap-8 shadow-lg rounded-md bg-white text-black">
                                <img className="w-32 h-32" src='logo-Audi.png' alt="" />
                                <h4 className="text-5xl font-semibold">Audi</h4>
                            </div>
                        </Link>
                        <Link to='brand/Mercedes-Benz'>
                            <div className="p-5 flex flex-col md:flex-row items-center gap-8 shadow-lg rounded-md bg-white text-black">
                                <img className="w-32 h-32" src='m-b.jpeg' alt="" />
                                <h4 className="text-3xl font-semibold">Mercedes-Benz</h4>
                            </div>
                        </Link>
                        <Link to='brand/Toyota'>
                            <div className="p-5 flex flex-col md:flex-row items-center gap-8 shadow-lg rounded-md bg-white text-black">
                                <img className="w-32 h-32" src='Toyota_EU.svg.png' alt="" />
                                <h4 className="text-5xl font-semibold">Toyota</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-black text-white my-16">
                <h2 className="text-5xl font-bold pt-10 text-center">Why Choose us?</h2>
                <div className="flex flex-col md:flex-row justify-evenly mx-2 md:mx-10">
                    <div className="p-10 text-center">
                        <div className="flex justify-center mt-2 h-1/2">
                            <img className="w-32 h-32" src="https://consumer.tcimg.net/assets/_next/static/images/transparent-pricing-4d7899553551b3a2db95d346ac20062f.svg" alt="" />
                        </div>
                        <div className="h-auto">
                            <h3 className="text-3xl font-bold mt-2">Transparent pricing</h3>
                            <p className="mt-2 text-lg">No surprises here. See how much you will pay on cars you like.</p>
                        </div>
                    </div>
                    <div className="p-10 text-center">
                        <div className="flex justify-center mt-2 h-1/2">
                            <img className="w-32 h-32" src="https://consumer.tcimg.net/assets/_next/static/images/minutes-not-hours-48afd64860a3e72b36d5986738c77eb4.svg" alt="" />
                        </div>
                        <div className="h-auto">
                            <h3 className="text-3xl font-bold mt-2">Minutes, not hours</h3>
                            <p className="mt-2 text-lg">Time saving tools to help you find the right car in a snap.</p>
                        </div>
                    </div>
                    <div className="p-10 text-center">
                        <div className="flex justify-center mt-2 h-1/2">
                            <img className="w-32 h-32" src="https://consumer.tcimg.net/assets/_next/static/images/shop-your-way-f575579b12ccf6daf39539dab242c0e2.svg" alt="" />
                        </div>
                        <div className="h-auto">
                            <h3 className="text-3xl font-bold mt-2">Shop your way</h3>
                            <p className="mt-2 text-lg">Your own pace, your own space. Shop online where and when it's convenient for you.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pb-10">
                    <Link to='/signUp'><button className="px-8 py-3 rounded-full bg-white text-black text-2xl font-semibold mt-2 text-center">Sign Up</button></Link>
                </div>
            </section>
            <h2 className="text-center text-4xl text-black mb-10 font-bold">Featured tools</h2>
            <section className="grid grid-cols-1 md:grid-cols-2 mx-2 md:mx-8 lg:mx-20 gap-5 mb-10">
                <div className="p-3 md:p-10 text-center bg-white rounded-md shadow-2xl">
                    <div className="flex justify-center mt-2 h-fit md:h-1/2">
                        <img className="w-1/2 h-1/2" src="https://consumer.tcimg.net/assets/_next/static/images/find-your-fit-c3e69b766901145f689dc9d45db2511d.png?auto=format&fit=max&h=146.2429906542056&w=480" alt="" />
                    </div>
                    <div className="h-auto">
                        <h3 className="text-xl md:text-3xl font-bold text-black mt-2">Find Your Fit</h3>
                        <p className="mt-2 text-black">Not sure what you want? Answer a few questions to find what fits you best.</p>
                        <button className="px-8 py-3 rounded-full bg-black text-white text-lg md:text-2xl font-semibold mt-2">Start quiz</button>
                    </div>
                </div>
                <div className="p-3 md:p-10 text-center bg-white rounded-md shadow-2xl">
                    <div className="flex justify-center mt-2 h-fit md:h-1/2">
                        <img className="w-1/2 h-1/2" src="https://consumer.tcimg.net/assets/_next/static/images/shop-by-budget-d249f20ce1d3fb7fb7da7f1dc8ed3e5f.png?auto=format&fit=max&h=212.0754716981132&w=160" alt="" />
                    </div>
                    <div className="h-auto">
                        <h3 className="text-xl md:text-3xl font-bold text-black mt-2">Shop by budget</h3>
                        <p className="mt-2 text-black">Save time and narrow down cars that fit your monthly payment and price point.</p>
                        <button className="px-8 py-3 rounded-full bg-black text-white text-lg md:text-2xl font-semibold mt-2">See your buying power</button>
                    </div>
                </div>
                <div className="p-3 md:p-10 text-center bg-white rounded-md shadow-2xl">
                    <div className="flex justify-center mt-2 h-fit md:h-1/2">
                        <img className="w-1/2 h-1/2" src="https://consumer.tcimg.net/assets/_next/static/images/build-and-price-e166dc27e8dda05c627d2d8074920ef3.png?auto=format&fit=max&h=96.85714285714285&w=90" alt="" />
                    </div>
                    <div className="h-auto">
                        <h3 className="text-xl md:text-3xl font-bold text-black mt-2">Build and price</h3>
                        <p className="mt-2 text-black">Choose the make, model, trim, and options you want.</p>
                        <button className="px-8 py-3 rounded-full bg-black text-white text-lg md:text-2xl font-semibold mt-2">Build your car</button>
                    </div>
                </div>
                <div className="p-3 md:p-10 text-center bg-white rounded-md shadow-2xl">
                    <div className="flex justify-center mt-2 h-fit md:h-1/2">
                        <img className="w-1/2 h-1/2" src="https://consumer.tcimg.net/assets/_next/static/images/sell-your-car-3535592c22047d856102d713367192eb.png?auto=format&fit=max&h=310.27624309392263&w=480" alt="" />
                    </div>
                    <div className="h-auto">
                        <h3 className="text-xl md:text-3xl font-bold text-black mt-2">Sell and trade</h3>
                        <p className="mt-2 text-black">Get an offer in minutes, then cash out or trade in.</p>
                        <button className="px-8 py-3 rounded-full bg-black text-white text-lg md:text-2xl font-semibold mt-2">Learn more</button>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Home;