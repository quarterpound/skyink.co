import { LATEST_API_VERSION, shopifyApi } from "@shopify/shopify-api"
import { createStorefrontApiClient } from "@shopify/storefront-api-client"

import { z } from "zod"

const shopifyValidation = z.object({
  SHOPIFY_PUBLIC_ACCESS_TOKEN: z.string(),
  FE_URL: z.string()
})

export const getShopifyClient = () => {

  const { SHOPIFY_PUBLIC_ACCESS_TOKEN, FE_URL } = shopifyValidation.parse(process.env)

  return createStorefrontApiClient({
    storeDomain: 'https://skyinkco.myshopify.com/',
    apiVersion: LATEST_API_VERSION,
    publicAccessToken: SHOPIFY_PUBLIC_ACCESS_TOKEN,

  })
}