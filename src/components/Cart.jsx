import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";



const Cart = () => {
    const cartData = useLoaderData();
    const { user } = useContext(AuthContext);
    const realData = cartData.filter(cart => cart.userEmail === user.email);
    const [carts, setCarts] = useState(realData);

    

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://auto-trader-server-pbif25ges-arman-hossains-projects.vercel.app/cart/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = carts.filter(cart => cart._id !== id);
                            setCarts(remaining);
                        }
                    })
            }

        })
    }

    return (
        <div>
            <h2 className="text-5xl text-center my-10">MY CART</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-3 md:mx-10 mb-5">
                {
                    carts.map((cart, idx) => <div key={idx}>
                        <div className="card lg:card-side bg-pink-400 shadow-xl">
                            <figure className="w-full lg:w-1/2"><img className="h-full lg:h-40 w-full" src={cart.photo} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{cart.name}</h2>
                                <p>{cart.type}</p>
                                <p>${cart.price}</p>
                                <div className="card-actions justify-start lg:justify-end">
                                    <button onClick={() => handleDelete(cart._id)} className="btn btn-primary">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Cart;