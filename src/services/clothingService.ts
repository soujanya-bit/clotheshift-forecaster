interface ClothingItem {
  type: string;
  description: string;
}

interface ClothingRecommendation {
  top: ClothingItem;
  bottom: ClothingItem;
  accessories: ClothingItem[];
}

export const getClothingRecommendation = (
  temperature: number,
  condition: string,
  windSpeed: number
): ClothingRecommendation => {
  let recommendation: ClothingRecommendation = {
    top: { type: '', description: '' },
    bottom: { type: '', description: '' },
    accessories: [],
  };

  // Temperature-based recommendations
  if (temperature < 10) {
    recommendation.top = { type: 'Winter Coat', description: 'A warm winter coat or puffer jacket' };
    recommendation.bottom = { type: 'Warm Pants', description: 'Thick jeans or wool trousers' };
    recommendation.accessories.push({ type: 'Winter Accessories', description: 'Beanie, scarf, and gloves' });
  } else if (temperature < 20) {
    recommendation.top = { type: 'Light Jacket', description: 'A light jacket or sweater' };
    recommendation.bottom = { type: 'Pants', description: 'Regular jeans or casual trousers' };
  } else {
    recommendation.top = { type: 'T-Shirt', description: 'A light t-shirt or short-sleeve shirt' };
    recommendation.bottom = { type: 'Shorts', description: 'Comfortable shorts or light pants' };
  }

  // Condition-based additions
  if (condition === 'rainy') {
    recommendation.accessories.push({ type: 'Rain Gear', description: 'Umbrella and waterproof jacket' });
  } else if (condition === 'sunny' && temperature > 20) {
    recommendation.accessories.push({ type: 'Sun Protection', description: 'Sunglasses and hat' });
  }

  // Wind-based additions
  if (windSpeed > 15) {
    recommendation.accessories.push({ type: 'Wind Protection', description: 'Windbreaker or light scarf' });
  }

  return recommendation;
};