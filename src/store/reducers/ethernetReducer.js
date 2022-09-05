import { 
    CHANGE_ETHERNET_IP_ADDRESS,
    CHANGE_ETHERNET_SUBNET_MASK,
    CHANGE_ETHERNET_DEFAULT_GATE_WAY,
    CHANGE_ETHERNET_PREFERRED_DNS,
    CHANGE_ETHERNET_ALTERNATIVE_DNS,
} from "../../constants/settingsActions"

const ethernetStore = {
    IpAddress: '',
    SubnetMask: '',
    DefaultGateWay: '',
    PreferredDns: '',
    AlternativeDns: '',
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
        default:
            return state
    }
}