import { useEffect, useState } from 'react';
import { Container, Button, Col, Row, Form } from 'react-bootstrap';
import {
    ETHERNET_IP_FORM,
    ETHERNET_DNS_FORM,
    WIRELESS_IP_FORM,
    WIRELESS_DNS_FORM
} from '../../constants/networkSettings';
import { useAction } from '../../hooks/useActions';
import { CHANGE_NETWORK_NAME, CHANGE_SECURITY_KEY } from '../../constants/settingsActions';
import { FormGroup } from './FormGroup';

const NetworkSettings = () => {
    const [networkName, setNetworkName] = useState('');
    const [securityKey, setSecurityKey] = useState('');
    const [wifiCheckBox, setWifiCheckBox] = useState(false);
    const [securityCheckBox, setSecurityCheckBox] = useState(false);
  
    const actionGeneration = useAction();
  
    const onChangeNetworkName:React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const { value } = e.target;
      setNetworkName(value);
      actionGeneration(CHANGE_NETWORK_NAME, value);
    };
  
    const onChangeSecurityKey:React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const { value } = e.target;
      setSecurityKey(value);
      actionGeneration(CHANGE_SECURITY_KEY, value);
    };
  
    const onWifiCheckBoxChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const { checked } = e.target;
      if (!checked) {
        setNetworkName('');
        setSecurityKey('');
        setSecurityCheckBox(false);
      };
  
      setWifiCheckBox(checked);
    };
  
    const onSecurityCheckBoxChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const { checked } = e.target;
      if (!checked) {
        setSecurityKey('');
      };
      setSecurityCheckBox(checked);
    };


    return (
        <Container>
            <Form>
                <Row>
                <Col className="border border-bottom-0 p-4">
                    <h3>Ethernet Settings</h3>

                    <FormGroup {...ETHERNET_IP_FORM} />
                    <FormGroup {...ETHERNET_DNS_FORM} />
                </Col>
                <Col className="border border-bottom-0 border-right-0 p-4">
                    <h3>Wireless Settings</h3>
                    <Form.Check 
                        type="checkbox"
                        label="Enable wifi"
                        checked={wifiCheckBox}
                        onChange={onWifiCheckBoxChange}
                    />
                    <Row className={wifiCheckBox ? '' : 'disabled'}>
                        <Col className='ns-form__required text-end'><Form.Label>Wireless Network Name:</Form.Label></Col>
                        <Col><Form.Control disabled={!wifiCheckBox} type="text" value={networkName} onChange={onChangeNetworkName} placeholder='Please select'/></Col>
                    </Row>
                    <Form.Check 
                        type="checkbox"
                        label="Enable Wireless Security"
                        checked={securityCheckBox}
                        onChange={onSecurityCheckBoxChange}
                        disabled={!wifiCheckBox}
                    />
                    <Row className={wifiCheckBox && securityCheckBox ? '' : 'disabled'}>
                        <Col className="text-end"><Form.Label>Security Key:</Form.Label></Col>
                        <Col><Form.Control type="text" value={securityKey} onChange={onChangeSecurityKey} disabled={!(wifiCheckBox && securityCheckBox)}/></Col>
                    </Row>

                    <FormGroup {...WIRELESS_IP_FORM} closed={!wifiCheckBox} />
                    <FormGroup {...WIRELESS_DNS_FORM} closed={!wifiCheckBox} />
                </Col>
                </Row>
                <Row xs="auto" className="border p-2">
                    <Col className='px-1'><Button variant="primary">Save</Button></Col>
                    <Col className='px-1'><Button variant="outline-primary">Cancel</Button></Col>
                </Row>
            </Form>
        </Container>
    );
};

export { NetworkSettings };
