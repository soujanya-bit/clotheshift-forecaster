export interface ClothingItem {
  id: string;
  type: 'top' | 'bottom';
  imageUrl: string;
  tempRange: {
    min: number;
    max: number;
  };
  mood?: string;
}

export const moods = [
  'vibrant',
  'cozy',
  'professional',
  'sad',
  'tired',
  'pinteresty',
  'baddie',
  'creative',
  'sophisticated',
  'motivated'
] as const;