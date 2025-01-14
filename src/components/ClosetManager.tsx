import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import MoodSelector from './closet/MoodSelector';
import TemperatureRangeSelector from './closet/TemperatureRangeSelector';
import ClothingGrid from './closet/ClothingGrid';
import { ClothingItem } from '@/types/clothing';

interface ClosetManagerProps {
  onClothingUpdate: (items: ClothingItem[]) => void;
}

const ClosetManager = ({ onClothingUpdate }: ClosetManagerProps) => {
  const [clothingItems, setClothingItems] = useState<ClothingItem[]>([]);
  const [selectedType, setSelectedType] = useState<'top' | 'bottom'>('top');
  const [tempRange, setTempRange] = useState({ min: 0, max: 30 });
  const [selectedMood, setSelectedMood] = useState<string>('');
  const { toast } = useToast();

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    
    const newItem: ClothingItem = {
      id: Date.now().toString(),
      type: selectedType,
      imageUrl,
      tempRange,
      mood: selectedMood
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
        <div className="flex flex-wrap gap-4">
          <select
            className="border rounded p-2"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value as 'top' | 'bottom')}
          >
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
          </select>
          
          <MoodSelector onMoodChange={setSelectedMood} />
          <TemperatureRangeSelector tempRange={tempRange} onTempRangeChange={setTempRange} />
          
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="max-w-xs"
          />
        </div>

        <ClothingGrid items={clothingItems} />
      </div>
    </Card>
  );
};

export default ClosetManager;