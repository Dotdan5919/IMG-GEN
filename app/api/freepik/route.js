// app/api/freepik/route.js

export async function GET(request) {
  try {
    // Create the filters object
    const filters = {
      'ai-generated': { 'only': 1 }
    };
    
    // Properly encode it as a URL parameter
    const url = `https://api.freepik.com/v1/resources?limit=20&filters=${encodeURIComponent(JSON.stringify(filters))}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-freepik-api-key': process.env.API_SECRET_KEY
      },
      cache: 'no-store' // Disable caching
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Freepik API error:', response.status, errorText);
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error('Error:', error);
    return Response.json(
      { error: 'Failed to fetch data', details: error.message },
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