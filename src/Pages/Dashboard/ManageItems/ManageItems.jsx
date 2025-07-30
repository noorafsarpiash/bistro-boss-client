import React from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import useMenu from '../../../Hooks/useMenu'
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Link } from 'react-router';

const ManageItems = () => {

    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();


    const handleDeleteItem = (item) => {
        console.log(item);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                console.log(item._id);
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch();

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name}deleted successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
            }
        });
    }
    return (
        <div>

            <SectionTitle heading="Manage All Items" subHeading="Hurry up">

            </SectionTitle>

            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th className="text-right px-4">Price</th>
                                <th className='text-center '>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name} />
                                                </div>
                                            </div>

                                        </div>
                                    </td>

                                    <td>
                                        {item.name}

                                    </td>
                                    <td className='text-right px-4'>${item.price}</td>
                                    <td className='text-center'>

                                        <Link to={`/dashboard/updateItem/${item._id}`}>
                                            <button

                                                className="btn hover:bg-orange-600  bg-orange-500 btn-sm "
                                            >
                                                <FaEdit className="text-white text-lg " />
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteItem(item)}
                                            className="btn btn-ghost btn-lg"
                                        >
                                            <MdDelete className="text-red-600 text-2xl" />
                                        </button>
                                    </td>
                                </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div >
    )
}

export default ManageItems