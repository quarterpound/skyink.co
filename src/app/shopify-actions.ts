'use server'

import { getShopifyClient } from "@/utils/shopify"
import { CollectionWithProducts } from "@/utils/shopify.types"



export const getHomePageProducts = async () => {
  return getShopifyClient().request<CollectionWithProducts>(
    `
    {
      collection(handle: "featured") {
        id
        products(first: 2) {
          nodes {
            handle
            title
            images(first: 1) {
              nodes {
                url
                altText
                width
                height
              }
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
              maxVariantPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
    `
  )
}