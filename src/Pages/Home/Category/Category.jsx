
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import slide1 from '../../../../public/assets/home/slide1.jpg'
import slide2 from '../../../../public/assets/home/slide2.jpg'
import slide3 from '../../../../public/assets/home/slide3.jpg'
import slide4 from '../../../../public/assets/home/slide4.jpg'
import slide5 from '../../../../public/assets/home/slide5.jpg'
import SectionTitles from "../../../Components/SectionTitles/SectionTitles";
import PrimaryButton from "../../../Components/PrimaryBtn/PrimaryButton";

const Category = () => {
  return (
    <section>
      <SectionTitles headings={'ORDER ONLINE'} subheadings={'From 11:00am to 10:00pm'}></SectionTitles>
      <PrimaryButton btnText={'Sign Up'} ></PrimaryButton>
      <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper my-12"
    >
      <SwiperSlide>
        <img src={slide1} />
        <h3 className="text-xl text-white text-center font-bold -mt-16">Salad</h3>
      </SwiperSlide>
      <SwiperSlide><img src={slide2} /><h3 className="text-xl text-white text-center font-bold -mt-16">Pizza</h3></SwiperSlide>
      <SwiperSlide><img src={slide3} /><h3 className="text-xl text-white text-center font-bold -mt-16">Soup</h3></SwiperSlide>
      <SwiperSlide><img src={slide4} /><h3 className="text-xl text-white text-center font-bold -mt-16">Cake</h3></SwiperSlide>
      <SwiperSlide><img src={slide5} /><h3 className="text-xl text-white text-center font-bold -mt-16">Salad</h3></SwiperSlide>
     
    </Swiper>
    </section>
  );
};

export default Category;
