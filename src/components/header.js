import React from 'react';
import { ReactComponent as SvgLogo } from '../ec_logo.svg';
import {Link} from "react-router-dom";
import {Layout, Header, Navigation, Drawer, Content} from "react-mdl"

const NavBar = props => {
    return (
        // <Router>
            

        //     <div className="Container">
        //         <div className="logo"> 
        //         <Link to="/">
        //             <h2 className="Logo"> Logo </h2>
        //         </Link>
        //         </div> 
                
        //         <Link to='/Homepage'>
        //             <h2 className="nav"> 
        //                 <div className="a">Home  </div>
        //             </h2>
        //         </Link>

        //         <Link to='Aboutpage'>
        //             <h2 className="nav"> About Us </h2>
        //         </Link>

        //         <Link to="ContactPage">
        //             <h2 className="nav"> Contact Us </h2>
        //         </Link>

        //         <Link to='Settings'>
        //             <h2 className="nav"> Setting </h2>
        //         </Link>

        //     </div>
        // </Router>



        <div style={{height: '40px'}}>
    <Layout fixedHeader>
        <Header className="header" title={ <span><SvgLogo className='logo'/></span>}>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Settings</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Settings</Link>
            </Navigation>
        </Drawer>
    </Layout>
</div>
    )
}
//!Layout component is what's keeping me from being able to access any other components not made with react-dml...
export default NavBar;