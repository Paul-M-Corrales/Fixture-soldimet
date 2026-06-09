export async function GET() {
  const response = await fetch(
    `http://api.isportsapi.com/sport/football/league/basic?api_key=${process.env.ISPORTS_API_KEY}`,
    {
      next: {
        revalidate: 86400,
      },
    },
  );

  const data = await response.json();

  return Response.json(data);
}
