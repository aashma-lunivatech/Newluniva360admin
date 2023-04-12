import { Space, Table, Tag } from "antd";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Doctor",
    dataIndex: "doctor",
    key: "doctor",
  },

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        {/* <a>Edit {record.name}</a> */}
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    doctor: "ram",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    doctor: "Harry",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    doctor: "Shyam",
  },
];
const TableAppointementActivity = () => (
  <Table columns={columns} dataSource={data} />
);
export default TableAppointementActivity;
