import React from 'react';

const LoanDetail = ({id}) => {
    console.log("detail id: " + id);
    return (
        <div>
            Im loan details. id: <span style={{fontSize: 18 + 'px', fontWeight: 'bold'}}>{id}</span>
        </div>
    )
};

export default LoanDetail;