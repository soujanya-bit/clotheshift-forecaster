import { useEffect, useState } from 'react';
import { getWeather, WeatherData } from '@/services/weatherService';
import { getClothingRecommendation } from '@/services/clothingService';
import { useToast } from '@/components/ui/use-toast';
import WeatherCard from './weather/WeatherCard';
import OutfitRecommendation from './weather/OutfitRecommendation';

interface ClothingItem {
  id: string;
  type: 'top' | 'bottom';
  imageUrl: string;
  tempRange: {
    min: number;
    max: number;
  };
}

const WeatherDisplay = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [personalCloset, setPersonalCloset] = useState<ClothingItem[]>([]);
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

  const getPersonalClothingImage = (type: string, temperature: number) => {
    const matchingItems = personalCloset.filter(
      item => item.type === type && 
      temperature >= item.tempRange.min && 
      temperature <= item.tempRange.max
    );

    if (matchingItems.length > 0) {
      const randomIndex = Math.floor(Math.random() * matchingItems.length);
      return matchingItems[randomIndex].imageUrl;
    }

    // Return a placeholder image if no personal items match
    return '/placeholder.svg';
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
      <div className="max-w-3xl mx-auto space-y-6">
        <WeatherCard weather={weather} />
        <OutfitRecommendation 
          recommendation={recommendation}
          getPersonalClothingImage={getPersonalClothingImage}
          temperature={weather.temperature}
        />
      </div>
    </div>
  );
};

export default WeatherDisplay;