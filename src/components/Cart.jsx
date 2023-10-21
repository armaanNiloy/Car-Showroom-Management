import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const Cart = () => {
    const cartData = useLoaderData();
    const [carts, setCarts] = useState(cartData);

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
                fetch(`https://auto-trader-server-34i8asld4-arman-hossains-projects.vercel.app/cart/${id}`, {
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
                            const remaining = cartData.filter(cart => cart._id !== id);
                            setCarts(remaining);
                        }
                    })
            }
        
        })
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-3 md:mx-10">
            {
                carts.map((cart, idx) => <div key={idx}>
                    <div className="card lg:card-side bg-base-100 shadow-xl">
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
    );
};

export default Cart;