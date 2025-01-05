import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card } from '@/components/ui/card';
import { ClothingRecommendation } from '@/services/clothingService';

interface OutfitRecommendationProps {
  recommendation: ClothingRecommendation;
  getPersonalClothingImage: (type: string, temperature: number) => string;
  temperature: number;
}

const OutfitRecommendation = ({ 
  recommendation, 
  getPersonalClothingImage, 
  temperature 
}: OutfitRecommendationProps) => {
  return (
    <Card className="p-6 backdrop-blur-lg bg-white/90">
      <h2 className="text-xl font-bold mb-4">Recommended Outfit</h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold mb-2">Top:</h3>
          <AspectRatio ratio={16/9} className="bg-muted rounded-md overflow-hidden mb-2">
            <img
              src={getPersonalClothingImage('top', temperature)}
              alt={recommendation.top.description}
              className="object-cover w-full h-full"
            />
          </AspectRatio>
          <p className="text-gray-600">{recommendation.top.description}</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Bottom:</h3>
          <AspectRatio ratio={16/9} className="bg-muted rounded-md overflow-hidden mb-2">
            <img
              src={getPersonalClothingImage('bottom', temperature)}
              alt={recommendation.bottom.description}
              className="object-cover w-full h-full"
            />
          </AspectRatio>
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
  );
};

export default OutfitRecommendation;