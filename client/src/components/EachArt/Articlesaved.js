import React from "react";
import "./eachart.css";
import {Col, Row} from "../Grid";


export const SavedHouse = props => (


<div >

    <div >
    <div className="card maincard shadow-lg p-3 mb-5">
  <div className="card-body eachdiv">
    <h6 className="cardttl">{props.fulladdress}</h6>
    <Row>
    <Col size="md-3">
    <p><span className="innerlab">Healthy treat: </span><span className="innerdata"> {props.healthy}</span></p>
    </Col>
    <Col size="md-3">
    <p>
    <span className="innerlab">Peanut-free treat: </span><span className="innerdata"> {props.peanutfree}</span> </p>
    </Col>
    <Col size="md-3">
    <p><span className="innerlab">Treat name: </span><span className="innerdata"> {props.treattype}</span></p>
    </Col>
    <Col size="md-3">
    <p><span className="innerlab">Code Word: </span><span className="innerdata"> {props.codeword}</span></p>
    </Col>
    </Row>
  </div>
  </div>
  </div>
  </div>

    )