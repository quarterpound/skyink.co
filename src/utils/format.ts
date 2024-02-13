import { PriceRange, ShopifyMoney } from "./shopify.types";

export const formatMoney = (money: ShopifyMoney): string => {
  return new Intl.NumberFormat('en-US', {
    currency: money.currencyCode,
    style: 'currency'
  }).format(parseFloat(money.amount))
}

export const formatPriceRange = (range: PriceRange) => {
  return `${formatMoney(range.minVariantPrice)} - ${formatMoney(range.maxVariantPrice)}`
}