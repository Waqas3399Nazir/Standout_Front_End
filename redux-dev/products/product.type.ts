export interface IproductDetails {
  backSpacing: any;
  boltPattern: string;
  brandId: number;
  centerBore: string;
  color: any;
  cost: string;
  costOfSetOfFour: any;
  createdAt: string;
  diameter: string;
  exposedLugs: any;
  id: number;
  loadRating: string;
  material: any;
  model: any;
  modelOther: any;
  name: string;
  numberOfSpokes: any;
  offset: any;
  photoUrl: string;
  price: string;
  priceOfSetOfFour: any;
  sku: string;
  structure: any;
  updatedAt: string;
  width: string;
  yearIntroduced: any;
  brandProduct: any;
}

export interface IproductSate {
  pagesCount: number;
  productsCount: number;
  productId?: number;
  product: IproductDetails;
  products: [];
  error?: any;
  isActivityInProgress: boolean;
}
