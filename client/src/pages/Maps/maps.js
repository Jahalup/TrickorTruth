import React from "react";
import { Nav } from "../../components/Navbar";
import { Card } from "../../components/Card";
import { Input} from "../../components/Form";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Container, Col, Row} from "../../components/Grid";
import { SavedHouse} from "../../components/EachArt";
import "./maps.css";

    
    class Mappage extends React.Component {
    
        constructor(props) {
            super(props);
            this.state = {
                zip: '',
                all: [],
                user:'',
                userzip:'',
                isOpen: false
            }
        }

        handleInputChange = event => {
            console.log(event.target);
            const { name, value } = event.target;
            // console.log({name, value});
            console.log([name]);
            this.setState({
                [name]: value
            })
        };
      
        seeall = event => {
            event.preventDefault();
            let zip = this.state.zip;
            let treat = "Yes";
            if(zip===''){
                alert("please enter a zipcode")
            }
            else {
            API.getzipMarkers(zip, treat).then(results => {this.setState({all: results.data})}
            
        )}
    };

        seepeanutfree = event => {
            event.preventDefault();
            let peanut = this.state.zip;
            let yeso = 'Yes';
            let treat = 'Yes';
           
            API.getzippeanut(peanut, yeso, treat).then(results => {this.setState({all: results.data})}
            )};


       

        componentWillMount() {
            this.loadmarkers();
        }

        loadmarkers = () => {
                API.getMarkers().then(results => {this.setState({all: results.data})}).then(this.getuserdata())
          
        };

        getuserdata() {
            let url = window.location.search;
            let usernm = '';
            if (url.indexOf("?username=") !== -1) {
                usernm = url.split("=")[1]
                console.log("usernm" + usernm)
              
            // API.getuserdata(usernm).then(results => {this.setState({user: results.data.firstname, zip: results.data.zipcode})})
             
            API.getuserdata(usernm).then(results => (results.data === null)? window.location.assign("./") : this.setState({user: results.data.firstname, zip: results.data.zipcode}))
                  
        }

        else {console.log("nothing")}
    }

    
   
        render() {
            return (
                <Container fluid>
                <Nav
                name={this.state.user}
                />
              <h1 style={{fontFamily: 'Fontdiner Swanky', textAlign: 'center', marginTop: "10px"}}> Happy Halloween, {this.state.user}</h1>
                   <Row>
                       <Col size="md-4" >
                       <div id="pumpkindiv">
                       <img id="pumpkinimage" src={ require('./pumpkinlone.jpg')} />
                       </div>
                       </Col>
                  <Col size="md-4">
                  <h3 id="searchzip">Search By Zip</h3>
                  <form>
                  <Input 
                   
                   value={this.state.zip}
                   type="number"
                   onChange={this.handleInputChange}
                   name="zip"/>
                   <input className="btn btn-warning  " style={{margin: "2px"}} type="submit" value="Search in this Zipcode" onClick={this.seeall } />
                   <input className="btn btn-warning" type="submit" value="See Peanut Free" onClick={this.seepeanutfree } />
                   {/* <input className="btn btn-warning" style={{margin: "2px"}} type="submit" value="See Healthy" onClick={this.seehealthy } /> */}
                   
               </form>
               </Col>
               <Col size="md-4">
               <div style={{textAlign: "center"}}>
               <Link to='./mapview'>
               <input className="btn-lg btn-warning"  type="submit" value="View The Map"/>
                </Link>
                </div>
                </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                  <Card > 
                      <h3 id="housestyle">Local Houses </h3>
                  {this.state.all.map((result, i) => (
                      <SavedHouse
                      key={i}
                      fulladdress={result.fulladdress}
                      healthy={result.healthy}
                      peanutfree={result.peanutfree}
                      treattype={result.treattype}
                      codeword={result.codeword}
                      />
                  ))}

                        </Card>
                       </Col>
                    </Row> 
                </Container>
            )
        }
    }
    export default Mappage;
