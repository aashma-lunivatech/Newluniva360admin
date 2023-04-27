import {
  GetAllVDCList,
  GetBookedOnlineAppointmentDetailsByDocIdAndDate,
  GetClientWiseDepartmentByClientId,
  GetClientWiseDoctorsAvailableTimeForAppointment,
  GetDepartmenDetailsById,
  GetDepartmentList,
  GetDocTimeScheduleForAppointment,
  GetListOfDoctorDetailsByDepartment,
  GetListOfRegisteredClients,
  GetListOfState,
  GetListOfVDCByDistrictId,
  GetlistOfClientsWhereDoctorIsAvaliable,
  GetlistofClientForOnlineReport,
  GetlistofDisctrictByStateId,
  GetlistofDoctorsByClientId,
  GetlistofDoctorsByClientIdAndDepartmentId,
  InsertUpdateAppointment,
  InsertUpdateClientDetails,
  InsertUpdateClientwiseDepartment,
  InsertUpdateDepartmentByAdmin,
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

// GetDepartmentList
export const GetDepartmentLists = async (successCallback) => {
  try {
    const response = await fetch(`${GetDepartmentList}`);
    if (response?.status === 200) {
      successCallback(response?.data);
    } else {
      successCallback([]);
    }
  } catch (errror) {
    successCallback([]);
  }
};
// departmentlistbyid admin

export const GetDepartmenDetailsByIds = async (data, successCallback) => {
  try {
    const response = await fetch(
      `${GetDepartmenDetailsById}?departId=${data.departId}`
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
// insert update clientwise department
export const InsertUpdateClientwiseDepartments = async (
  data,
  successCallback
) => {
  try {
    const response = await store(`${InsertUpdateClientwiseDepartment}`, data);
    if (response?.status === 200) {
      successCallback(response?.data);
    } else {
      successCallback([]);
    }
  } catch (error) {
    successCallback([]);
  }
};
// insert update admin wise department
export const InsertUpdateDepartmentByAdmins = async (data, successCallback) => {
  try {
    const response = await store(`${InsertUpdateDepartmentByAdmin}`, data);
    if (response?.status === 200) {
      successCallback(response?.data);
    } else {
      successCallback([]);
    }
  } catch (error) {
    successCallback([]);
  }
};
// VDC LIST
export const GetAllVDCListS = async (successCallback) => {
  try {
    const response = await fetch(`${GetAllVDCList}`);
    if (response?.status === 200) {
      successCallback(response?.data);
    } else {
      successCallback([]);
    }
  } catch (errror) {
    successCallback([]);
  }
};
// LIST OF STATES
export const GetListOfStates = async (successCallback) => {
  try {
    const response = await fetch(`${GetListOfState}`);
    if (response?.status === 200) {
      successCallback(response?.data);
    } else {
      successCallback([]);
    }
  } catch (errror) {
    successCallback([]);
  }
};
// GetListOfVDCByDistrictId
export const GetListOfVDCByDistrictIds = async (munidata, successCallback) => {
  try {
    const response = await fetch(
      `${GetListOfVDCByDistrictId}?districtId=${munidata.districtId}`
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
// GetlistofDisctrictByStateId
export const GetlistofDisctrictByStateIds = async (data, successCallback) => {
  try {
    const response = await fetch(
      `${GetlistofDisctrictByStateId}?stateId=${data.stateId}`
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
