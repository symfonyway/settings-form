import { Col, Row, Form } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { INsGroupItem } from '../../types/nsGroupItem';

const NSFormGroupItem:React.FC<INsGroupItem> = ({ label, id, pattern, enabled }) => {
    const [text, changeText] = useState('');
    const [isValid, changeValidity] = useState(true);
    const [isEnable, changeFormState] = useState(enabled);

    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        RegExp(pattern).test(value) ? changeValidity(true) : changeValidity(false);
        changeText(value);
    };

    useEffect(() => {
        typeof enabled !== 'undefined' ? changeFormState(enabled) : changeFormState(true);
    }, [enabled]);

    useEffect(() => {
        if (isValid === false) {
            changeValidity(true);
            changeText('');
        }
    }, [isEnable]);

    return (
        <Row className={'my-1' + (isEnable ? '' : ' disabled')}>
            <Col>
                <Form.Label className={pattern ? 'ns-form__required' : ''} id={id} >{label}</Form.Label>
            </Col>
            <Col className='text-start'>
                <Form.Control disabled={!isEnable} type="text" value={text} onInput={onHandleChange} />
                {
                    !isValid && 
                    <Form.Text className={pattern ? 'text-danger' : ''}>
                        This field is invalid.
                    </Form.Text>
                }
                
            </Col>
        </Row>
    );
};

export { NSFormGroupItem };