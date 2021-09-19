import React from "react"
import { Redirect } from "react-router-dom"


// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

// Dashboard
import Dashboard from "../pages/Dashboard/index"

//Project

import Project from "../pages/Pre-Construction/Projects"
import ProjectsCreate from "../pages/Pre-Construction/Projects/projects-create"
import ProjectDetail from "../pages/Pre-Construction/Projects/project-detail"
import Campaign from "../pages/Pre-Construction/Projects/Campaign"

import Builder from "../pages/Pre-Construction/Builder"
import BuilderDetail from "../pages/Pre-Construction/Builder/Builder-detail"
import BuilderCreate from "../pages/Pre-Construction/Builder/Builder-create"

const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },

  //profile
  { path: "/Pre-Construction/Project", component: Project },
  { path: "/Pre-Construction/create-project", component: ProjectsCreate },
  { path: "/Pre-Construction/project-detail", component: ProjectDetail },
  { path: "/Pre-Construction/Campaign", component: Campaign },

  { path: "/Pre-Construction/Builder", component: Builder },
  { path: "/Pre-Construction/Builder/Builder-detail", component: BuilderDetail },
  { path: "/Pre-Construction/Builder/create", component: BuilderCreate },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> }
]

const publicRoutes = [
  
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register }
]

export { authProtectedRoutes, publicRoutes }
