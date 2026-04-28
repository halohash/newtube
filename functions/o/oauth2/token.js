export async function onRequest(context) {
const data = {"meme":"this is not a token"};

return new Response(JSON.stringify(data), {
status: 200,
headers: {
"content-type": "application/json"
}
});
}
