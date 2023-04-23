import {
  GetBookedOnlineAppointmentDetailsByDocIdAndDate,
  GetClientWiseDepartmentByClientId,
  GetClientWiseDoctorsAvailableTimeForAppointment,
  GetDocTimeScheduleForAppointment,
  GetListOfDoctorDetailsByDepartment,
  GetListOfRegisteredClients,
  GetlistOfClientsWhereDoctorIsAvaliable,
  GetlistofClientForOnlineReport,
  GetlistofDoctorsByClientId,
  GetlistofDoctorsByClientIdAndDepartmentId,
  InsertUpdateAppointment,
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
export const GetlistofDoctorsByClientIds = async (data, successCallback) => {
  try {
    const response = await fetch(
      `${GetlistofDoctorsByClientId}?clientId=${data.clientId}`
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
export const GetlistofDoctorsByClientIdAndDepartmentIds = async (
  data,
  successCallback
) => {
  try {
    const response = await fetch(
      `${GetlistofDoctorsByClientIdAndDepartmentId}?clientId=${data.clientId}&departmentId=${data.departmentId}`
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
export const GetlistOfClientsWhereDoctorIsAvaliables = async (
  data,
  successCallback
) => {
  try {
    const response = await fetch(
      `${GetlistOfClientsWhereDoctorIsAvaliable}?docId=${data.docId}`
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
export const GetClientWiseDoctorsAvailableTimeForAppointments = async (
  data,
  successCallback
) => {
  try {
    const response = await fetch(
      `${GetClientWiseDoctorsAvailableTimeForAppointment}?docId=${data.docId}&clientId=${data.clientId}`
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

//doctors
export const GetDocTimeScheduleForAppointments = async (
  data,
  successCallback
) => {
  try {
    const response = await fetch(
      `${GetDocTimeScheduleForAppointment}?docId=${data.docId}`
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
//
export const GetBookedOnlineAppointmentDetailsByDocIdAndDates = async (
  data,
  successCallback
) => {
  try {
    const response = await fetch(
      `${GetBookedOnlineAppointmentDetailsByDocIdAndDate}?docId=${data.docId}&appointmentDate=${data.appointmentDate}`
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

export const InsertUpdateAppointments = async (data, successCallback) => {
  try {
    const response = await store(`${InsertUpdateAppointment}`, data);
    if (response?.status === 200) {
      successCallback(response?.data);
    } else {
      successCallback([]);
    }
  } catch (error) {
    successCallback([]);
  }
};
export const CancelAppointmentByPatient = async (data, successCallback) => {
  try {
    const response = await store(`${CancelAppointmentByPatient}`, data);
    if (response?.status === 200) {
      successCallback(response?.data);
    } else {
      successCallback([]);
    }
  } catch (error) {
    successCallback([]);
  }
};
