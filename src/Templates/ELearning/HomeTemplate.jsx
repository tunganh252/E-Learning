import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DangNhap from "../../Pages/DangNhap";
import ThongTinTaiKhoan from "../../Pages/ThongTinTaiKhoan";
import TrangChu from "../../Pages/TrangChu";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import styled from 'styled-components'

 const Bound = styled.div`
    /* margin: 60px 0 0 0; */
 `

export default class HomeTemplate extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header/>
          <Bound>
            <Switch>
              <Route exact path="/dangnhap" component={DangNhap} />
              <Route
                exact
                path="/thongtintaikhoan"
                component={ThongTinTaiKhoan}
              />
              <Route exact path="/" component={TrangChu} /> {/* Main Body */}
            </Switch>
          </Bound>
          <Footer />
        </Fragment>
      </BrowserRouter>
    );
  }
}
