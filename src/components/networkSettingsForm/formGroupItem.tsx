import { Col, Row, Form } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { INsGroupItem } from '../../types/nsGroupItem';
import { useAction } from '../../hooks/useActions';

const NSFormGroupItem:React.FC<INsGroupItem> = (props) => {
    const { label, id, pattern, action, enabled } = props;
    const [value, setValue] = useState('');
    const [isValid, changeValidState] = useState(true);
    const actionGeneration = useAction();

    const onChangeValue:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { value } = e.target;
        setValue(value);
        actionGeneration(action, value);
        changeValidState(!!pattern && RegExp(pattern).test(value));
    };

    useEffect(() => {
        if (!enabled) {
            setValue('');
            actionGeneration(action, '');
        }
    }, [enabled]);

    return (
        <Row className={'my-1' + (enabled ? '' : ' disabled')}>
            <Col>
                <Form.Label className={pattern ? 'ns-form__required' : ''} id={id} >{label}</Form.Label>
            </Col>
            <Col className='text-start'>
                <Form.Control disabled={!enabled} type="text" value={value} onChange={onChangeValue}/>
                {
                    !isValid && 
                    <Form.Text className='text-danger'>
                        This field is invalid.
                    </Form.Text>
                }
                
            </Col>
        </Row>
    );
};

export { NSFormGroupItem };