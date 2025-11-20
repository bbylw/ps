export interface LinkItem {
  title: string;
  url: string;
  iconClass: string;
}

export interface Category {
  id: string;
  title: string;
  links: LinkItem[];
}