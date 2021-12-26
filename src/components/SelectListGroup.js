import React from 'react';

const SelectListGroup = ({name, value, onChange, options}) => {
    
    const selectOptions = options.map(option => (
        <option key={option.label} value={option.value}>
            {option.label}
        </option>
    ));
    
    return (
        <div className='form-group'>    
            <select 
                className='form-control form-control-lg'
                name={name}
                value={value}
                onChange={onChange}
                type='select'
            >
                {selectOptions}
            </select>           
        </div>
    );
};

export default SelectListGroup;