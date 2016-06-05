import React from 'react';

import { Locations, Location, Link } from 'react-router-component';

import UserSetting from './user-setting/user-setting';
import RoleSetting from './role-setting/role-setting';

const SystemSetting = () => (
    <div>
        Im a system setting panel!
        <ul>
            <li><Link href="/view/system/user">user page</Link></li>
            <li><Link href="/view/system/role">role page</Link></li>
        </ul>
        <Locations contextual>
            <Location path="/" handler={UserSetting} />
            <Location path="/role(/*)" handler={RoleSetting} />
            <Location path="/user(/*)" handler={UserSetting} />
        </Locations>
    </div>

);

export default SystemSetting;