import {
  GET_BUILDER,
  GET_BUILDER_FAIL,
  GET_BUILDER_SUCCESS,
  GET_BUILDER_DETAIL,
  GET_BUILDER_DETAIL_FAIL,
  GET_BUILDER_DETAIL_SUCCESS,
  ADD_NEW_BUILDER,
  ADD_BUILDER_SUCCESS,
  ADD_BUILDER_FAIL,
  UPDATE_BUILDER,
  UPDATE_BUILDER_SUCCESS,
  UPDATE_BUILDER_FAIL,
  DELETE_BUILDER,
  DELETE_BUILDER_SUCCESS,
  DELETE_BUILDER_FAIL,
} from "./actionTypes"

export const getBuilder = () => ({
  type: GET_BUILDER,
})

export const getBuilderSuccess = builder => ({
  type: GET_BUILDER_SUCCESS,
  payload: builder,
})

export const getBuilderFail = error => ({
  type: GET_BUILDER_DETAIL,
  payload: error,
})

export const getBuilderDetail = builderId => ({
  type: GET_BUILDER_DETAIL,
  builderId,
})

export const getProjectDetailSuccess = projectDetails => ({
  type: GET_PROJECT_DETAIL_SUCCESS,
  payload: projectDetails,
})

export const getProjectDetailFail = error => ({
  type: GET_PROJECT_DETAIL_FAIL,
  payload: error,
})

export const addNewProject = project => ({
  type: ADD_NEW_PROJECT,
  payload: project,
})

export const addProjectSuccess = project => ({
  type: ADD_PROJECT_SUCCESS,
  payload: project,
})

export const addProjectFail = error => ({
  type: ADD_PROJECT_FAIL,
  payload: error,
})

export const updateProject = project => ({
  type: UPDATE_PROJECT,
  payload: project,
})

export const updateProjectSuccess = project => ({
  type: UPDATE_PROJECT_SUCCESS,
  payload: project,
})

export const updateProjectFail = error => ({
  type: UPDATE_PROJECT_FAIL,
  payload: error,
})

export const deleteProject = project => ({
  type: DELETE_PROJECT,
  payload: project,
})

export const deleteProjectSuccess = project => ({
  type: DELETE_PROJECT_SUCCESS,
  payload: project,
})

export const deleteProjectFail = error => ({
  type: DELETE_PROJECT_FAIL,
  payload: error,
})