import React from 'react';
import netflix from "../images/netflix.png";
import cityGuide from "../images/city-guide-app.png";
import portfolio from "../images/portfolio.png";
import taskManager from "../images/task-manager.png";
// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';




const Portfolio = () => {
    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={netflix} alt="netflix" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portgolio=icon" icon={faSearchPlus} />
                    </div>

                    {/*  */}

                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={portfolio} alt="portfolio" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portgolio=icon" icon={faSearchPlus} />
                    </div>

                    {/*  */}

                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={cityGuide} alt="cityguide" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portgolio=icon" icon={faSearchPlus} />
                    </div>

                    {/*  */}

                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={taskManager} alt="taskmanager" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portgolio=icon" icon={faSearchPlus} />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Portfolio
