export interface Robot {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  specs: {
    height: string;
    weight: string;
    power: string;
    intelligence: string;
    manufacturer: string;
    yearReleased: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  content?: {
    type: string;
    content?: string;
    url?: string;
    caption?: string;
  }[];
}