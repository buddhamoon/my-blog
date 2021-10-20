import { Layout } from 'antd';
import styles from './contentIndex.less'
import NavigationComp from '../components/navigation'
const { Header, Footer, Sider, Content } = Layout;


function ContentIndex ( props: any ) {

    return <> 
    <Layout className='styles.dss'>
      <Header className={styles.headerList}>
        <NavigationComp></NavigationComp>
      </Header>
      <Layout>
        <Content>Content</Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
    </>
}

export default ContentIndex;