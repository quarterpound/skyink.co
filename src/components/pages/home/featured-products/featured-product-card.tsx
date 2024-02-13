import { ProductPreview } from "@/utils/shopify.types"
import { cn } from "@/utils/tailwind"
import { HTMLAttributes } from "react"
import Image from "next/image"
import { generateBlurUrl } from "@/utils/images"
import { formatMoney } from "@/utils/format"

interface SharedFeaturedProductCard {
  product: ProductPreview
}

export type FeaturedProductCardProps = HTMLAttributes<HTMLDivElement> & SharedFeaturedProductCard 

const FeaturedProductCard = async ({ className, product, ...props }: FeaturedProductCardProps) => {
  const thumbnail = product.images.nodes[0]

  if (!thumbnail || !thumbnail.url)  {
    throw new Error('no thumbnail was found')
  }

  const blurUrl = await generateBlurUrl(thumbnail.url)


  return (
    <div className={cn("grid gap-2 max-w-[700px]", className)} {...props}>
      <Image placeholder="blur" className="object-cover object-center h-[400px]" src={thumbnail.url} blurDataURL={blurUrl} width={thumbnail.width} height={thumbnail.height} alt={thumbnail.altText ?? product.title} />
      <div className="flex justify-between items-center font-tight">
        <p>{product.title}</p>
        <p>{formatMoney(product.priceRange.minVariantPrice)}</p>
      </div>
    </div>
  )
}

export default FeaturedProductCard