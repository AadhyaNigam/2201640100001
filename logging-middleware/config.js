// export const CONFIG = {
//   BASE_URL: "http://20.244.56.144/evaluation-service",
//   AUTH_ENDPOINT: "/auth",
//   LOG_ENDPOINT: "/logs",

//   CLIENT_ID: "your-client-id",
//   CLIENT_SECRET: "your-client-secret",
//   ACCESS_CODE: "sAWTuR",
//   EMAIL: "your-email@abc.edu",
//   NAME: "Your Name",
//   ROLLNO: "yourRollNo"
// };

export default function logger(message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
}