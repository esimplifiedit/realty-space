import React, { Component } from "react"

import { Row, Col, Card, CardBody } from "reactstrap"
import { Link } from "react-router-dom"

//import avatar1 from "../../../assets/images/users/avatar-1.jpg"
import profileImg from "../../../assets/images/profile-img.png"

class CampaignData extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <Card className="overflow-hidden">
          
            <Row>
              <Col xs="12">
              <div className="bg-primary bg-soft">
                <div className="text-primary p-3">
                  <h5 className="text-primary"> 7th May 2021 VIP Contacts</h5>
                  <p>
                    <span className="badge mr5 badge-pill badge-soft-primary font-size-12">2500 Sent </span>
                    <span className="badge mr5 badge-pill badge-soft-success font-size-12">223 Opened </span>
                    <span className="badge mr5 badge-pill badge-soft-success font-size-12">120 Clicked </span>
                    <span className="badge mr5 badge-pill badge-soft-danger font-size-12">345 Bounced </span>
                </p>
                <p>#SRR 36 | #Client 3</p>
                </div>
                </div>
              </Col>
              <Col xs="12">
              <div className="bg-primary bg-soft">
                <div className="text-primary p-3">
                  <h5 className="text-primary"> 7th May 2021 VIP Contacts</h5>
                  <p>
                    <span className="badge mr5 badge-pill badge-soft-primary font-size-12">2500 Sent</span>
                    <span className="badge mr5 badge-pill badge-soft-success font-size-12">223 Opened</span>
                    <span className="badge mr5 badge-pill badge-soft-success font-size-12">120 Clicked</span>
                    <span className="badge mr5 badge-pill badge-soft-danger font-size-12">345 Bounced</span>
                </p>
                <p>#SRR 36 | #Client 3</p>
                </div>
                </div>
              </Col>

              <Col xs="12">
              <div className="bg-primary bg-soft">
                <div className="text-primary p-3">
                  <h5 className="text-primary"> 7th May 2021 VIP Contacts</h5>
                  <p>
                    <span className="badge mr5 badge-pill badge-soft-primary font-size-12">2500 Sent</span>
                    <span className="badge mr5 badge-pill badge-soft-success font-size-12">223 Opened</span>
                    <span className="badge mr5 badge-pill badge-soft-success font-size-12">120 Clicked</span>
                    <span className="badge mr5 badge-pill badge-soft-danger font-size-12">345 Bounced</span>
                </p>
                <p>#SRR 36 | #Client 3</p>
                </div>
                </div>
              </Col>
              
            </Row>
          
          
        </Card>
      </React.Fragment>
    )
  }
}

export default CampaignData
