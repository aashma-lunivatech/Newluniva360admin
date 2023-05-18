import { Button, Card, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const LabTestItems = () => {
  const navigate = useNavigate();
  function addtestlist() {
    navigate("/addlabtest");
  }
  function handleClick() {}
  return (
    <div>
      <div>
        <Card title="Test List" bordered={false} style={{}}>
          <Button
            onClick={addtestlist}
            className="btn-load save-btn-float-right"
          >
            Add Test
          </Button>
          <div className="">
            <div>
              <div>
                <label className="label-name">Test ID</label>
                <Input
                  type="number"
                  style={{ width: 300 }}
                  // value={userid}
                  // onChange={(e) => setUserid(e.target.value)}
                />
                {/* <label className="label-name">Vitals ID</label>
                  <Input
                    type="number"
                    style={{ width: 300 }}
                    value={vitalsid}
                    onChange={(e) => setVitalsid(e.target.value)}
                  /> */}

                <Button className="btn-load" onClick={handleClick}>
                  Load
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LabTestItems;
