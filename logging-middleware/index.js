// import { CONFIG } from "./config";
// import { getAuthToken } from "./";

// export async function log(stack, level, pkg, message) {
//   try {
//     const token = await getAuthToken();
//     const res = await fetch(CONFIG.BASE_URL + CONFIG.LOG_ENDPOINT, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`
//       },
//       body: JSON.stringify({ stack, level, package: pkg, message })
//     });

//     if (!res.ok) console.error("Log failed:", await res.text());
//   } catch (err) {
//     console.error("Logging error:", err);
//   }
// }

import logger from "./config.js";
import auth from "./auth.js";

export { logger, auth };
