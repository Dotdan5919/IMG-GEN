// app/api/freepik/route.js

export async function GET(request) {
  try {
    const response = await fetch("https://api.freepik.com/v1/resources?limit=20&ai-generated=only&term=ai+generated+photo+manipulation+fantasy", {
      method: 'GET',
      headers: {
        'x-freepik-api-key': process.env.API_SECRET_KEY
      }
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error('Error:', error);
    return Response.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { prompt, style } = body;

    const response = await fetch('https://api.freepik.com/v1/ai/text-to-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-freepik-api-key': process.env.API_SECRET_KEY
      },
      body: JSON.stringify({
        prompt: prompt,
        styling: {
          style: style || 'photo'
        }
      })
    });

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error('Error:', error);
    return Response.json(
      { error: 'Failed to generate image' },
      { status: 500 }
    );
  }
}