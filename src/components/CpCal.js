import React from 'react';

const CpCal=({from,to,min,max})=>{
    return (
        <p>
        <span style={{paddingRight: "100px"}}> {from} -&gt; {to}</span>
        <span style={{paddingRight: "100px"}}>Min CP: {min}</span>
        <span>Max CP: {max}</span>
</p>);
};

CpCal.proTYpes={
    from:React.PropTypes.string,
    to:React.PropTypes.string,
    min:React.PropTypes.number,
    max:React.PropTypes.number
};

export default CpCal