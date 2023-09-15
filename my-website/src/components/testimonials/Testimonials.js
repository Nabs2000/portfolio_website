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
    review:
      "Lorem balhlshglashglhadlghaLorem balhlshglashglhadlghaLoreLorem balhlshglashglhadlghaLorem balhlshglashglhadlghaLoreLorem balhlshglashglhadlghaLorem balhlshglashglhadlghaLoreLorem balhlshglashglhadlghaLorem balhlshglashglhadlghaLoreLorem balhlshglashglhadlghaLorem balhlshglashglhadlghaLoreLorem balhlshglashglhadlghaLorem balhlshglashglhadlghaLoreLorem balhlshglashglhadlghaLorem balhlshglashglhadlghaLore",
  },
  {
    avatar: AVTR2,
    name: "Dilveen Goraya",
    review:
      "Lorem balhlshglashglhadlghaLorem balhlshglashglhadlghaLoreLorem balhlshglashglhadlghaLorem balhlshglashglhadlghaLoreLorem balhlshglashglhadlghaLorem balhlshglashglhadlghaLoreLorem balhlshglashglhadlghaLorem balhlshglashglhadlghaLoreLorem balhlshglashglhadlghaLorem balhlshglashglhadlghaLoreLorem balhlshglashglhadlghaLorem balhlshglashglhadlghaLoreLorem balhlshglashglhadlghaLorem balhlshglashglhadlghaLore",
  },
  {
    avatar: AVTR3,
    name: "Mathias Alexander",
    review:
      "Lorem balhlshglashglhadlghaLorem balhlshglashglhadlghaLoreLorem balhlshglashglhadlghaLorem balhlshglashglhadlghaLoreLorem balhlshglashglhadlghaLorem balhlshglashglhadlghaLoreLorem balhlshglashglhadlghaLorem balhlshglashglhadlghaLoreLorem balhlshglashglhadlghaLorem balhlshglashglhadlghaLoreLorem balhlshglashglhadlghaLorem balhlshglashglhadlghaLoreLorem balhlshglashglhadlghaLorem balhlshglashglhadlghaLore",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container" // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
