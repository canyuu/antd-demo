import './RadioGroup.less';
import {map} from 'lodash';
import React, {useState} from 'react';


const defaultGroups = [
  {title: '意向发起', content: '基线、需求、进度', key: 'businessLaunch'},
  {title: '意向关闭/终止', key: 'businessClose'},
  {title: '项目变更', key: 'projectChange'},
  {title: '上线流程', key: 'onlineFlow'},
];
const RadioGroup = () => {
  const onClick = (key) => {
    setValue(key);
  };
  const [value, setValue] = useState('');


  return (
    <>
      <div className={'container'}>
        {map(defaultGroups, ({title, content, key}) => {
          return (
            <div onClick={() => {
              onClick(key);
            }} key={key}

            className={key === value ? 'info' : 'base-info'}
            >
              <div>
                {title}
                <br/>
                <span className={'subTitle'}>{content}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default RadioGroup;
