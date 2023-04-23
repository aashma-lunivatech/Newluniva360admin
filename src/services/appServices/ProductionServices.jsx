import {
  GetClientWiseDepartmentByClientId,
  GetListOfDoctorDetailsByDepartment,
  GetListOfRegisteredClients,
  GetlistofClientForOnlineReport,
  InsertUpdateClientDetails,
} from "../constants/url";
import { fetch, seperateStoreJson, store } from "../utils/httpUtil";
//getdoctorlist
export const GetListOfDoctorDetails = async (data, successCallback) => {
  console.log(data, "datajhomaa");
  try {
    const response = await fetch(
      `${GetListOfDoctorDetailsByDepartment}?departmentId=${data.departmentId}`
    );
    if (response?.status === 200) {
      successCallback(response?.data);
    } else {
      successCallback([]);
    }
  } catch (errror) {
    successCallback([]);
  }
};

//insertclientdetails

export const InsertUpdateClientDetailsluniva = async (
  data,
  successCallback
) => {
  try {
    const response = await store(`${InsertUpdateClientDetails}`, data);
    if (response?.status === 200) {
      successCallback(response?.data);
    } else {
      successCallback([]);
    }
  } catch (error) {
    successCallback([]);
  }
};

// client online report
export const GetlistofClientForOnlineReports = async (successCallback) => {
  try {
    const response = await fetch(`${GetlistofClientForOnlineReport}`);
    if (response?.status === 200) {
      successCallback(response?.data);
    } else {
      successCallback([]);
    }
  } catch (errror) {
    successCallback([]);
  }
};
//registered clients

export const GetListOfRegisteredClientsluniva = async (successCallback) => {
  try {
    const response = await fetch(`${GetListOfRegisteredClients}`);
    if (response?.status === 200) {
      successCallback(response?.data);
    } else {
      successCallback([]);
    }
  } catch (errror) {
    successCallback([]);
  }
};
//client wise department

// export const GetClientWiseDepartmentByClientIds = async (
//   data,
//   successCallback
// ) => {
//   console.log(data, "datajhomaa");
//   try {
//     const response = await fetch(
//       `${GetClientWiseDepartmentByClientId}?clientId=${data.clientId}`
//     );
//     if (response?.status === 200) {
//       successCallback(response?.data);
//     } else {
//       successCallback([]);
//     }
//   } catch (errror) {
//     successCallback([]);
//   }
// };

export const getClientWiseDepartmentByClientIdluniva = async (
  data,
  successCallback
) => {
  try {
    const response = await fetch(
      `${GetClientWiseDepartmentByClientId}?clientId=${data.clientId}`
    );
    if (response?.status === 200) {
      successCallback(response?.data);
    } else {
      successCallback([]);
    }
  } catch (errror) {
    successCallback([]);
  }
};
