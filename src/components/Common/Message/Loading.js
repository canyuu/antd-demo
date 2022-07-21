import c from './index.less';
import {message} from 'antd';

export const loadingState = (text) => {
  const loadBg = document.createElement('div');
  const messageLoading = message.loading(text, 0);

  loadBg.className = c.load;
  document.body.appendChild(loadBg);

  return () => {
    document.body.removeChild(loadBg);
    messageLoading();
  };
};
