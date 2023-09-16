import React from "react";
import "./portfolio.css";
import ReactPic from "../../assets/react_logo_portfolio_img.png";
import NGordnetPic from "../../assets/ngordnet_portfolio_img.png";
import DronePic from "../../assets/drone_delivery_portfolio_img.png";
import RTGPic from "../../assets/result_gen_tool_portfolio_img.png";
import GamePic from "../../assets/2048_portfolio_img.png";
import DequePic from "../../assets/deque_portfolio_img.png";

const data = [
  {
    id: 1,
    image: ReactPic,
    title: "This Website!",
    github: "https://github.com/Nabs2000/my_website",
  },
  {
    id: 2,
    image: NGordnetPic,
    title: "NGordnet: Graph Project",
    github: "https://github.com/Nabs2000/cs61b_2022/tree/main/proj2",
  },
  {
    id: 3,
    image: DronePic,
    title: "Drone Delivery System",
    github: "https://github.com/Nabs2000/eecs106a_final_proj/tree/main",
  },
  {
    id: 4,
    image: RTGPic,
    title: "Result Generator Tool",
    github: "https://github.com/Nabs2000/result_generator_tool",
  },
  {
    id: 5,
    image: GamePic,
    title: "2048 Project",
    github: "https://github.com/Nabs2000/cs61b_2022/tree/main/proj0",
  },
  {
    id: 6,
    image: DequePic,
    title: "Deque Project",
    github: "https://github.com/Nabs2000/cs61b_2022/tree/main/proj1",
  },
];
export function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img className="portfolio__image" src={image} alt={title} />
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
