import { 
    CHANGE_WIRELESS_IP_ADDRESS,
    CHANGE_WIRELESS_SUBNET_MASK,
    CHANGE_WIRELESS_DEFAULT_GATE_WAY,
    CHANGE_WIRELESS_PREFERRED_DNS,
    CHANGE_WIRELESS_ALTERNATIVE_DNS,
    CHANGE_SECURITY_KEY,
    CHANGE_NETWORK_NAME
} from "../../constants/settingsActions"

const wirelessStore = {
    networkName: '',
    securityKey: '',
    ipAddress: '',
    subnetMask: '',
    defaultGateWay: '',
    preferredDns: '',
    alternativeDns: '',
}

export const wirelessReducer = (state = wirelessStore, action) => {
    switch (action.type) {
        case CHANGE_NETWORK_NAME:
            return {...state, networkName: action.payload}
        case CHANGE_SECURITY_KEY:
            return {...state, securityKey: action.payload}
        case CHANGE_WIRELESS_IP_ADDRESS:
            return {...state, ipAddress: action.payload}
        case CHANGE_WIRELESS_SUBNET_MASK:
            return {...state, subnetMask: action.payload}
        case CHANGE_WIRELESS_DEFAULT_GATE_WAY:
            return {...state, defaultGateWay: action.payload}
        case CHANGE_WIRELESS_PREFERRED_DNS:
            return {...state, preferredDns: action.payload}
        case CHANGE_WIRELESS_ALTERNATIVE_DNS:
            return {...state, alternativeDns: action.payload}
        default:
            return state
    }
}