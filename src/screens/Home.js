import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Card from '../component/Card'
import Carousal from '../component/Carousal'


export default function Home() {
    return (<>
        <div> <Navbar /> </div>
        <div> <Carousal/> </div>
        <div className='m-3 d-flex justify-content-evenly flex-4' 
        > 
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        <div className='m-3 d-flex justify-content-evenly flex-4' >
        <Card/>
        <Card/>
        <Card/>
        
        <Card/>
        
        

         </div>


        <div> <Footer /> </div>
    </>
    )
}
