import React, { Component } from "react";
import "./update.css";
import API from "../../utils/API";
import { Input, Yesno, City, Statechoice, Zipcode, Regbtn } from "../../components/Form";
import { Container, Col, Row} from "../../components/Grid";
import { Nav } from "../../components/Navbar";
import { Image, ImageS } from "../../components/Image";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card";





// Setting state
class Updatepage extends Component {

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
   let userfirstname = firstname;
   console.log(userfirstname);

    API.updateuser(userfirstname, userdata).then(results => window.location.assign("/mappage?username=" + results.data.firstname))
    



.catch(err => console.log(err));    
}


componentWillMount() {
    this.loaduser();
}

loaduser() {
let url = window.location.search;
let usernm = '';
if (url.indexOf("?username=") !== -1) {
    usernm = url.split("=")[1]
    console.log("usernm" + usernm)
  
API.getuserdata(usernm).then(results => {this.setState({
    firstname: results.data.firstname,
    // lastname: results.data.lastname,
        email: results.data.email,
        password: results.data.password,
        address: results.data.address,
        city: results.data.city,
        statechoice: results.data.statechoice,
        zipcode: results.data.zipcode,
        treats: results.data.treats,
        peanutfree: results.data.peanutfree,
        healthy: results.data.healthy,
        treattype: results.data.treattype,
        codeword: results.data.codeword
})})

}

else {console.log("nothing")}
}


    render() {
        return (
          <Container  fluid>
           <Nav />
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
               <input className="btn btn-warning shadow p-3 mb-5 rounded" type="submit" value="Submit" onClick={this.handleFormSubmit } />
               </form>
              


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
                
            
            
    
            export default Updatepage;