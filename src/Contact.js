/* import React, { useState } from 'react'; */
import React, { useState, useEffect } from 'react';
import './Contact.css';

function Contact() {

  const [focusedInput, setFocusedInput] = useState(null);

  function handleFocus(inputName) {
    setFocusedInput(inputName);
  }

  function handleBlur() {
    setFocusedInput(null);
  }

  useEffect(() => {
    const inputs = document.querySelectorAll(".input");
    inputs.forEach((input) => {
      input.addEventListener("focus", () => handleFocus(input.name));
      input.addEventListener("blur", handleBlur);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", () => handleFocus(input.name));
        input.removeEventListener("blur", handleBlur);
      });
    };
  }, []);

  function forward()
  {
    alert(" Successfully your message is forwarded....")
  }

  return (
    <div className='Conbox'>
      <div className='connect'>
        <center><h3 className='cardName'>Wanna get in touch with me..?</h3></center>
        <div className='details'>
           <div className="Nickname2">
              <img src="./images/phone2.png" alt="" srcset="" className='size2'/>
              <p className='touch'>7094896529</p>
           </div>

           <div className="Nickname2">
              <img src="./images/email2.png" alt="" className='size2'/>
              <p className="touch">sriramkannan04@outlook.com</p>
           </div>

           <div className="Nickname2">
              <img src="./images/location2.png" alt="" className='size2'/>
              <p className="touch">Hyderabad</p>
           </div>

        </div>
      </div>


      <div className='message'>
        <center><h3 className='cardName'>Shoot me a message</h3></center>
        <div className='details'>

          <div className='Nickname'>
          
            <div className={`input-container ${focusedInput === "name" ? "focus" : ""}`}>
              <input
                  type="text"
                  name="name"
                  className="input"
                  onFocus={() => handleFocus("name")}
                  onBlur={handleBlur}
              />
              <label htmlFor="">User Name</label>
              <span>User Name</span>
            </div>
          </div>

          <div className='Nickname'>
            <div className={`input-container ${focusedInput === "phone" ? "focus" : ""}`}>
              <input
              type="number"
              name="phone"
              className="input"
              onFocus={() => handleFocus("phone")}
              onBlur={handleBlur}
              required
              />
              <label htmlFor="">Phone Number</label>
              <span>Phone Number</span>
            </div>
          </div>

          <div className='Nickname'>
            <div className={`input-container ${focusedInput === "email" ? "focus" : ""}`}>
              <input
              type="email"
              name="email"
              className="input"
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
              required
              />
              <label htmlFor="">Email Id</label>
              <span>Email Id</span>
            </div>
          </div>

          <div className="Nickname">
            <div className={`input-container textarea ${focusedInput === "message" ? "focus" : ""}`}>
              <textarea
              name="message"
              className="input"
              onFocus={() => handleFocus("message")}
              onBlur={handleBlur}
              required
              >
            </textarea>
            <label htmlFor="">Message</label>
            <span>Message</span>
            </div>
          </div>

        </div>
        
        <center><button className='submit' onClick={forward}><span></span> <span></span> <span></span> <span></span>FORWARD</button></center>

      </div>
    </div>
  )
}

export default Contact;