import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './index.less';


function AboutMeCard ( props: {
    src : string
} ) {

    return (
        <div className = { styles.root }>
            <Avatar 
            shape="square" 
            size={200} 
            icon={<UserOutlined />} 
            src = { props.src }
            />
            <div className = { styles.children } >
                <div className = { styles.item }>网名：开发者</div>
                <div className = { styles.item }>联系方式：开发者</div>
            </div>
        </div>
    );
}

export default AboutMeCard;