import { Divider } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { todaydate } from "../Common/TodayDate";
import { inWords } from "../Common/numberToWords";

const BillPrintPage = () => {
  const [shouldPrint, setShouldPrint] = useState(false);
  const companyDetail = {
    CompanyName: "Luniva",
    COmpanyAddress: "banepa",
    COmpanyContactNo: "09899",
    COmpanyTPIN: "122",
  };
  const billItemDetails = [
    {
      billItemVal: "Test1",
    },
  ];
  const billDetails = {
    BillNo: "12",
    BILLID: "34",
  };

  useEffect(() => {
    if (shouldPrint) {
      setTimeout(() => {
        window.print();
        // window.close();
      }, [1000]);
    }
  }, [shouldPrint]);
  return (
    <div>
      <Printpage>
        <div className="topic-section">
          {/* {console.log(singlePartyData)} */}
          <h3>{companyDetail?.CompanyName}</h3>
          <p>{companyDetail?.COmpanyAddress}</p>
          <p>
            Ph no: <span>{companyDetail?.COmpanyContactNo}</span> <br />
            PAN: <span>{companyDetail?.COmpanyTPIN}</span>
          </p>
          <div className="invoice">
            <span className="invoice-details">Invoice</span>
          </div>
        </div>
        <div className="details-section">
          <Divider orientation="left"></Divider>

          <div className="details-new">
            <table className="table-design">
              <tbody>
                <tr>
                  <td>
                    <div>
                      <strong>Bill No: </strong>
                      <span>{billDetails.BillNo}</span>
                    </div>
                    <div>
                      <strong>
                        Bill Id:<span></span>{" "}
                      </strong>
                      {/* <span>{BILLID}</span> */}
                    </div>
                    <div>
                      <strong>
                        Requestor: <span></span>
                      </strong>
                    </div>
                    <div>
                      <strong>Payment Mode:</strong>
                    </div>
                    <div>
                      <strong>Payment Type:</strong>
                      <span></span>
                    </div>
                  </td>
                  <td>
                    <div className="right-details">
                      <div>
                        <strong>Bill Date: </strong>
                        <span></span>
                      </div>
                      <div>
                        <strong>Bill Nepali Date: </strong>
                      </div>
                      <div>
                        <strong>Credit Name: </strong>
                      </div>
                      <div>
                        <strong>Credit Pan: </strong>
                      </div>
                      <div>
                        <strong>Credit Party Code: </strong>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <table className="table_bill">
                <thead>
                  <tr>
                    <th>S.N</th>
                    <th>Test Name</th>
                    <th className="money"></th>
                    {/* <th className="money">Quantity</th> */}
                    {/* <th className="money">Discount</th> */}
                    {/* <th className="money">Round Amount (Rs)</th> */}
                    <th className="money">Price (Rs)</th>
                  </tr>
                </thead>
                <tbody>
                  {billItemDetails.map((billItemVal, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>
                        <div>{billItemVal.billTestName} </div>
                      </td>
                      {/* <td className="money">{billItemVal.billPrice}</td> */}
                      <td></td>
                      {/* <td className="money">1</td> */}
                      {/* <td className="money">
                          {billItemVal.BillDiscountAmount}
                        </td> */}
                      {/* <td className="money">{billItemVal.RoundAmount}</td> */}
                      <td className="money">{billItemVal.billPrice}</td>
                    </tr>
                  ))}
                  {billItemDetails.map((billItemVal, index) => (
                    <tr>
                      <th>Total</th>
                      <th></th>
                      {/* <th className="money">{billDetails[0].Price}</th> */}
                      <th></th>
                      <th className="money grandTotalAmount">
                        {/* {billDetails[0].TotalPrice} */}
                        {billItemVal.billPrice}
                      </th>
                      <th className="money"></th>
                      {/* {billDetails[0].BillDiscountPrice} */}
                    </tr>
                  ))}
                  <tr>
                    <th></th>
                    <th className="total-below">
                      <span>Net Total</span> <br></br>
                      <span>Discount Amount </span> <br></br>
                      <span>Round Amount </span> <br></br>
                      <span>Grand Total</span> <br></br>
                      <span>Paid Amount</span> <br></br>
                    </th>
                    <td className="money" colSpan="3">
                      {/* <span>{billDetails[0].TotalPrice}</span>
                        <br></br> */}
                      {billItemDetails.map((billItemVal, index) => (
                        <>
                          <span>{billItemVal.billPrice}</span>
                          <br></br>
                          <span>{billItemVal.BillDiscountAmount} </span>
                          <br></br>
                          <span>{billItemVal.RoundAmount}</span>
                          <br></br>
                          <span>{billItemVal.BillPriceFinal}</span>

                          <br></br>
                        </>
                      ))}
                      <span>
                        {/* {billDetails[0].BillAmtPaid} */}
                        Dummy amt
                      </span>{" "}
                      <br></br>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="printed-section">
                <span>
                  <strong>Printed On:</strong> {todaydate}
                </span>

                <span>
                  <strong>Printed By:</strong>
                  {/* {tokenString.token.username} */}
                  User
                </span>
              </div>
              <span className="total-amt">
                Amount in Words:
                {inWords(890)}
                {/* {inWords(billDetails[0].TotalPrice)} */}
              </span>
            </div>
          </div>
        </div>
      </Printpage>
    </div>
  );
};

export default BillPrintPage;
const Printpage = styled.div`
  .topic-section {
    display: grid;
    justify-content: center;
    margin-top: 10px;
    align-items: center;
    text-align: center;
  }
  p {
    margin: 0;
  }
  h3 {
    color: black;
    margin: 0;
  }
  .invoice-details {
    font-size: 18px;
  }
  .row-section {
    margin-left: 10px;
  }

  /* new table */
  .details-new {
    margin-left: 10px;
  }
  tr td:last-child {
    text-align: right;
  }
  .table-design {
    width: 100%;
  }
  .right-details {
    margin-right: 10px;
  }
  .table_bill {
    border: 1px solid #ccc;
    border-collapse: collapse;
    width: 100%;
  }
  .table_bill thead tr th,
  .table_bill tfoot tr th {
    padding: 5px 9px !important;
  }
  .table_bill th {
    border: 1px solid #ccc;
  }
  .table_bill td,
  .table_bill th {
    border: 1px solid #ccc;
  }
  .money {
    text-align: right;
  }
  .table_bill tbody tr td {
    padding: 0px 9px !important;
  }
  .total-below {
    text-align: left;
  }
  th {
    text-align: left;
  }

  .printed-section span:last-child {
    float: right;
    text-align: right;
  }
  .qmoney {
    text-align: left;
  }
  p,
  span {
    font-size: 12px;
  }
  .total-amt {
    text-transform: capitalize;
  }
`;
