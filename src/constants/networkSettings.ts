import { INsGroup } from "../types/nsGroup";
import { IP_PATTERN } from "./patterns";
import * as actions from './settingsActions';

const AUTO_IP_ITEM:INsGroup = {
    variantId: 'autoIP',
    variantName: 'variantIP',
    variantLabel: 'Obtain an IP address automatically (DHCP/BootP)',
};

const FOLLOW_IP_ITEM:INsGroup = {
    variantId: 'followIP',
    variantName: 'variantIP',
    variantLabel: 'Use the following IP:',
    variantFields: [
        { label: 'IP address:', id: 'fipAddress', pattern: IP_PATTERN }, 
        { label: 'Subnet mask:', id: 'fipSubnet', pattern: IP_PATTERN }, 
        { label: 'Default Gateway:', id: 'fipGateway' }
    ],
    controlId: 'formBasicDNS',
};

const AUTO_DNS_ITEM:INsGroup = {
    variantId: 'autoDNS',
    variantName: 'variantDNS',
    variantLabel: 'Obtain DNS server address automatically',
};

const FOLLOW_DNS_ITEM:INsGroup = {
    variantId: 'followDNS',
    variantName: 'variantDNS',
    variantLabel: 'Use the following DNS server address:',
    variantFields: [
        { label: 'Preferred DNS server:', id: 'fdPrefDnsServer', pattern: IP_PATTERN }, 
        { label: 'Alternative DNS server:', id: 'fbAltDnsServer' }
    ],
    controlId: 'formBasicDNS',
};

const AUTO_WIRELESS_IP_ITEM:INsGroup = {
    variantId: 'autoWlessIP',
    variantName: 'wlessVarIP',
    variantLabel: 'Obtain an IP address automatically (DHCP/BootP)',
};

const FOLLOW_WIRELESS_IP_ITEM:INsGroup = {
    variantId: 'followWlessIP',
    variantName: 'wlessVarIP',
    variantLabel: 'Use the following IP:',
    variantFields: [
        { label: 'IP address:', id: 'wfipAdress', pattern: IP_PATTERN }, 
        { label: 'Subnet mask:', id: 'wfipSubnet', pattern: IP_PATTERN }, 
        { label: 'Default Gateway:', id: 'wfipGateway' }
    ],
    controlId: 'formBasicDNS',
};

const AUTO_WIRELESS_DNS_ITEM:INsGroup = {
    variantId: 'autoWlessDNS',
    variantName: 'wlessVarDNS',
    variantLabel: 'Obtain DNS server address automatically',
};

const FOLLOW_WIRELESS_DNS_ITEM:INsGroup = {
    variantId: 'followWlessDNS',
    variantName: 'wlessVarDNS',
    variantLabel: 'Use the following DNS server address:',
    variantFields: [
        { label: 'Preferred DNS server:', id: 'wfdPrefDns', pattern: IP_PATTERN },
        { label: 'Alternative DNS server:', id: 'wfdAltDns' }
    ],
    controlId: 'formBasicDNS',
};

export { 
    AUTO_IP_ITEM,
    AUTO_DNS_ITEM,
    FOLLOW_IP_ITEM,
    FOLLOW_DNS_ITEM,
    AUTO_WIRELESS_IP_ITEM,
    AUTO_WIRELESS_DNS_ITEM,
    FOLLOW_WIRELESS_IP_ITEM,
    FOLLOW_WIRELESS_DNS_ITEM,
};