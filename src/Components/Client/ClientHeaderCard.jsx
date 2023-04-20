import { Button, Card } from "antd";
import React from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import ClientOnlinereportTable from "./ClientOnlinereportTable";

const ClientHeaderCard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="">
        <Card
          title="Client Online Report List"
          bordered={false}
          style={
            {
              // width: 1240,
            }
          }
        ></Card>
        <div>
          <ClientOnlinereportTable />
        </div>
      </div>
    </div>
  );
};

export default ClientHeaderCard;
