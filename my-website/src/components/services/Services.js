import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
export function Services() {
  return (
    <section id="services">
      <h5>What I Did</h5>
      <h2>Work Experience</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>iRhythm Technologies</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Played a pivotal role in the design verification and validation
                of iRhythm’s next-gen Zio AT device.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Proactively identified and reported firmware bugs in Jira during
                testing, contributing to product quality improvements.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Automated two tests during the test cycle, resulting in a
                remarkable 83% and 99% time reduction, respectively.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Leveraged expertise in data structures and algorithms in Python
                to automate daily tasks for both personal and team-wide use.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Xtrava Health</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Created a parsing script using Python to extract valuable
                insights for 500 scanned tests evaluating the performance of
                Xtrava Health’s COVID-19 digital sensors.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Implemented scripts in Python to visualize and pinpoint areas of
                improvement in Xtrava's COVID-19 detection algorithm.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Nanotechnology Lab, UC Berkeley</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Wrote a Python program for interactivity between a Raspberry Pi
                and Arduino for a dialysis device in the lab of Dr. Waqas Khalid
                through Berkeley’s URAP program.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Designed front-end Python code hosted on a Raspberry Pi using Qt
                Creator to be utilized by doctors for a graphical user
                interface.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
