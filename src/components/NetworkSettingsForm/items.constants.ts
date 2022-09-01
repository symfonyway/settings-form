import { INsGroup } from "../../types/nsGroup";

const IP_PATTERN = '(^25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0$)';
const DNS_PATTERN = '^[sap](([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$';
const SUBNET_MAK_PATTERN = '^(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$';

const AUTO_IP_ITEM:INsGroup = {
    variantId: 'autoIP',
    variantName: 'variantIP',
    variantLabel: 'Obtain an IP address automatically (DHCP/BootP)',
    isChecked: true
};

const FOLLOW_IP_ITEM:INsGroup = {
    variantId: 'followIP',
    variantName: 'variantIP',
    variantLabel: 'Use the following IP:',
    variantFields: [
        { label: 'IP address:', id: 'fipAddress', pattern: IP_PATTERN }, 
        { label: 'Subnet mask:', id: 'fipSubnet', pattern: DNS_PATTERN }, 
        { label: 'Default Gateway:', id: 'fipGateway' }
    ],
    controlId: 'formBasicDNS',
    isChecked: false
};

const AUTO_DNS_ITEM:INsGroup = {
    variantId: 'autoDNS',
    variantName: 'variantDNS',
    variantLabel: 'Obtain DNS server address automatically',
    isChecked: true
};

const FOLLOW_DNS_ITEM:INsGroup = {
    variantId: 'followDNS',
    variantName: 'variantDNS',
    variantLabel: 'Use the following DNS server address:',
    variantFields: [
        { label: 'Preferred DNS server:', id: 'fdPrefDnsServer', pattern: SUBNET_MAK_PATTERN }, 
        { label: 'Alternative DNS server:', id: 'fbAltDnsServer' }
    ],
    controlId: 'formBasicDNS',
    isChecked: false
};

const AUTO_WIRELESS_IP_ITEM:INsGroup = {
    variantId: 'autoWlessIP',
    variantName: 'wlessVarIP',
    variantLabel: 'Obtain an IP address automatically (DHCP/BootP)',
    isChecked: true
};

const FOLLOW_WIRELESS_IP_ITEM:INsGroup = {
    variantId: 'followWlessIP',
    variantName: 'wlessVarIP',
    variantLabel: 'Use the following IP:',
    variantFields: [
        { label: 'IP address:', id: 'wfipAdress', pattern: IP_PATTERN }, 
        { label: 'Subnet mask:', id: 'wfipSubnet', pattern: DNS_PATTERN }, 
        { label: 'Default Gateway:', id: 'wfipGateway' }
    ],
    controlId: 'formBasicDNS',
    isChecked: false
};

const AUTO_WIRELESS_DNS_ITEM:INsGroup = {
    variantId: 'autoWlessDNS',
    variantName: 'wlessVarDNS',
    variantLabel: 'Obtain DNS server address automatically',
    isChecked: true
};

const FOLLOW_WIRELESS_DNS_ITEM:INsGroup = {
    variantId: 'followWlessDNS',
    variantName: 'wlessVarDNS',
    variantLabel: 'Use the following DNS server address:',
    variantFields: [
        { label: 'Preferred DNS server:', id: 'wfdPrefDns', pattern: SUBNET_MAK_PATTERN },
        { label: 'Alternative DNS server:', id: 'wfdAltDns' }
    ],
    controlId: 'formBasicDNS',
    isChecked: false
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