export interface WeatherData {
  temperature: number;
  condition: 'sunny' | 'rainy' | 'cloudy' | 'snowy';
  windSpeed: number;
  humidity: number;
}

export const getWeather = async (lat: number, lon: number): Promise<WeatherData> => {
  try {
    // Get API key from environment
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    
    if (!apiKey) {
      console.warn('OpenWeather API key not found, using mock data');
      return {
        temperature: 20,
        condition: 'sunny',
        windSpeed: 5,
        humidity: 65,
      };
    }

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Map OpenWeather conditions to our simplified conditions
    const mapCondition = (id: number): WeatherData['condition'] => {
      if (id >= 200 && id < 600) return 'rainy';
      if (id >= 600 && id < 700) return 'snowy';
      if (id >= 800) return 'sunny';
      return 'cloudy';
    };

    return {
      temperature: Math.round(data.main.temp),
      condition: mapCondition(data.weather[0].id),
      windSpeed: Math.round(data.wind.speed),
      humidity: data.main.humidity,
    };
  } catch (error) {
    console.error('Error fetching weather:', error);
    // Return default data for development
    return {
      temperature: 20,
      condition: 'sunny',
      windSpeed: 5,
      humidity: 65,
    };
  }
};