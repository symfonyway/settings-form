import React, { useState, useEffect } from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import { useAction } from '../hooks/useActions';
import { INsControl } from '../types/INsControl';

const InputGroup:React.FC<INsControl>  = ({ label, pattern, action, disabled }: any) => {
    const [isValid, setValidState] = useState(true);
    const [value, setValue] = useState('');
    const actionGeneration = useAction();

    const onChangeValue:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { value } = e.target;
        setValue(value);
        actionGeneration(action, value);
        setValidState(!!pattern && RegExp(pattern).test(value));
    };

    useEffect(() => {
        if (disabled) {
            setValue('');
            setValidState(true);
            actionGeneration(action, '');
        }
    }, [disabled]);

    useEffect(() => {
        actionGeneration(action.replace('CHANGE', 'VALID'), isValid);
    }, [isValid]);

    return (
        <Row className={'my-1' + (disabled ? ' disabled' : '')}>
            <Col>
                <Form.Label className={pattern ? 'ns-form__required' : ''}>{label}</Form.Label>
            </Col>
            <Col className="text-start">
                <Form.Control disabled={disabled} type="text" value={value} onChange={onChangeValue}/>
                {
                    pattern && !isValid && 
                    <Form.Text className="text-danger">
                        This field is invalid.
                    </Form.Text>
                }
            </Col>
        </Row>
    );
};

export { InputGroup };