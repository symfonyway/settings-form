import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../store/action-creator";

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actionCreator, dispatch)
}