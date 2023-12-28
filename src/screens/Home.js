import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'


export default function Home() {
  return (<>
    <div> <Navbar/> </div>
    <div> 
    <div className ="card mt-3" style ={{"width": "18rem" , "maxHeight" : "300px"} }>
  <img src="..." className ="card-img-top" alt="..."/>
  <div className ="card-body">
    <h5 className ="card-title">Card title</h5>
    <p className ="card-text">Some quick example </p>
  
  </div>
</div>
    </div>
    <div> <Footer/> </div>
    </>
  )
}
