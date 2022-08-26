// @ts-nocheck 
import { Form } from "react-bootstrap"
import { NSFormGroupItem } from './NSFormGroupItem';

const NSFormGroup = ({variantId, variantName, variantLabel, variantFields, controlId, checked}) => {

    if (variantFields) {
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
            checked={checked}
        />
    );
};

export { NSFormGroup };