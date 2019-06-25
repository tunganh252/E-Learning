import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../Components/UI_HomePage/Header';
import Footer from '../Components/UI_HomePage/Footer';

const Bound = styled.div`

`

export default class TrangChu extends Component {
    render() {
        return (
            <Bound>
                <Header/>

                <Footer/>
            </Bound>
        )
    }
}
