import React from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import { useLoaderData } from 'react-router';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {
    const { register, handleSubmit, reset, } = useForm()
    const { name, category, price, recipe, _id } = useLoaderData();
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic();
    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: { "content-type": "multipart/form-data" }


        })

        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is  updated successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
                // Reset the form or redirect as needed
            }


        }

        console.log(res.data)
    }

    return (

        <div>
            <SectionTitle heading="Update Item" subHeading="Please update the item details"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <fieldset className="fieldset my-6">
                        <legend className="fieldset-legend">Recipe Name*</legend>
                        <input
                            defaultValue={name}
                            {...register("name", { required: true })}
                            type="text"
                            className="input input-bordered w-full"
                            placeholder="Recipe Name" />

                    </fieldset>

                    <div className='flex gap-6'>
                        <fieldset className="fieldset my-6 w-full">
                            <legend className="fieldset-legend">Category*</legend>
                            <select defaultValue={category} {...register("category")} className="select w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="desserts">Desserts</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </fieldset>
                        <fieldset className="fieldset my-6 w-full">
                            <legend className="fieldset-legend">Price*</legend>
                            <input
                                defaultValue={price}
                                {...register("price", { required: true })}
                                type="number"
                                className="input input-bordered w-full"
                                placeholder="Price" />

                        </fieldset>


                    </div>


                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Recipe Details</legend>
                        <textarea defaultValue={recipe} {...register("recipe", { required: true })} className="textarea h-24" placeholder="Bio"></textarea>

                    </fieldset>

                    <div className='fieldset my-6 w-full'>
                        <input {...register("image", { required: true })} type="file" className="file-input file-input-ghost" />
                    </div>


                    <button className='btn'>
                        Update Menu Item

                    </button>




                </form>
            </div >
        </div>
    )
}

export default UpdateItem