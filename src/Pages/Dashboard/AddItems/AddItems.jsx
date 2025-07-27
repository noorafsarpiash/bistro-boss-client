
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import { useForm } from 'react-hook-form'
import { FaUtensils } from "react-icons/fa";


const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <SectionTitle heading="add an item" subHeading="What's new?"> </SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <fieldset className="fieldset my-6">
                        <legend className="fieldset-legend">Recipe Name*</legend>
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            className="input input-bordered w-full"
                            placeholder="Recipe Name" />

                    </fieldset>

                    <div className='flex gap-6'>
                        <fieldset className="fieldset my-6 w-full">
                            <legend className="fieldset-legend">Category*</legend>
                            <select {...register("category")} defaultValue="Pick a color" className="select w-full">
                                <option disabled={false}>Select a category</option>
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
                                {...register("price", { required: true })}
                                type="number"
                                className="input input-bordered w-full"
                                placeholder="Price" />

                        </fieldset>


                    </div>


                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Recipe Details</legend>
                        <textarea {...register("recipe", { required: true })} className="textarea h-24" placeholder="Bio"></textarea>

                    </fieldset>

                    <div className='fieldset my-6 w-full'>
                        <input {...register("image", { required: true })} type="file" className="file-input file-input-ghost" />
                    </div>


                    <button className='btn'>
                        Add Item <FaUtensils className='ml-2' />

                    </button>




                </form>
            </div>
        </div>

    )
}

export default AddItems