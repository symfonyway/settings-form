const App = () => {
  return (
    <div className='nsw'>
      <div className='nsw__row'>
        <div className='nsw__col'>
          <h3>Ethernet Settings</h3>
          
          <input type="radio" className='nsw__input' id="automaticallyIp" name="ipVariant" value="1" checked/>
          <label className='nsw__option-label' htmlFor="automaticallyIp">Obtain an IP address automatically (DHCP/BootP)</label>

          
          <input type="radio" className='nsw__input' id="followingIp" name="ipVariant" value="0"/>
          <label className='nsw__option-label' htmlFor="followingIp">Use the following IP:</label>

          <div className='nsw__content'>
            <label htmlFor="ipAddress" className='nsw__content-label'>IP address:</label>
            <input type="text" className='nsw__content-input' id="ipAddress"/>

            <label htmlFor="subnetMask" className='nsw__content-label'>Subnet mask:</label>
            <input type="text" className='nsw__content-input' id="subnetMask"/>

            <label htmlFor="gateway" className='nsw__content-label'>Default Gateway:</label>
            <input type="text" className='nsw__content-input' id="gateway"/>
          </div>

          
          <input type="radio" className='nsw__input' id="autoDNS" name="DNSVariant" value="1" checked/>
          <label className='nsw__option-label' htmlFor="autoDNS">Obtain DNS server address automatically</label>

          
          <input type="radio" className='nsw__input' id="followingDNS" name="DNSVariant" value="0"/>
          <label className='nsw__option-label' htmlFor="followingDNS">Use the following DNS server address:</label>

          <div className='nsw__content'>
            <label htmlFor="preferredDNS" className='nsw__content-label'>Preferred DNS server:</label>
            <input type="text" className='nsw__content-input' id="preferredDNS"/>

            <label htmlFor="altDNS" className='nsw__content-label'>Alternative DNS server:</label>
            <input type="text" className='nsw__content-input' id="altDNS"/>
          </div>
        </div>
        <div className='nsw__col'>
          <h3>Wireless Settings</h3>
          
          <input type="checkbox" id="wlessEnableWifi"/>
          <label htmlFor="wlessEnableWifi">Enable Wifi:</label>

          
          <input type="checkbox" id="enableWifiSecurity"/>
          <label htmlFor="enableWifiSecurity">Enable Wireless Security:</label>

          <input type="radio" className='nsw__input' id="wlessAutoIp" name="wlessIpVariant" value="1" checked/>
          <label className='nsw__option-label' htmlFor="wlessAutoIp">Obtain an IP address automatically (DHCP/BootP)</label>

          
          <input type="radio" className='nsw__input' id="wlessFollowingIp" name="wlessIpVariant" value="0"/>
          <label className='nsw__option-label' htmlFor="wlessFollowingIp">Use the following IP:</label>

          <div className='nsw__content'>
            <label htmlFor="wlessIpAddress" className='nsw__content-label'>IP address:</label>
            <input type="text" className='nsw__content-input' id="wlessIpAddress"/>

            <label htmlFor="wlessSubnetMask" className='nsw__content-label'>Subnet mask:</label>
            <input type="text" className='nsw__content-input' id="wlessSubnetMask"/>

            <label htmlFor="wlessGateway" className='nsw__content-label'>Default Gateway:</label>
            <input type="text" className='nsw__content-input' id="wlessGateway"/>
          </div>

          
          <input type="radio" className='nsw__input' id="wlessAutoDNS" name="wlessDNSVariant" value="1" checked/>
          <label className='nsw__option-label' htmlFor="wlessAutoDNS">Obtain DNS server address automatically</label>

          
          <input type="radio" className='nsw__input' id="wlessFollowingDNS" name="wlessDNSVariant" value="0"/>
          <label className='nsw__option-label' htmlFor="wlessFollowingDNS">Use the following DNS server address:</label>

          <div className='nsw__content'>
            <label htmlFor="wlessPreferredDNS" className='nsw__content-label'>Preferred DNS server:</label>
            <input type="text" className='nsw__content-input' id="wlessPreferredDNS"/>

            <label htmlFor="wlessAltDNS" className='nsw__content-label'>Alternative DNS server:</label>
            <input type="text" className='nsw__content-input' id="wlessAltDNS"/>
          </div>
        </div>
      </div>
      <div className='row'></div>
    </div>
  )
}

export default App;
