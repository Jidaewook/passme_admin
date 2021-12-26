import React from 'react';
import { Input } from 'reactstrap';

const TextFiledGroup = ({
    name, placeholder, value, error, info, type, onChange, disabled
}) => {

    return (
        <>
            <Input
                type={type}
                bsSize='lg' 
                className='mb-2 mt-2'
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}           
            />        
        </>
    );
};

export default TextFiledGroup;