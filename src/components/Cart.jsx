import { useLoaderData } from "react-router-dom";
import CartDetails from "./CartDetails";


const Cart = () => {
    const cartData = useLoaderData();
    
    return (
        <div className="grid grid-cols-2 gap-5 mx-10">
            {
                cartData.map((cart, idx) => <CartDetails key={idx} cart={cart}></CartDetails>)
            }
        </div>
    );
};

export default Cart;