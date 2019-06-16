import * as types from "../Constants/Types.constant";
import * as settings from '../../Commons/Settings'

const initialState = {
    isLogin:localStorage.getItem(settings.userLogin) ? true : false
};

export const QuanLyNguoiDungStoreReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.DANG_KY: {
            return {...state};
        }
        case types.DANG_NHAP: {
            state.isLogin = true;
            return {...state};
        }
        case types.LAY_THONG_TIN_TK: {
            return {...state};
        }
        default:
        }

  return{...state}
};
