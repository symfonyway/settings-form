import { INsGroup } from '../types/INsGroup';
import { IP_PATTERN } from './patterns';
import * as actions from './settingsActions';

const ETHERNET_IP_FORM:INsGroup = {
    name: 'variantIP',
    defaultCheckbox: 'Obtain an IP address automatically (DHCP/BootP)',
    additionalCheckbox: 'Use the following IP:',
    fields: [
        { label: 'IP address:', pattern: IP_PATTERN, action: actions.CHANGE_ETHERNET_IP_ADDRESS }, 
        { label: 'Subnet mask:', pattern: IP_PATTERN, action: actions.CHANGE_ETHERNET_SUBNET_MASK }, 
        { label: 'Default Gateway:', action: actions.CHANGE_ETHERNET_DEFAULT_GATE_WAY }
    ]
};

const ETHERNET_DNS_FORM:INsGroup = {
    name: 'variantDNS',
    defaultCheckbox: 'Obtain DNS server address automatically',
    additionalCheckbox: 'Use the following DNS server address:',
    fields: [
        { label: 'Preferred DNS server:', pattern: IP_PATTERN, action: actions.CHANGE_ETHERNET_PREFERRED_DNS }, 
        { label: 'Alternative DNS server:', action: actions.CHANGE_ETHERNET_ALTERNATIVE_DNS }
    ]
};

const WIRELESS_IP_FORM:INsGroup = {
    defaultCheckbox: 'Obtain an IP address automatically (DHCP/BootP)',
    additionalCheckbox: 'Use the following IP:',
    name: 'wlVariantIP',
    fields: [
        { label: 'IP address:', pattern: IP_PATTERN, action: actions.CHANGE_WIRELESS_IP_ADDRESS }, 
        { label: 'Subnet mask:', pattern: IP_PATTERN, action: actions.CHANGE_WIRELESS_SUBNET_MASK }, 
        { label: 'Default Gateway:', action: actions.CHANGE_WIRELESS_DEFAULT_GATE_WAY }
    ],
};

const WIRELESS_DNS_FORM:INsGroup = {
    defaultCheckbox: 'Obtain DNS server address automatically',
    additionalCheckbox: 'Use the following DNS server address:',
    name: 'wlVariantDns',
    fields: [
        { label: 'Preferred DNS server:', pattern: IP_PATTERN, action: actions.CHANGE_WIRELESS_PREFERRED_DNS },
        { label: 'Alternative DNS server:', action: actions.CHANGE_WIRELESS_ALTERNATIVE_DNS }
    ]
};

export { 
    ETHERNET_IP_FORM,
    ETHERNET_DNS_FORM,
    WIRELESS_IP_FORM,
    WIRELESS_DNS_FORM
};