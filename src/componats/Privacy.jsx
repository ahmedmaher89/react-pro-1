import React from 'react'

const Privacy = () => {
  return (
  <section>
    <div class="services about" id="services">
        <div class="container">
            <h2 class="special-heading">Services</h2>
            <p>Don't be busy, be productive</p>
        <div class="services-content serv">
        <div class="col">
            <div class="srv">
                <i class="fas fa-palette fa-2x"></i>
                <div class="text">
                    <h3>Graphic Design</h3>
                    <p>
                    Graphic design is the process of visual communication and problem-solving using one or more of
                    typography, photography and illustration.
                    </p>
                </div>
            </div>
            <div class="srv">
                <i class="fab fa-sketch fa-2x"></i>
                <div class="text">
                    <h3>UI & UX</h3>
                    <p>
                    Process of enhancing user satisfaction with a product by improving the usability, accessibility, and
                    pleasure provided in the interaction.
                    </p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="srv">
                <i class="fas fa-vector-square fa-2x"></i>
                <div class="text">
                <h3>Web Design</h3>
                <p>
                    Web design encompasses many different skills and disciplines in the production and maintenance of
                    websites.
                </p>
                </div>
            </div>
            <div class="srv">
                <i class="fas fa-pencil-ruler fa-2x"></i>
                <div class="text">
                <h3>Web Development</h3>
                <p>
                    Web development is a broad term for the work involved in developing a web site for the Internet or an
                    intranet.
                </p>
                </div>
            </div>
            </div>
            <div class="col">
                <div class="image image-column">
                    <img decoding="async" src="/imgs/services.jpg" alt="" />
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

export default Privacy