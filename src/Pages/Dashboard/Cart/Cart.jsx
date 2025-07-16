import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Cart = () => {
    const [cart, refetch, isLoading, error] = useCart();
    const axiosSecure = useAxiosSecure();

    // Loader
    if (isLoading) return <p className="text-center text-lg">Loading cart items...</p>;
    if (error) return <p className="text-center text-red-500">Failed to load cart.</p>;

    // Total price calculation (only valid price)
    const totalPrice = cart.reduce((total, item) => {
        const price = parseFloat(item?.price);
        return total + (isNaN(price) ? 0 : price);
    }, 0);

    // Delete handler
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`).then((res) => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire("Deleted!", "Your item has been removed.", "success");
                    }
                });
            }
        });
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-evenly mb-8 items-center">
                <h2 className="text-2xl md:text-4xl mb-2 md:mb-0">
                    🛒 Total Items: {cart.length}
                </h2>
                <h2 className="text-2xl md:text-4xl mb-2 md:mb-0">
                    💰 Total Price: ${totalPrice.toFixed(2)}
                </h2>
                <button className="btn btn-primary px-6 py-3 text-lg">Pay</button>
            </div>

            {cart.length === 0 ? (
                <p className="text-center text-gray-400 mt-12">No items in cart.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={item.image || "https://via.placeholder.com/100"}
                                                    alt="Item"
                                                />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name || "No name"}</td>
                                    <td>${item.price || "0.00"}</td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="btn btn-ghost btn-lg"
                                        >
                                            <MdDelete className="text-red-600 text-2xl" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Cart;
