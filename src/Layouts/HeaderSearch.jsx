import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import styled from "styled-components";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const onSearch = (value) => console.log(value);
const HeaderSearch = () => {
  return (
    <div>
      <HeaderSearchComponent>
        <Search
          className="search-button"
          placeholder="Search here .... "
          onSearch={onSearch}
          // enterButton
        />
      </HeaderSearchComponent>
    </div>
  );
};

export default HeaderSearch;
export const HeaderSearchComponent = styled.div`
  .search-button {
    margin-top: 10px;
  }
`;
