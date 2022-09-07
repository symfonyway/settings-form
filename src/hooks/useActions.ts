import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionGeneration } from '../store/action';

export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actionGeneration, dispatch)
}