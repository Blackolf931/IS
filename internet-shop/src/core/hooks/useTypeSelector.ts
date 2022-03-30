import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../redux/reducer/rootReducer';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypedSelector;
