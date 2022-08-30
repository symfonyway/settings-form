// @ts-nocheck 
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
} from './items.constants'
import { NSFormGroup } from './NSFormGroup';
import React, { useState, useEffect } from 'react';

const NetworkSettings = () => {
  const [isWifiEnabled, changeWifiCheckbox] = useState(false);
  const [isSecurityEnabled, changeSecurityCheckbox] = useState(false);

  const onHandleWifiCheckbox = (value) => {
    changeWifiCheckbox(value);
  };

  const onHandleSecurityCheckbox = (value) => {
    changeSecurityCheckbox(value);
  };

  return (
    <Container>
      <Form>
        <Row>
          <Col className="border border-bottom-0 p-4">
            <h3>Ethernet Settings</h3>

            <NSFormGroup {...AUTO_IP_ITEM}/>
            <NSFormGroup {...FOLLOW_IP_ITEM}/>
            <NSFormGroup {...AUTO_DNS_ITEM}/>
            <NSFormGroup {...FOLLOW_DNS_ITEM}/>

          </Col>
          <Col className="border border-bottom-0 border-right-0 p-4">
            <h3>Wireless Settings</h3>

            <Form.Check 
              type="checkbox"
              id="wlessEnableWifi"
              label="Enable wifi"
              checked={isWifiEnabled}
              onChange={({target}) => onHandleWifiCheckbox(target.checked)}
            />

            <Row className={isWifiEnabled ? '' : 'disabled'}>
              <Col className='ns-form__required text-end'><Form.Label>Wireless Network Name:</Form.Label></Col>
              <Col><Form.Control type="text" placeholder='Please select' disabled={!isWifiEnabled}/></Col>
            </Row>

            <Form.Check 
              type="checkbox"
              id="wlessEnableSecurity"
              label="Enable Wireless Security"
              checked={isSecurityEnabled}
              onChange={({target}) => onHandleSecurityCheckbox(target.checked)}
              disabled={!isWifiEnabled}
            />

            <Row className={isSecurityEnabled && isWifiEnabled ? '' : 'disabled'}>
              <Col className="text-end"><Form.Label>Security Key:</Form.Label></Col>
              <Col><Form.Control type="text" disabled={!isWifiEnabled || !isSecurityEnabled}/></Col>
            </Row>

            <NSFormGroup {...AUTO_WIRELESS_IP_ITEM} disabled={isWifiEnabled}/>
            <NSFormGroup {...FOLLOW_WIRELESS_IP_ITEM} disabled={isWifiEnabled}/>
            <NSFormGroup {...AUTO_WIRELESS_DNS_ITEM} disabled={isWifiEnabled}/>
            <NSFormGroup {...FOLLOW_WIRELESS_DNS_ITEM} disabled={isWifiEnabled}/>
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
