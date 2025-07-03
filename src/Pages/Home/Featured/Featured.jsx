import React from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import featuredImg from "../../../assets/home/featured.jpg"
import "./Featured.css"
const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle subHeading={"check it out"} heading={"Featured Item"} />
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-60 py-20 pt-12  px-36'>
                <div>
                    <img src={featuredImg} alt="Featured" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where can I get some?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quam doloremque iste, voluptas unde placeat deleniti asperiores voluptate ab maiores repudiandae quibusdam velit cumque aut quaerat natus aspernatur, tempora, nisi sapiente esse laborum perferendis dolore. Ipsa, eligendi ipsum officiis inventore obcaecati impedit quaerat odio tempore voluptas atque, nesciunt iure necessitatibus?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default Featured