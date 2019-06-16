import React, { Component, Fragment } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import DangNhap from '../../Pages/DangNhap';
import ThongTinTaiKhoan from '../../Pages/ThongTinTaiKhoan';


export default class HomeTemplate extends Component {
    render() {
        return (
            <BrowserRouter>
            <Fragment>
            <Switch>
              <Route exact path="/dangnhap" component={DangNhap} />
              <Route exact path="/thongtintaikhoan" component={ThongTinTaiKhoan} />
              <Route exact path="/" component={DangNhap} /> */}
                 {/* Main Body */}
              </Switch>
            </Fragment>
            </BrowserRouter>
        )
    }
}
