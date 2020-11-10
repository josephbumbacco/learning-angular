export interface Content{
  id: number;
  author: string;
  imgUrl?: string;
  type?: string;
  title: string;
  body: string;
  tags?: string[];
}

export interface ContentList{
  contents: Content[];
}
