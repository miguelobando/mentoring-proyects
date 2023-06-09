export interface CreateProductDto {
  name: string;
  description: string;
  price: number;
  availability: boolean;
  brand: string;
  images: string[];
}
