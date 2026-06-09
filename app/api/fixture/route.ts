export async function GET() {
  const response = await fetch(
    `http://api.isportsapi.com/sport/football/schedule/basic?api_key=${process.env.ISPORTS_API_KEY}&leagueId=1572`,
    {
      next: {
        revalidate: 300,
      },
    },
  );

  const data = await response.json();

  return Response.json(data);
}
