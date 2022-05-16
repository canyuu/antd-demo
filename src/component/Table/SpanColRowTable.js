import {Table} from 'antd';
import React, {useCallback} from 'react';// react核心库

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text, row, index) => <a>{text}</a>,

  },
  {
    title: 'Age',
    dataIndex: 'age',
    render: (text, record) => {
      return {
        children: text,
        props: {
          rowSpan: record.rowSpan,
        },
      };
    },
  },
  {
    title: 'Home phone',
    colSpan: 2,
    dataIndex: 'tel',
  },
  {
    title: 'Phone',
    colSpan: 0,
    dataIndex: 'phone',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const dataSource = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
  },
];

const handleDataSource = useCallback((data, key) => {
  return data
      .reduce((result, item) => {
        // 首先将key字段作为新数组result取出
        if (result.indexOf(item[key]) < 0) {
          result.push(item[key]);
        }
        return result;
      }, [])
      .reduce((result, value, rowNum) => {
        // 将key相同的数据作为新数组取出，并在其内部添加新字段**rowSpan**
        const children = data.filter((item) => item[key] === value);
        result = result.concat(
            children.map((item, index) => ({
              ...item,
              rowSpan: index === 0 ? children.length : 0, // 将第一行数据添加rowSpan字段
              rowNum: rowNum + 1,
            })),
        );
        return result;
      }, []);
}, []);

const SpanColRowTable = () => {
  return (<Table
    columns={columns}
    dataSource={handleDataSource(dataSource, 'age')}
    bordered/>);
};
export default SpanColRowTable;
