import { useEffect, useState } from 'react';
import { Cloud, Sun, Umbrella, Snowflake } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { getWeather, WeatherData } from '@/services/weatherService';
import { getClothingRecommendation } from '@/services/clothingService';
import { useToast } from '@/components/ui/use-toast';

const WeatherDisplay = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const weatherData = await getWeather(
              position.coords.latitude,
              position.coords.longitude
            );
            setWeather(weatherData);
            setLoading(false);
          });
        } else {
          toast({
            title: "Location Access Required",
            description: "Please enable location services to get weather data.",
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch weather data.",
          variant: "destructive",
        });
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="w-16 h-16 text-yellow-500" />;
      case 'rainy':
        return <Umbrella className="w-16 h-16 text-blue-500" />;
      case 'cloudy':
        return <Cloud className="w-16 h-16 text-gray-500" />;
      case 'snowy':
        return <Snowflake className="w-16 h-16 text-blue-300" />;
      default:
        return <Sun className="w-16 h-16 text-yellow-500" />;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!weather) return null;

  const recommendation = getClothingRecommendation(
    weather.temperature,
    weather.condition,
    weather.windSpeed
  );

  return (
    <div className={`min-h-screen bg-${weather.condition} p-6 animate-fade-in`}>
      <div className="max-w-md mx-auto space-y-6">
        <Card className="p-6 backdrop-blur-lg bg-white/90">
          <div className="flex items-center justify-between mb-6">
            {getWeatherIcon(weather.condition)}
            <div className="text-right">
              <div className="text-4xl font-bold">{weather.temperature}°C</div>
              <div className="text-gray-500 capitalize">{weather.condition}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
            <div>Wind: {weather.windSpeed} km/h</div>
            <div>Humidity: {weather.humidity}%</div>
          </div>
        </Card>

        <Card className="p-6 backdrop-blur-lg bg-white/90">
          <h2 className="text-xl font-bold mb-4">Recommended Outfit</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Top:</h3>
              <p className="text-gray-600">{recommendation.top.description}</p>
            </div>
            <div>
              <h3 className="font-semibold">Bottom:</h3>
              <p className="text-gray-600">{recommendation.bottom.description}</p>
            </div>
            {recommendation.accessories.length > 0 && (
              <div>
                <h3 className="font-semibold">Accessories:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {recommendation.accessories.map((item, index) => (
                    <li key={index}>{item.description}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WeatherDisplay;