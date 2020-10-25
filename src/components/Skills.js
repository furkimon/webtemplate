import React from 'react'
import '../styles/Skills.css'
import { Card } from '../components'
import { amazon, tinder, airbnb, covid } from '../images'


const Skills = () => {
    const projectCards = [
        {
            image: amazon,
            url: "https://clone-a6171.web.app/",
            title: "Amazon Clone",
            description: "This clone project includes authentication, adding or removing items to basket; in addition to its looks. You can sign up, and sign in & out anytime you like."
        },
        {
            image: tinder,
            url: "https://furkans-tinder.web.app/",
            title: "Tinder Clone",
            description: "Another Clone project, for looks. You can swipe right and left and change the pictures on the list. You can go into messages and experience messaging"
        },
        {
            image: airbnb,
            url: "https://furkans-airbnb.web.app/",
            title: "Airbnb Clone",
            description: "With great looking card components and Explore Nearby, a clone project"
        },
        {
            image: covid,
            url: "https://furkanscovid19app.web.app/",
            title: "Covid-19 Current Numbers",
            description: "This project includes an API for current numbers of Infected, Recovered and Deaths. Visualized the numbers with cards and charts. You can see global info or pick any country to see a chart"
        }
    ]

    const showProjectCards = () => {
        projectCards.map((project, i) => {
            return (
                <Card
                    key={i}
                    frontTitle={project.title}
                    backTitle={project.title}
                    backText={project.description}
                    backFooter={project.url}
                />
            )
        })
    }

    return (
        <div className="skills__container" id="expertise">
            <div className="cards">
                <Card
                    frontTitle={"Web development"}
                    backTitle={"Skillset"}
                    backText={['HTML5', 'CSS3', 'Javascript', 'ReactJS']}
                    backFooter={"Hello World!"}
                />
                {showProjectCards()}
            </div>
        </div>
    )
}

export default Skills


