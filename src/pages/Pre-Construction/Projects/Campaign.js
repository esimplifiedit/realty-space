import React, { Component } from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import MetaTags from 'react-meta-tags';
import { withTranslation } from "react-i18next"
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import CampaignData from "./Campaign-data"
import classnames from "classnames"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import { AvField, AvForm } from "availity-reactstrap-validation"
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, {
  PaginationProvider, PaginationListStandalone,
  SizePerPageDropdownStandalone
} from 'react-bootstrap-table2-paginator';

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
const prospectsData = [
    
         { "id": 1, "name": "Vineet Kaushik", "date": "07 Oct, 2019", "email": "vineet@vineet.com", "status": "Sent", "phone": " 987-654-3257", "source": "Mail Blast" },
         { "id": 2, "name": "Vineet Kaushik", "date": "07 Oct, 2019", "email": "vineet@vineet.com", "status": "Sent", "phone": " 987-654-3257", "source": "Mail Blast" }
  
    
  ];

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

class Campaign extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: "1",
            verticalActiveTab: "1",
            page: 1,
            sizePerPage: 10,
            prospectsData: prospectsData
        }
      }
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab,
          })
        }
      }
        


      render() {
        const columns = [{
            dataField: 'name',
            text: 'Name',
            sort: false
          }, {
            dataField: 'date',
            text: 'Date',
            sort: false
          }, {
            dataField: 'email',
            text: 'Email',
            sort: false
          }, {
            dataField: 'status',
            text: 'Status',
            sort: false
          }, {
            dataField: 'phone',
            text: 'Phone',
            sort: false
          }, {
            dataField: 'source',
            text: 'Source',
            sort: false
          },{
            dataField: '',
            text: 'Action',
            sort: false
          }];
      
          const defaultSorted = [{
            dataField: 'name',
            order: 'asc'
          }];
      
          const pageOptions = {
            sizePerPage: 10,
            totalSize: prospectsData.length, // replace later with size(customers),
            custom: true,
          }
      
          // Custom Pagination Toggle
          const sizePerPageList = [
            { text: '5', value: 5 },
            { text: '10', value: 10 },
            { text: '15', value: 15 },
            { text: '20', value: 20 },
            { text: '25', value: 25 },
            { text: 'All', value: (this.state.prospectsData).length }];
      
        
          // Select All Button operation
          const selectRow = {
            mode: 'checkbox'
          }
      
          const { SearchBar } = Search;

        return (
          <React.Fragment>
              <div className="page-content">

                <MetaTags>
                <title>Campaigns | Realty Space</title>
                </MetaTags>
                <Container fluid>
                {/* Render Breadcrumbs */}
                <Breadcrumbs title={this.props.t("Projects")} breadcrumbItem={this.props.t("Campaigns")} />
                <Row>
                    <Col md="4">
                        <CampaignData />
                    </Col>
                    <Col lg="8">
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
                                    {this.props.t("Integration")}
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
                          {this.props.t("Send Emails")}
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
                          {this.props.t("Current Prospects")}
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
                          {this.props.t("SRR filled")}
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
                          {this.props.t("Client")}
                        </NavLink>
                      </NavItem>
                            </Nav>
                            <TabContent activeTab={this.state.activeTab} className="p-3 text-muted">
                                <TabPane tabId="1">
                                   
                                        <h4 className="card-title mb-4">All Integrations <a href="#" className="btn btn-danger waves-effect waves-light btn-sm float-end"><i className="mdi mdi-plus ml-1"></i> New Integration</a></h4>

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
                                                        <Th>{this.props.t("Title")}</Th>
                                                        <Th data-priority="1">{this.props.t("Generated BCC Email")}</Th>
                                                        <Th data-priority="3">{this.props.t("Action")}</Th>
                                                    
                                                        </Tr>
                                                    </Thead>
                                                    <Tbody>
                                                        <Tr>
                                                        <Th>
                                                            
                                                            <span className="co-name">Facebook</span>
                                                        </Th>
                                                        <Td> nKennedyfb@realtyspace.com </Td>
                                                        <Td><a href="#">View</a></Td>
                                                       
                                                        </Tr>
                                                        <Tr>
                                                        <Th>
                                                            
                                                            <span className="co-name">Website</span>
                                                        </Th>
                                                        <Td>  nKennedy019Website2@realtyspace.com  </Td>
                                                        <Td><a href="#">View</a></Td>
                                                       
                                                        </Tr>
                                                        
                                                    </Tbody>
                                                    </Table>
                                                </div>
                                                </div>
                                                <Row>
                                                    <Col md="12">
                                                    <h4 className="card-title mb-4">Create New Integration</h4>
                                                    <h6 className="mb-4">BCC Email Settings</h6>
                                                   
                                                    </Col>

                                                    <AvForm className="needs-validation">
                                                    
                                                    <FormGroup className="mb-3">
                                                    <Label htmlFor="">
                                                      {this.props.t("Lead Source")}
                                                    </Label>
                                                    <AvField
                                                      name="d"
                                                      type="text"
                                                      errorMessage={this.props.t("Enter Campaign Title")}
                                                      className="form-control"
                                                      validate={{ required: { value: false } }}
                                                      id=""
                                                    />
                                                  </FormGroup>

                                                  <FormGroup className="mb-3">
                                                    <Label htmlFor="">
                                                      {this.props.t("Step 1")}
                                                    </Label>
                                                    <div className="d-grid gap-2">
                                                    <button type="button" className="btn btn-success waves-effect waves-light btn-block">Generate BCC Email <i className="mdi mdi-plus-box-outline ml-1"></i></button>
 
                                                    </div>
                                                    
                                                  </FormGroup>
                                                  <FormGroup className="mb-3">
                                                    <Label htmlFor="">
                                                      {this.props.t("Step 2 - Please ADD the above email id as a BCC email to your 'Lead Source'")}
                                                    </Label>
                                                    <div className="d-grid gap-2">
                                                    <button type="button" className="btn btn-primary waves-effect waves-light btn-block">Click to Load Email from above email account  <i className="mdi mdi-plus-box-outline ml-1"></i></button>
 
                                                    </div>
                                                    
                                                  </FormGroup>

                                                  <FormGroup className="mb-3">
                                                    <Label htmlFor="">
                                                      {this.props.t("Step 3 - Map Email Fields")}
                                                    </Label>
                                                    
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
                                                        <Th>{this.props.t("Field")}</Th>
                                                        <Th data-priority="1">{this.props.t("Value")}</Th>
                                                        <Th data-priority="3">{this.props.t("Lead Mapping")}</Th>
                                                    
                                                        </Tr>
                                                    </Thead>
                                                    <Tbody>
                                                        <Tr>
                                                        <Th>
                                                            
                                                            <span className="co-name"> First Name </span>
                                                        </Th>
                                                        <Td> Vineet</Td>
                                                        <Td><FormGroup className="mb-3">
                                                                                                                  
                                                          <AvField type="select" name="ls">
                                                          <option></option>
                                                            <option>Test 1</option>
                                                            <option>Test 2</option>
                                                            <option>Test 3</option>
                                                            <option>Test 4</option>
                                                            <option>Test 5</option>
                                                          </AvField>
                                                        </FormGroup></Td>
                                                       
                                                        </Tr>
                                                        <Tr>
                                                        <Th>
                                                            
                                                            <span className="co-name"> Last  Name </span>
                                                        </Th>
                                                        <Td> Koushik</Td>
                                                        <Td><FormGroup className="mb-3">
                                                                                                                  
                                                          <AvField type="select" name="ls">
                                                          <option></option>
                                                            <option>Test 1</option>
                                                            <option>Test 2</option>
                                                            <option>Test 3</option>
                                                            <option>Test 4</option>
                                                            <option>Test 5</option>
                                                          </AvField>
                                                        </FormGroup></Td>
                                                       
                                                        </Tr>
                                                        <Tr>
                                                        <Th>
                                                            
                                                            <span className="co-name"> Email </span>
                                                        </Th>
                                                        <Td> Koushik@gmail.com</Td>
                                                        <Td><FormGroup className="mb-3">
                                                                                                                  
                                                          <AvField type="select" name="ls">
                                                          <option></option>
                                                            <option>Test 1</option>
                                                            <option>Test 2</option>
                                                            <option>Test 3</option>
                                                            <option>Test 4</option>
                                                            <option>Test 5</option>
                                                          </AvField>
                                                        </FormGroup></Td>
                                                       
                                                        </Tr>
                                                        <Tr>
                                                        <Th>
                                                            
                                                            <span className="co-name"> Mobile </span>
                                                        </Th>
                                                        <Td>1234567890</Td>
                                                        <Td><FormGroup className="mb-3">
                                                                                                                  
                                                          <AvField type="select" name="ls">
                                                          <option></option>
                                                            <option>Test 1</option>
                                                            <option>Test 2</option>
                                                            <option>Test 3</option>
                                                            <option>Test 4</option>
                                                            <option>Test 5</option>
                                                          </AvField>
                                                        </FormGroup></Td>
                                                       
                                                        </Tr>
                                                        <Tr>
                                                        <Th>
                                                            
                                                            <span className="co-name"> Project </span>
                                                        </Th>
                                                        <Td> Nahid Kennedy </Td>
                                                        <Td><FormGroup className="mb-3">
                                                                                                                  
                                                          <AvField type="select" name="ls">
                                                          <option></option>
                                                            <option>Test 1</option>
                                                            <option>Test 2</option>
                                                            <option>Test 3</option>
                                                            <option>Test 4</option>
                                                            <option>Test 5</option>
                                                          </AvField>
                                                        </FormGroup></Td>
                                                       
                                                        </Tr>
                                                        <Tr>
                                                        <Th>
                                                            
                                                            <span className="co-name"> Lead Generator +  </span>
                                                        </Th>
                                                        <Td> Facebook Form </Td>
                                                        <Td><FormGroup className="mb-3">
                                                                                                                  
                                                          <AvField type="select" name="ls">
                                                          <option></option>
                                                            <option>Test 1</option>
                                                            <option>Test 2</option>
                                                            <option>Test 3</option>
                                                            <option>Test 4</option>
                                                            <option>Test 5</option>
                                                          </AvField>
                                                        </FormGroup></Td>
                                                       
                                                        </Tr>
                                                        <Tr>
                                                        <Th>
                                                            
                                                            <span className="co-name">  Create date   </span>
                                                        </Th>
                                                        <Td>  05/22/2021  </Td>
                                                        <Td><FormGroup className="mb-3">
                                                                                                                  
                                                          <AvField type="select" name="ls">
                                                          <option></option>
                                                            <option>Test 1</option>
                                                            <option>Test 2</option>
                                                            <option>Test 3</option>
                                                            <option>Test 4</option>
                                                            <option>Test 5</option>
                                                          </AvField>
                                                        </FormGroup></Td>
                                                       
                                                        </Tr>
                                                        
                                                        
                                                    </Tbody>
                                                    </Table>
                                                </div>
                                                </div>
                                                  </FormGroup>
                                                  </AvForm>
                                                </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                <h4 className="card-title mb-4">Sent Emails</h4>
                                <h6>New Mass Mail</h6>
                                <Row>
                          <Col sm="12">
                            <CardText className="mb-0">
                            <AvForm className="needs-validation">
                         <Row>
                        

                        

                        <Col md="3">
                          
                          <FormGroup className="mb-3">
                            <Label htmlFor="marketBudget">
                              {this.props.t("Campaign Title")}
                            </Label>
                            <AvField
                              name="campTitle"
                              type="text"
                              errorMessage={this.props.t("Enter Campaign Title")}
                              className="form-control"
                              validate={{ required: { value: true } }}
                              id="campTitle"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="3">
                        <FormGroup className="mb-3">
                            <Label htmlFor="campSource">
                              {this.props.t("Source")}
                            </Label>
                            
                            <AvField type="select" name="campSource">
                            <option></option>
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
                            <Label htmlFor="campEmail">
                              {this.props.t("Email Template")}
                            </Label>
                            
                            <AvField type="select" name="campEmail">
                            <option></option>
                              <option>Test 1</option>
                              <option>Test 2</option>
                              <option>Test 3</option>
                              <option>Test 4</option>
                              <option>Test 5</option>
                            </AvField>
                          </FormGroup>

                        </Col>
                        <Col md="3">
                        <div className="clearFix"><button type="submit" className="btn btn-primary w-md mt20"> {this.props.t("Send Mass mail")}</button></div>
                        </Col>
                       
                      </Row>                
                  
                      </AvForm>
                          <Row>
                                <Col md="12">
                                    <h4 className="card-title mb-4">All Mail Campaign</h4>

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
                                                        <Th>{this.props.t("Date")}</Th>
                                                        <Th data-priority="1">{this.props.t("Title")}</Th>
                                                        <Th data-priority="3">{this.props.t("Source")}</Th>
                                                        <Th data-priority="3">{this.props.t("Email Template")}</Th>
                                                        <Th data-priority="3">{this.props.t("Stats")}</Th>
                                                        <Th data-priority="3">{this.props.t("Action")}</Th>
                                                    
                                                        </Tr>
                                                    </Thead>
                                                    <Tbody>
                                                        <Tr>
                                                        <Th>
                                                            
                                                            <span className="co-name"> 10th June 2021 </span>
                                                        </Th>
                                                        <Td>  VIP-Launch  </Td>
                                                        <Td>   VIP List   </Td>
                                                        <Td>    VIP Launch Template   </Td>
                                                        <Td>     Clicked: 200 | Bounced : 210    </Td>
                                                        <Td><a href="#">View</a></Td>
                                                       
                                                        </Tr>
                                                       
                                                        
                                                    </Tbody>
                                                    </Table>
                                                </div>
                                                </div>
                                </Col>
                          </Row>
                            </CardText>
                          </Col>
                        </Row>  
                                </TabPane>
                                <TabPane tabId="3">
                                <h4 className="card-title mb-4">Prospect <a href="#" className="btn btn-danger waves-effect waves-light btn-sm float-end"><i className="mdi mdi-plus ml-1"></i> Add New Prospect </a></h4>
                                <PaginationProvider
                      pagination={paginationFactory(pageOptions)}
                      keyField='id'
                      columns={columns}
                      data={this.state.prospectsData}
                    >
                      {({ paginationProps, paginationTableProps }) => (
                        <ToolkitProvider
                          keyField='id'
                          columns={columns}
                          data={this.state.prospectsData}
                          search
                        >
                          {toolkitProps => (
                            <React.Fragment>

                              <Row className="mb-2">
                                <Col md="4">
                                  <div className="search-box me-2 mb-2 d-inline-block">
                                    <div className="position-relative">
                                      <SearchBar
                                        {...toolkitProps.searchProps}
                                      />
                                      <i className="bx bx-search-alt search-icon" />
                                    </div>
                                  </div>
                                </Col>
                              </Row>

                              <Row>
                                <Col xl="12">
                                  <div className="table-responsive">
                                    <BootstrapTable
                                      keyField={"id"}
                                      responsive
                                      bordered={false}
                                      striped={false}
                                      defaultSorted={defaultSorted}
                                      selectRow={selectRow}
                                      classes={
                                        "table align-middle table-nowrap"
                                      }
                                      headerWrapperClasses={"thead-light"}
                                      {...toolkitProps.baseProps}
                                      {...paginationTableProps}
                                    />

                                  </div>
                                </Col>
                              </Row>

                              <Row className="align-items-md-center mt-30">
                                <Col className="inner-custom-pagination d-flex">
                                  <div className="d-inline">
                                    <SizePerPageDropdownStandalone
                                      {...paginationProps}
                                    />
                                  </div>
                                  <div className="text-md-right ms-auto">
                                    <PaginationListStandalone
                                      {...paginationProps}
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </React.Fragment>
                          )
                          }
                        </ToolkitProvider>
                      )
                      }</PaginationProvider>
                                </TabPane>
                                <TabPane tabId="4">
                                <h4 className="card-title mb-4">Suite Request Form  <a href="#" className="btn btn-danger waves-effect waves-light btn-sm float-end"><i className="mdi mdi-plus ml-1"></i> Add New </a></h4>

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
                                                        <Th data-priority="1">{this.props.t("Date")}</Th>
                                                        <Th data-priority="3">{this.props.t("Email")}</Th>
                                                        <Th data-priority="3">{this.props.t("Phone")}</Th>
                                                        <Th data-priority="3">{this.props.t("Action")}</Th>
                                                    
                                                        </Tr>
                                                    </Thead>
                                                    <Tbody>
                                                        <Tr>
                                                        <Th>
                                                            
                                                            <span className="co-name">Jams Matthews</span>
                                                        </Th>
                                                        <Td>  07 Oct, 2019  </Td>
                                                        <Td> neal@gmail.com </Td>
                                                        <Td>  986-765-9090  </Td>
                                                        <Td>  <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
                                                                SRR Details
                                                            </button>  
                                                            
                                                            <button type="button" className="btn btn-danger btn-sm btn-rounded waves-effect waves-light">
                                                                Add as Client
                                                            </button>
                                                            </Td>

                                                        </Tr>
                                                       
                                                        
                                                    </Tbody>
                                                    </Table>
                                                </div>
                                                </div>
                                    
                                </TabPane>
                                <TabPane tabId="5">
                                <h4 className="card-title mb-4">Client  <a href="#" className="btn btn-danger waves-effect waves-light btn-sm float-end"><i className="mdi mdi-plus ml-1"></i> Add New </a></h4>
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
                                                        <Th data-priority="1">{this.props.t("Date")}</Th>
                                                        <Th data-priority="3">{this.props.t("Email")}</Th>
                                                        <Th data-priority="3">{this.props.t("Phone")}</Th>
                                                        <Th data-priority="3">{this.props.t("Action")}</Th>
                                                    
                                                        </Tr>
                                                    </Thead>
                                                    <Tbody>
                                                        <Tr>
                                                        <Th>
                                                            
                                                            <span className="co-name">Jams Matthews</span>
                                                        </Th>
                                                        <Td>  07 Oct, 2019  </Td>
                                                        <Td> neal@gmail.com </Td>
                                                        <Td>  986-765-9090  </Td>
                                                        <Td>  <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
                                                        View Customer
                                                            </button>  
                                                            
                                                            
                                                            </Td>

                                                        </Tr>
                                                       
                                                        
                                                    </Tbody>
                                                    </Table>
                                                </div>
                                                </div>
                                </TabPane>
                            </TabContent>
                        </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                   
                </Row>
                </Container>
            </div>
          </React.Fragment>
        )
      }
}

Campaign.propTypes = {
    t:PropTypes.any
  }
export default connect( )(withRouter(withTranslation()(Campaign)))
