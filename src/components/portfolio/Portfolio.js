import React from "react";
import "./portfolio.css";
import RAGPic from "../../assets/ai_logo.png";
import ChatPic from "../../assets/chat.png";
import NGordnetPic from "../../assets/ngordnet_portfolio_img.png";
import DronePic from "../../assets/drone_delivery_portfolio_img.png";
import RTGPic from "../../assets/result_gen_tool_portfolio_img.png";
import GamePic from "../../assets/2048_portfolio_img.png";
import DequePic from "../../assets/deque_portfolio_img.png";

const data = [
  {
    id: 1,
    image: RAGPic,
    title: "Medicinal RAG Agent",
    github: "https://github.com/Nabs2000/medicine_rag.git",
  },
  {
    id: 2,
    image: ChatPic,
    title: "Chat App",
    github: "https://github.com/Nabs2000/chat_web_app",
  },
  {
    id: 3,
    image: RTGPic,
    title: "Result Generator Tool",
    github: "https://github.com/Nabs2000/result_generator_tool",
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
