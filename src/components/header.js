import React from 'react';
import { ReactComponent as SvgLogo } from '../ec_logo.svg';
import {Link} from "react-router-dom";
import {Layout, Header, Navigation, Drawer, Content} from "react-mdl"


const NavBar = props => {
    
    return (

        <div style={{height: '10%'}}>
    {/* <Layout fixedHeader> */}
        <Header className="header" title={ <span><SvgLogo className='logo'/></span>}>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Settings</Link>
            </Navigation>
        </Header>
        {/* <Drawer title="Title">
            <Navigation>
            <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Settings</Link>
            </Navigation>
        </Drawer> */}
    {/* </Layout> */}
</div>
    )
}

export default NavBar;