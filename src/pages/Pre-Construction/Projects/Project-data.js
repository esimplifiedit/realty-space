import React, { Component } from "react"
import { Row, Col, Card, CardBody } from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
class ProjectData extends Component {
    constructor(props) {
      super(props)
      this.state = {}
    }

    render() {
        return (
          <React.Fragment>
              <Card className="overflow-hidden">
                    <div className="project-detail p-3">
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
                              <Th>Project Name</Th>
                              <Th data-priority="1">Builder</Th>
                              <Th data-priority="3"> Primary Contact</Th>
                              <Th data-priority="1"> Site Address</Th>
                             
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Th>
                              Nahid{" "}
                                <span className="co-name"> Nahid Kennedy </span>
                              </Th>
                              <Td> Nahid Corp </Td>
                              <Td> Mohit Grover </Td>
                              <Td> 615 Kennedy Road, Toronto, ON </Td>
                              
                            </Tr>
                        </Tbody>
                        </Table>
                        
                        </div>
                        </div>
                    
                    </div>
          </Card>
         </React.Fragment>
        )
    }
}

export default ProjectData