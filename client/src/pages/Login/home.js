// Imports
import React, { Component } from "react";

import API from "../../utils/API";
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



// // Function to capture user input being entered
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


// // Submit button pressed
// handleFormSubmit = event => {
//     event.preventDefault();
//     let topic = this.state.topic;
//     let startyear = this.state.startyear;
//     let endyear = this.state.endyear;
//     // let { topic, startyear, endyear } = this.state;
//     let query = { topic, startyear, endyear}
//     console.log(query);
//     console.log(this.state);
//     this.getnewarts(query)

// }


// // Retrieving new articles from the NYT API
// getnewarts = query => {
//     if(query.topic !== this.state.previousSearch.topic ||
//         query.startyear !== this.state.previousSearch.stargt    ||
//         query.endyear !== this.state.previousSearch.endyear
//     ) {
//         this.setState({results: []})
//     }


// console.log(this.state.topic);
// // Setting state variables
// let topic = this.state.topic;
// let startyear = this.state.startyear;
// console.log (startyear);
// let endyear = this.state.endyear;

//     let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&h1=true&page=0"
//     let key = "&api-key=ceaf7dab037f4a1a881beed337e40156"
    
//     // Creating the query url
//     if (topic.indexOf(' ') >= 0) {
//         topic = topic.replace(/\s/g, '+');
//     }
//      if (topic) {
//          url += `&fq=${topic}`
//      }
//      if (startyear) {
//          url += `&begin_date=${startyear}`
//      }
//      if (endyear) {
//          url += `&end_date=${endyear}`
//      }
 
//      url+=key;
//      console.log(url);

//      API.queryNYT(url).then(results => {
//          this.setState({
//              results: [...results.data.response.docs],
//              previousSearch: query,
//              topic: '',
//              startyear: '',
//              endyear: ''
//          }, function() {
//              this.state.results.length === 0 ? this.setState({noResults: true}):this.setState({noResults: false})
//          })
//          console.log(this.state.results);
         
//      })
//      .catch(err => console.log(err))
// }




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
                {/* <div style={{textAlign:"center"}}> */}
                <input className="btn-sm btn-warning shadow p-3 mb-5 rounded" type="submit" value="Login" onClick={this.handleFormSubmit } />
                {/* </div> */}
          </form>
        </Card>
        <Link to='./datapage'>
        <Regbtn />
      </Link>
      <Link to='./mapview'>
               <input className="btn-lg btn-warning"  type="submit" value="View The Map" />
                </Link>
        </Col>
        <Col size="md-3">
        
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
        

        export default Login;
            

