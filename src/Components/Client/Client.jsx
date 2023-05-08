import React, { useEffect } from "react";
import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Switch,
  Upload,
  message,
  notification,
} from "antd";
import { useState } from "react";
import styled from "styled-components";
import {
  GetListOfRegisteredClientByIds,
  GetListOfStates,
  GetListOfVDCByDistrictIds,
  GetlistofDisctrictByStateIds,
  InsertUpdateClientDetailsluniva,
} from "../../services/appServices/ProductionServices";
import { useNavigate, useParams } from "react-router-dom";

const Client = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedId, setSelectedId] = useState(id);
  const [bannerurl, setbannerurl] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const [buttondisable, setButtondisable] = useState(false);
  const [statelist, setStateList] = useState();
  const [districtlist, setDistrictList] = useState();
  const [municiplalitylist, setMunicipality] = useState();
  const [selectedstatevalue, setSelectedStateValue] = useState();
  const [selecteddistrictvalue, setSelectedDistrict] = useState();
  const [editvalue, setEditvalue] = useState();
  const [clientList, setClientList] = useState();
  const [clientFile, setClientFile] = useState();
  const bannerprops = {
    name: "file",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      console.log(info);
      setClientFile(info.file);
    },
  };
  useEffect(() => {
    console.log(clientFile, "clientfile");
  });
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList, "infodata");
        console.log(info.fileList.name, "infofilename");
        setImageUrl(info.file.name);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  let finaldate = selectedDate?.format("YYYY-MM-DD");
  let currentDate = new Date().toISOString().split("T")[0];
  console.log(currentDate, "currentdate");
  useEffect(() => {
    console.log(selectedDate, "selecteddate");
    if (editvalue !== undefined) {
      form.resetFields();
      console.log("in am inside editfield valuie");
    }
  }, [editvalue]);
  useEffect(() => {
    if (editvalue === undefined) {
      let data = {
        id: id,
      };
      GetListOfRegisteredClientByIds(data, (res) => {
        console.log(res, "resho");
        if (res?.ClientList && res?.ClientList.length > 0) {
          setEditvalue(res?.ClientList[0]);
          setClientList(res?.clientList);
          // setEditvalue(res?.ClientList[0]);
          console.log(editvalue, "editevalueshoo");
        } else {
          setClientList([]);
          console.log("out of if else get data");
        }
      });
    }
  }, [editvalue]);
  const handleStateChange = (e) => {
    setSelectedStateValue(e);
  };
  const handleclientDistrict = (e) => {
    setSelectedDistrict(e);
  };

  useEffect(() => {
    console.log(selectedstatevalue, "setselectdstatevalue");
    console.log(id, "idparams");
    let data = {
      stateId: selectedstatevalue,
    };

    let munidata = {
      districtId: selecteddistrictvalue,
    };
    GetListOfStates((res) => {
      if (res?.StateList && res?.StateList.length > 0) {
        setStateList(res?.StateList);
      } else {
        setStateList([]);
        console.log("outof else block");
      }
    });
    GetlistofDisctrictByStateIds(data, (res) => {
      if (res?.DistrictList && res?.DistrictList.length > 0) {
        setDistrictList(res?.DistrictList);
        console.log("i am inside if block");
        console.log(districtlist, "dis");
      } else {
        setDistrictList([]);
        console.log("outof else distrcit block");
      }
    });
    GetListOfVDCByDistrictIds(munidata, (res) => {
      if (res?.VDCLIST && res?.VDCLIST.length > 0) {
        setMunicipality(res?.VDCLIST);
        console.log("i am inside if block");
      } else {
        setMunicipality([]);
        console.log("outof else block");
      }
    });
    console.log(data, "data");
  }, [selectedstatevalue, selecteddistrictvalue]);
  const handleSubmit = (values) => {
    console.log(values, "values");
    const formData = new FormData();
    formData.append("ClientLogo", values.ClientLogo.file);
    // console.log(imgdata, "imgdata");
    console.log(formData, "formdataho");
    let data = {
      RId: editvalue ? id : 0,
      ClientCode: values?.ClientCode ?? "Np",
      ClientName: values?.ClientName,
      ClientCountry: values?.ClientCountry ?? "Np",
      ClientState: values?.ClientState,
      ClientDistrict: values?.ClientDistrict,
      ClientMUNVDC: values?.ClientMUNVDC,
      ClientLocalAddress: values?.ClientLocalAddress,
      ClientTypeId: values?.ClientTypeId ?? "assdnbn",
      ClientPAN: values?.ClientPAN,
      ClientPhoneNumber: values?.ClientPhoneNumber,
      ClientEmail: values?.ClientEmail,
      ClientWebsite: values?.ClientWebsite,
      // ClientLogo: imageUrl,
      ClientLogo: formData,
      ClientContactPerson: values?.ClientContactPerson,
      ClinetContactPersonMobile: values?.ClinetContactPersonMobile,
      IsActive: values?.IsActive || true,
      UserId: values?.UserId,
      RegisterDate: finaldate ?? currentDate,

      clientBanner: "banner.jpg",
    };
    console.log(data, "clientdata");
    InsertUpdateClientDetailsluniva(data, (res) => {
      console.log(res, "i am response");
      if (res?.SuccessMsg == true) {
        message.success("client details Added Successfully");
        notification.config({
          placement: "topRight",
          duration: 3,
          style: {
            backgroundColor: "#f6ffed",
            border: "1px solid #b7eb8f",
          },
        });
        setButtondisable(true);
        // setTimeout(function () {
        //   window.location.reload();
        // }, 4000);
      } else {
        notification.warning("Error!");
      }
    });
    console.log(data, "i am a data");
  };

  return (
    <ClientComponents>
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
          <Col span={24}>
            <Form
              form={form}
              initialValues={editvalue}
              onFinish={handleSubmit}
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 8,
              }}
              layout="horizontal"
              style={{
                // maxWidth: 500,
                marginTop: 10,
              }}
            >
              {/* <Form.Item label="RID" name="RID">
                <InputNumber />
              </Form.Item> */}
              {/* <Form.Item label="ClientCode" name="ClientCode">
                <Input />
              </Form.Item> */}
              <Form.Item
                label="Name"
                name="ClientName"
                values="ClientName"
                rules={[{ required: true, message: "Name is required" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="UserId"
                name="UserId"
                values="UserId"
                rules={[{ required: true, message: "Id is required" }]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              {/* <Form.Item label="ClientCountry" name="ClientCountry">
                <InputNumber />
              </Form.Item> */}
              <Form.Item
                label="ClientState"
                name="ClientState"
                values="ClientState"
                rules={[{ required: true, message: "State is required" }]}
              >
                {/* <InputNumber /> */}
                <Select
                  onChange={handleStateChange}
                  showSearch
                  filterOption={(input, option) => {
                    return (
                      option.key.toLowerCase().indexOf(input.toLowerCase()) >=
                        0 ||
                      option.title.toLowerCase().indexOf(input.toLowerCase()) >=
                        0
                    );
                  }}
                >
                  {statelist !== undefined &&
                    statelist.map((e) => (
                      <Option
                        title={e.StateName}
                        value={e.StateId}
                        key={e.StateId}
                      >
                        {e.StateName}
                      </Option>
                    ))}
                </Select>
              </Form.Item>
              <Form.Item
                label="ClientDistrict"
                name="ClientDistrict"
                values="ClientDistrict"
                rules={[{ required: true, message: "District is required" }]}
              >
                <Select
                  onChange={handleclientDistrict}
                  showSearch
                  defaultValue=""
                  filterOption={(input, option) => {
                    return (
                      option.key.toLowerCase().indexOf(input.toLowerCase()) >=
                        0 ||
                      option.title.toLowerCase().indexOf(input.toLowerCase()) >=
                        0
                    );
                  }}
                >
                  {districtlist !== undefined &&
                    districtlist.map((e) => (
                      <Option title={e.District} value={e.DId} key={e.DId}>
                        {e.District}
                      </Option>
                    ))}
                </Select>
              </Form.Item>
              <Form.Item
                label="ClientMUNVDC"
                name="ClientMUNVDC"
                values="ClientMUNVDC"
                rules={[
                  { required: true, message: "Municipality is required" },
                ]}
              >
                {/* <InputNumber /> */}
                <Select
                  showSearch
                  filterOption={(input, option) => {
                    return (
                      option.key.toLowerCase().indexOf(input.toLowerCase()) >=
                        0 ||
                      option.title.toLowerCase().indexOf(input.toLowerCase()) >=
                        0
                    );
                  }}
                >
                  {municiplalitylist !== undefined &&
                    municiplalitylist.map((e) => (
                      <Option title={e.Name} value={e.VdcID} key={e.VdcID}>
                        {e.Name}
                      </Option>
                    ))}
                </Select>
              </Form.Item>
              <Form.Item
                label="LocalAddress"
                name="ClientLocalAddress"
                values="ClientLocalAddress"
                rules={[{ required: true, message: "Address is required" }]}
              >
                <Input />
              </Form.Item>
              {/* <Form.Item label="ClientTypeId" name="ClientTypeId">
                <InputNumber />
              </Form.Item> */}
              <Form.Item
                label="PAN"
                name="ClientPAN"
                values="ClientPAN"
                rules={[{ required: true, message: "PAN is required" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="PhoneNumber"
                name="ClientPhoneNumber"
                values="ClientPhoneNumber"
                rules={[
                  { required: true, message: "ClientPhoneNumber is required" },
                ]}
              >
                <Input />
              </Form.Item>
              {/* <Form.Item label="UserId" name="UserId">
                <InputNumber />
              </Form.Item> */}
              <Form.Item
                label="Email"
                name="ClientEmail"
                values="ClientEmail"
                rules={[{ required: true, message: "ClientEmail is required" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Website"
                name="ClientWebsite"
                values="ClientWebsite"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="ContactPerson"
                name="ClientContactPerson"
                values="ClientContactPerson"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="ContactPersonMobile"
                name="ClinetContactPersonMobile"
                values="ClinetContactPersonMobile"
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              {/* <Form.Item label="Banner" name="clientBanner">
                <Input />

              </Form.Item> */}
              {editvalue ? (
                ""
              ) : (
                <Form.Item label="RegisterDate" name="RegisterDate">
                  <DatePicker
                    rules={[
                      {
                        required: true,
                        message: "Date is required!",
                      },
                    ]}
                    value={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              )}

              {/* <Form.Item
                label="Client Banner"
                name="clientBanner"
                values="clientBanner"
              >
                <Upload {...bannerprops}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Form.Item> */}
              <Form.Item
                label="Client logo"
                name="ClientLogo"
                values="ClientLogo"
              >
                <Upload {...bannerprops}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
                {/* {clientFile && (
                  <img
                    src={URL.createObjectURL(clientFile)}
                    alt="uploaded file"
                  />
                )} */}
              </Form.Item>
              <Form.Item
                label="is Active"
                valuePropName="checked"
                name="IsActive"
                values="IsActive"
              >
                <Switch />
              </Form.Item>
              <Form.Item>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    disabled={buttondisable}
                    htmlType="submit"
                    // disabled={butDis}
                    type="primary"
                    className="sumit-button"
                  >
                    Submit
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </Col>
        </Card>
      </div>
    </ClientComponents>
  );
};

export default Client;
const ClientComponents = styled.div``;
