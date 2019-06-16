import React, { Component } from 'react'
import {connect} from 'react-redux'
import { layThongTinTK } from '../Redux/Actions/QuanLyNguoiDung.actions';

 class ThongTinTaiKhoan extends Component {

    componentDidMount () {
        this.props.layThongTin();
    }
    render() {
        return (
            <div>
                hello
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        
    }
}
const mapDispatchToProps = dispatch => {
    return {
        layThongTin:()=> {
            dispatch(layThongTinTK())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)( ThongTinTaiKhoan)