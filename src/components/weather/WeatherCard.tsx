import { Cloud, Sun, Umbrella, Snowflake } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { WeatherData } from '@/services/weatherService';

interface WeatherCardProps {
  weather: WeatherData;
}

const WeatherCard = ({ weather }: WeatherCardProps) => {
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

  return (
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
  );
};

export default WeatherCard;