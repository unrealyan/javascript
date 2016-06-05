import React, { PropTypes } from 'react';
import {registerReducer} from 'reducers';
import { Link } from 'react-router-component';
import classNames from 'classnames';
import { connect } from 'react-redux';

import NoticeCenter from './notice-center/notice-center';




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
            <li><Link href="/view/noticeCenter/"><span className="icon color5"><i className="fa fa-envelope-o"></i></span>通知中心<span className="label label-default">2</span></Link></li>

                <div>
                    <li><Link href="/view/noticeCenter/newRegistration/"><span className="icon color5"><i className="fa fa-envelope-o"></i></span>新增报名<span className="label label-default">2</span></Link></li>
                    <li><Link href="/view/noticeCenter/newLoans/"><span className="icon color5"><i className="fa fa-envelope-o"></i></span>新增放款<span className="label label-default">2</span></Link></li>
                    <li><Link href="/view/noticeCenter/loanFailure/"><span className="icon color5"><i className="fa fa-envelope-o"></i></span>放款失败<span className="label label-default">2</span></Link></li>

                </div>
            <li><Link href="/view/workCenter/"><span className="icon color5"><i className="fa fa-envelope-o"></i></span>工作台<span className="label label-default">2</span></Link></li>
                <div>
                    <li><Link href="/view/workCenter/"><span className="icon color5"><i className="fa fa-envelope-o"></i></span>发起放款录入<span className="label label-default">2</span></Link></li>

                </div>



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