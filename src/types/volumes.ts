export interface Books {
  totalItems: number;
  items: Item[];
}

export interface Item {
  id: string;
  volumeInfo: VolumeInfo;
}

export interface VolumeInfo {
  title: string;
  authors: string[];
  publisher?: string;
  publishedDate?: Date;
  description: string;
  pageCount?: number;
  printType?: string;
  categories?: string[];
  averageRating?: number;
  ratingsCount?: number;
  maturityRating?: string;
  contentVersion?: string;
  imageLinks: ImageLinks;
  language?: string;
  previewLink?: string;
  infoLink?: string;
}

export interface ImageLinks {
  smallThumbnail?: string;
  thumbnail: string;
}
