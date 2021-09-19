import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { withTranslation } from "react-i18next"
//import Lead from "./Lead";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle
} from "reactstrap"

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reports: [
        { title: "Total Leads", iconClass: "bx-copy-alt", description: "14" },
        {
          title: "Hot Leads",
          iconClass: "bx-archive-in",
          description: "6",
        },
        {
          title: "Need Follow-up",
          iconClass: "bx-purchase-tag-alt",
          description: "5",
        },
      ]
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Lead Dashboard | Realty Space</title>
          </MetaTags>
          <Container fluid>
             <Breadcrumbs
              title={this.props.t("Lead")}
              breadcrumbItem={this.props.t("Dashboard")}
            />
            <Row>
            {this.state.reports.map((report, key) => (
            <Col md="4" key={"_col_" + key}>
                <Card className="mini-stats-wid">
                        <CardBody>
                          <div className="d-flex">
                            <div className="flex-grow-1">
                              <p className="text-muted fw-medium">
                                {report.title}
                              </p>
                              <h4 className="mb-0">{report.description}</h4>
                            </div>
                            <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                              <span className="avatar-title">
                                <i
                                  className={
                                    "bx " + report.iconClass + " font-size-24"
                                  }
                                />
                              </span>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                
              </Col>
            ))}
            </Row>
            <Row>
              <Col lg="12">
                
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}
Dashboard.propTypes = {
  t: PropTypes.any

}
export default connect()(withTranslation()(Dashboard))
