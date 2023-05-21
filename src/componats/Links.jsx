import React from 'react'


import { BrowserRouter , Router , Route , Routes , Link , NavLink } from 'react-router-dom'

const Links = () => {
  return (
    <section>
    <div class="landing">
        <div class="intro-text">
            <h1>Hello There</h1>
            <p>We are Leon - Super Creative &amp; Minimal Agency Web Template</p>
        </div>
    </div>
    <div class="features">
        <div class="container">
          <div class="feat">
            <i classn="fas fa-magic fa-3x"></i>
            <h3>Tell Us Your Idea</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab</p>
          </div>
          <div class="feat">
            <i class="far fa-gem fa-3x"></i>
            <h3>We Will Do All The Work</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab</p>
          </div>
          <div class="feat">
            <i class="fas fa-globe-asia fa-3x"></i>
            <h3>Your Product is Worldwide</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab</p>
          </div>
        </div>
    </div>
    <div class="portfolio" id="portfolio">
        <div class="container">
            <h2 class="special-heading">Portfolio</h2>
            <p>If you do it right, it will last forever.</p>
        <div class="portfolio-content">
            <div class="card">
                <img decoding="async" src="imgs/portfolio-1.jpg" alt="" />
            <div class="info">
                <h3>Project Here</h3>
                <p>My creative ability is very difficult to measure because it can manifest in so many surprising and.</p>
            </div>
            </div>
            <div class="card">
                <img decoding="async" src="imgs/portfolio-2.jpg" alt="" />
            <div class="info">
                <h3>Project Here</h3>
                <p>My creative ability is very difficult to measure because it can manifest in so many surprising and.</p>
            </div>
            </div>
            <div class="card">
                <img decoding="async" src="imgs/portfolio-3.jpg" alt="" />
            <div class="info">
                <h3>Project Here</h3>
                <p>My creative ability is very difficult to measure because it can manifest in so many surprising and.</p>
            </div>
            </div>
        </div>
        </div>
    </div>
    <div class="contact" id="contact">
        <div class="container">
            <h2 class="special-heading">Contact</h2>
            <p>We are born to create</p>
            <div class="info">
            <p class="label">Feel free to drop us a line at:</p>
            <a href="mailto:leonagency@mail.com?subject=Contact" class="link">leonagency@mail.com</a>
            <div class="social">
                Find Us On Social Networks
                <i class="fab fa-youtube"></i>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
            </div>
            </div>
        </div>
    </div>
    <div class="footer">
        &copy; 2023 <span>Leon</span> 
        All Right Reserved
    </div>
    </section>
  )
}

export default Links
