import { Button, Card, Input, Space } from "antd";
import React from "react";
import styled from "styled-components";

const ClientDepartment = () => {
  const { Search } = Input;
  console.log(Search, "SEACRH VALUE");
  return (
    <ClientDepartments>
      <div className="">
        <Card
          title="Client Details"
          bordered={false}
          style={
            {
              // width: 1240,
            }
          }
        >
          <ClientDepartmentButton>
            <Space.Compact
              style={{
                width: "25%",
              }}
            >
              <Input defaultValue="" />
              <Button type="primary">Submit</Button>
            </Space.Compact>
          </ClientDepartmentButton>
        </Card>
      </div>
    </ClientDepartments>
  );
};

export default ClientDepartment;
const ClientDepartments = styled.div``;
const ClientDepartmentButton = styled.div``;
