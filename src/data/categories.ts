export const categories = [
  { id: 'word-search', name: 'Word Search' },
  { id: 'crossword', name: 'Crossword' },
  { id: 'anagram', name: 'Anagram' },
  { id: 'word-chain', name: 'Word Chain' },
  { id: 'spelling', name: 'Spelling' },
  { id: 'scramble', name: 'Scramble' },
  { id: 'crypto', name: 'Cryptogram' },
  { id: 'guessing', name: 'Guessing' },
  { id: 'building', name: 'Building' },
  { id: 'educational', name: 'Educational' },
  { id: 'matching', name: 'Matching' },
  { id: 'memory', name: 'Memory' },
] as const;

export type CategoryId = typeof categories[number]['id'];