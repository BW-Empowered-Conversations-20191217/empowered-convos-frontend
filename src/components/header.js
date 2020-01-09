import React from 'react';
import {Link} from "react-router-dom";

import {Layout, Header, Navigation, Drawer, Content} from "react-mdl"

const NavBar = props => {
    return (

        <div style={{height: '40px'}}>
    <Layout fixedHeader>
        <Header className="header" title={ <span><strong>Empowered Conversations</strong></span>}>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Settings</Link>
                <Link to="/">Login</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Settings</Link>
                <Link to ="/Login">Login</Link>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
    )
}

export default NavBar;