import React, { Component } from "react"
import PropTypes from "prop-types"
import MetaTags from 'react-meta-tags';
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import * as moment from 'moment';
import { withTranslation } from "react-i18next"
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import product1 from "../../../assets/images/brands/mail_chimp.png";
import {
    Button,
    Col,
    Container,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Row,
    UncontrolledDropdown,
    Modal,
    ModalHeader,
    ModalBody,
    CardBody,
    Card
  } from "reactstrap"

  class Builder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        
    
        return (
          <React.Fragment>
    <div className="page-content">
          <MetaTags>
            <title>Builder | Realty Space</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs
              title={this.props.t("Builder")}
              breadcrumbItem={this.props.t("Builder")}
            />
            <Row>
                <Col sm="12"><a href="/pre-Construction/builder/create" className="btn btn-primary waves-effect waves-light btn-sm float-end"><i className="mdi mdi-plus ml-1"></i> Add New</a></Col>
            </Row>
            <Row>
                <Col md="12">
                
            <Card>

                        <CardBody>
                        
            <div className="table-rep-plugin">
                                                <div
                                                    className="table-responsive mb-0"
                                                    data-pattern="priority-columns"
                                                >
                                                    <Table
                                                    id="tech-companies-1"
                                                    className="table table-striped"
                                                    >
                                                    <Thead>
                                                        <Tr>
                                                        <Th>{this.props.t("Logo")}</Th>
                                                        <Th>{this.props.t("Builder Name")}</Th>
                                                        <Th>{this.props.t("Contact")}</Th>
                                                        <Th>{this.props.t("Address")}</Th>
                                                        <Th>{this.props.t("Detail")}</Th>
                                                        <Th>{this.props.t("Project")}</Th>
                                                    
                                                        </Tr>
                                                    </Thead>
                                                    <Tbody>
                                                        <Tr>
                                                        <Th>
                                                            
                                                        <img
                                                            src={product1}
                                            
                                                            alt=""
                                                            
                                                            />
                                                        </Th>
                                                        <Td>  JDS Development Group  </Td>
                                                        <Td>  contact@jdsgroup.com <br/> 989-897-6490  </Td>
                                                        <Td>  111 West 57th Street,
                                                            New York, NY     </Td>
                                                        <Td>  <a href="/pre-Construction/builder/builder-detail" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
                                                        <i className="mdi mdi-magnify ml-1"></i> Builder Details
                                                            </a>  
                                                            
                                                            
                                                            </Td>

                                                            <Td>  <a href="/pre-construction/project" className="btn btn-success btn-sm btn-rounded waves-effect waves-light">
                                                        <i className="mdi mdi-office-building ml-1"></i>  Builder Projects
                                                            </a>  
                                                            
                                                            
                                                            </Td>

                                                        </Tr>
                                                       
                                                        
                                                    </Tbody>
                                                    </Table>
                                                </div>
                                                </div>
                                                </CardBody>
                                                </Card>
                                        </Col>
                                        </Row>
            </Container>
        </div>
          </React.Fragment>
        )
    }

    
  }
  Builder.propTypes = {
    t: PropTypes.any
  }

  export default connect()(withRouter(withTranslation()(Builder)))