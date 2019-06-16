import React, { Component, Fragment } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


export default class HomeTemplate extends Component {
    render() {
        return (
            <BrowserRouter>
            <Fragment>
            <Switch>
              {/* <Route exact path="/dangnhap" component={} />
              <Route exact path="/thongtintaikhoan" component={} />
              <Route exact path="/" component={} /> */}
                {/* Main Body */}
              </Switch>
            </Fragment>
            </BrowserRouter>
        )
    }
}
