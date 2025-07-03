
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import Featured from '../Featured/Featured'
import PopularMenu from '../PopularMenu/PopularMenu'
import Testimonials from '../Testomonials/Testimonials'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



const Home = () => {

    return (
        <>
            <Banner />
            <Category />
            <PopularMenu />
            <Featured />
            <Testimonials />
        </>
    )
}

export default Home