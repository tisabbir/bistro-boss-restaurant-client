import SectionTitles from "../../../Components/SectionTitles/SectionTitles";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";


const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <section className="my-12">
      <SectionTitles
        headings={"Testimonial"}
        subheadings={"What our clients say"}
      />
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper mt-12 "
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="text-center space-y-4">
              <Rating className="mx-auto" style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <p className="max-w-[700px] mx-auto">{review.details}</p>
              <h1 className="text-2xl font-bold text-yellow-600">
                {review.name}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
