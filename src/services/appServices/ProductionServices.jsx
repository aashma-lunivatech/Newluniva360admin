import { GetListOfDoctorDetailsByDepartment } from "../constants/url";
import { fetch } from "../utils/httpUtil";

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
