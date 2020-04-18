import Head from 'next/head'
import { Row, Col, Layout, Menu, Avatar } from 'antd';
import { FacebookFilled, TwitterSquareFilled, GithubFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

export default function Home() {
  return (
      <Layout className="layout">
      <Header>
        <div className="menu">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Avatar src="images/ava.jpg" style={{ marginRight:'20px' }}></Avatar>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Portofolio</Menu.Item>
          <Menu.Item key="4">Contact</Menu.Item>
        </Menu>
        </div>
      </Header>
      <Content>
        <div className="home">
        <Row justify="center">
          <Col md={18}>
            <p className="p1">Hello, I am</p>
            <p className="p2">Lazuardy Khatulistiwa</p>
            <p className="p3">Currently study Computer Science at State University of Jakarta</p>
            <FacebookFilled style={{ fontSize:'50px', color: '#3537b5'}} /><TwitterSquareFilled style={{ fontSize:'50px', color: '#4cd4d9'}} /><GithubFilled style={{ fontSize:'50px', color: '#494c4d'}} /><InstagramFilled style={{ fontSize:'50px', color: '#db1641'}} /><LinkedinFilled style={{ fontSize:'50px', color: '#108db3'}} />
          </Col>
        </Row>
        </div>
      </Content>
      <Footer></Footer>
      <style jsx>
        {`
        .menu {
          margin: auto;
          text-align: center;
        }
        .home {
          margin-top:20px;
        }
        .p1 {
          font-size: 50px;
          margin-bottom:0px;
        }
        .p2 {
          font-size: 50px;
          font-weight: bold;
          margin-bottom:0px;
        }
        .p3 {
          font-size: 35px;
        }
        .ava {
          border-radius: 50%;
          width: 10%;
        }
        `}
      </style>
      </Layout>
  )
}
