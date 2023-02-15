import {
  ContactsOutlined,
  HomeOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import './styles.css';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Home', '1', <HomeOutlined />),
  getItem('My Expertise', '2', <PieChartOutlined />),
  getItem('Contact Me', '3', <ContactsOutlined />),
];
const NavigationPanel = () => {
  return (
    <div className='navigation-panel'>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['1']}
        mode="inline"
        theme="dark"
        inlineCollapsed
        items={items}
      />
    </div>
  );
};
export default NavigationPanel;
