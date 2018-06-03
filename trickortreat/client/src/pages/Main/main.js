import React, { Component } from "react";
import "./main.css";
// import API from "../../utils/API";
// import { Input, FormBtn } from "../../components/Form";

import { Form, Regbtn, Input, Address, Yesno } from "../../components/Form";
import { Container, Col, Row} from "../../components/Grid";
import { Nav } from "../../components/Navbar";
import { Image } from "../../components/Image";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card";



// import "./pages.css";

// Setting state
class Datapage extends Component {

    render() {
        return (
          <Container  fluid>
           <Nav />
           <Row>
               <Col size="md-2" />
            <Col size="md-8">  
            <Card>
                <form>
                First Name:<Input />
                Last Name: <Input />
                Email: <Input />
               <Address />
               <div>
               Will you be giving out treats?  <Yesno />  
               </div>
               <div>
               Will you have a peanut-free option? <Yesno />
               </div>
               <div>
               Will you have a healthy/non-edible option? <Yesno />
               </div>
               <div>
               What will you be giving out (if you know)? <Input/>
               </div>
               <p id="code">Trick-or-treaters who know the code word get an extra treat!</p>
               If you'd like to add a code word, do so here <Input />
               <input class="btn btn-warning" type="submit" value="Submit" />
               </form>



            </Card>  
           
         
          
            </Col>
            <Col size="md-2" />
            </Row>
            <Row >
    
                <Col size="md-12">  
               <Image />
                </Col> 
               
               
                </Row>
           
    
           </Container>
       
               
           
            
                );
            }
                
            }
            
    
            export default Datapage;