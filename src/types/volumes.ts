export interface Books {
  totalItems: number;
  items: Item[];
}

export interface Item {
  id: string;
  volumeInfo: VolumeInfo;
  saleInfo?: SaleInfo;
}

export interface VolumeInfo {
  title: string;
  authors: string[];
  publisher?: string;
  publishedDate?: Date;
  description?: string | any;
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

export interface SaleInfo {
  country?: string;
  saleability?: string;
  isEbook?: boolean;
  listPrice?: SaleInfoListPrice;
  retailPrice?: SaleInfoListPrice;
  buyLink?: string;
}

export interface SaleInfoListPrice {
  amount?: number;
  currencyCode?: string;
}

export interface OfferListPrice {
  amountInMicros?: number;
  currencyCode?: string;
}
