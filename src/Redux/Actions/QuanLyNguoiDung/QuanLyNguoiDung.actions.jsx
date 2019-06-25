import * as types from '../../Constants/Types.constant'
import axios from 'axios';
import * as settings from '../../../Commons/Settings'
import swal from 'sweetalert2'

export const dangNhapAction = (thongTinDangNhap) => {
    return (dispatch) => {
        axios({
            method:'POST',
            url:`${settings.host}api/QuanLyNguoiDung/DangNhap`,
            data:thongTinDangNhap, // lấy từ state component
        }).then((res)=>{
            localStorage.setItem(settings.userLogin,JSON.stringify(res.data));
            localStorage.setItem(settings.token,res.data.accessToken);
            console.log('res thongTinDangNhap: ',res);
            
            dispatch({
                type:types.DANG_NHAP
            })

        }).catch((err)=> {
            // console.log('error', err);
            swal.fire('Thông báo','Lỗi: ' + err.response.data, 'error');
        })
    }
}

export const layThongTinTK = () => {
    return (dispatch) => {
        // lấy user từ localStorage
        let userLogin = JSON.parse(localStorage.getItem(settings.userLogin))
        axios({
            method:'POST',
            url:`${settings.host}api/QuanLyNguoiDung/ThongTinTaiKhoan`,
            data:{taiKhoan:userLogin.taiKhoan},
            headers: {
                "Authorization": "Bearer " +  localStorage.getItem(settings.token)
                }
        }).then((res) => {
            console.log(res);
            dispatch({
                type:types.LAY_THONG_TIN_TK,
                data:res.data
            })
        }).catch((err)=>{
            console.log(err);
            swal.fire('Thông báo','Lỗi: ' + err.response.data, 'error');
        })
    }
}