import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.png";
import AVTR2 from "../../assets/avatar2.png";
import AVTR3 from "../../assets/avatar3.png";

// avatars obtained from here: https://nice-avatar.dapi.to/
// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Elisma Caffrey",
    title: "System Test Engineering Manager, iRhythm Technologies",
    review:
      "...Nabeel has been proactive, resourceful, and collaborative... (full recommendation on Linkedin here)",
  },
  {
    avatar: AVTR2,
    name: "Dilveen Goraya",
    title: "Senior System Engineer, iRhythm Technologies",
    review:
      "Nabeel is a talented and enthusiastic engineer... (full recommendation on Linkedin here)",
  },
  // ... (other data objects)
];

export function Testimonials() {
  // Function to add a link to the "here" portion of the review
  const addLinkToReview = (review) => {
    const linkUrl = "https://linkedin.com/in/nabeel-sabzwari-899697167/"; // Replace with your actual URL
    const parts = review.split("here");
    return (
      <span>
        {parts[0]} <a href={linkUrl}>here</a>
        {parts[1]}
      </span>
    );
  };

  return (
    <section id="testimonials">
      <h5>What Others Say</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, title, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <h6 className="client__title">{title}</h6>
              <small className="client__review">
                {addLinkToReview(review)}
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
