import React, { Component } from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import MetaTags from 'react-meta-tags';
import { withTranslation } from "react-i18next"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"

//Lightbox
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
import img1 from "../../../assets/images/small/img-1.jpg"
import img2 from "../../../assets/images/small/img-2.jpg"
import img3 from "../../../assets/images/small/img-3.jpg"
import img4 from "../../../assets/images/small/img-4.jpg"
import img5 from "../../../assets/images/small/img-5.jpg"
import img6 from "../../../assets/images/small/img-6.jpg"
import Dropzone from "react-dropzone"
import {
  Row,
  Col,
  CardBody,
  Card,
  CardText,
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap"
import classnames from "classnames"
import {
  addNewProject,
  getProjects,
} from "../../../store/projects/actions"

import { AvField, AvForm } from "availity-reactstrap-validation"
import Select from "react-select"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
const optionGroup = [
  {
    
    options: [
      { label: "Test 1", value: "Test 1" },
      { label: "Test 2", value: "Test 2" },
      { label: "Test 3", value: "Test 3" },
      { label: "Test 4", value: "Test 4" }
    ]
  }
]
const months = [
  {
    
    options: [
      { label: "Jan", value: "Jan" },
      { label: "Feb", value: "Feb" },
      { label: "Mar", value: "Mar" },
      { label: "Apr", value: "Apr" },
      { label: "May", value: "May" },
      { label: "Jun", value: "Jun" },
      { label: "Jul", value: "Jul" },
      { label: "Aug", value: "Aug" },
      { label: "Sep", value: "Sep" },
      { label: "Oct", value: "Oct" },
      { label: "Nov", value: "Nov" },
      { label: "Dec", value: "Dec" }
    ]
  }
]
const years = [
  {
    
    options: [
      { label: "2021", value: "2021" },
      { label: "2022", value: "2022" },
      { label: "2023", value: "2023" },
      { label: "2024", value: "2024" },
      { label: "2025", value: "2025" },
      { label: "2026", value: "2026" },
      { label: "2027", value: "2027" },
      { label: "2028", value: "2028" },
      { label: "2029", value: "2029" },
      { label: "2030", value: "2030" },
      
    ]
  }
]
class ProjectsCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: "1",
      verticalActiveTab: "1",
      selectedGroup: null,
      photoIndex: 0,
      isFits: false,
      isEffects: false,
      isGallery: false,
      isGalleryZoom: false,
      isOpen: false,
      
    }
    this.toggle = this.toggle.bind(this)
    this.handleMulti = this.handleMulti.bind(this)
  }
  handleMulti = selectedMulti => {
    this.setState({ selectedMulti })
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      })
    }
  }
  render() {
    const { selectedGroup } = this.state
    const { selectedMulti } = this.state
      return (
      <React.Fragment>
        <div className="page-content">

          <MetaTags>
            <title>Create New Project | Realty Space</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title={this.props.t("Projects")} breadcrumbItem={this.props.t("Create New Project")} />

            <Row>
              <Col lg="12">
                <Card>
                  <CardBody>
                  <Nav tabs>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.activeTab === "1",
                          })}
                          onClick={() => {
                            this.toggle("1")
                          }}
                        >
                          <span className="d-none d-sm-block">{this.props.t("Description")}</span>
                          <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.activeTab === "2",
                          })}
                          onClick={() => {
                            this.toggle("2")
                          }}
                        >
                          
                          <span className="d-none d-sm-block">{this.props.t("Features")}</span>
                          <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.activeTab === "3",
                          })}
                          onClick={() => {
                            this.toggle("3")
                          }}
                        >
                          
                          <span className="d-none d-sm-block">{this.props.t("Contact")}</span>
                          <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.activeTab === "4",
                          })}
                          onClick={() => {
                            this.toggle("4")
                          }}
                        >
                           
                           <span className="d-none d-sm-block">{this.props.t("Media")}</span>
                          <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.activeTab === "5",
                          })}
                          onClick={() => {
                            this.toggle("5")
                          }}
                        >
                           
                           <span className="d-none d-sm-block">{this.props.t("Gallery")}</span>
                          <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                        </NavLink>
                        
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.activeTab === "6",
                          })}
                          onClick={() => {
                            this.toggle("6")
                          }}
                        >
                         
                          <span className="d-none d-sm-block">{this.props.t("Payment Plan")}</span>
                          <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                        </NavLink>
                        
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.activeTab === "7",
                          })}
                          onClick={() => {
                            this.toggle("7")
                          }}
                        >
                  
                          <span className="d-none d-sm-block">{this.props.t("Marketing")}</span>
                          <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                        </NavLink>
                        
                      </NavItem>
                    </Nav>

                    <TabContent activeTab={this.state.activeTab} className="p-3 text-muted">
                      <TabPane tabId="1">
                        <Row>
                          <Col sm="12">
                            <CardText className="mb-0">
                            <AvForm className="needs-validation">
                      <Row>
                        <Col md="3">
                          <FormGroup className="mb-3">
                            <Label htmlFor="projectName">
                              {this.props.t("Project Name")}
                            </Label>
                            <AvField
                              name="projectName"
                             
                              type="text"
                              errorMessage={this.props.t("Enter Project Name")}
                              className="form-control"
                              validate={{ required: { value: true } }}
                              id="projectName"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="3">
                          <FormGroup className="mb-3">
                            <Label htmlFor="projectType">
                              {this.props.t("Project Type")}
                            </Label>
                            <Select
                              value={selectedGroup}
                              onChange={this.handleSelectGroup}
                              options={optionGroup}
                              classNamePrefix="select2-selection"
                              id="projectType"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup className="mb-3">
                            <Label htmlFor="builderName">
                              {this.props.t("Builder Name")}
                            </Label>
                            <Select
                              value={selectedMulti}
                              isMulti={true}
                              onChange={this.handleMulti}
                              options={optionGroup}
                              classNamePrefix="select2-selection"
                              id="builderName"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="2">
                       
                        <a href="#"><button type="button" className="btn btn-danger mt20"><i className="bx bx-plus"></i> {this.props.t("Add New")}</button></a>
                        </Col>
                      </Row>

                      <Row>
                        <Col md="4">
                        <Row>
                        <Col md="6">
                          <FormGroup className="mb-3">
                            <Label htmlFor="completionMonth">
                              {this.props.t("Completion Month")}
                            </Label>
                            <Select
                              value=''
                              onChange=''
                              options={months}
                              classNamePrefix="select2-selection"
                              id="completionMonth"
                            />
                          </FormGroup>
                          </Col>
                          <Col md="6">
                          <FormGroup className="mb-3">
                            <Label htmlFor="completionMonth">
                              {this.props.t("Completion Year")}
                            </Label>
                            <Select
                              value=''
                              onChange=''
                              options={years}
                              classNamePrefix="select2-selection"
                              id="completionMonth"
                            />
                          </FormGroup>
                          </Col>
                          </Row>
                        </Col>
                        <Col md="2">
                          <FormGroup className="mb-3">
                            <Label htmlFor="priceRange">
                              {this.props.t("Price From $")}
                            </Label>
                            <AvField
                              name="priceRange"
                             
                              type="text"
                              errorMessage={this.props.t("Enter Price From $")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="priceRange"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="2">
                          <FormGroup className="mb-3">
                            <Label htmlFor="priceRangeTo">
                              {this.props.t("Price To $")}
                            </Label>
                            <AvField
                              name="priceRangeTo"
                             
                              type="text"
                              errorMessage={this.props.t("Enter Price To $")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="priceRangeTo"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="2">
                        <FormGroup className="mb-3">
                            <Label htmlFor="basePrice">
                              {this.props.t("Base Price")}
                            </Label>
                            <AvField
                              name="basePrice"
                              
                              type="text"
                              errorMessage={this.props.t("Enter Base price")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="basePrice"
                            />
                          </FormGroup>
                         
                        </Col>
                        <Col md="2">
                        <FormGroup className="mb-3">
                            <Label htmlFor="noofUnit">
                              {this.props.t("No of Units")}
                            </Label>
                            <AvField
                              name="noofUnit"
                             
                              type="text"
                              errorMessage={this.props.t("Enter No of Units")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="noofUnit"
                            />
                          </FormGroup>
                        </Col>

                        
                        
                      </Row>
                      <Row>
                        <Col md="3">
                        <FormGroup className="mb-3">
                            <Label htmlFor="minBedRoom">
                              {this.props.t("Min Bedroom")}
                            </Label>
                            <AvField
                              name="minBedRoom"
                              
                              type="text"
                              errorMessage={this.props.t("Enter Min Bedroom")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="minBedRoom"
                            />
                          </FormGroup>
                         
                        </Col>
                        <Col md="3">
                        <FormGroup className="mb-3">
                            <Label htmlFor="maxBedRoom">
                              {this.props.t("Max Bedroom")}
                            </Label>
                            <AvField
                              name="maxBedRoom"
                             
                              type="text"
                              errorMessage={this.props.t("Enter Max Bedroom")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="maxBedRoom"
                            />
                          </FormGroup>
                          
                        </Col>

                        <Col md="3">
                        <FormGroup className="mb-3">
                            <Label htmlFor="minArea">
                              {this.props.t("Min Area")}
                            </Label>
                            <AvField
                              name="minArea"
                            
                              type="text"
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="minArea"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="3">
                        <FormGroup className="mb-3">
                            <Label htmlFor="maxArea">
                              {this.props.t("Max Area")}
                            </Label>
                            <AvField
                              name="maxArea"
                              
                              type="text"
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="maxArea"
                            />
                          </FormGroup>
                        </Col>

                        
                        
                      </Row>
                      <Row>
                        <Col lg="12">
                          <h5 className="form-title">Address Detail</h5>
                        </Col>
                      </Row>
                      <Row>
                        
                        <Col md="2">
                          <FormGroup className="mb-3">
                            <Label htmlFor="streenName">
                              {this.props.t("Enter Street Name")}
                            </Label>
                            <AvField
                              name="streenName"
                              
                              type="text"
                              errorMessage={this.props.t("Enter Street Name")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="streenName"
                            />
                          </FormGroup>
                        </Col>

                        <Col md="2">
                          <FormGroup className="mb-3">
                            <Label htmlFor="cityName">
                              {this.props.t("Enter City")}
                            </Label>
                            <AvField
                              name="cityName"
                              
                              type="text"
                              errorMessage={this.props.t("Enter City")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="cityName"
                            />
                          </FormGroup>
                        </Col>

                        <Col md="3">
                          <FormGroup className="mb-3">
                            <Label htmlFor="province">
                              {this.props.t("Enter Province")}
                            </Label>
                            <AvField
                              name="province"
                              
                              type="text"
                              errorMessage={this.props.t("Enter Province")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="province"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="3">
                        <FormGroup className="mb-3">
                            <Label htmlFor="selectCountry">
                              {this.props.t("Select Country")}
                            </Label>
                            <Select
                              value={selectedGroup}
                              onChange={this.handleSelectGroup}
                              options={optionGroup}
                              classNamePrefix="select2-selection"
                              id="selectCountry"
                            />
                          </FormGroup>

                        </Col>
                        <Col md="2">
                          <FormGroup className="mb-3">
                            <Label htmlFor="zipCode">
                              {this.props.t("Zip Code")}
                            </Label>
                            <AvField
                              name="zipCode"
                              
                              type="text"
                              errorMessage={this.props.t("Enter Zip Code")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="zipCode"
                            />
                          </FormGroup>
                        </Col>
        
                      </Row>
                      <Row>
                        <Col lg="12">
                          <h5 className="form-title">Agent Detail</h5>
                        </Col>
                      </Row>

                      <Row>
                        <Col md="4">
                        <FormGroup className="mb-3">
                            <Label htmlFor="agentWebsite">
                              {this.props.t("Agent Website")}
                            </Label>
                            <AvField
                              name="agentWebsite"
                              
                              type="text"
                              errorMessage={this.props.t("Enter Agent Website")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="agentWebsite"
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <div><button type="submit" className="btn btn-primary w-md float-end">{this.props.t("Save & Continue..")}</button></div>
                      
                      </AvForm>
                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="2">
                        <Row>
                          <Col sm="12">
                            <CardText className="mb-0">
                            <AvForm className="needs-validation">
                      <Row>
                        <Col md="12">
                          <FormGroup className="mb-3">
                            <Label htmlFor="projectSummary">
                              {this.props.t("Project Summary")}
                            </Label>
                            <AvField
                              name="projectSummary"
                              
                              type="textarea"
                              errorMessage={this.props.t("Enter Project Summary")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="projectSummary"
                            />
                          </FormGroup>
                        </Col>
                        
                      </Row>

                      <Row>
                        <Col md="12">
                          <FormGroup className="mb-3">
                            <Label htmlFor="priceFee">
                              {this.props.t("Price & Fee")}
                            </Label>
                            <AvField
                              name="priceFee"
                             
                              type="textarea"
                              errorMessage={this.props.t("Enter Price & Fee")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="priceFee"
                            />
                          </FormGroup>
                        </Col>
                        
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup className="mb-3">
                            <Label htmlFor="depositStr">
                              {this.props.t("Deposit Structure")}
                            </Label>
                            <AvField
                              name="depositStr"
                           
                              type="textarea"
                              errorMessage={this.props.t("Enter Deposit Structure")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="depositStr"
                            />
                          </FormGroup>
                        </Col>
                        
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup className="mb-3">
                            <Label htmlFor="currentIncentive">
                              {this.props.t("Current Incentive")}
                            </Label>
                            <AvField
                              name="currentIncentive"
                             
                              type="textarea"
                              errorMessage={this.props.t("Enter Current Incentive")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="currentIncentive"
                            />
                          </FormGroup>
                        </Col>
                        
                      </Row>
                  
                      
                      <div><button type="submit" className="btn btn-primary w-md float-end">{this.props.t("Save & Continue..")}</button></div>
                      
                      </AvForm>
                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="3">
                        <Row>
                          <Col sm="12">
                            <CardText className="mb-0">
                            <AvForm className="needs-validation">
                      <Row>
                        <Col md="4">
                          <FormGroup className="mb-3">
                            <Label htmlFor="departCont">
                              {this.props.t("Department")}
                            </Label>
                            <AvField
                              name="departCont"
                             
                              type="text"
                              errorMessage={this.props.t("Enter Department")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="departCont"
                            />
                          </FormGroup>
                        </Col>

                        <Col md="4">
                          <FormGroup className="mb-3">
                            <Label htmlFor="contactName">
                              {this.props.t("Contact Name")}
                            </Label>
                            <AvField
                              name="contactName"
                              
                              type="text"
                              errorMessage={this.props.t("Enter Contact Name")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="contactName"
                            />
                          </FormGroup>
                        </Col>

                        <Col md="4">
                          <FormGroup className="mb-3">
                            <Label htmlFor="contactPhone">
                              {this.props.t("Phone")}
                            </Label>
                            <AvField
                              name="contactPhone"
                             
                              type="text"
                              errorMessage={this.props.t("Enter Phone")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="contactPhone"
                            />
                          </FormGroup>
                        </Col>
                        
                      </Row>


                      <Row>
                        <Col md="4">
                          <FormGroup className="mb-3">
                            <Label htmlFor="emailContact">
                              {this.props.t("Email")}
                            </Label>
                            <AvField
                              name="emailContact"
                             
                              type="email"
                              errorMessage={this.props.t("Enter Email")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="emailContact"
                            />
                          </FormGroup>
                        </Col>

                        <Col md="4">
                          <FormGroup className="mb-3">
                            <Label htmlFor="contactMobile">
                              {this.props.t("Mobile")}
                            </Label>
                            <AvField
                              name="contactMobile"
                             
                              type="text"
                              errorMessage={this.props.t("Enter Mobile")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="contactMobile"
                            />
                          </FormGroup>
                        </Col>

                        <Col md="4">
                          <FormGroup className="mb-3">
                            <Label htmlFor="contactFax">
                              {this.props.t("Fax")}
                            </Label>
                            <AvField
                              name="contactFax"
                             
                              type="text"
                              errorMessage={this.props.t("Enter Fax")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="contactFax"
                            />
                          </FormGroup>
                        </Col>
                        <div className="clearFix"><button type="submit" className="btn btn-primary w-md float-end">{this.props.t("Save & Continue..")}</button></div>
                      </Row>

                     
                  
                      
                     
                      
                      <Row className="mt20">
                          <Col lg="12">
                          <div className="table-rep-plugin">
                      <div
                        className="table-responsive mb-0"
                        data-pattern="priority-columns"
                      >
                        <Table
                          id="tech-companies-1"
                          className="table table-striped table-bordered"
                        >
                          <Thead>
                            <Tr>
                              <Th>{this.props.t("Department")}</Th>
                              <Th data-priority="1">{this.props.t("Contact Name")}</Th>
                              <Th data-priority="3">{this.props.t("Phone")}</Th>
                              <Th data-priority="1">{this.props.t("Email")}</Th>
                              <Th data-priority="3">{this.props.t("Mobile")}</Th>
                              <Th data-priority="3">{this.props.t("Fax")}</Th>
                              <Th data-priority="4">{this.props.t("Action")}</Th>
                              
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Th>
                               
                                <span className="co-name">Accounts</span>
                              </Th>
                              <Td> Vineet Kaushik</Td>
                              <Td> 989-897-6494 </Td>
                              <Td>contact@dlf.com</Td>
                              <Td>901-897-6494</Td>
                              <Td>+1 983-897-6494</Td>
                              <Td>
                              

                              </Td>
                             
                            </Tr>
                            
                          </Tbody>
                        </Table>
                      </div>
                    </div>
                          </Col>

                      </Row>


                      </AvForm>
                            

                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="4">
                        <Row>
                          <Col sm="12">
                            <CardText className="mb-0">
                            <AvForm className="needs-validation">
                      <Row>
                        <Col md="3">
                          <FormGroup className="mb-3">
                            <Label htmlFor="mediaName">
                              {this.props.t("Name")}
                            </Label>
                            <AvField
                              name="mediaName"
                             
                              type="text"
                              errorMessage={this.props.t("Enter Name")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="mediaName"
                            />
                          </FormGroup>
                        </Col>

                        <Col md="3">
                          <FormGroup className="mb-3">
                            <Label htmlFor="mediaType">
                              {this.props.t("Type")}
                            </Label>
                            <AvField
                              name="mediaType"
                              
                              type="select"
                              
                              errorMessage={this.props.t("Select Type")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="mediaType"
                            />
                          </FormGroup>
                        </Col>

                        <Col md="3">
                          <FormGroup className="mb-3">
                            <Label htmlFor="mediaUpload">
                              {this.props.t("Upload File")}
                            </Label>
                            
                            <Input className="form-control" type="file" id="formFile" />
                          </FormGroup>
                        </Col>
                        <Col md="3">
                          <FormGroup className="mb-3">
                            <Label htmlFor="gDrive">
                              {this.props.t("Google Drive Url")}
                            </Label>
                            <AvField
                              name="gDrive"
                             
                              type="text"
                              errorMessage={this.props.t("Enter Google Drive Url")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="gDrive"
                            />
                          </FormGroup>
                        </Col>
                        <div className="clearFix"><button type="submit" className="btn btn-primary w-md float-end">{this.props.t("Add")}</button></div>
                      </Row>                
                  
                      
                     
                      
                      <Row className="mt20">
                          <Col lg="12">
                          <div className="table-rep-plugin">
                      <div
                        className="table-responsive mb-0"
                        data-pattern="priority-columns"
                      >
                        <Table
                          id="tech-companies-1"
                          className="table table-striped table-bordered"
                        >
                          <Thead>
                            <Tr>
                              <Th>{this.props.t("Name")}</Th>
                              <Th data-priority="1">{this.props.t("Type")}</Th>
                              <Th data-priority="3">{this.props.t("Download")}</Th>
                              
                              
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Th>
                               
                                <span className="co-name">Logo</span>
                              </Th>
                              <Td>Image </Td>
                              <Td><a href="#">View</a></Td>
                             
                              
                             
                            </Tr>
                            
                          </Tbody>
                        </Table>
                      </div>
                    </div>
                          </Col>

                      </Row>


                      </AvForm>
                            
                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="5">
                        <Row>
                          <Col sm="12">
                            <CardText className="mb-0">
                            <AvForm className="needs-validation">
                      <Row>
                        

                        

                        <Col md="12">
                          <FormGroup className="mb-3">
                            <Label htmlFor="mediaUpload">
                              {this.props.t("Upload File")}
                            </Label>
                            
                            <Dropzone
                        onDrop={acceptedFiles =>
                          this.handleAcceptedFiles(acceptedFiles)
                        }
                      >
                        {({ getRootProps, getInputProps }) => (
                          <div className="dropzone">
                            <div
                              className="dz-message needsclick"
                              {...getRootProps()}
                            >
                              <input {...getInputProps()} />
                              <div className="mb-3">
                                <i className="display-4 text-muted bx bxs-cloud-upload" />
                              </div>
                              <h4>Drop files here or click to upload.</h4>
                            </div>
                          </div>
                        )}
                      </Dropzone>
                          </FormGroup>
                        </Col>
                        <Col md="3">
                        
                        </Col>
                       
                      </Row>                
                  
                      
                     
                      
                      <Row className="mt20">
                          <Col lg="12">
                          <div className="popup-gallery d-flex flex-wrap">
                      <div className="img-fluid">
                        <img
                          src={img1}
                          onClick={() =>
                            this.setState({ isGallery: true, photoIndex: 0 })
                          }
                          alt=""
                          width="120"
                        />
                      </div>
                      <div className="img-fluid">
                        <img
                          src={img2}
                          onClick={() =>
                            this.setState({ isGallery: true, photoIndex: 1 })
                          }
                          alt=""
                          width="120"
                        />
                      </div>
                      <div className="img-fluid">
                        <img
                          src={img3}
                          onClick={() =>
                            this.setState({ isGallery: true, photoIndex: 2 })
                          }
                          alt=""
                          width="120"
                        />
                      </div>
                      <div className="img-fluid">
                        <img
                          src={img4}
                          onClick={() =>
                            this.setState({ isGallery: true, photoIndex: 3 })
                          }
                          alt=""
                          width="120"
                        />
                      </div>
                      <div className="img-fluid">
                        <img
                          src={img5}
                          onClick={() =>
                            this.setState({ isGallery: true, photoIndex: 4 })
                          }
                          alt=""
                          width="120"
                        />
                      </div>
                      <div className="img-fluid">
                        <img
                          src={img6}
                          onClick={() =>
                            this.setState({ isGallery: true, photoIndex: 5 })
                          }
                          alt=""
                          width="120"
                        />
                      </div>
                    </div>
                          </Col>

                      </Row>


                      </AvForm>
                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="6">
                        <Row>
                          <Col sm="12">
                            <CardText className="mb-0">
                            <AvForm className="needs-validation">
                      <Row>
                        <Col md="4">
                          <FormGroup className="mb-3">
                            <Label htmlFor="departCont">
                              {this.props.t("Payment Plan Name")}
                            </Label>
                            <AvField
                              name="departCont"
                             
                              type="text"
                              errorMessage={this.props.t("Enter Payment Plan Name")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="departCont"
                            />
                          </FormGroup>
                        </Col>

                        <Col md="4">
                          <FormGroup className="mb-3">
                            <Label htmlFor="contactName">
                              {this.props.t("Type")}
                            </Label>
                            <AvField
                              name="contactName"
                             
                              type="text"
                              errorMessage={this.props.t("Enter Type")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="contactName"
                            />
                          </FormGroup>
                        </Col>

                        <Col md="4">
                          <FormGroup className="mb-3">
                            <Label htmlFor="contactPhone">
                              {this.props.t("Payment Type")}
                            </Label>
                            <AvField
                              name="contactPhone"
                             
                              type="text"
                              errorMessage={this.props.t("Enter Payment Type")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="contactPhone"
                            />
                          </FormGroup>
                        </Col>
                        
                      </Row>


                      <Row>
                        <Col md="4">
                          <FormGroup className="mb-3">
                            <Label htmlFor="emailContact">
                              {this.props.t("Amount / Percentage")}
                            </Label>
                            <AvField
                              name="emailContact"
                             
                              type="text"
                              errorMessage={this.props.t("Enter Amount")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="emailContact"
                            />
                          </FormGroup>
                        </Col>

                        <Col md="4">
                          <FormGroup className="mb-3">
                            <Label htmlFor="contactMobile">
                              {this.props.t("Schedule Type ")}
                            </Label>
                            <AvField
                              name="contactMobile"
                             
                              type="text"
                              errorMessage={this.props.t("Enter Schedule Type ")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="contactMobile"
                            />
                          </FormGroup>
                        </Col>

                        <Col md="4">
                          <FormGroup className="mb-3">
                            <Label htmlFor="contactFax">
                              {this.props.t("Schedule")}
                            </Label>
                            <AvField
                              name="contactFax"
                             
                              type="text"
                              errorMessage={this.props.t("Enter Schedule")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="contactFax"
                            />
                          </FormGroup>
                        </Col>
                        <div className="clearFix"><button type="submit" className="btn btn-primary w-md float-end">{this.props.t("Save & Continue..")}</button></div>
                      </Row>
                      </AvForm>
                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="7">
                        <Row>
                          <Col sm="12">
                            <CardText className="mb-0">
                            <AvForm className="needs-validation">
                         <Row>
                        

                        

                        <Col md="3">
                          <FormGroup className="mb-3">
                            <Label htmlFor="marketingPlatform">
                              {this.props.t("Platform")}
                            </Label>
                            
                            <AvField type="select" name="marketingPlatform">
                              <option>Test 1</option>
                              <option>Test 2</option>
                              <option>Test 3</option>
                              <option>Test 4</option>
                              <option>Test 5</option>
                            </AvField>
                          </FormGroup>
                        </Col>
                        <Col md="3">
                        <FormGroup className="mb-3">
                            <Label htmlFor="marketBudget">
                              {this.props.t("Allocated Budget")}
                            </Label>
                            <AvField
                              name="marketBudget"
                             
                              type="text"
                             
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="marketBudget"
                            />
                          </FormGroup>

                        </Col>
                        <Col md="3">
                        <FormGroup className="mb-3">
                            <Label htmlFor="marketSpent">
                              {this.props.t("Already Spent")}
                            </Label>
                            <AvField
                              name="marketSpent"
                             
                              type="text"
                              errorMessage={this.props.t("Enter Already Spent")}
                              className="form-control"
                              validate={{ required: { value: false } }}
                              id="marketSpent"
                            />
                          </FormGroup>

                        </Col>
                        <Col md="3">
                        <div className="clearFix"><button type="submit" className="btn btn-primary w-md mt20"> {this.props.t("Save")}</button></div>
                        </Col>
                       
                      </Row>                
                  
                      
                     
                      
                     


                      </AvForm>
                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>
                    </TabContent>
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

ProjectsCreate.propTypes = {
  projects: PropTypes.array,
  onGetProjects: PropTypes.func,
  onAddNewProject: PropTypes.func,
  t:PropTypes.any
}

const mapStateToProps = ({ projects }) => ({
  projects: projects.projects,
})

const mapDispatchToProps = dispatch => ({
  onGetProjects: () => dispatch(getProjects()),
  onAddNewProject: project => dispatch(addNewProject(project)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withTranslation()(ProjectsCreate)))