import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { dangNhapAction } from "../Redux/Actions/QuanLyNguoiDung.actions";
import {Redirect} from 'react-router-dom';

const Bound = styled.div`
  margin: 5rem;
`;

class DangNhap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: ""
    };
  }

  dangNhap = e => {
    e.preventDefault();
    let user = this.state
    this.props.dangNhap(user);
  };

  capNhatThongTin = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  componentWillReceiveProps(nextProps){
    if (nextProps.isLogin) {
      return (
        <Redirect to='/thongtintaikhoan'/>
      )
    }
  }

  render() {
    if (this.props.isLogin) {
      return (
        <Redirect to='/thongtintaikhoan'/>
      )
    }
    return (
      <Bound>
        <div className="container">

        <form onSubmit={this.dangNhap}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Tài khoản"
              name="taiKhoan"
              onChange={this.capNhatThongTin}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Mật khẩu"
              name="matKhau"
              onChange={this.capNhatThongTin}
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-success" type="submit">
              Đăng nhập
            </button>
          </div>
        </form>
          </div>
      </Bound>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin:state.QuanLyNguoiDungStoreReducer.isLogin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dangNhap: (taiKhoan, matKhau) => dispatch(dangNhapAction(taiKhoan, matKhau))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DangNhap);
