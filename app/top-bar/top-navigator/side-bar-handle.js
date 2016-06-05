import React, { PropTypes } from 'react';
import {registerReducer} from 'reducers';
import { connect } from 'react-redux';

const SideBarHandle = ({toggleSideBar}) => (
    <a href="#"
        className="sidebar-open-button"
        onClick={e => {
            e.preventDefault();
            toggleSideBar();
            return false;}}>
        <i className="fa fa-bars"></i>
    </a>
)

SideBarHandle.propTypes = {
    toggleSideBar: PropTypes.func.isRequired
};

const toggleSideBar = () => {
    return {
        type: 'TOGGLE_SIDE_BAR'
    }
}

registerReducer('TOGGLE_SIDE_BAR', (state, action) => {
    state.showSideBar = !state.showSideBar;
    return state;
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSideBar: () => {
      dispatch(toggleSideBar())
    }
  }
}

const SideBarHandleWrapper = connect(
  null,
  mapDispatchToProps
)(SideBarHandle)

export default SideBarHandleWrapper;