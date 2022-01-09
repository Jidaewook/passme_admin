import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const TextAreaFiledGroup = ({name, placeholder, value, onChange}) => {
    return (
        <FormGroup>
            <Input
                type="textarea"
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
      </FormGroup>
    );
};

export default TextAreaFiledGroup;

 // <div className='form-group'>
        //     <textarea 
        //         className='form-group form-group-lg' 
        //         placeholder={placeholder}
        //         name={name}
        //         value={value}
        //         onChange={onChange}
        //     />
        // </div>