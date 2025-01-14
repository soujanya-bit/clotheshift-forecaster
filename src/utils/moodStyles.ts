export interface MoodStyle {
  colors: string[];
  patterns: string[];
  styleGuide: string;
  gradient: string;
}

export const moodStyleMap: Record<string, MoodStyle> = {
  vibrant: {
    colors: ['#F97316', '#D946EF', '#8B5CF6'],
    patterns: ['geometric', 'bold stripes', 'color blocks'],
    styleGuide: 'Statement pieces with bold accessories',
    gradient: 'linear-gradient(90deg, hsla(24, 100%, 83%, 1) 0%, hsla(341, 91%, 68%, 1) 100%)'
  },
  cozy: {
    colors: ['#FEC6A1', '#FEF7CD', '#FDE1D3'],
    patterns: ['soft plaid', 'knit textures', 'gentle stripes'],
    styleGuide: 'Comfortable, layered looks with soft textures',
    gradient: 'linear-gradient(to top, #e6b980 0%, #eacda3 100%)'
  },
  professional: {
    colors: ['#8E9196', '#403E43', '#1A1F2C'],
    patterns: ['solid', 'pinstripe', 'subtle check'],
    styleGuide: 'Clean lines and structured silhouettes',
    gradient: 'linear-gradient(to right, #243949 0%, #517fa4 100%)'
  },
  sad: {
    colors: ['#D3E4FD', '#F1F0FB', '#E2E8F0'],
    patterns: ['minimal', 'solid', 'simple'],
    styleGuide: 'Comfortable, loose-fitting pieces',
    gradient: 'linear-gradient(109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1%)'
  },
  tired: {
    colors: ['#FFDEE2', '#F2FCE2', '#F0F9FF'],
    patterns: ['simple', 'solid', 'gentle textures'],
    styleGuide: 'Easy-to-wear, comfortable pieces',
    gradient: 'linear-gradient(to right, #ffc3a0 0%, #ffafbd 100%)'
  },
  pinteresty: {
    colors: ['#E5DEFF', '#FFDEE2', '#FEF7CD'],
    patterns: ['floral', 'delicate prints', 'subtle patterns'],
    styleGuide: 'Soft, feminine pieces with romantic details',
    gradient: 'linear-gradient(to top, #d299c2 0%, #fef9d7 100%)'
  },
  baddie: {
    colors: ['#1A1F2C', '#221F26', '#000000'],
    patterns: ['sleek', 'modern', 'minimal'],
    styleGuide: 'Form-fitting, trendy pieces with attitude',
    gradient: 'linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%)'
  },
  creative: {
    colors: ['#8B5CF6', '#F97316', '#D946EF'],
    patterns: ['abstract', 'artistic', 'mixed patterns'],
    styleGuide: 'Unique combinations with artistic flair',
    gradient: 'linear-gradient(102.3deg, rgba(147,39,143,1) 5.9%, rgba(234,172,232,1) 64%, rgba(246,219,245,1) 89%)'
  },
  sophisticated: {
    colors: ['#1A1F2C', '#8E9196', '#9F9EA1'],
    patterns: ['minimal', 'classic', 'refined'],
    styleGuide: 'Classic cuts with quality materials',
    gradient: 'linear-gradient(to right, #d7d2cc 0%, #304352 100%)'
  },
  motivated: {
    colors: ['#F97316', '#0FA0CE', '#8B5CF6'],
    patterns: ['dynamic', 'energetic', 'bold'],
    styleGuide: 'Athletic-inspired pieces with energy',
    gradient: 'linear-gradient(111.4deg, rgba(238,113,113,1) 1%, rgba(246,215,148,1) 58%)'
  }
};