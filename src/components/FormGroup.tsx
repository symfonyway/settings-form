import React, { useState, useEffect } from "react";
import { Form } from 'react-bootstrap';
import { INsGroup } from "../types/INsGroup";
import { InputGroup } from "./FormControl";

const FormGroup:React.FC<INsGroup> = ({name, defaultCheckbox, additionalCheckbox, fields, closed = false}) => {
    const [checkCondition, setCheckCondition] = useState(true);

    const changeRadioInput:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { checked } = e.target;
        setCheckCondition(checked === checkCondition ? !checked : checked);
    };

    useEffect(() => {
        if (closed) {
            setCheckCondition(true);
        }
    }, [closed]);

    return (
        <Form.Group className="mt-1">
            <Form.Check
                type="radio"
                id={name + 'Automatically'}
                label={defaultCheckbox}
                name={name}
                disabled={closed}
                checked={checkCondition}
                onChange={changeRadioInput}
            />
            <Form.Check
                type="radio"
                id={name + 'Following'}
                label={additionalCheckbox}
                disabled={closed}
                name={name}
                checked={!checkCondition}
                onChange={changeRadioInput}
            />
            <div className='text-end'>
                { fields.map((field: any, ind: any) => <InputGroup key={ind} {...field} disabled={checkCondition || closed} />) }
            </div>
        </Form.Group>
    );
};

export { FormGroup };