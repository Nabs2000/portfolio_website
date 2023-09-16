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
      "It is my pleasure to recommend Nabeel Sabzwari after directly supervising him during his 8-month system engineering co-op at iRhythm Technologies. Nabeel has been proactive, resourceful, and collaborative. Nabeel joined our test effort for a wearable cardiac monitoring device and quickly learned the device configuration, test setup, and data analysis for the device. Nabeel proactively wrote python scripts to automate test cases and manage test artifacts. For example, with one script Nabeel enabled users to analyze pre-recorded data for current measurements in regions of interest. With another script, Nabeel controlled an ECG simulator to autonomously test arrhythmia transmissions. Nabeel was resourceful in implementing a Monte Carlo simulation of the device battery model in python. He studied the input characteristics to define an architecture that accounted for baseline power consumption, statistical distributions, and functional states. Nabeel applied team best practices to develop well-documented, tested, and reviewed code. Lastly, Nabeel's collaboration in preparing devices for test, onboarding additional team members, and assisting wherever possible, makes him an excellent team player. Based on the skills I've witnessed while working with Nabeel, I am confident in his capability to excel in his endeavors.",
  },
  {
    avatar: AVTR2,
    name: "Dilveen Goraya",
    title: "Senior System Engineer, iRhythm Technologies",
    review:
      "Nabeel is a talented and enthusiastic engineer. He takes care to deliver the highest quality in his work and to understand the crux of an issue before diving right in to ensure he considers all perspectives/design inputs when solving a problem. He is a great team-player and knows how to foster cross-functional relationships and involve the necessary parties in his work. He's a quick learner and I highly recommend him as he'd be a great asset to any team. It was a pleasure working with you, Nabeel, hope our paths cross again!",
  },
  // {
  //   avatar: AVTR3,
  //   name: "Mathias Alexander",
  //   title: "System Engineer, iRhythm Technologies",
  //   review:
  //     "Lorem balhlshglashglhadlghaLorem balhlshglashglhadlghaLoreLorem balhlshglashglhadlghaLorem balhlshglashglhadlghaLoreLorem balhlshglashglhadlghaLorem balhlshglashglhadlghaLoreLorem balhlshglashglhadlghaLorem balhlshglashglhadlghaLoreLorem balhlshglashglhadlghaLorem balhlshglashglhadlghaLoreLorem balhlshglashglhadlghaLorem balhlshglashglhadlghaLoreLorem balhlshglashglhadlghaLorem balhlshglashglhadlghaLore",
  // },
];

export function Testimonials() {
  return (
    <section id="testimonials">
      <h5>What Others Say</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container" // install Swiper modules
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
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
