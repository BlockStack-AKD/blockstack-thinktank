import React from "react";

import { UserSession } from "blockstack";
import { appConfig } from "../config/constants";

import { Layout, Breadcrumb } from 'antd';

import SiderMenu from './SiderMenu';

const { Header, Content, Footer } = Layout;

const SignedIn = props => {

    const userSession = new UserSession({appConfig});

    const handleSignOut = (e) => {
        // e.preventDefault();
        userSession.signUserOut(window.location.origin)
    }

    return (
        <div data-testid="signedinTestID">
            <Layout style={{ minHeight: '100vh' }}>
                <SiderMenu signOut={handleSignOut}/>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>{userSession.isUserSignedIn() ? userSession.loadUserData().username : 'No User' }</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Welcome!</div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Blockstack Boilerplate</Footer>
                </Layout>
            </Layout>
        </div>
    )
}


  
  export default SignedIn;

