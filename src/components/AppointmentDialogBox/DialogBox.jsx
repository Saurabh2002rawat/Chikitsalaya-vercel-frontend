import React, { useState, useEffect } from 'react'
import './DialogBox.css'
import axios from 'axios'

const DialogBox = ({toggleState}) => {

   const [ date, setDate ] = useState () ;
   const [ reason, setReason ] = useState () ;
   const [ doctor, setDoctor] = useState () ;
   const [ time, setTime] = useState () ;
   const [doctorList , setDoctorList ] = useState ([]) ;

   const user = JSON.parse(localStorage.getItem('user'));


   useEffect( () => {
      const fetchDoctors = async () => {
         try {
            const res = await axios.get('http://localhost:3001/doctors');
            setDoctorList( res.data ) ;
         }catch ( err ) {
            // alert ( 'Failed to fetch doctors ') ;
            console.log ( err ) ;
         }
      } ;
      fetchDoctors () ;
   } , [] ) ;


   const handleBook = async( e) => {
      e.preventDefault () ;

      try {
         const res = await axios.post( 'http://localhost:3001/bookAppointment', {
            name:user.name, email:user.email, date, time, reason, doctor }) ;
         if ( res.data === 'success') {
            alert ("Appointment Booked successfully ")
         }
         else {
            alert ("Appointment Can't be Booked ")
         }
      } catch (err) {
         alert ( err ) ;
      }
   }

  return (
    <div className="ddBox">
      <div className="ddTitle">
         <p>Book Appointment</p>
         <i className="fa-solid fa-rectangle-xmark" onClick={toggleState}></i>
      </div>
      <form className="ddForm"  onSubmit={handleBook}>
           <p>  Select Doctor 
         <select className="ddInput"  onChange={ (e) => setDoctor(e.target.value)} required >
            <option value="">Select Doctor</option>
            {doctorList.map( (doc, index) => (
               <option key={index} value={doc.name}>{doc.name}</option>
            ))}
         </select></p> 
         <p> Select Reason 
            <input type="text" className="ddInput"  onChange={ (e) => setReason(e.target.value)} required/>
            </p> 
          <p> Select Date 
            <input type="date" className="ddInput" onChange={ (e) => setDate(e.target.value)} required/>
            </p> 
           <p> Select Time Slot 
         <select className="ddInput" onChange={ (e) => setTime(e.target.value)} required >
            <option>9:00</option>
            <option>10:00</option>
            <option>11:00</option>
            <option>12:00</option>
            <option>13:00</option>
            <option>14:00</option>

         </select></p>
         <button type="submit" className="ddBtn">Book Appointment</button>
      </form>
    </div>
  )
}

export default DialogBox
