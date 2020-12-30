import React from 'react';
import Home from './icons-svg/home';
import Dashboard from './icons-svg/dashboard';
import AddRecord from './icons-svg/AddRecord';
import DeleteRecord from './icons-svg/DeleteRecord';
import Subscribers from './icons-svg/Subscribers';
import ModifyRecord from './icons-svg/ModifyRecord';
import SendEmail from './icons-svg/SendEmail';
import Logout from './icons-svg/Logout';
import Search from './icons-svg/Search';
import Notification from './icons-svg/Notification';
import AccountSettings from './icons-svg/AccountSettings';
import CloseWindow from './icons-svg/CloseWindow';
import SpinningIcon from './icons-svg/SpinningIcon';
import Show from './icons-svg/Show';

const Icon = (props) => {
  switch (props.name) {
    case 'home':
      return <Home {...props} />;
    case 'dashboard':
      return <Dashboard {...props} />;
    case 'add-record':
      return <AddRecord {...props} />;
    case 'show':
      return <Show {...props} />;
    case 'spinning-icon':
      return <SpinningIcon {...props} />;
    case 'close-window':
      return <CloseWindow {...props} />;
    case 'account-settings':
      return <AccountSettings {...props} />;
    case 'notification':
      return <Notification {...props} />;
    case 'search':
      return <Search {...props} />;
    case 'logout':
      return <Logout {...props} />;
    case 'send-email':
      return <SendEmail {...props} />;
    case 'modify-record':
      return <ModifyRecord {...props} />;
    case 'subscribers':
      return <Subscribers {...props} />;
    case 'delete-record':
      return <DeleteRecord {...props} />;
    default:
      return <Home {...props} />;
  }
};
export default Icon;
