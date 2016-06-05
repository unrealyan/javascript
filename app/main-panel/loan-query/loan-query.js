import React from 'react';

import { Location, Locations, Link, NotFound } from 'react-router-component';

import LoanList from './loan-list/loan-list';
import LoanDetail from './loan-detail/loan-detail';
import NotFoundPage from '../../404';

const LoanQuery = () => (
    <div>
        Im loan detail.
        <ul>
            <li><Link href="/view/loan/adsfadfasdf">404 test page</Link></li>
            <li><Link href="/view/loan/list">list page</Link></li>
            <li><Link href="/view/loan/detail/1">detail 1 page</Link></li>
            <li><Link href="/view/loan/detail/2">detail 2 page</Link></li>
            <li><Link href="/view/loan/detail/3">detail 3 page</Link></li>
        </ul>
        <Locations contextual>
            <Location path="/" handler={LoanList}/>
            <Location path="/list(/*)" handler={LoanList}/>
            <Location path="/detail/:id" handler={LoanDetail}/>
            <NotFound handler={NotFoundPage} />
        </Locations>
    </div>
);

export default LoanQuery;