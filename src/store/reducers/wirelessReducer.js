import { 
    CHANGE_WIRELESS_IP_ADDRESS,
    CHANGE_WIRELESS_SUBNET_MASK,
    CHANGE_WIRELESS_DEFAULT_GATE_WAY,
    CHANGE_WIRELESS_PREFERRED_DNS,
    CHANGE_WIRELESS_ALTERNATIVE_DNS,
    CHANGE_WIRELESS_IP_CHECKBOX,
    CHANGE_WIRELESS_DNS_CHECKBOX,
    CHANGE_WIRELESS_WIFI_CHECKBOX,
    CHANGE_WIRELESS_SECURITY_CHECKBOX
} from "../../constants/settingsActions"

const wirelessStore = {
    IpAddress: '',
    SubnetMask: '',
    DefaultGateWay: '',
    PreferredDns: '',
    AlternativeDns: '',
    IpCheckbox: true,
    dnsCheckbox: true,
    wifiCheckbox: false,
    securityCheckbox: false,
}

export const wirelessReducer = (state = wirelessStore, action) => {
    switch (action.type) {
        case CHANGE_WIRELESS_IP_ADDRESS:
            return {...state, IpAddress: action.payload}
        case CHANGE_WIRELESS_SUBNET_MASK:
            return {...state, SubnetMask: action.payload}
        case CHANGE_WIRELESS_DEFAULT_GATE_WAY:
            return {...state, DefaultGateWay: action.payload}        
        case CHANGE_WIRELESS_PREFERRED_DNS:
            return {...state, PreferredDns: action.payload}
        case CHANGE_WIRELESS_ALTERNATIVE_DNS:
            return {...state, AlternativeDns: action.payload}    
        case CHANGE_WIRELESS_IP_CHECKBOX:
            return {...state, IpCheckbox: action.payload}
        case CHANGE_WIRELESS_DNS_CHECKBOX:
            return {...state, dnsheckbox: action.payload}       
        case CHANGE_WIRELESS_WIFI_CHECKBOX:
            return {...state, IpCheckbox: action.payload}
        case CHANGE_WIRELESS_SECURITY_CHECKBOX:
            return {...state, dnsheckbox: action.payload}       
        default:
            return state
    }
}