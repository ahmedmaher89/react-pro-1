import React from 'react'

const Contact = () => {
  return (
  <section>
    <div class="contact ">
      <div class="container con1">
            <h2 class="special-heading">Contact</h2>
            <p>We are born to create</p>
      </div>
      <div className='formsec'>
      <form class="form">
        <label>
              <input required="" placeholder="" type="text" class="input" />
              <span>Name</span>
        </label>
        <label>
            <input required="" placeholder="" type="email" class="input" />
            <span>email</span>
        </label> 
        <label>
            <input required="" type="tel" placeholder="" class="input" />
            <span>contact number</span>
        </label>
        <label>
            <textarea required="" rows="3" placeholder="" class="input01"></textarea>
            <span>message</span>
        </label>
        <button class="fancy" href="#">
          <span class="top-key"></span>
          <span class="text">submit</span>
          <span class="bottom-key-1"></span>
          <span class="bottom-key-2"></span>
        </button>
      </form>
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

export default Contact
