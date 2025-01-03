import { Game } from '../types/game';

export async function fetchGameFeed(feedUrl: string): Promise<Game[]> {
  try {
    const response = await fetch(feedUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch game feed');
    }
    
    const data = await response.json();
    return transformFeedToGames(data);
  } catch (error) {
    console.error('Error fetching game feed:', error);
    return [];
  }
}

function transformFeedToGames(feedData: any): Game[] {
  // Assuming the feed has a standard format. Adjust the transformation
  // logic based on your actual feed structure
  return feedData.map((item: any) => ({
    id: item.id || `feed-${Math.random().toString(36).substr(2, 9)}`,
    title: item.title || 'Untitled Game',
    description: item.description || '',
    difficulty: validateDifficulty(item.difficulty),
    category: item.category || 'arcade',
    thumbnail: validateThumbnail(item.thumbnail),
    slug: generateSlug(item.title),
  }));
}

function validateDifficulty(difficulty: string): 'easy' | 'medium' | 'hard' {
  const validDifficulties = ['easy', 'medium', 'hard'];
  return validDifficulties.includes(difficulty) ? 
    difficulty as 'easy' | 'medium' | 'hard' : 
    'medium';
}

function validateThumbnail(url: string): string {
  // Fallback to a default game thumbnail if the URL is invalid
  const defaultThumbnail = 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&auto=format&fit=crop&q=60';
  try {
    new URL(url);
    return url;
  } catch {
    return defaultThumbnail;
  }
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}