import React from 'react';
import author from '../my.jpg';

const About = () => {
    return (
        <div className="container py-5">
        <div className="row">
            <div className="col-lg-6 col-xm-12">
                <div className="photo-wrap mb-5">
                <img className="profile-img" src={author} alt="amanpreet" />
                </div>
            </div>
            <div className="col-lg-6 col-xm-12">
            <h1 className="about-heading">About Me</h1>
                <p>
                I'm the Web Developer for StrikeOutStroke in Melbourne. I have serious passion for coding, designing and creating intuitive, dynamic user experiences.
                I loves programming, writing, speaking and traveling. I am the founder of Websoles, Web Development Company. I am Graduated from La Trobe University, Australia.
                My career has taken a natural progression from client websites, to template clubs, to UI templates, to UX design, to complex analytical UX design.
                As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact at a high growth company.

I enjoy turning complex problems into simple, beautiful and intuitive designs. When I'm not coding, tweeting or pushing pixels, you'll find me travelling, gaming or watching action movies.
                </p>
            </div>
        </div>
            
        </div>
    )
}

export default About
