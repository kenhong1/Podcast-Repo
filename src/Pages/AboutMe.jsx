import React, {Component} from "react"
import Footer from "../Components/Footer"
import {Row, Col, Container} from "react-bootstrap"; 


class AboutMe extends Component{
   render(){
      return(
         <div className="aboutMeBox">
            <h1 class> About Me </h1>
            <br /> 
         <Row>
            <Col>
               <h1> pictures and stuff</h1>
            </Col>
            <Col>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, expedita quia fugit, unde vero sapiente 
               laudantium aperiam neque, nihil libero temporibus possimus iure saepe. Quos beatae sit dolorem optio ullam! 
            </p>
            </Col>
         </Row> 
            <Footer /> 
         </div>
      )
   }
} 


export default AboutMe; 