import { useState } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { moodStyleMap } from "@/utils/moodStyles";
import { moodCategories } from "@/types/moods";
import { Smile, Briefcase, Coffee, Sparkles, Moon, Building, Frown, Palette, Zap, Heart, Cloud, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface MoodSelectorProps {
  onMoodChange: (mood: string) => void;
}

const moodIcons: Record<string, React.ReactNode> = {
  vibrant: <Sparkles className="w-5 h-5" />,
  professional: <Briefcase className="w-5 h-5" />,
  cozy: <Coffee className="w-5 h-5" />,
  sad: <Frown className="w-5 h-5" />,
  tired: <Moon className="w-5 h-5" />,
  pinteresty: <Heart className="w-5 h-5" />,
  baddie: <User className="w-5 h-5" />,
  creative: <Palette className="w-5 h-5" />,
  sophisticated: <Building className="w-5 h-5" />,
  motivated: <Zap className="w-5 h-5" />
};

const MoodSelector = ({ onMoodChange }: MoodSelectorProps) => {
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [previewMood, setPreviewMood] = useState<string>("");

  const handleMoodChange = (mood: string) => {
    setSelectedMood(mood);
    onMoodChange(mood);
  };

  return (
    <div className="w-full max-w-2xl space-y-4">
      {moodCategories.map((category) => (
        <div key={category.name} className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">{category.name}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {category.moods.map((mood) => (
              <HoverCard key={mood} openDelay={200}>
                <HoverCardTrigger asChild>
                  <button
                    onClick={() => handleMoodChange(mood)}
                    onMouseEnter={() => setPreviewMood(mood)}
                    onMouseLeave={() => setPreviewMood("")}
                    className={cn(
                      "group relative flex items-center gap-2 p-3 rounded-lg transition-all duration-300",
                      "hover:scale-105 active:scale-95",
                      "animate-fade-in",
                      selectedMood === mood ? "ring-2 ring-primary" : "hover:ring-1 ring-muted",
                      "focus:outline-none focus:ring-2 focus:ring-primary"
                    )}
                    style={{
                      background: moodStyleMap[mood].gradient,
                    }}
                  >
                    <div className="text-white">
                      {moodIcons[mood]}
                    </div>
                    <span className="text-sm font-medium text-white capitalize">
                      {mood}
                    </span>
                  </button>
                </HoverCardTrigger>
                <HoverCardContent 
                  className="w-80 animate-fade-in" 
                  align="start"
                >
                  <div className="space-y-2">
                    <h4 className="font-medium capitalize">{mood} Style Guide</h4>
                    <div 
                      className="h-2 w-full rounded-full mb-2"
                      style={{ background: moodStyleMap[mood].gradient }}
                    />
                    <p className="text-sm text-muted-foreground">
                      {moodStyleMap[mood].styleGuide}
                    </p>
                    <div className="mt-2">
                      <p className="text-sm font-medium">Suggested Patterns:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {moodStyleMap[mood].patterns.map((pattern, index) => (
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
              </HoverCard>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoodSelector;