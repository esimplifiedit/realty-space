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
import { AvField, AvForm } from "availity-reactstrap-validation"

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
    Card,
    FormGroup,
    Label,
    Input,
  } from "reactstrap"
  class BuilderDetail extends Component {
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
            <title>Builder Detail | Realty Space</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs
              title={this.props.t("Builder")}
              breadcrumbItem={this.props.t("View Builder")}
            />
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
                                                        <Th>{this.props.t("Address 1")}</Th>
                                                        <Th>{this.props.t("Address 2")}</Th>
                                                       
                                                    
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
                                                        <Td>   759, Phase-1   </Td>
                                                        <Td>    </Td>
                                                        

                                                        </Tr>
                                                       
                                                        
                                                    </Tbody>
                                                    </Table>
                                                    <Table
                                                    id="tech-companies-1"
                                                    className="table table-striped"
                                                    >
                                                    <Thead>
                                                        <Tr>
                                                        <Th>{this.props.t("City")}</Th>
                                                        <Th>{this.props.t("Province")}</Th>
                                                        <Th>{this.props.t("Postal Code")}</Th>
                                                        <Th></Th>
                                                       
                                                    
                                                        </Tr>
                                                    </Thead>
                                                    <Tbody>
                                                        <Tr>
                                                        <Th>
                                                            
                                                        Gurgaon
                                                        </Th>
                                                        <Td> Haryana </Td>
                                                        <Td> 201301  </Td>
                                                        <Td>    </Td>
                                                        

                                                        </Tr>
                                                       
                                                        
                                                    </Tbody>
                                                    </Table>
                                                </div>
                                                </div>
                                                </CardBody>
                                                </Card>
                                        </Col>
                                        </Row>

                                        <Row>
                                            <Col md="12">
                                                <Card>
                                                    <CardBody>
                                                    <h4 className="card-title mb-4">Builder Department Contact Info</h4>
                                                    <AvForm className="needs-validation">
                         <Row>
                        

                        

                        <Col md="3">
                        <FormGroup className="mb-3">
                            <Label htmlFor="builDepartment">
                              {this.props.t("Department")}
                            </Label>
                            <AvField
                              name="builDepartment"
                             
                              type="text"
                              errorMessage={this.props.t("Enter Department")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="builDepartment"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="3">
                        <FormGroup className="mb-3">
                            <Label htmlFor="marketBudget">
                              {this.props.t("First Name")}
                            </Label>
                            <AvField
                              name="marketBudget"
                             
                              type="text"
                              errorMessage={this.props.t("Enter Contact Name")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="marketBudget"
                            />
                          </FormGroup>

                        </Col>
                        <Col md="3">
                        <FormGroup className="mb-3">
                            <Label htmlFor="marketBudget">
                              {this.props.t("Last Name")}
                            </Label>
                            <AvField
                              name="marketBudget"
                             
                              type="text"
                              errorMessage={this.props.t("Enter Last Name")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="marketBudget"
                            />
                          </FormGroup>

                        </Col>
                        <Col md="3">
                        <FormGroup className="mb-3">
                            <Label htmlFor="marketSpent">
                              {this.props.t("Phone")}
                            </Label>
                            <AvField
                              name="marketSpent"
                              
                              type="text"
                              errorMessage={this.props.t("Enter Phone")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="marketSpent"
                            />
                          </FormGroup>

                         

                        </Col>
                        
                       
                      </Row>                
                  
                      <Row>
                        
                      <Col md="3">
                        <FormGroup className="mb-3">
                            <Label htmlFor="builEmail">
                              {this.props.t("Email")}
                            </Label>
                            <AvField
                              name="builEmail"
                              
                              type="text"
                              errorMessage={this.props.t("Enter Email")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="builEmail"
                            />
                          </FormGroup>
                        
                        </Col>
                        

                        <Col md="3">
                        <FormGroup className="mb-3">
                            <Label htmlFor="builMobile">
                              {this.props.t("Mobile")}
                            </Label>
                            <AvField
                              name="builMobile"
                             
                              type="text"
                              errorMessage={this.props.t("Enter Mobile")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="builMobile"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="3">
                        <FormGroup className="mb-3">
                            <Label htmlFor="builFax">
                              {this.props.t("Fax")}
                            </Label>
                            <AvField
                              name="builFax"
                             
                              type="text"
                              errorMessage={this.props.t("Enter Fax")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="builFax"
                            />
                          </FormGroup>

                        </Col>
                        <Col md="3">
                        <div className="clearFix"><button type="submit" className="btn btn-primary w-md mt20"> {this.props.t("Save")}</button></div>

                         

                        </Col>
                        <Col md="3">
                       
                        
                        </Col>
                       
                      </Row>    
                     
                      
                     


                      </AvForm>

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
  BuilderDetail.propTypes = {
    t: PropTypes.any
  }

  export default connect()(withRouter(withTranslation()(BuilderDetail)))