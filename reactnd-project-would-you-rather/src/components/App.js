import React from 'react';
import { connect } from 'react-redux';
import {handleInitLoad} from '../actions/common';
import Header from './Header';

class App extends React.Component {

    componentDidMount() {
        console.log("component mounted..")
        this.props.handleInitLoad();
    }


    render() {
        return (
            <Header/>
        );
    }
}

function mapStateToProps({authUser}) {
    return {
        authUser
    }
}


export default connect(mapStateToProps, {handleInitLoad})(App);