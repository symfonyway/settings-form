import { 
    VALID_ETHERNET_IP_ADDRESS,
    VALID_ETHERNET_SUBNET_MASK,
    VALID_ETHERNET_PREFERRED_DNS,
    VALID_WIRELESS_IP_ADDRESS,
    VALID_WIRELESS_SUBNET_MASK,
    VALID_WIRELESS_PREFERRED_DNS,
    VALID_SECURITY_KEY,
    VALID_NETWORK_NAME
} from "../../constants/settingsActions"

const store = {
    ethIpAddress: '',
    ethSubnetMask: '',
    ethPreferredDns: '',
    wlIpAddress: '',
    wlSubnetMask: '',
    wlPreferredDns: '',
    networkName: '',
    securityKey: '',
}

export const validationReducer = (state = store, action) => {
    switch (action.type) {
        case VALID_ETHERNET_IP_ADDRESS:
            return {...state, ethIpAddress: action.payload};
        case VALID_ETHERNET_SUBNET_MASK:
            return {...state, ethSubnetMask: action.payload};
        case VALID_ETHERNET_PREFERRED_DNS:
            return {...state, ethPreferredDns: action.payload}
        case VALID_WIRELESS_IP_ADDRESS:
            return {...state, wlIpAddress: action.payload};
        case VALID_WIRELESS_SUBNET_MASK:
            return {...state, wlSubnetMask: action.payload};
        case VALID_WIRELESS_PREFERRED_DNS:
            return {...state, wlPreferredDns: action.payload}
        case VALID_SECURITY_KEY:
            return {...state, securityKey: action.payload}
        case VALID_NETWORK_NAME:
            return {...state, networkName: action.payload}
        default:
            return state
    }
}