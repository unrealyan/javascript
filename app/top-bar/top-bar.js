import React from 'react';
import OrgLogo from './org-logo/org-logo';
import SideBarHandle from './top-navigator/side-bar-handle';
import UserCenter from './user-center/user-center';
const TopBar = () => (
    <div id="top" className="clearfix">
        <OrgLogo />
        <SideBarHandle />
        <UserCenter/>
    </div>
);


export default TopBar;