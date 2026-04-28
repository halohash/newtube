export async function onRequest(context) {
const data = {
  "error": "authorization_pending",
  "error_description": "Precondition Required"
};

return new Response(JSON.stringify(data), {
status: 200,
headers: {
"content-type": "application/json"
}
});
}
