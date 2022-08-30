// @ts-nocheck 
import { Form } from "react-bootstrap"
import { NSFormGroupItem } from './NSFormGroupItem';
import React, { useState, useEffect } from 'react';

const NSFormGroup = ({variantId, variantName, variantLabel, variantFields, controlId, isChecked, disabled}) => {

    const [checkboxState, changeState] = useState(isChecked);
    const [isDisabled, changeFormState] = useState(disabled);

    const onHandleChange = (value) => {
        changeState(value);
    };

    useEffect(() => {
        changeFormState(disabled);
    }, [disabled]);

    if (variantFields) {
        return (
            <Form.Group controlId={controlId} className="mt-1">
                <Form.Check
                    type="radio"
                    id={variantId}
                    name={variantName}
                    label={variantLabel}
                    checked={checkboxState}
                    disabled={!isDisabled}
                    onChange={({target}) => onHandleChange(target.checked)}
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
            disabled={!isDisabled}
            onChange={({target}) => onHandleChange(target.value)}
        />
    );
};

export { NSFormGroup };