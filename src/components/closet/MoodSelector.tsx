import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { moods } from "@/types/clothing";

interface MoodSelectorProps {
  onMoodChange: (mood: string) => void;
}

const MoodSelector = ({ onMoodChange }: MoodSelectorProps) => {
  return (
    <Select onValueChange={onMoodChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select mood" />
      </SelectTrigger>
      <SelectContent>
        {moods.map((mood) => (
          <SelectItem key={mood} value={mood}>
            {mood.charAt(0).toUpperCase() + mood.slice(1)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default MoodSelector;