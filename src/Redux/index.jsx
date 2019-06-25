import { combineReducers } from 'redux'; 
import { quanLyNguoiDung } from './Reducers/QuanLyNguoiDung/index';
import { quanLyKhoaHoc } from './Reducers/QuanLyKhoaHoc/index';


///store
const rootReducer = combineReducers({
    ...quanLyNguoiDung,
    ...quanLyKhoaHoc
})
export default rootReducer;