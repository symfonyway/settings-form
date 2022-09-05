import { useEffect, useState } from 'react';
import { Container, Button, Col, Row, Form } from 'react-bootstrap';
import {
  AUTO_IP_ITEM,
  AUTO_DNS_ITEM,
  FOLLOW_IP_ITEM,
  FOLLOW_DNS_ITEM,
  AUTO_WIRELESS_IP_ITEM,
  AUTO_WIRELESS_DNS_ITEM,
  FOLLOW_WIRELESS_IP_ITEM,
  FOLLOW_WIRELESS_DNS_ITEM,
} from '../../constants/networkSettings'
import { NSFormGroup } from './formGroup';
import { useAction } from '../../hooks/useActions';
import { CHANGE_NETWORK_NAME, CHANGE_SECURITY_KEY } from '../../constants/settingsActions';
import { store } from '../../store';

const NetworkSettings = () => {
  const [networkName, setNetworkName] = useState('');
  const [securityKey, setSecurityKey] = useState('');
  const [wifiCheckBox, setWifiCheckBox] = useState(false);
  const [securityCheckBox, setSecurityCheckBox] = useState(false);
  const [wlIpCheckBox, setWlIpCheckBox] = useState(true);
  const [wlDnsCheckBox, setWlDnsCheckBox] = useState(true);
  const [ipCheckBox, setIpCheckBox] = useState(true);
  const [dnsCheckBox, setDnsCheckBox] = useState(true);

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

  const onIpCheckBoxChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { checked } = e.target;
    setIpCheckBox(checked === ipCheckBox ? !checked : checked);
  };

  const onDnsCheckBoxChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { checked } = e.target;
    setDnsCheckBox(checked === dnsCheckBox ? !checked : checked);
  };

  const onWlIpCheckBoxChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { checked } = e.target;
    setWlIpCheckBox(checked === wlIpCheckBox ? !checked : checked);
  };

  const onWlDnsCheckBoxChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { checked } = e.target;
    setWlDnsCheckBox(checked === wlDnsCheckBox ? !checked : checked);
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

  const onSave = () => {
    console.log(store.getState())
  };

  return (
    <Container>
      <Form>
        <Row>
          <Col className="border border-bottom-0 p-4">
            <h3>Ethernet Settings</h3>

            <NSFormGroup {...AUTO_IP_ITEM} isChecked={ipCheckBox} event={onIpCheckBoxChange} />
            <NSFormGroup {...FOLLOW_IP_ITEM} isChecked={!ipCheckBox} event={onIpCheckBoxChange} />
            <NSFormGroup {...AUTO_DNS_ITEM} isChecked={dnsCheckBox} event={onDnsCheckBoxChange} />
            <NSFormGroup {...FOLLOW_DNS_ITEM} isChecked={!dnsCheckBox} event={onDnsCheckBoxChange} />

          </Col>
          <Col className="border border-bottom-0 border-right-0 p-4">
            <h3>Wireless Settings</h3>

            <Form.Check 
              type="checkbox"
              id="wlessEnableWifi"
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
              id="wlessEnableSecurity"
              label="Enable Wireless Security"
              checked={securityCheckBox}
              onChange={onSecurityCheckBoxChange}
              disabled={!wifiCheckBox}
            />

            <Row className={wifiCheckBox && securityCheckBox ? '' : 'disabled'}>
              <Col className="text-end"><Form.Label>Security Key:</Form.Label></Col>
              <Col><Form.Control type="text" value={securityKey} onChange={onChangeSecurityKey} disabled={!(wifiCheckBox && securityCheckBox)}/></Col>
            </Row>

            <NSFormGroup {...AUTO_WIRELESS_IP_ITEM} isChecked={wlIpCheckBox} event={onWlIpCheckBoxChange} isEnabled={wifiCheckBox}/>
            <NSFormGroup {...FOLLOW_WIRELESS_IP_ITEM} isChecked={!wlIpCheckBox} event={onWlIpCheckBoxChange} isEnabled={wifiCheckBox}/>
            <NSFormGroup {...AUTO_WIRELESS_DNS_ITEM} isChecked={wlDnsCheckBox} event={onWlDnsCheckBoxChange} isEnabled={wifiCheckBox}/>
            <NSFormGroup {...FOLLOW_WIRELESS_DNS_ITEM} isChecked={!wlDnsCheckBox} event={onWlDnsCheckBoxChange} isEnabled={wifiCheckBox}/>
          </Col>
        </Row>
        <Row xs="auto" className="border p-2">
          <Col className='px-1'><Button variant="primary" onClick={onSave}>Save</Button></Col>
          <Col className='px-1'><Button variant="outline-primary">Cancel</Button></Col>
        </Row>
      </Form>
    </Container>
  );
};

export { NetworkSettings };
