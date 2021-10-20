import { Layout } from 'antd';
import styles from './contentIndex.less'
import NavigationComp from '../components/navigation'
import { Row, Col } from 'antd'
import DocList from '@/components/DocList';
const { Header, Footer, Sider, Content } = Layout;


function ContentIndex ( props: any ) {

    return <> 
    <Layout className={styles.layoutTop}>
      <Header className={styles.headerList}>
        <NavigationComp></NavigationComp>
      </Header>
      <Layout className={styles.headerImage}>
        <Content>
          
        </Content>
      </Layout>
      <Layout className={styles.contentLayout}>
        <Content className={styles.contentList}>
        <DocList></DocList>
        </Content>
        <Sider 
        width={ 350 }
        className={styles.userSider}>Sider</Sider>
      </Layout>
      <Footer className={styles.pageFooter}>Footer</Footer>
    </Layout>
    </>
}

export default ContentIndex;