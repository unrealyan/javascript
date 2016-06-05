import React from 'react';

import { Location, Locations } from 'react-router-component';

import SystemSetting from './system-setting/system-setting';
import Dashboard from './dashboard/dashboard';
import LoanQuery from './loan-query/loan-query';
import NoticeCenter from '../side-bar/notice-center/notice-center';
import NewRegistration from '../side-bar/notice-center/new-registration/new-registration';
import NewLoans from '../side-bar/notice-center/new-loans/new-loans';
import LoansFailure from '../side-bar/notice-center/loan-failure/loan-failure';

const MainPanel = () => (
    <div className="content">
        <Locations>
          <Location path="/" handler={NoticeCenter} />

          <Location path="/view/noticeCenter/" handler={NoticeCenter} />
            <Location path="/view/noticeCenter/newRegistration/" handler={NewRegistration} />
            <Location path="/view/noticeCenter/newLoans/" handler={NewLoans} />
            <Location path="/view/noticeCenter/loanFailure/" handler={LoansFailure} />


            <Location path="/view/dashboard(/*)" handler={Dashboard} />
          <Location path="/view/system(/*)" handler={SystemSetting} />
          <Location path="/view/loan(/*)" handler={LoanQuery} />
        </Locations>
    </div>
);

export default MainPanel;