import React from "react";
import { SettingOutlined } from "@ant-design/icons";
import { Collapse, Select } from "antd";
import { useState } from "react";
import DoctorListApifetched from "../DoctorsData/DoctorListApifetched";

const { Panel } = Collapse;
const { Option } = Select;

const Doctorslist = () => {
  const [expandIconPosition, setExpandIconPosition] = useState("start");
  const onPositionChange = (newExpandIconPosition) => {
    setExpandIconPosition(newExpandIconPosition);
  };
  const onChange = (key) => {
    // console.log(key);
  };
  const genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );

  return (
    <>
      <Collapse
        defaultActiveKey={["1"]}
        onChange={onChange}
        expandIconPosition={expandIconPosition}
      >
        <Panel
          style={{ fontSize: "20px" }}
          header="Doctor List"
          key="1"
          extra={genExtra()}
        >
          <div className="custom-scrollbar">
            <DoctorListApifetched />
          </div>
        </Panel>
      </Collapse>
      <br />
    </>
  );
};

export default Doctorslist;
