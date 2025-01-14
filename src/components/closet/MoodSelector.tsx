import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { moods } from "@/types/clothing";
import { moodStyleMap } from "@/utils/moodStyles";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface MoodSelectorProps {
  onMoodChange: (mood: string) => void;
}

const MoodSelector = ({ onMoodChange }: MoodSelectorProps) => {
  const [selectedMood, setSelectedMood] = useState<string>("");

  const handleMoodChange = (mood: string) => {
    setSelectedMood(mood);
    onMoodChange(mood);
  };

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div>
          <Select onValueChange={handleMoodChange} value={selectedMood}>
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
        </div>
      </HoverCardTrigger>
      {selectedMood && (
        <HoverCardContent className="w-80">
          <div className="space-y-2">
            <h4 className="font-medium">{selectedMood.charAt(0).toUpperCase() + selectedMood.slice(1)} Style Guide</h4>
            <div 
              className="h-2 w-full rounded-full mb-2"
              style={{ background: moodStyleMap[selectedMood].gradient }}
            />
            <p className="text-sm text-muted-foreground">
              {moodStyleMap[selectedMood].styleGuide}
            </p>
            <div className="mt-2">
              <p className="text-sm font-medium">Suggested Patterns:</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {moodStyleMap[selectedMood].patterns.map((pattern, index) => (
                  <span
                    key={index}
                    className="text-xs bg-secondary px-2 py-1 rounded-full"
                  >
                    {pattern}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </HoverCardContent>
      )}
    </HoverCard>
  );
};

export default MoodSelector;