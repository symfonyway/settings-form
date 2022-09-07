import { useState, useEffect } from 'react';
import { Container, Button, Col, Row, Form } from 'react-bootstrap';
import { useAction } from '../hooks/useActions';
import { CHANGE_NETWORK_NAME, CHANGE_SECURITY_KEY } from '../constants/settingsActions';
import { FormGroup } from './FormGroup';
import { 
  ETHERNET_IP_FORM,
  ETHERNET_DNS_FORM,
  WIRELESS_IP_FORM,
  WIRELESS_DNS_FORM
} from '../constants/networkSettings';

import { VALID_NETWORK_NAME, VALID_SECURITY_KEY } from '../constants/settingsActions';
import { store } from '../store';

const NetworkSettings = () => {
    const [networkName, setNetworkName] = useState('');
    const [securityKey, setSecurityKey] = useState('');
    const [wifiCheckBox, setWifiCheckBox] = useState(false);
    const [securityCheckBox, setSecurityCheckBox] = useState(false);
    const [isWifiValid, setWifiValidState] = useState(true);
    const [isSecurityValid, setSecurityValidState] = useState(true);

    const actionGeneration = useAction();

    useEffect(() => {
      actionGeneration(VALID_NETWORK_NAME, isWifiValid)
    }, [isWifiValid]);

    useEffect(() => {
      actionGeneration(VALID_SECURITY_KEY, isSecurityValid)
    }, [isSecurityValid]);
  
    const onChangeNetworkName:React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const { value } = e.target;
      setNetworkName(value);
      actionGeneration(CHANGE_NETWORK_NAME, value);
      setWifiValidState(!!value.length)
    };
  
    const onChangeSecurityKey:React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const { value } = e.target;
      setSecurityKey(value);
      actionGeneration(CHANGE_SECURITY_KEY, value);
      setSecurityValidState(!!value.length)
    };
  
    const onWifiCheckBoxChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const { checked } = e.target;
      if (!checked) {
        setNetworkName('');
        setSecurityKey('');
        setSecurityCheckBox(false);
        setWifiValidState(true);
        setSecurityValidState(true);
      };
  
      setWifiCheckBox(checked);
    };
  
    const onSecurityCheckBoxChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const { checked } = e.target;
      if (!checked) {
        setSecurityKey('');
      };
      setSecurityCheckBox(checked);
      setSecurityValidState(true);
    };

    const onSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault()
      const state = store.getState()
      const isInvalid = Object.entries(state.nsFormReducer.validation).some(([_, value]) => value === false);
      if (isInvalid) {
        console.log('Form is not valid!');
      } else {
        console.log(state.nsFormReducer);
      }
    }


    return (
        <Container>
            <Form onSubmit={onSubmit}>
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
                        <Col className="ns-form__required text-end"><Form.Label>Wireless Network Name:</Form.Label></Col>
                        <Col>
                            <Form.Control disabled={!wifiCheckBox} type="text" value={networkName} onChange={onChangeNetworkName} placeholder="Please select"/>
                            {
                              isWifiValid ||
                              <Form.Text className="text-danger">
                                  This field is required.
                              </Form.Text>
                            }
                        </Col>
                    </Row>
                    <Form.Check 
                        type="checkbox"
                        label="Enable Wireless Security"
                        checked={securityCheckBox}
                        onChange={onSecurityCheckBoxChange}
                        disabled={!wifiCheckBox}
                    />
                    <Row className={wifiCheckBox && securityCheckBox ? '' : 'disabled'}>
                        <Col className="ns-form__required text-end"><Form.Label>Security Key:</Form.Label></Col>
                        <Col>
                            <Form.Control type="text" value={securityKey} onChange={onChangeSecurityKey} disabled={!(wifiCheckBox && securityCheckBox)}/>
                            {
                              isSecurityValid ||
                              <Form.Text className="text-danger">
                                  This field is required.
                              </Form.Text>
                            }
                        </Col>
                    </Row>

                    <FormGroup {...WIRELESS_IP_FORM} closed={!wifiCheckBox} />
                    <FormGroup {...WIRELESS_DNS_FORM} closed={!wifiCheckBox} />
                </Col>
                </Row>
                <Row xs="auto" className="border p-2">
                    <Col className='px-1'><Button type="submit" variant="primary">Save</Button></Col>
                    <Col className='px-1'><Button variant="outline-primary">Cancel</Button></Col>
                </Row>
            </Form>
        </Container>
    );
};

export { NetworkSettings };
