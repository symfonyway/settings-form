// @ts-nocheck 
import { Col, Row, Form } from 'react-bootstrap';

const NSFormGroupItem = ({ label }) => {
    return (
        <Row className='my-1'>
            <Col>
                <Form.Label>{label}</Form.Label>
            </Col>
            <Col>
                <Form.Control type="text" />
            </Col>
        </Row>
    );
};

export { NSFormGroupItem };