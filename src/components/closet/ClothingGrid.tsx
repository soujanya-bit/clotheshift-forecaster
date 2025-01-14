import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ClothingItem } from '@/types/clothing';
import { moodStyleMap } from '@/utils/moodStyles';

interface ClothingGridProps {
  items: ClothingItem[];
}

const ClothingGrid = ({ items }: ClothingGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {items.map((item) => (
        <div key={item.id} className="relative group">
          <AspectRatio ratio={1}>
            <img
              src={item.imageUrl}
              alt={`${item.type} clothing`}
              className="object-cover rounded-md transition-transform group-hover:scale-105"
            />
          </AspectRatio>
          <div 
            className="absolute bottom-0 left-0 right-0 p-2 rounded-b-md"
            style={{
              background: item.mood 
                ? moodStyleMap[item.mood].gradient 
                : 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8))'
            }}
          >
            <p className="text-sm capitalize text-white">{item.type}</p>
            <p className="text-xs text-white">{item.tempRange.min}°C - {item.tempRange.max}°C</p>
            {item.mood && (
              <div className="flex items-center gap-1 mt-1">
                <p className="text-xs capitalize text-white">
                  {item.mood}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClothingGrid;