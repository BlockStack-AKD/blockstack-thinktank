import React, {useState, useEffect} from "react";

import { UserSession } from "blockstack";
import { appConfig } from "../config/constants";

import { Layout, Breadcrumb, Button } from 'antd';

import SiderMenu from './SiderMenu';

const { Header, Content, Footer } = Layout;

const SignedIn = props => {

    const userSession = new UserSession({appConfig});

    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        setLoading(true);
        const options = { decrypt: false }
        userSession.getFile('testing.json', options)
          .then((file) => {
            var data = JSON.parse(file || '[]')
            setData(data);
            console.log(data)
          })
          .finally(() => {
            setLoading(false);
          })
    }

    const handleSignOut = (e) => {
        userSession.signUserOut(window.location.origin)
    }

    const saveDataTest = () => {

        let datas = data;

        let test = {
            id: Math.random(),
            text: 'texthere'
        }
        datas.unshift(test);
        setData([{test}]);
        const options = { encrypt: false}
        userSession.putFile('testing.json', JSON.stringify(datas), options)
            .then(() => {
                console.log("Success");
                console.log(datas);
                setData(datas);
            })
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
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        {data  && !isLoading ? data.map((data) => (
                            <div className="status" key={data.id}>
                                {data.text}
                            </div>
                        )) : <h1>Loading Data</h1>}
                        </div>
                        <Button onClick={(e) => saveDataTest()}>Test Data</Button>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Blockstack Boilerplate</Footer>
                </Layout>
            </Layout>
        </div>
    )
}


  
  export default SignedIn;

