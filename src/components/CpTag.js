import React from 'react';

const CpTag =({name, value, onChange,type})=>{
 

return( 
    <p>
    {name} <input type="number" value={value} onChange={onChange}/>
    </p>);
    
};

CpTag.propTypes={
    name:React.PropTypes.string,
    value:React.PropTypes.number,
    onChange: React.PropTypes.func

};

export default CpTag
