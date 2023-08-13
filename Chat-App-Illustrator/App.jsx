import './App.scss'
import Left from "./images/left.png"
import Dots from "./images/dots.png"
import Avatar from "./images/avatar.jpg"
import DogOne from "./images/dog-image-1.jpg"
import DogTwo from "./images/dog-image-2.jpg"
import DogThree from "./images/dog-image-3.jpg"

function App() {

  return (
    <div className='wrapper'>
      <div className='purple-background'></div>
      <div className='gray-background'></div>
      <div className='phone-booking-container'>
        <div className='phone--container'>
          <div className='phone-header'>
            <div className='phone-top-bar'></div>
            <div className='phone-items'>
              <img src={Left} alt="left arrow" className='arrow'/>
              <div className='phone-avatar'>
                <img src={Avatar} alt="avatar image" />
                <div className='avatar-heading'>
                  <h3 className='fade-in'>Samuel Green</h3>
                  <p className='fade-in'>Avaliable to Walk</p>
                </div>
              </div>
              <img src={Dots} alt="Three dots" className='dots' />
            </div>
          </div>
          <div className='phone-messages'>
              <div className='sam'>
                <p className='fade-in'>
                  That sounds great, I'd be happy with that.
                </p>
              </div>
              <div className='sam'>
                <p className='fade-in'>
                  Could you send over some pictures of your dog, please?
                </p>
              </div>
              <div className='dogs'>
                <img src={DogOne} alt="" />
                <img src={DogTwo} alt="" />
                <img src={DogThree} alt="" />
              </div>
              <div className='user'>
                <p className='fade-in'>Here are a few pictures. She's a happy girl!!</p>
              </div>
              <div className='user make'>
                <p className='fade-in'>Can you make it?</p>
              </div>
              <div className='sam'>
                <p className='fade-in'>She's looks so happy! The time we discussed works.
                  How long shall I take her out for?
                </p>
              </div>
              <div className='walk'>
                <div>
                  <input type="radio"
                  name='time'
                  className='styled-radio'
                  />
                  <label htmlFor="time" className='fade-in'>30 minute walk</label>
                </div>
                <p className='price fade-in'>$29</p>
              </div>
              <div className='walk'>
                <div>
                  <input type="radio" 
                  name='time'
                  className='styled-radio'
                  />
                  <label htmlFor="time" className='fade-in'>1 hour walk</label>
                </div>
                <p className='price fade-in' >$49</p>
              </div>
              <div className='send-message'> 
                <input type="text" 
                placeholder='Type a message...'
                />
                <svg className='submit-button' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'hsl(271, 36%, 24%)', transform: '', msFilter: '' }}>
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.293 15.707-1.414-1.414L13.586 12 9.293 7.707l1.414-1.414L16.414 12l-5.707 5.707z"></path>
                </svg>
              </div>
          </div>
        </div>
        <div className='booking'>
          <h1>Simple booking</h1>
          <p>
            Stay in touch with our dog walkers through the chat
            interface. This makes it easy to discuss arrangements and
            make bookings. Once the walk has been completed you can
            rate your walker and book again all through the chat.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
