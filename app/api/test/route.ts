export async function GET() {
  const response = await fetch(
    `http://api.isportsapi.com/sport/football/livescores?api_key=${process.env.ISPORTS_API_KEY}`,
  );

  const data = await response.json();

  return Response.json(data);
}
