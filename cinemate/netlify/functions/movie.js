export async function handler(event, context) {
    const { id } = event.queryStringParameters;
  
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d43da36e95b1aae21df26a4e3f285bed`);
    const data = await response.json();
  
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    };
  }
  