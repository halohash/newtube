export async function onRequest(context) {
const data = {
device_code: "PLOOG",
user_code: "WEN-DAX-GRAY",
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
