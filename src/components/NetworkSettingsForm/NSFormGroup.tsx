import { Form } from "react-bootstrap"
import { NSFormGroupItem } from './NSFormGroupItem';
import React, { useState, useEffect } from 'react';
import { INsGroup } from "../../types/nsGroup";


const NSFormGroup:React.FC<INsGroup> = ({variantId, variantName, variantLabel, variantFields, controlId, isChecked, disabled}) => {
    const [checkboxState, changeState] = useState(isChecked);
    const [isDisabled, changeFormState] = useState(disabled);

    const onHandleChange:React.ChangeEventHandler<HTMLInputElement> = (event) => {
        changeState(event.target.checked);
    };

    useEffect(() => { 
        changeFormState(disabled); 
    }, [disabled]);

    if (variantFields && controlId) {
        return (
            <Form.Group controlId={controlId} className="mt-1">
                <Form.Check
                    type="radio"
                    id={variantId}
                    name={variantName}
                    label={variantLabel}
                    checked={checkboxState}
                    disabled={isDisabled}
                    onChange={onHandleChange}
                />
                <div className='text-end'>
                    { variantFields.map((field, ind) => <NSFormGroupItem key={controlId + ind} {...field} enabled={isDisabled} />) }
                </div>
            </Form.Group>
        );
    }

    return (
        <Form.Check
            type="radio"
            id={variantId}
            name={variantName}
            label={variantLabel}
            checked={checkboxState}
            disabled={isDisabled}
            onChange={onHandleChange}
        />
    );
};

export { NSFormGroup };