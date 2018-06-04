import React, { Component } from "react";
import "./main.css";
// import API from "../../utils/API";
// import { Input, FormBtn } from "../../components/Form";

import { Input, Address, Yesno, City, Statechoice, Zipcode, Regbtn } from "../../components/Form";
import { Container, Col, Row} from "../../components/Grid";
import { Nav } from "../../components/Navbar";
import { Image } from "../../components/Image";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card";





// Setting state
class Datapage extends Component {

    state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        address: '',
        city: '',
        statechoice: '',
        zipcode: '',
        treats: '',
        peanutfree: '',
        healthy: '',
        treattype: '',
        codeword: ''
    }


// Function to capture user input being entered
handleInputChange = event => {
    console.log(event.target);
    const { name, value } = event.target;
    // console.log({name, value});
    console.log([name]);
    this.setState({
        [name]: value
    })
};










    render() {
        return (
          <Container  fluid>
           <Nav />
           <Row>
               <Col size="md-2" />
            <Col size="md-8">  
            <Card>
                <form>
                First Name:<Input 
                 value={this.state.firstname}
                 type="text"
                 onChange={this.handleInputChange}
                 name="firstname" 
                 />
                Last Name: <Input
                value={this.state.lastname}
                type="text"
                onChange={this.handleInputChange}
                name="lastname" 
                 />
                Email: <Input 
                value={this.state.email}
                type="email"
                onChange={this.handleInputChange}
                name="email" />

                Password:  <Input 
                value={this.state.password}
                type="password"
                onChange={this.handleInputChange}
                name="password" />
                
               <Address 
               value={this.state.address}
               type="text"
               onChange={this.handleInputChange}
               name="address" />
               <div className="form-row">
               <City 
               value={this.state.city}
               type="text"
               onChange={this.handleInputChange}
               name="city" />
               <Statechoice 
               value={this.state.statechoice}
               type="text"
               onChange={this.handleInputChange}
               name="statechoice" 
               />
               <Zipcode 
               value={this.state.zipcode}
               type="number"
               onChange={this.handleInputChange}
               name="zipcode" />
               
                </div>
               <div>
               Will you be giving out treats?  <Yesno 
               value={this.state.treats}
               type="text"
               onChange={this.handleInputChange}
               name="treats" />  
               </div>
               <div>
               Will you have a peanut-free option? <Yesno 
               value={this.state.peanutfree}
               type="text"
               onChange={this.handleInputChange}
               name="peanutfree" />
               </div>
               <div>
               Will you have a healthy/non-edible option? <Yesno 
               value={this.state.healthy}
               type="text"
               onChange={this.handleInputChange}
               name="healthy" />
               </div>
               <div>
               What will you be giving out (if you know)? <Input
               value={this.state.treattype}
               type="text"
               onChange={this.handleInputChange}
               name="treattype" />
               </div>
               <p id="code">Trick-or-treaters who know the code word get an extra treat!</p>
               If you'd like to add a code word, do so here <Input 
               value={this.state.codeword}
               type="text"
               onChange={this.handleInputChange}
               name="codeword" />
               <input className="btn btn-warning" type="submit" value="Submit" onClick={this.handleFormSubmit } />
               </form>
               <Link to='./mappage'>
        <Regbtn />
      </Link>


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