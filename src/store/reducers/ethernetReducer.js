import { 
    CHANGE_ETHERNET_IP_ADDRESS,
    CHANGE_ETHERNET_SUBNET_MASK,
    CHANGE_ETHERNET_DEFAULT_GATE_WAY,
    CHANGE_ETHERNET_PREFERRED_DNS,
    CHANGE_ETHERNET_ALTERNATIVE_DNS,
    CHANGE_ETHERNET_IP_CHECKBOX,
    CHANGE_ETHERNET_DNS_CHECKBOX
} from "../../constants/settingsActions"

const ethernetStore = {
    IpAddress: '',
    SubnetMask: '',
    DefaultGateWay: '',
    PreferredDns: '',
    AlternativeDns: '',
    IpCheckbox: true,
    dnsCheckbox: true,
}

export const ethernetReducer = (state = ethernetStore, action) => {
    switch (action.type) {
        case CHANGE_ETHERNET_IP_ADDRESS:
            return {...state, IpAddress: action.payload}
        case CHANGE_ETHERNET_SUBNET_MASK:
            return {...state, SubnetMask: action.payload}
        case CHANGE_ETHERNET_DEFAULT_GATE_WAY:
            return {...state, DefaultGateWay: action.payload}        
        case CHANGE_ETHERNET_PREFERRED_DNS:
            return {...state, PreferredDns: action.payload}
        case CHANGE_ETHERNET_ALTERNATIVE_DNS:
            return {...state, AlternativeDns: action.payload}
        case CHANGE_ETHERNET_IP_CHECKBOX:
                return {...state, IpCheckbox: action.payload}
        case CHANGE_ETHERNET_DNS_CHECKBOX:
            return {...state, dnsCheckbox: action.payload}   
        default:
            return state
    }
}