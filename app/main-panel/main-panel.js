import React from 'react';

import { Location, Locations } from 'react-router-component';

import SystemSetting from './system-setting/system-setting';
import Dashboard from './dashboard/dashboard';
import LoanQuery from './loan-query/loan-query';

const MainPanel = () => (
    <div className="content">
        <Locations>
          <Location path="/" handler={Dashboard} />
          <Location path="/view/dashboard(/*)" handler={Dashboard} />
          <Location path="/view/system(/*)" handler={SystemSetting} />
          <Location path="/view/loan(/*)" handler={LoanQuery} />
        </Locations>
    </div>
);

export default MainPanel;