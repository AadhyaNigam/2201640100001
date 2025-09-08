// import { CONFIG } from "./config";

// let tokenCache = null;
// let expiryTime = 0;

// export async function getAuthToken() {
//   const now = Date.now() / 1000;
//   if (tokenCache && now < expiryTime) return tokenCache;

//   const res = await fetch(CONFIG.BASE_URL + CONFIG.AUTH_ENDPOINT, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       email: CONFIG.EMAIL,
//       name: CONFIG.NAME,
//       rollNo: CONFIG.ROLLNO,
//       accessCode: CONFIG.ACCESS_CODE,
//       clientID: CONFIG.CLIENT_ID,
//       clientSecret: CONFIG.CLIENT_SECRET
//     })
//   });

//   if (!res.ok) throw new Error("Failed to authenticate with log server");

//   const data = await res.json();
//   tokenCache = data.access_token;
//   expiryTime = now + data.expires_in;
//   return tokenCache;
// }


export default function auth(user) {
  if (!user || !user.token) {
    throw new Error("Unauthorized: No valid token provided");
  }
  return true;
}
