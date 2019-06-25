import React, { Component, Fragment } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import DangNhap from '../../Pages/DangNhap';
import ThongTinTaiKhoan from '../../Pages/ThongTinTaiKhoan';
import TrangChu from '../../Pages/TrangChu';


export default class HomeTemplate extends Component {
    render() {
        return (
            <BrowserRouter>
            <Fragment>
            <Switch>
              <Route exact path="/dangnhap" component={DangNhap} />
              <Route exact path="/thongtintaikhoan" component={ThongTinTaiKhoan} />
              <Route exact path="/" component={TrangChu} /> */}
                 {/* Main Body */}
              </Switch>
            </Fragment>
            </BrowserRouter>
        )
    }
}
