import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';


const App = () => {
  return (
    <Container>
      <Form>
        <Row>
          <Col className="border border-bottom-0 p-4">
            <h3>Ethernet Settings</h3>
            
            <Form.Check 
              type="radio"
              id="automaticallyIP"
              name="variantIP"
              label="Obtain an IP address automatically (DHCP/BootP)"
              checked
            />

            <Form.Check 
              type="radio"
              id="automaticallyIP"
              name="variantIP"
              label="Use the following IP:"
            />

            <Form.Group className='text-end' controlId="formBasicIP">
              <Row>
                <Col><Form.Label>IP address:</Form.Label></Col>
                <Col><Form.Control type="text" /></Col>
              </Row>

              <Row>
                <Col><Form.Label>Subnet mask:</Form.Label></Col>
                <Col><Form.Control type="text" /></Col>
              </Row>

              <Row>
                <Col><Form.Label>Default Gateway:</Form.Label></Col>
                <Col><Form.Control type="text" /></Col>
              </Row>
            </Form.Group>

            <Form.Check 
              type="radio"
              id="autoDNS"
              name="variantDNS"
              label="Obtain DNS server address automatically"
              checked
            />

            <Form.Check 
              type="radio"
              id="followingDNS"
              name="variantDNS"
              label="Use the following DNS server address:"
            />

            <Form.Group className='text-end' controlId="formBasicDNS">
              <Row>
                <Col className="text-right"><Form.Label>Preferred DNS server:</Form.Label></Col>
                <Col><Form.Control type="text" /></Col>
              </Row>

              <Row>
                <Col><Form.Label>Alternative DNS server:</Form.Label></Col>
                <Col><Form.Control type="text" /></Col>
              </Row>
            </Form.Group>
          </Col>
          <Col className="border border-bottom-0 border-right-0 p-4">
            <h3>Wireless Settings</h3>

            <Form.Check 
              type="checkbox"
              id="wlessEnableWifi"
              label="Enable wifi"
            />

            <Row>
              <Col className='text-end'><Form.Label>Wireless Network Name:</Form.Label></Col>
              <Col><Form.Control type="text"/></Col>
            </Row>

            <Form.Check 
              type="checkbox"
              id="wlessEnableSecurity"
              label="Enable Wireless Security"
            />

            <Row>
              <Col className="text-end"><Form.Label>Security Key:</Form.Label></Col>
              <Col><Form.Control type="text"/></Col>
            </Row>

            <Form.Check 
              type="radio"
              id="automaticallyIP"
              name="wlessIPVar"
              label="Obtain an IP address automatically (DHCP/BootP)"
              checked
            />

            <Form.Check 
              type="radio"
              id="automaticallyIP"
              name="wlessIPVar"
              label="Use the following IP:"
            />

            <Form.Group className='text-end' controlId="formWlessDNS">
              <Row>
                <Col><Form.Label>IP address:</Form.Label></Col>
                <Col><Form.Control type="text" /></Col>
              </Row>

              <Row>
                <Col><Form.Label>Subnet mask:</Form.Label></Col>
                <Col><Form.Control type="text" /></Col>
              </Row>

              <Row>
                <Col><Form.Label>Default Gateway:</Form.Label></Col>
                <Col><Form.Control type="text" /></Col>
              </Row>
            </Form.Group>

            <Form.Check 
              type="radio"
              id="autoDNS"
              name="wlessDNSVar"
              label="Obtain DNS server address automatically"
              checked
            />

            <Form.Check 
              type="radio"
              id="followingDNS"
              name="wlessDNSVar"
              label="Use the following DNS server address:"
            />

            <Form.Group className='text-end' controlId="formWlessDNS">
              <Row>
                <Col className="text-right"><Form.Label>Preferred DNS server:</Form.Label></Col>
                <Col><Form.Control type="text" /></Col>
              </Row>

              <Row>
                <Col><Form.Label>Alternative DNS server:</Form.Label></Col>
                <Col><Form.Control type="text" /></Col>
              </Row>
            </Form.Group>
          </Col>
        </Row>
        <Row xs="auto" className="border p-2">
          <Col className='px-1'><Button variant="primary">Save</Button></Col>
          <Col className='px-1'><Button variant="outline-primary">Cancel</Button></Col>
        </Row>
      </Form>
    </Container>
  )
}

export default App;
