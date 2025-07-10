import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";




const FoodCard = ({ item }) => {

    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();

    const { user } = useAuth();
    const handleAddToCart = (food) => {
        if (user && user.email) {
            console.log(user.email, food)
            const cartItem = {
                menuId: food._id,
                email: user.email,
                name: food.name,
                image: food.image,
                price: food.price

            }

            axiosSecure.post("/carts", cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart successfully`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })

            // User is logged in, proceed with adding to cart
        } else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please Login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            });
        }
    }

    const { name, image, price, recipe, _id } = item;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className='absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white'>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard