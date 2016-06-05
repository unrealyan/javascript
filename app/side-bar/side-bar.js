import React, { PropTypes } from 'react';
import {registerReducer} from 'reducers';
import { Link } from 'react-router-component';
import classNames from 'classnames';
import { connect } from 'react-redux';

const LOAN_NUM = 'LOAN_NUM';

const SideBar = ({showSideBar, loanNum, getLoanNum}) => {
    var sideBarClass = classNames({sidebar: true, clearfix: true, hidden: !showSideBar})
    setTimeout(()=>{
        //ajax count loan num
        getLoanNum(9999999);
    }, 5000);
    return <div className={sideBarClass}>
        <ul className="sidebar-panel nav">
            <li className="sidetitle">MAIN</li>
            <li><Link href="/view/dashboard/"><span className="icon color5"><i className="fa fa-home"></i></span>Dashboard<span className="label label-default">2</span></Link></li>
            <li><Link href="/view/system/"><span className="icon color6"><i className="fa fa-envelope-o"></i></span>System Setting<span className="label label-default">19</span></Link></li>
            <li><Link href="/view/loan/"><span className="icon color6"><i className="fa fa-envelope-o"></i></span>Loan<span className="label label-default">{loanNum}</span></Link></li>
        </ul>
    </div>
};

SideBar.propTypes = {
    showSideBar: PropTypes.bool.isRequired,
    loanNum: PropTypes.number.isRequired
};

const loanNum = (num) => {
    return {
        type: LOAN_NUM,
        num
    }
};

registerReducer(LOAN_NUM, (state, action) => {

    state.loanNum = action.num;
    return state;
});

const mapStateToProps = (state) =>
    ({
        showSideBar: state.main.showSideBar,
        loanNum: state.main.loanNum
    });

const mapDispatchToProps = (dispatch) => {
    return {
        getLoanNum: (num) => {
            dispatch(loanNum(num));
        }
    }
};

const SideBarWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);

export default SideBarWrapper;