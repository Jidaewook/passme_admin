import React from 'react';

const TextAreaFiledGroup = ({name, placeholder, value, onChange}) => {
    return (
        <div className='form-group'>
            <textarea 
                className='form-group form-group-lg' 
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default TextAreaFiledGroup;