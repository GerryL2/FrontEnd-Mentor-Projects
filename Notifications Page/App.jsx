import { useState } from 'react'
import './App.css'
import Mark from "./images/avatar-mark-webber.webp"
import Angela from "./images/avatar-angela-gray.webp"
import Jacob from "./images/avatar-jacob-thompson.webp"
import Rizky from "./images/avatar-rizky-hasanuddin.webp"
import Kimberly from "./images/avatar-kimberly-smith.webp"
import Nathan from "./images/avatar-nathan-peterson.webp"
import Anna from "./images/avatar-anna-kim.webp"
import Chess from "./images/chess.webp"



function App() {
  const [read, setRead] = useState(true)

  function markRead() {
    setRead(prevState => !prevState)
    console.log("clicked")
  }


  document.body.className = 'bg-Very-light-grayish-blue'

  return (
    <div className='wrapper bg-White rounded-xl max-w-2xl max-h-fit mx-auto mt-12 p-5'>
      <header className='flex mb-5 justify-between'>
        <div className='flex gap-4 items-center'>
          <h1 className="font-bold text-lg ">Notifications</h1>
          <p className='three bg-Blue text-White px-3 py-0 rounded-md font-medium'>{read ? "3" : "0"}</p>
        </div>
        <p onClick={markRead} className='hover:text-Blue text-Dark-grayish-blue cursor-pointer font-500 text-sm'>Mark all as read</p>
      </header>
      <div className="notifications ">
        <div className='flex gap-5 my-2 bg-Very-light-grayish-blue p-4 text-sm'>
          <img src={Mark} alt="Mark avatar" className='w-9 h-9 cursor-pointer'/>
          <div>
            <p className='text-Dark-grayish-blue flex gap-1 flex-wrap'><span className='font-bold text-Very-dark-blue hover:text-Blue cursor-pointer'>Mark Webber </span> reacted to your recent post <span className='font-bold text-Dark-grayish-blue cursor-pointer hover:text-Blue'>My first tournament today!</span><span className={`new scale-50 ${read ? '' : 'hidden'}`}>🔴</span></p>
            <p className='text-Dark-grayish-blue'>1m ago</p>
          </div>
        </div>
        <div className='flex gap-5 my-2 bg-Very-light-grayish-blue p-4 text-sm'>
          <img src={Angela} alt="Angela Avatar" className='w-9 h-9 cursor-pointer'/>
          <div >
            <p className='text-Dark-grayish-blue flex gap-1 flex-wrap'><span className='font-bold text-Very-dark-blue hover:text-Blue cursor-pointer'>Angela Gray</span> followed you <span className={`new scale-50 ${read ? '' : 'hidden'}`}>🔴</span></p>
            <p className='inline-block text-Dark-grayish-blue'>5m ago</p>
          </div>
        </div>
        <div className='flex gap-5 my-2 bg-Very-light-grayish-blue p-4 text-sm'>
          <img src={Jacob} alt="Jacob Avatar" className='w-9 h-9  cursor-pointer'/>
          <div>
            <p className='text-Dark-grayish-blue flex gap-1 flex-wrap'><span className='font-bold text-Very-dark-blue hover:text-Blue cursor-pointer'>Jacob Thompson</span> has joined your group <span className='font-bold text-Blue cursor-pointer'>Chess Club</span><span className={`new scale-50 ${read ? '' : 'hidden'}`}>🔴</span></p>
            <p className='inline-block text-Dark-grayish-blue'>1 day ago</p>
          </div>
        </div>
        <div className='flex gap-5 my-3 text-sm'>
          <img src={Rizky} alt="Rizky Avatar" className='w-9 h-9 ml-3 cursor-pointer'/>
          <div>
            <p className='text-Dark-grayish-blue'><span className='font-bold text-black cursor-pointer hover:text-Blue'>Rizky Hasanudin</span> sent you a private message</p>
            <p className='inline-block text-Dark-grayish-blue mb-4'>5 days ago</p>
            <div className='border border-Dark-grayish-blue p-4 rounded-md hover:bg-Very-light-grayish-blue cursor-pointer'>
              <p className='text-Dark-grayish-blue'>
                Hello, thanks for setting up the Chess Club. I've been a member for a 
                few weeks now and I'm already having lots of fun and improving my 
                game.
              </p>
            </div>
          </div>
        </div>
        <div className='flex gap-5 my-5 text-sm'>
          <img src={Kimberly} alt="Kimberly Avatar" className='w-9 h-9 cursor-pointer'/>
          <div className='mr-auto'>
            <p className='text-Dark-grayish-blue'><span className='text-Very-dark-blue font-bold cursor-pointer hover:text-Blue'>Kimberly Smith </span>commented on your picture</p>
            <p className='inline-block text-Dark-grayish-blue'>1 week ago</p>
          </div>
          <img src={Chess} alt="Chess image" className='w-9 h-9 cursor-pointer'/>
        </div>
        <div className='flex gap-5 my-5 text-sm'>
          <img src={Nathan} alt="Nathan Avatar" className='w-9 h-9 cursor-pointer'/>
          <div>
            <p className='text-Dark-grayish-blue'><span className='text-Very-dark-blue font-bold cursor-pointer hover:text-Blue'>Nathan Peterson</span> reacted to your recent post <span className='font-bold hover:text-Blue cursor-pointer'>5 end-game strategies to increase your win rate</span></p>
            <p className='text-Dark-grayish-blue'>2 weeks ago</p>
          </div>
        </div>
        <div className='flex gap-5 my-5 text-sm'>
          <img src={Anna} alt="Anna Avatar" className='w-9 h-9 cursor-pointer'/>
          <div>
            <p className='text-Dark-grayish-blue'><span className='font-bold text-Very-dark-blue cursor-pointer hover:text-Blue'>Anna Kim </span>left the gorup <span className='font-bold cursor-pointer text-Dark-grayish-blue hover:text-Blue'>Chess Club</span></p>
            <p className='text-Dark-grayish-blue'>2 weeks ago</p>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default App
