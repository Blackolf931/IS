import { InitProductState } from '../reducer/productReducer';
import { RootState } from '../reducer/rootReducer';

const productSelector = (state: RootState): InitProductState => state.products;

export default productSelector;
