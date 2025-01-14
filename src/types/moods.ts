export type MoodCategory = {
  name: string;
  moods: string[];
};

export const moodCategories: MoodCategory[] = [
  {
    name: "Energetic",
    moods: ["vibrant", "motivated", "creative"]
  },
  {
    name: "Professional",
    moods: ["professional", "sophisticated"]
  },
  {
    name: "Relaxed",
    moods: ["cozy", "pinteresty"]
  },
  {
    name: "Other",
    moods: ["tired", "sad", "baddie"]
  }
];