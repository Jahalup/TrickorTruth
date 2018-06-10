import React, { Component } from "react";
import "./main.css";
import API from "../../utils/API";
// import { Input, FormBtn } from "../../components/Form";
// import { geocodeByAddress } from 'react-places-autocomplete';
import { Input, Yesno, City, Statechoice, Zipcode, Regbtn } from "../../components/Form";
import { Container, Col, Row} from "../../components/Grid";
import { Navlogin } from "../../components/Navbar";
import { Image, ImageS } from "../../components/Image";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card";



// Setting state
class Datapage extends Component {

    state = {
        firstname: '',
        // lastname: '',
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

handleFormSubmit = event => {
    event.preventDefault();
    let firstname = this.state.firstname;
    // let lastname = this.state.lastname;
    let email = this.state.email;
    let password = this.state.password;
    let address = this.state.address;
    let city = this.state.city;
    let statechoice = this.state.statechoice;
    let zipcode = this.state.zipcode;
    let treats = this.state.treats;
    let peanutfree = this.state.peanutfree;
    let healthy = this.state.healthy;
    let treattype = this.state.treattype;
    let codeword = this.state.codeword;
    
    let fulladdress = address + ' ' + city + ' ' + statechoice + ' ' + zipcode
//    geocodeByAddress(fulladdress).then(results => latitude = results[0].geometry.location.lat()).then(console.log("latitude " + latitude))
    console.log("fulladdress: " + fulladdress);
   

    // (results => console.log(results[0].geometry.location.lat() + "and" + results[0].geometry.location.lng() ) )

    // let { topic, startyear, endyear } = this.state;
    // let userdata = { firstname, lastname, email, password, address, city }
   let userdata = {
    firstname: firstname,
    // lastname: lastname,
    email: email,
    password: password,
    // address:address,
    // city: city,
    // statechoice: statechoice,
    zipcode: zipcode,
    fulladdress: fulladdress,
    treats: treats,
    peanutfree: peanutfree,
    healthy: healthy,
    treattype: treattype,
    codeword: codeword
    
   }
    console.log(userdata);
    console.log(this.state);
    API.saveUserData(userdata).then(results => {
        console.log(results);
        window.location.assign("/mappage?username=" + results.data.firstname);


    })
    .catch(err => console.log(err));    
}


    // this.getnewarts(query)



    render() {
        return (
          <Container  fluid>
           <Navlogin />
           <Row>
               <Col size="md-12">
               <h2 id="formheader">Register Your Address</h2>
               </Col>
               </Row>
           <Row>
               <Col size="md-2">
               <ImageS />
               </Col>
            <Col size="md-8">  
            <Card>
                <form ref="form" onSubmit={this.handlesubmit }>
                Username:<Input 
                 value={this.state.firstname}
                 type="text"
                 onChange={this.handleInputChange}
                 name="firstname" 
                 />
                {/* Last Name: <Input
                value={this.state.lastname}
                type="text"
                onChange={this.handleInputChange}
                name="lastname" 
                 /> */}
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
                
               Address:  <Input 
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
               
             
               <Yesno 
               label="Will you be giving out treats?"
               value={this.state.treats}
               type="text"
               onChange={this.handleInputChange}
               name="treats" /> 
              
               </div>
           
               
               <div>
               
              
              
              
                <Yesno 
                label="Will you have a peanut-free option?"
               value={this.state.peanutfree}
               type="text"
               onChange={this.handleInputChange}
               name="peanutfree" />
           
               </div>



               <div>
             <Yesno 
             label="Will you have a healthy/non-edible option?"
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
               <p id="codetitle">If you'd like to add a code word, do so here</p> <Input 
               value={this.state.codeword}
               type="text"
               onChange={this.handleInputChange}
               name="codeword" />
               <input className="btn-lg btn-warning " type="submit" value="Submit" onClick={this.handleFormSubmit } />
               
               </form>
               {/* <Link to='./mappage' params={{firstname: this.state.firstname}}>
        <Regbtn />
      </Link> */}


            </Card>  
           
         
          
            </Col>
            <Col size="md-2">
           
            </Col>
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