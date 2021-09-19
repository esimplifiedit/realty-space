import React, { Component } from "react"

import { Row, Col, Card, CardBody } from "reactstrap"
import { Link } from "react-router-dom"

//import avatar1 from "../../../assets/images/users/avatar-1.jpg"
import profileImg from "../../../assets/images/profile-img.png"

class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <Card className="overflow-hidden">
          <div className="bg-primary bg-soft">
            <Row>
              <Col xs="7">
                <div className="text-primary p-3">
                  <h5 className="text-primary"> Nahid Kennedy </h5>
                  <p><i className="mdi mdi-email mr-1"></i> email@jonhdeo.com</p>
                  <p><i className="mdi mdi-phone mr-1"></i>  647-345-2442</p>
                </div>
              </Col>
              <Col xs="5" className="align-self-end">
                <img src={profileImg} alt="" className="img-fluid" />
              </Col>
            </Row>
          </div>
         
        </Card>
        <Row>
            <Col md="12">
            <a href="/pre-construction/campaign" className="btn btn-primary">Campaign</a>
            </Col>
          </Row>
      </React.Fragment>
    )
  }
}

export default Welcome
