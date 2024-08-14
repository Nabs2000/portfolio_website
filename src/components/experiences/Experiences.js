import React from "react";
import "./experiences.css";
import { BiCheck } from "react-icons/bi";
export function Experiences() {
  return (
    <section id="experiences">
      <h5>What I Did</h5>
      <h2>Work Experience</h2>
      <div className="container experiences__container">
        <article className="experience">
          <div className="experience__head">
            <h3>Marcu Lab, UC Davis (03/2024 - 08/2024)</h3>
          </div>

          <ul className="experience__list">
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Researched the integration of deep learning algorithms within
                Dr. Laura Marcu’s research lab, enhancing the lab's capacity for
                precise differentiation between malignant and benign tissue
                during neurosurgical procedures.
              </p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Presented comprehensive findings on the application of machine
                learning in FLIm-based brain surgery to the research team,
                contributing to an interdisciplinary understanding and fostering
                collaborative research efforts.
              </p>
            </li>
          </ul>
        </article>
        <article className="experience">
          <div className="experience__head">
            <h3>iRhythm Technologies (01/2023 - 09/2023)</h3>
          </div>

          <ul className="experience__list">
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Played a pivotal role in the design verification and validation
                of iRhythm’s next-gen Zio AT device.
              </p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Proactively identified and reported firmware bugs in Jira during
                testing, contributing to product quality improvements.
              </p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Automated two tests during the test cycle, resulting in a
                remarkable 83% and 99% time reduction, respectively.
              </p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Leveraged expertise in data structures and algorithms in Python
                to automate daily tasks for both personal and team-wide use.
              </p>
            </li>
          </ul>
        </article>
        <article className="experience">
          <div className="experience__head">
            <h3>Xtrava Health (06/2022 - 09/2022)</h3>
          </div>

          <ul className="experience__list">
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Created a parsing script using Python to extract valuable
                insights for 500 scanned tests evaluating the performance of
                Xtrava Health’s COVID-19 digital sensors.
              </p>
            </li>
            <li>
              <BiCheck className="experience__list-icon" />
              <p>
                Implemented scripts in Python to visualize and pinpoint areas of
                improvement in Xtrava's COVID-19 detection algorithm.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
