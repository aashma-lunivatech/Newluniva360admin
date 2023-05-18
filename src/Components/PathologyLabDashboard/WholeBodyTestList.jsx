import { VerticalLeftOutlined } from "@ant-design/icons";
import { Button, Card, Col, Input, Pagination, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import labtestimage from "../../assets/images/labtestimage.png";

const testlistdata = [
  {
    icon: <VerticalLeftOutlined />,
    name: "Whole Body Checkup",
    test1: "RBC Test",
    test2: "Urine sample Test",
    test3: "WBC Count Test",
    test4: "Body Sugar Test",
  },
  {
    icon: <VerticalLeftOutlined />,
    name: "Whole Body Checkup",
    test1: "RBC Test",
    test2: "Urine sample count",
    test3: "WBC Count Test",
    test4: "Body Sugar Test",
  },
  {
    icon: <VerticalLeftOutlined />,
    name: "Whole Body Checkup",
    test1: "RBC Test",
    test2: "Urine sample count",
    test3: "WBC Count Test",
    test4: "Body Sugar Test",
  },
  {
    icon: <VerticalLeftOutlined />,
    name: "Whole Body Checkup",
    test1: "CED Test",
    test2: "Urine sample count",
    test3: "WBC Count Test",
    test4: "Body Sugar Test",
  },
  {
    icon: <VerticalLeftOutlined />,
    name: "Whole Body Checkup",
    test1: "ABC Test",
    test2: "Urine sample count",
    test3: "WBC Count Test",
    test4: "Body Sugar Test",
  },
  {
    icon: <VerticalLeftOutlined />,
    name: "Whole Body Checkup",
    test1: "QWC Test",
    test2: "Urine sample count",
    test3: "WBC Count Test",
    test4: "Body Sugar Test",
  },
  // Add more data items if needed
];

const WholeBodyTestList = () => {
  const navigate = useNavigate();
  const { Search } = Input;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [searchvalue, setSearchValue] = useState();
  const [filtereddata, setFilteredData] = useState();
  const { Meta } = Card;
  const handlebooktest = () => {
    navigate("/BookTestBill");
  };

  const handleSearch = (e) => {
    const values = e.target.value;
    setSearchValue(values);
    const filtered = testlistdata.filter((item) =>
      item.name.toLowerCase().includes(values.toLowerCase())
    );
    // console.log(filtered, "filtered");
    setFilteredData(filtered);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = testlistdata.slice(startIndex, endIndex);

  return (
    <WholeBody>
      <div>
        <Row>
          <Col span={12}></Col>
          <Col span={12}>
            <Search
              onChange={handleSearch}
              style={{ width: "50%" }}
              className="input-searchbtn"
              placeholder="Search Here"
            />
          </Col>
        </Row>
        {/* <Row>
          {currentData.map((item, index) => (
            <Col className="column-pathology" span={6} key={index}>
              <h1 className="test-heading">{item.name}</h1>
              <ul>
                {item.icon}
                <span className="icon-test"> {item.test1}</span>
              </ul>
              <ul>
                {item.icon}
                <span className="icon-test">{item.test2}</span>
              </ul>
              <ul>
                {item.icon}
                <span className="icon-test">{item.test3}</span>
              </ul>
              <ul>
                {item.icon}
                <span className="icon-test">{item.test4}</span>
              </ul>
              <Button onClick={handlebooktest} className="btn-load book-btn">
                Book Test
              </Button>
            </Col>
          ))}
          <Col span={4}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={<img src={labtestimage} alt="microscope" />}
            >
              <Meta title="Book Lab Test" />
            </Card>
          </Col>
        </Row> */}
        <Row>
          {currentData.map((item, index) => {
            const searchMatch =
              searchvalue &&
              (item.name.toLowerCase().includes(searchvalue.toLowerCase()) ||
                item.test1.toLowerCase().includes(searchvalue.toLowerCase()) ||
                item.test2.toLowerCase().includes(searchvalue.toLowerCase()) ||
                item.test3.toLowerCase().includes(searchvalue.toLowerCase()) ||
                item.test4.toLowerCase().includes(searchvalue.toLowerCase()));

            if (searchvalue && !searchMatch) {
              return null; // Skip rendering if search value doesn't match
            }

            return (
              <Col className="column-pathology" span={6} key={index}>
                <h1 className="test-heading">{item.name}</h1>
                <ul>
                  {item.icon}
                  <span className="icon-test"> {item.test1}</span>
                </ul>
                <ul>
                  {item.icon}
                  <span className="icon-test">{item.test2}</span>
                </ul>
                <ul>
                  {item.icon}
                  <span className="icon-test">{item.test3}</span>
                </ul>
                <ul>
                  {item.icon}
                  <span className="icon-test">{item.test4}</span>
                </ul>
                <Button onClick={handlebooktest} className="btn-load book-btn">
                  Book Test
                </Button>
              </Col>
            );
          })}
          <Col span={4}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={<img src={labtestimage} alt="microscope" />}
            >
              <Meta title="Book Lab Test" />
            </Card>
          </Col>
        </Row>

        <div className="pagination-section">
          <Pagination
            current={currentPage}
            onChange={setCurrentPage}
            total={testlistdata.length}
            pageSize={pageSize}
          />
        </div>
      </div>
    </WholeBody>
  );
};

export default WholeBodyTestList;

const WholeBody = styled.div`
  .column-pathology {
    border-radius: 10px;
    margin-right: 12px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .test-heading {
    justify-content: center;
    display: flex;
    border-bottom: 1px solid #d6d6e1;
  }
  .icon-test {
    margin-left: 10px;
  }
  .book-btn {
    float: right;
  }
  .book-btn:hover {
    color: white;
  }
  .pagination-section {
    margin-top: 10px;
  }
`;
