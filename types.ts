export interface Insight {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string; // HTML or Markdown content
  author: string;
  role: string;
  timestamp: string;
  readTime: string;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export enum PageState {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  APPROACH = 'APPROACH',
  CAREERS = 'CAREERS'
}