import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';

class Header extends React.Component {

    render() {
        return (
            <AppBar position="static" color="default">
                <Tabs value={"value"} aria-label="simple tabs example" variant="standard" centered="true">
                    <Tab label="Home"/>
                    <Tab label="New Question"/>
                    <Tab label="Leader Board"/>
                </Tabs>
            </AppBar>
        )
    }
}

export default Header;