import React, { useState  } from 'react'
import './DashBoard.css'
import DialogBox from '../components/AppointmentDialogBox/DialogBox'

const DashBoard = () => {

   const [state, setState ] = useState ( false );
   

   const toggleState = () => {
      setState ( prev => !prev ) ;
   }
   

  return (
    <div>

      <div className="quote" >
         <h2>
            Take Care of Your Body <br />
            and it will  <br />
            take care of you. <br />
            <button className="bookAppointment" onClick={toggleState}>
               <i className='bx bx-plus'></i> Book Appointment
            </button>
            <div className={ `dialogBox ${state ? 'active' : '' }`}>
               <DialogBox toggleState={toggleState} />
            </div>

         </h2>
      </div>
    </div>
  )
}

export default DashBoard
