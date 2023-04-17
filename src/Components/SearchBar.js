import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

const { Search } = Input;

const SearchBar = ({clickHandler}) => (
  <Space direction="vertical">
    <Search
      placeholder="Location"
      allowClear
      enterButton="Search"
      size="large"
      // onSearch={(value) => clickHandler(value)}
      onPressEnter={(value) => clickHandler(value)}
    />
  </Space>
);

export default SearchBar;