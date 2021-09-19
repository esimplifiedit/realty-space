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
  class BuilderCreate extends Component {
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
            <title>Add Builder | Realty Space</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs
              title={this.props.t("Builder")}
              breadcrumbItem={this.props.t("Add Builder")}
            />
            <Row>
                <Col md="12">
            <Card>
                        <CardBody>
                        <AvForm className="needs-validation">
                      <Row>
                        <Col md="3">
                          <FormGroup className="mb-3">
                            <Label htmlFor="mediaName">
                              {this.props.t("Builder Name")}
                            </Label>
                            <AvField
                              name="mediaName"
                             
                              type="text"
                              errorMessage={this.props.t("Enter Name")}
                              className="form-control"
                              validate={{ required: { value: true } }}
                              id="mediaName"
                            />
                          </FormGroup>
                        </Col>

                        

                        <Col md="3">
                          <FormGroup className="mb-3">
                            <Label htmlFor="mediaUpload">
                              {this.props.t("Upload Logo")}
                            </Label>
                            
                            <Input className="form-control" type="file" id="formFile" />
                          </FormGroup>
                        </Col>
                        <Col md="3">
                          <FormGroup className="mb-3">
                            <Label htmlFor="gDrive">
                              {this.props.t("Address 1")}
                            </Label>
                            <AvField
                              name="gDrive"
                              
                              type="text"
                              errorMessage={this.props.t("Enter Address 1")}
                              className="form-control"
                              validate={{ required: { value: true } }}
                              id="gDrive"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="3">
                          <FormGroup className="mb-3">
                            <Label htmlFor="gDrive1">
                              {this.props.t("Address 2")}
                            </Label>
                            <AvField
                              name="gDrive1"
                              
                              type="text"
                              errorMessage={this.props.t("Enter Address 2")}
                              className="form-control"
                              validate={{ required: { value: true } }}
                              id="gDrive1"
                            />
                          </FormGroup>
                        </Col>
                        
                      </Row> 

                      <Row>
                        <Col md="3">
                          <FormGroup className="mb-3">
                            <Label htmlFor="city">
                              {this.props.t("City")}
                            </Label>
                            <AvField
                              name="city"
                             
                              type="text"
                             
                              className="form-control"
                              validate={{ required: { value: true } }}
                              id="city"
                            />
                          </FormGroup>
                        </Col>

                        

                        <Col md="3">
                        <FormGroup className="mb-3">
                            <Label htmlFor="Province">
                              {this.props.t("Province")}
                            </Label>
                            <AvField
                              name="Province"
                             
                              type="text"
                             
                              className="form-control"
                              validate={{ required: { value: true } }}
                              id="Province"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="3">
                        <FormGroup className="mb-3">
                            <Label htmlFor="Country">
                              {this.props.t("Country")}
                            </Label>
                            <AvField
                              name="Country"
                             
                              type="text"
                             
                              className="form-control"
                              validate={{ required: { value: true } }}
                              id="Country"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="3">
                          <FormGroup className="mb-3">
                            <Label htmlFor="PostalCode">
                              {this.props.t("Postal Code")}
                            </Label>
                            <AvField
                              name="PostalCode"
                              
                              type="text"
                              
                              className="form-control"
                              validate={{ required: { value: true } }}
                              id="PostalCode"
                            />
                          </FormGroup>
                        </Col>
                        <div className="clearFix"><button type="submit" className="btn btn-primary w-md float-end mt20"> {this.props.t("Save")}</button></div>
                      </Row>                 
             </AvForm>
            
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
                              validate={{ required: { value: true } }}
                              id="builDepartment"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="3">
                        <FormGroup className="mb-3">
                            <Label htmlFor="marketBudget">
                              {this.props.t("Contact Name")}
                            </Label>
                            <AvField
                              name="marketBudget"
                             
                              type="text"
                              errorMessage={this.props.t("Enter Contact Name")}
                              className="form-control"
                              validate={{ required: { value: true } }}
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
                              validate={{ required: { value: true } }}
                              id="marketSpent"
                            />
                          </FormGroup>

                         

                        </Col>
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
                              validate={{ required: { value: true } }}
                              id="builEmail"
                            />
                          </FormGroup>
                        
                        </Col>
                       
                      </Row>                
                  
                      <Row>
                        

                        

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
                              validate={{ required: { value: true } }}
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
                              validate={{ required: { value: true } }}
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
  BuilderCreate.propTypes = {
    t: PropTypes.any
  }

  export default connect()(withRouter(withTranslation()(BuilderCreate)))