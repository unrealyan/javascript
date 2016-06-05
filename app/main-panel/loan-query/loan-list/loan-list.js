import React, {PropTypes} from 'react';
import {registerReducer} from 'reducers';
import { connect } from 'react-redux';

const SHOWDETAILS = 'SHOW_DETAILS';

const LoanList = ({showDetails}) => {
    let details = [
        {
            id: 1,
            name: "sky"
        },
        {
            id: 2,
            name: "john"
        }
    ];
    return (<table className="table table-bordered table-striped table-hover table-condensed">
        <thead>
            <th>id</th>
            <th>name</th>
            <th>xxx</th>
            <th>xxx</th>
            <th>xxxx</th>
        </thead>
        <tbody>
        {
            details.map((detail)=> {
                return (<tr
                    key={detail.id}
                    onClick={e => {
                    e.preventDefault();
                    showDetails(detail);
                    return false;
                }}>
                    <td>{detail.id}</td>
                    <td>{detail.name}</td>
                    <td>yyy</td>
                    <td>yyy</td>
                    <td>yyy</td>
                </tr>)
            })
        }
        </tbody>
    </table>)
};

LoanList.propTypes = {
    showDetails: PropTypes.func.isRequired
};

const showDetailsActionFunc = (details) => (
{
    type: SHOWDETAILS,
    details
}
);

registerReducer(SHOWDETAILS, (state, action)=> {

    return state;
});

const mapDispatchToProps = (dispatch) => {
    return {
        showDetails: (details) => {
            dispatch(showDetailsActionFunc(details))
        }
    }
};

const LoanListWrapper = connect(
    null,
    mapDispatchToProps
)(LoanList);

export default LoanListWrapper;