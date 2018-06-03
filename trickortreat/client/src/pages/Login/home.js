// Imports
import React, { Component } from "react";
// import API from "../../utils/API";
// import { Input, FormBtn } from "../../components/Form";
import { Card, Header } from "../../components/Card";
import { Form, Regbtn } from "../../components/Form";
import { Container, Col, Row} from "../../components/Grid";
import { Nav } from "../../components/Navbar";
import { Image } from "../../components/Image";
import { Link } from "react-router-dom";

import "./pages.css";

// Setting state
class Login extends Component {
//     state = {
//         topic: '',
//         startyear: '',
//         endyear: '',
//         results: [],
//         previousSearch: {},
//         noResults: false
//     }

// // Function to save article
// saveArticle = (result) => {
//     console.log(result);
//     let savedarticle = {
//         date: result.pub_date,
//         title: result.headline.main,
//         url: result.web_url,
//         summary: result.snippet
//     }
//     console.log("savedarticle: " + savedarticle);

// // API request to save artice
// API.saveArticle(savedarticle).then(results => {
//     console.log(results);
// // Updating the results to exclude the saved article
//     let newsavedlist = this.state.results.filter(result => result.headline.main !== savedarticle.title)
//     this.setState({results: newsavedlist })
// })
// .catch(err => console.log(err));    
// }



// // Function to capture user input being entered
// handleInputChange = event => {
//     console.log(event.target);
//     const { name, value } = event.target;
//     // console.log({name, value});
//     console.log([name]);
//     this.setState({
//         [name]: value
//     })
// };

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
       <Nav />
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
           <Form />
        </Card>
        <Link to='./datapage'>
        <Regbtn />
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
            

