import {
  ContainerOutlined,
  PieChartOutlined,
  DesktopOutlined,
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
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),
];
const NavigationPanel = () => {
  return (
    <div className='navigation-panel'>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed
        items={items}
      />
    </div>
  );
};
export default NavigationPanel;
