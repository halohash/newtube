export async function onRequest(context) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  function rand(len) {
    let out = "";
    for (let i = 0; i < len; i++) {
      out += chars[Math.floor(Math.random() * chars.length)];
    }
    return out;
  }

  function userCode() {
    return `${rand(3)}-${rand(3)}-${rand(4)}`;
  }

  const data = {
    device_code: rand(10),
    user_code: userCode(),
    expires_in: 1800,
    interval: 5,
    verification_url: "https://www.google.com/device"
  };

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "content-type": "application/json"
    }
  });
}