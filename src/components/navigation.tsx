import { Menu } from 'antd';
import { ProfileOutlined,RestOutlined, AppstoreOutlined, SettingOutlined, WalletOutlined } from '@ant-design/icons';
import React from 'react';

const { SubMenu } = Menu;

class NavigationComp extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = (e: { key: any; }) => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="index" icon={<ProfileOutlined />}>
          首页 - Index
        </Menu.Item>
        <Menu.Item key="document" icon={<RestOutlined />}>
          文档 - Documnet
        </Menu.Item>
        <Menu.Item key="image" icon={<AppstoreOutlined />}>
          图片 - Photo
        </Menu.Item>
        <Menu.Item key="about" icon={<WalletOutlined />}>
          关于我们 - About
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="更多 - More">
          <Menu.ItemGroup title="爱好">
            <Menu.Item key="setting:1">电影</Menu.Item>
            <Menu.Item key="setting:2">读书</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="其他">
            <Menu.Item key="setting:3">散步</Menu.Item>
            <Menu.Item key="setting:4">美食</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}

export default NavigationComp;