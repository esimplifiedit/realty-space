import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { } from "../../store/actions"

import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"
import SidebarContent from "./SidebarContent"

import logo from "../../assets/images/realtyspace-logo.png"
import logoLightPng from "../../assets/images/realtyspace-logo.png"
import logoLightSvg from "../../assets/images/realtyspace-logo.png"
import logoDark from "../../assets/images/realtyspace-logo.png"
import smallLogo from "../../assets/images/small-logo.png"

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>

        <div className="vertical-menu">
          <div className="navbar-brand-box">
            <Link to="/" className="logo logo-dark">
              <span className="logo-sm">
                <img src={logo} alt="" height="22" />
              </span>
              <span className="logo-lg">
                <img src={logoDark} alt="" height="17" />
              </span>
            </Link>

            <Link to="/" className="logo logo-light">
              <span className="logo-sm">
                <img src={smallLogo} alt="" height="22" />
              </span>
              <span className="logo-lg">
                <img src={logoLightPng} alt="" />
              </span>
            </Link>
          </div>
          <div data-simplebar className="h-100">
            {this.props.type !== "condensed" ? (
              <SidebarContent />
            ) : (
              <SidebarContent />
            )}
          </div>
          <div className="sidebar-background"></div>
        </div>
      </React.Fragment>
    )
  }
}

Sidebar.propTypes = {
  type: PropTypes.string,
}

const mapStateToProps = state => {
  return {
    layout: state.Layout,
  }
}
export default connect(
  mapStateToProps,
  {}
)(withRouter(withTranslation()(Sidebar)))
