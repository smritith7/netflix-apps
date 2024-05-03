import React from "react";
import { useState } from "react";
import "./homepage.css";



export default function Homepage() {
    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return (
        <div className="landing_page">

            <div className="home-page-bg">
                <header className="header">
                    <img src="./assets/images/netflix.svg" className="netflix_logo" alt="logo" />
                    <button type="submit" class="signup-button">Sign Up</button>
                </header>
                <div className="homg-first-bg">
                    <img src="./assets/images/bg-img.jpg" className="home-bg-image" alt="" />
                    <div className="bg-opacity"></div>
                </div>

                <div className="home-title-div">
                    <div className="home-content-text">
                        <h1 className="home-title-text">Unlimited movies, TV shows, and more</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    </div>
                </div>
                <div className="form-div">
                    <form class="signu--form row g-3">
                        <div class="col-auto">
                            <input type="text" class="form-control-plaintext" placeholder="Email Address" ></input>
                        </div>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-primary mb-3">Get Started</button>
                        </div>
                    </form>

                </div>
            </div>

            <div className="second-section">
                <div className="second-section-container">
                    <div className="second-section-text">
                        <h1>Enjoy on your TV</h1>
                        <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    </div>
                    <div className="second-section-img">
                        <img src="./assets/images/tv.png" alt="" />
                        <div class="video-container">
                <video controls autoplay loop>
                    <source src="./assets/images/Netflix-intro.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
                        
                    </div>
                </div>
            </div>

            <div className="bg-seperator">
            </div>

            <div className="third-section">
                <div className="third-section-container">
                    <div className="third-section-text">
                        <h1>Download your shows to watch offline</h1>
                        <p>Save your favorites easily and always have something to watch.</p>
                    </div>
                    <div className="third-section-img">
                        <img src="./assets/images/mobile.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="bg-seperator">
            </div>

            <div className="fourth-section">
                <div className="fourth-section-container">
                    <div className="fourth-section-text">
                        <h1>Watch everywhere</h1>
                        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                </div>
            </div>

            <div className="bg-seperator">
            </div>
            <div className="fifth-section">
                <div className="fifth-section-container">
                    <div className="fifth-section-text">
                        <h1>Create profiles for kids</h1>
                        <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                    </div>
                    <div className="fifth-section-img">
                        <img src="./assets/images/picture12.png" alt="" />
                    </div>
                </div>
            </div>


            <div className="bg-seperator">
            </div>

            <div className="faq-section">
                <div className="faq-title">
                    <h3>Frequently Asked Questions</h3>
                </div>
                <div className="wrapper">
                    <div className="accordion">
                        {data.map((item, i) => (
                            <div className="item">
                                <div className="title" onClick={() => toggle(i)}>
                                    <h2>{item.question}</h2>
                                    <span>{selected === i ? '-' : '+'}</span>
                                </div>
                                <div className={selected === i ? 'content show' : 'content'}>
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
                <div className="form-div">
                    <p>Ready to watch? Enter your email or mobile number to create or restart your membership. </p>
                    <form class="signu-form row g-4">
                        <div class="col-auto">
                            <input type="text" class="form-control-plaintext" placeholder="Email Address" ></input>
                        </div>
                        <div class="col--auto">
                            <button type="submit" class="btn btn-primary mb-3">Get Started</button>
                        </div>
                    </form>

                </div>
            </div>

            <div className="bg-seperator">
            </div>

            <footer className="footer-section">
                <div className="footer-container">
                    <h2>Questions? Contact us.</h2>
                    <div className="footer-links">

                        <div className="first-row menu-footer">

                            <ul>
                                <li><a href="">FAQ</a></li>
                                <li><a href="">Help Center</a></li>
                                <li><a href="">Account</a></li>
                            </ul>
                        </div>
                        <div className="second-row menu-footer">
                            <ul>
                                <li><a href="">FAQ</a></li>
                                <li><a href="">Help Center</a></li>
                                <li><a href="">Account</a></li>
                            </ul>
                        </div>
                        <div className="third-row menu-footer">
                            <ul>
                                <li><a href="">FAQ</a></li>
                                <li><a href="">Help Center</a></li>
                                <li><a href="">Account</a></li>
                            </ul>
                        </div>
                        <div className="fourth-row menu-footer">
                            <ul>
                                <li><a href="">FAQ</a></li>
                                <li><a href="">Help Center</a></li>
                                <li><a href="">Account</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p> Netflix, Nepal</p>
                </div>
            </footer>

        </div>

    );


}


const data = [
    {
        question: 'What is Netflix?',
        answer:
            'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. It has become one of the leading streaming platforms globally, shaping the way people consume entertainment in the digital age. ',

    },
    {
        question: 'How much does Netflix costs?',
        answer:
            'aWatch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 2.99 to USD 9.99 a month. No extra costs, no contracts.',


    },
    {
        question: 'Where can I watch?',
        answer:
            'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.',


    },
    {
        question: 'How do i cancel?',
        answer:
            'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees-start or stop your account anytime.',


    },

]
