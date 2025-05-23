export interface Project {
  slug: string;
  title: string;
  date: Date;
  category: string;
  tags: string[] | null;
  description: string | null;
  github: string | null;
  embed_link: string | null;
  external_link: string | null;
}
