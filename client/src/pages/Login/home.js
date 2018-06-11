// Imports
import React, { Component } from "react";
// import API from "../../utils/API";
// import { Input, FormBtn } from "../../components/Form";
import { Card, Header } from "../../components/Card";
import { Regbtn, Input } from "../../components/Form";
import { Container, Col, Row} from "../../components/Grid";
import {  Navlogin } from "../../components/Navbar";
import { Image } from "../../components/Image";
import { Link } from "react-router-dom";


import "./pages.css";

// Setting state
class Login extends Component {
    state = {
       firstname: '',
       password: ''
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

handleFormSubmit = event => {
    event.preventDefault();

    let user = this.state.firstname;
    // let password = this.state.password;
        // password: password
    
    console.log(user);

window.location.assign("/mappage?username=" + user);
    // API.retrieveuser(user).then(results => {
    //     console.log(results)
        // window.location.assign("/mappage?username=" + results.data.firstname);
    // })
    // .catch(err => console.log(err));    
}


// Rendering the page
render() {
    return (
      <Container  fluid>
        <Navlogin />
          <Row>
            <Col size="md-1" />
            <Col size="md-10">
            <Header />
            </Col>
            <Col size="md-1" />
          </Row>
          <Row>
           <Col size="md-3" />
           <Col size="md-6">    
             <Card>
                <form ref="form" onSubmit={this.handlesubmit }>
                 Username:<Input 
                    value={this.state.firstname}
                    type="text"
                    onChange={this.handleInputChange}
                    name="firstname" 
                 />
                 Password:  <Input 
                 value={this.state.password}
                 type="password"
                 onChange={this.handleInputChange}
                 name="password" />
               
                <input className="btn-sm btn-warning shadow p-3 mb-5 rounded" type="submit" value="Login" onClick={this.handleFormSubmit } />
                
                </form>
             </Card>
        <Link to='./datapage'>
           <Regbtn />
        </Link>
        <Link to='./mapview'>
          <input className="btn-lg btn-warning"  type="submit" value="View The Map" />
        </Link>
        </Col>
        <Col size="md-3" />
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

        export default Login;
            

