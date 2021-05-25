import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">my services</h1>
                <div className="container">
                    <div className="row">   
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/></div>

                                <h3>Web Design</h3>
                                <p>My career has taken a natural progression from client websites, to template clubs, to UI templates, to UX design, to complex analytical UX design.</p>
                            </div>
                        </div>
                        {/*  */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFacebookF} size="2x"/></div>
                                <h3>Web Development</h3>
                                <p>Fast load times and lag free interaction, my highest priority.</p>
                            </div>
                        </div>
                        {/*  */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/></div>
                                <h3>Social Media Markeing</h3>
                                <p>My layouts will work on any device, big or small. Websites don't have to be , I love making pages come to life.</p>
                            </div>
                        </div>
                        {/*  */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faGoogle} size="2x"/></div>
                                <h3>Google Ads</h3>
                                <p>Strong preference for easy to use, intuitive UX/UI.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
    )
}

export default Services
