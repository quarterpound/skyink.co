export interface CollectionWithProducts {
  collection: {
    id: string
    products: ShopifyArray<ProductPreview>
  }
}

export type CollectionsWithProducts = ShopifyArray<CollectionWithProducts>

export interface ProductPreview {
  handle: string
  title: string
  images: ShopifyArray<ShopifyImage>
  priceRange: PriceRange
}

export interface ShopifyImage {
  url: string
  altText: string | null
  width: number
  height: number
}

export interface ShopifyArray<T = any> {
  nodes: T[]
}

export interface ShopifyMoney {
  amount: string
  currencyCode: string
}

export interface PriceRange {
  minVariantPrice: ShopifyMoney
  maxVariantPrice: ShopifyMoney
}