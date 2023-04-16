import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Col, Input, Space } from "antd";
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
const onSearch = (value) => console.log(value.target.value);
const HeaderSearch = () => {
  return (
    <div>
      <HeaderSearchComponent>
        <Col Span={6}>
          <Input
            className="search-button"
            style={{
              width: "300px",
              height: "45px",
              marginTop: "15px",
              borderRadius: "30px",
            }}
            onChange={onSearch}
            placeholder="Search here..."
          />
        </Col>
      </HeaderSearchComponent>
    </div>
  );
};

export default HeaderSearch;
export const HeaderSearchComponent = styled.div``;
