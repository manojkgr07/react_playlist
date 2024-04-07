import {fork} from '@redux-saga/core/effects';
import ProductList from './ProductList';
import LoginSaga from './LoginSaga';
import UserProfile from './UserProfile';
import SearchList from './SearchList';
import DeleteList from './DeleteList';


export default function* rootSaga() {
    yield fork(ProductList);
    yield fork(LoginSaga);
    yield fork(UserProfile);
    yield fork(DeleteList);
    yield fork(SearchList);
}