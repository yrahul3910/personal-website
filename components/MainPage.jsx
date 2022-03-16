import React from "react";

import NewBanner from "./NewBanner.jsx";
import StickyNav from "./StickyNav.jsx";
import CardGrid from "./CardGrid.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import { Link } from "react-router-dom";

import researchInterests from "../src/research_interests.jsx";
import contacts from "../src/contacts.jsx";
import projects from "../src/projects.jsx";
import resumeCards from "../src/resumeCards.jsx";

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.onscroll = () => {
            let el = document.getElementById("scroll-button");
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                el.classList.add("visible");
            }
            else {
                el.classList.remove("visible");
            }
        };
    }

    render() {
        return (
            <div>
                <ScrollToTop />
                <NewBanner />
                <StickyNav />
                <main>
                    <section id="resume" className="red-background">
                        <h1>Resume / CV</h1>
                        <h3 style={{color: "white"}}>
                            Looking to hire? I am qualified for the roles below. Click a card to expand/collapse.
                        </h3>
                        <CardGrid cards={resumeCards} />
                    </section>
                    <section id="research" className="blue-background">
                        <h1>Research Interests</h1>
                        <h3>My publications are available at <Link style={{color: "white"}} to="/publications">ryedida.me/publications</Link>. Click a card to expand/collapse.</h3>
                        <CardGrid cards={researchInterests} />
                    </section>
                    <section id="projects" className="green-background">
                        <h1>Projects</h1>
                        <p>
                            Below is a sample of my projects. For a more comprehensive list of my notable projects, please view my CV.
                        </p>
                        <CardGrid cards={projects} />
                    </section>
                    <section id="contact" className="red-background">
                        <h1>Contact</h1>
                        <p>
                            Please contact me by clicking on any of the following links.
                        </p>
                        <CardGrid active={true} cards={contacts} />
                    </section>
                </main>
            </div>
        );
    }
}
