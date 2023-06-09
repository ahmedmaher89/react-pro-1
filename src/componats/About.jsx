import React from 'react'

const About = () => {
  return (
    <section>
    <div class="about" id="about">
        <div class="container">
            <h2 class="special-heading">About</h2>
            <p>Less is more work</p>
            <div class="about-content">
            <div class="image">
                <img decoding="async" src="/imgs/about.jpg" alt="" />
            </div>
            <div class="text">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nemo neque voluptate tempora velit cum non,
                fuga vitae architecto delectus sed maxime rerum impedit aliquam obcaecati, aut excepturi iusto laudantium!
                </p>
                <hr/>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, sapiente. Velit iure exercitationem
                dolores nesciunt dolore. Eum officiis dolorum hic voluptate quaerat minima, similique inventore esse,
                alias, sed quo officia?
                </p>
            </div>
            </div>
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
    <div class="footer">
        &copy; 2023 <span>Leon</span> 
        All Right Reserved
    </div>
    </section>
  )
}

export default About
