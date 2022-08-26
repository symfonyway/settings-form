const AUTO_IP_ITEM = {
    variantId: 'autoIP',
    variantName: 'variantIP',
    variantLabel: 'Obtain an IP address automatically (DHCP/BootP)',
    checked: true
};

const FOLLOW_IP_ITEM = {
    variantId: 'followIP',
    variantName: 'variantIP',
    variantLabel: 'Use the following IP:',
    variantFields: [{ label: 'IP address:' }, { label: 'Subnet mask:' }, { label: 'Default Gateway:' }],
    controlId: 'formBasicDNS'
};

const AUTO_DNS_ITEM = {
    variantId: 'autoDNS',
    variantName: 'variantDNS',
    variantLabel: 'Obtain DNS server address automatically',
    checked: true
};

const FOLLOW_DNS_ITEM = {
    variantId: 'followDNS',
    variantName: 'variantDNS',
    variantLabel: 'Use the following DNS server address:',
    variantFields: [{ label: 'Preferred DNS server:' }, { label: 'Alternative DNS server:' }],
    controlId: 'formBasicDNS'
};

const AUTO_WIRELESS_IP_ITEM = {
    variantId: 'autoWlessIP',
    variantName: 'wlessVarIP',
    variantLabel: 'Obtain an IP address automatically (DHCP/BootP)',
    checked: true
};

const FOLLOW_WIRELESS_IP_ITEM = {
    variantId: 'followWlessIP',
    variantName: 'wlessVarIP',
    variantLabel: 'Use the following IP:',
    variantFields: [{ label: 'IP address:' }, { label: 'Subnet mask:' }, { label: 'Default Gateway:' }],
    controlId: 'formBasicDNS'
};

const AUTO_WIRELESS_DNS_ITEM = {
    variantId: 'autoWlessDNS',
    variantName: 'wlessVarDNS',
    variantLabel: 'Obtain DNS server address automatically',
    checked: true
};

const FOLLOW_WIRELESS_DNS_ITEM = {
    variantId: 'followWlessDNS',
    variantName: 'wlessVarDNS',
    variantLabel: 'Use the following DNS server address:',
    variantFields: [{ label: 'Preferred DNS server:' }, { label: 'Alternative DNS server:' }],
    controlId: 'formBasicDNS'
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