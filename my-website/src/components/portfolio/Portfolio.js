import React from "react";
import "./portfolio.css";
import MCPic from "../../assets/monte_carlo_portfolio_img.png";
import NGordnetPic from "../../assets/ngordnet_portfolio_img.png";
import DronePic from "../../assets/drone_delivery_portfolio_img.png";
import RTGPic from "../../assets/result_gen_tool_portfolio_img.png";
import GamePic from "../../assets/2048_portfolio_img.png";
import DequePic from "../../assets/deque_portfolio_img.png";

const data = [
  {
    id: 1,
    image: MCPic,
    title: "Monte Carlo Simulation",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 2,
    image: NGordnetPic,
    title: "NGordnet: A Variation of Wordnet",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 3,
    image: DronePic,
    title: "Autonomous Drone Delivery System",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 4,
    image: RTGPic,
    title: "Result Generator Tool",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 5,
    image: GamePic,
    title: "2048 Project",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 6,
    image: DequePic,
    title: "Deque Project",
    github: "https://github.com",
    demo: "https://google.com",
  },
];
export function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img className="portfolio__image" src={image} alt={title} />
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
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
