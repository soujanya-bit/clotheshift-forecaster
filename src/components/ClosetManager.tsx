import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ClothingItem {
  id: string;
  type: 'top' | 'bottom';
  imageUrl: string;
  tempRange: {
    min: number;
    max: number;
  };
}

const ClosetManager = ({ onClothingUpdate }: { onClothingUpdate: (items: ClothingItem[]) => void }) => {
  const [clothingItems, setClothingItems] = useState<ClothingItem[]>([]);
  const [selectedType, setSelectedType] = useState<'top' | 'bottom'>('top');
  const [tempRange, setTempRange] = useState({ min: 0, max: 30 });
  const { toast } = useToast();

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create a URL for the uploaded image
    const imageUrl = URL.createObjectURL(file);
    
    const newItem: ClothingItem = {
      id: Date.now().toString(),
      type: selectedType,
      imageUrl,
      tempRange: tempRange
    };

    const updatedItems = [...clothingItems, newItem];
    setClothingItems(updatedItems);
    onClothingUpdate(updatedItems);

    toast({
      title: "Success",
      description: "Clothing item added to your closet!",
    });
  };

  return (
    <Card className="p-6 backdrop-blur-lg bg-white/90">
      <h2 className="text-xl font-bold mb-4">My Closet</h2>
      <div className="space-y-4">
        <div className="flex gap-4">
          <select
            className="border rounded p-2"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value as 'top' | 'bottom')}
          >
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
          </select>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              placeholder="Min °C"
              value={tempRange.min}
              onChange={(e) => setTempRange({ ...tempRange, min: Number(e.target.value) })}
              className="w-24"
            />
            <span>to</span>
            <Input
              type="number"
              placeholder="Max °C"
              value={tempRange.max}
              onChange={(e) => setTempRange({ ...tempRange, max: Number(e.target.value) })}
              className="w-24"
            />
          </div>
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="max-w-xs"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {clothingItems.map((item) => (
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ClosetManager;