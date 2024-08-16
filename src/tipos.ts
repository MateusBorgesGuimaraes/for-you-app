export type Comment = {
  id?: string;
  content: string;
  likes?: string[];
  user: string;
  news: string;
};

export type News = {
  title: string;
  description: string;
  author: string;
  content: string;
  image: string;
  exclusive?: boolean;
  id: string;
  category:
    | 'cultura'
    | 'moda'
    | 'esporte'
    | 'arte'
    | 'politica'
    | 'natureza'
    | 'saude'
    | 'ciencia'
    | 'entretenimento';
  views?: number;
  likes?: string[];
  comments?: Comment[];
  user: User;
  createdAt?: Date;
  updatedAt?: Date;
};

export type User = {
  id?: string;
  isAdmin?: boolean;
  username: string;
  email: string;
  passwordHash?: string;
  savedNews?: string[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type CustomsHome = {
  limitedRelevantNews: News[];
  mostRecentNews: News[];
  lastExclusiveNews: News;
  randomEsporteNews: News[];
  randomModaNews: News[];
};
