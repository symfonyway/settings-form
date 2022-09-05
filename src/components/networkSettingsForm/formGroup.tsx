import { Form } from "react-bootstrap"
import { NSFormGroupItem } from './formGroupItem';
import React, { useState, useEffect } from 'react';
import { INsGroup } from "../../types/nsGroup";


const NSFormGroup:React.FC<INsGroup> = (props) => {
    const {variantId, variantName, variantLabel, variantFields, controlId} = props

    if (variantFields && controlId) {
        return (
            <Form.Group controlId={controlId} className="mt-1">
                <Form.Check
                    type="radio"
                    id={variantId}
                    name={variantName}
                    label={variantLabel}
                />
                <div className='text-end'>
                    { variantFields.map((field, ind) => <NSFormGroupItem key={controlId + ind} {...field} />) }
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
        />
    );
};

export { NSFormGroup };