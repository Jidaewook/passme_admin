import React from 'react';
import { FormGroup, Input } from 'reactstrap';

const TextFiledGroup = ({
    name, placeholder, value, error, info, type, onChange, disabled
}) => {

    return (
        <FormGroup>
            <Input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}           
            />        
        </FormGroup>
    );
};

export default TextFiledGroup;