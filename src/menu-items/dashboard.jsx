// assets
import { DashboardOutlined } from '@ant-design/icons';
import UserOutlined from '@ant-design/icons/UserOutlined';

// icons
const icons = {
  DashboardOutlined,
  UserOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'personal creation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Personal',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.UserOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
