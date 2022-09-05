import { Col, Row, Form } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { INsGroupItem } from '../../types/nsGroupItem';
import { useActions } from '../../hooks/useActions';

const NSFormGroupItem:React.FC<INsGroupItem> = (props) => {
    const { label, id, pattern } = props;
    const [text, changeText] = useState('');
    const [isValid, changeValidity] = useState(true);

    const actionCreator = useActions();

    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (pattern && RegExp(pattern).test(value)) {
            changeValidity(true);
        } else {
            changeValidity(false);
        }
        changeText(value);
    };

    useEffect(() => {
        if (!isValid) {
            changeValidity(true);
            changeText('');
        }
    }, [isValid]);

    return (
        <Row className={'my-1' + (true ? '' : ' disabled')}>
            <Col>
                <Form.Label className={pattern ? 'ns-form__required' : ''} id={id} >{label}</Form.Label>
            </Col>
            <Col className='text-start'>
                <Form.Control disabled={false} type="text" value={text} onInput={onHandleChange} />
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