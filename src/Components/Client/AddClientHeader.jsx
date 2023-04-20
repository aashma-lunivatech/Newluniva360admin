import { Button, Card } from "antd";
import React from "react";
import RegisteredClient from "./RegisteredClient";
import { useNavigate } from "react-router-dom";

const AddClientHeader = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/clientsform");
  };
  return (
    <div>
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
          <div className="add-button">
            <Button
              htmlType="submit"
              // disabled={butDis}
              type="primary"
              onClick={() => handleRedirect()}
            >
              Add Clients
            </Button>
          </div>
        </Card>
        <RegisteredClient />
      </div>
    </div>
  );
};

export default AddClientHeader;
