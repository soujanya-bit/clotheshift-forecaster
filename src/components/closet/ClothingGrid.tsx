import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ClothingItem } from '@/types/clothing';

interface ClothingGridProps {
  items: ClothingItem[];
}

const ClothingGrid = ({ items }: ClothingGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {items.map((item) => (
        <div key={item.id} className="relative">
          <AspectRatio ratio={1}>
            <img
              src={item.imageUrl}
              alt={`${item.type} clothing`}
              className="object-cover rounded-md"
            />
          </AspectRatio>
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 rounded-b-md">
            <p className="text-sm capitalize">{item.type}</p>
            <p className="text-xs">{item.tempRange.min}°C - {item.tempRange.max}°C</p>
            {item.mood && <p className="text-xs capitalize">Mood: {item.mood}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClothingGrid;