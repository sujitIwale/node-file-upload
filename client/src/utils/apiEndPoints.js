export const BASE_API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "https://sharesheet.onrender.com";

export const signIn_Url = `${BASE_API_URL}/auth/signin/`;
export const signUp_Url = `${BASE_API_URL}/auth/signup/`;
export const getUser_Url = `${BASE_API_URL}/auth/`;
export const uploadUserSheet_Url = `${BASE_API_URL}/upload/csv/user/`;
export const getSheet_Url = `${BASE_API_URL}/sheet/getSheet/`;
export const updateSheet_Url = `${BASE_API_URL}/sheet/updateSheet/`;
export const searchUsers_Url = `${BASE_API_URL}/user/searchUsers`;
export const addUserToSheet_Url = `${BASE_API_URL}/sheet/addUser/`;
export const createSheet_Url = `${BASE_API_URL}/sheet/createSheet/`;
export const getUsersSheets_Url = `${BASE_API_URL}/sheet/userSheets/`;
export const uploadFile_Url = `${BASE_API_URL}/upload/csv`;
