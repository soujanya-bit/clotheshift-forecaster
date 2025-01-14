import { Card } from "@/components/ui/card";
import { ClothingItem } from "@/types/clothing";
import { moodStyleMap } from "@/utils/moodStyles";

interface LayeringSuggestionsProps {
  items: ClothingItem[];
  currentTemp?: number;
}

const LayeringSuggestions = ({ items, currentTemp = 20 }: LayeringSuggestionsProps) => {
  const getLayerSuggestions = () => {
    const tops = items.filter(item => item.type === 'top');
    
    if (currentTemp < 10) {
      // Cold weather - suggest 3 layers
      const innerLayer = tops.filter(item => item.tempRange.min >= 15);
      const midLayer = tops.filter(item => item.tempRange.min >= 5 && item.tempRange.max <= 20);
      const outerLayer = tops.filter(item => item.tempRange.min <= 10);
      
      return {
        type: 'cold',
        layers: [
          { name: 'Base Layer', items: innerLayer },
          { name: 'Mid Layer', items: midLayer },
          { name: 'Outer Layer', items: outerLayer }
        ]
      };
    } else if (currentTemp < 20) {
      // Mild weather - suggest 2 layers
      const innerLayer = tops.filter(item => item.tempRange.min >= 15);
      const outerLayer = tops.filter(item => item.tempRange.min >= 10 && item.tempRange.max <= 25);
      
      return {
        type: 'mild',
        layers: [
          { name: 'Base Layer', items: innerLayer },
          { name: 'Light Outer Layer', items: outerLayer }
        ]
      };
    } else {
      // Warm weather - suggest 1 layer
      const singleLayer = tops.filter(item => item.tempRange.min >= 20);
      
      return {
        type: 'warm',
        layers: [
          { name: 'Single Layer', items: singleLayer }
        ]
      };
    }
  };

  const suggestions = getLayerSuggestions();

  return (
    <Card className="p-4 mt-4">
      <h3 className="text-lg font-semibold mb-2">Layering Suggestions</h3>
      <div className="space-y-4">
        {suggestions.layers.map((layer, index) => (
          <div key={index} className="space-y-2">
            <h4 className="font-medium text-sm">{layer.name}</h4>
            <div className="grid grid-cols-2 gap-2">
              {layer.items.length > 0 ? (
                layer.items.map(item => (
                  <div 
                    key={item.id} 
                    className="relative rounded-md overflow-hidden h-24"
                  >
                    <img 
                      src={item.imageUrl} 
                      alt={`${item.type} clothing`}
                      className="w-full h-full object-cover"
                    />
                    {item.mood && (
                      <div 
                        className="absolute bottom-0 left-0 right-0 p-1 text-xs text-white"
                        style={{
                          background: moodStyleMap[item.mood].gradient
                        }}
                      >
                        {item.mood}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground col-span-2">
                  No suitable items found for this layer
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default LayeringSuggestions;