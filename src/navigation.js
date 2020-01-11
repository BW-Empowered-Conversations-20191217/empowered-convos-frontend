import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Layout, Header, Navigation, Drawer, Content} from "react-mdl";
import { ReactComponent as SvgLogo } from './ec_logo.svg';

const initialState = {
    search: "",
    searchError: ""
}

const NavBar = () => {
    const [data, setData] = useState(initialState);

    const onInputChange = event => {
        setData ({
            ...data, 
            [event.target.name]: event.target.value
        })
    }

    const validate = () => {
        let searchError = "";

        let search = data.search;

        if (!search) {
            searchError = "need an input"
        }

        if(searchError) {
            setData({searchError})
            return false
        }
        return true;
    }

    const onSubmit = event => {
        event.preventDefault();
        const isValid = validate();
        if (isValid) {
            console.log(data)
            setData(initialState)
        }
    }

    return (
        <div style={{height: '56px'}}>
    {/* <Layout fixedHeader style={{positive: "absolute"}}> */}
        <Header className="header" title={ <span><SvgLogo className='logo'/></span>}>
            <Navigation>
                <Link className="navHover" to="/"> Home </Link>
                <Link className="navHover" to="/userpage">Profile</Link>
                <Link className="navHover" to="About">About</Link>
                <Link className="navHover" to="ContactUs">Contact</Link>
                <Link className="navHover" to="Settings">Settings</Link>
                
                <form onSubmit={onSubmit}>
                    <label>
                        <input 
                        type="name"
                        placeholder="Search"
                        className="search"
                        name="search"
                        onChange = {onInputChange}
                        value={data.search}
                        />

                        {data.searchError}
                    </label>
                </form>

            </Navigation>
        </Header>
        {/* <Drawer title="Title">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/Profile">Profile</Link>
                <Link to="/">About</Link>
                <Link to="/ContactUs">Contact</Link>
                <Link to="/">Settings</Link>
            </Navigation>
        </Drawer> */}
    {/* </Layout> */}
</div>
    )
}

export default NavBar;

//TODO: add a log out button that removes token.