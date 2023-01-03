import "./App.css";
import { Link } from "react-router-dom";
import githubLogo from "./imgs/github-mark.png";
import linkedinLogo from "./imgs/linkedin_logo.png";
import fbLogo from "./imgs/fb_logo.png";
import gmailLogo from "./imgs/gmail_logo.png";
import pfp from "./imgs/pfp.jpeg";

function Home() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <img src={pfp} alt="Profile Pic" />
      <h1>Hi there! I'm Nabeel.</h1>
      <a href="https://www.github.com">
        <img src={githubLogo} alt="GitHub Logo" />
      </a>
      <img src={linkedinLogo} alt="LinkedIn Logo" />
      <img src={fbLogo} alt="Facebook Logo" />
      <img src={gmailLogo} alt="GMail Logo" />
    </div>
  );
}

export function AboutMe() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>About Me</h1>
      <h2>Bio</h2>
      <Bio />
      <h2>Education</h2>
      <Education
        school="University of California, Berkeley"
        years="2020-2022"
      />
      <Education school="Mission College" years="2018-2020" />
      <h2>Awards</h2>
      <Award
        school="University of California, Berkeley"
        names={[
          "Honor's to Date (2020-2022)",
          "Dean's List (2021)",
          "Transfer Pathway Scholarship (2021-2022)",
        ]}
      />
    </div>
  );
}

function Bio() {
  return (
    <p>
      I am a recent graduate from UC Berkeley's Bioengineering program,
      interested in harnessing software tools to overcome challenges in medical
      device manufacturing, testing, and deployment.
    </p>
  );
}

function Education({ school, years }) {
  return (
    <h4>
      {school} ({years})
    </h4>
  );
}

function Award({ school, names }) {
  return (
    <div>
      <h4>{school}</h4>
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
}
export function History() {
  return (
    <div>
      <h1>Our History</h1>
    </div>
  );
}

export function Experience() {
  return (
    <div>
      <HelperExperience
        type="Internships"
        data={[
          {
            title: "Systems Engineering Co-op",
            desc: "N/A",
            company: "iRhythm Texhnologies",
          },
          {
            title: "Bioengineering Intern",
            desc: "Implemented scripts in Python to clean, visualize, and pinpoint areas of improvement in Xtrava's COVID-19 detection algorithm.",
            company: "Xtrava Health",
          },
          {
            title: "Biodesign Immersion Experience Intern",
            desc: "Integrated entreprenurial tools such as the business model canvas and the Lean Launchpad method to improve upon a vital sign monitoring device for low-resource settings.",
            company: "UC Berkeley",
          },
        ]}
      />
      <HelperExperience
        type="Volunteering"
        data={[
          {
            title: "Undergraduate Research Apprentice",
            desc: "Wrote programs to functionalize a dialysis device",
            company: "UC Berkeley",
          },
        ]}
      />
    </div>
  );
}

function HelperExperience({ type, data }) {}

export function Contact() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>Contact Us</h1>
      <p>Please contact me at nabeelsabz101@gmail.com for further inquiries!</p>
    </div>
  );
}

export function App() {
  return <Home />;
}
