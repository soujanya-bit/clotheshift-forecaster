import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ClothingItem } from '@/types/clothing';
import { moodStyleMap } from '@/utils/moodStyles';
import { cn } from '@/lib/utils';

interface ClothingGridProps {
  items: ClothingItem[];
}

const ClothingGrid = ({ items }: ClothingGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {items.map((item) => (
        <div 
          key={item.id} 
          className={cn(
            "relative group transition-all duration-300",
            "hover:scale-105",
            "animate-fade-in"
          )}
        >
          <AspectRatio ratio={1}>
            <img
              src={item.imageUrl}
              alt={`${item.type} clothing`}
              className="object-cover rounded-md transition-transform"
            />
          </AspectRatio>
          <div 
            className={cn(
              "absolute bottom-0 left-0 right-0 p-2 rounded-b-md",
              "transition-all duration-300",
              "group-hover:opacity-100 opacity-90"
            )}
            style={{
              background: item.mood 
                ? moodStyleMap[item.mood].gradient 
                : 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8))'
            }}
          >
            <p className="text-sm capitalize text-white font-medium">{item.type}</p>
            <p className="text-xs text-white/90">{item.tempRange.min}°C - {item.tempRange.max}°C</p>
            {item.mood && (
              <div className="flex items-center gap-1 mt-1">
                <p className="text-xs capitalize text-white/90">
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