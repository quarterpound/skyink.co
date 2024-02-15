import { getHomePageProducts } from "@/app/shopify-actions"
import FeaturedProductCard from "./featured-product-card"

const FeaturedProducts = async () => {

  const data = await getHomePageProducts()

  if (data.errors) {
    throw new Error(data.errors.message)
  }

  return (
    <section className="py-10 grid gap-4 md:gap-10 container">
      <h2 className="uppercase text-center text-xs">
        Products
      </h2>
      <div className="flex gap-10 justify-center w-full text-4xl font-tight">
        <p>Featured</p>
        <p className="text-gray-500 hidden md:block">Bestsellers</p>
        <p className="text-gray-500 hidden md:block">Picks</p>
      </div>
      <div className="grid gap-5">
        {
          data.data?.collection.products.nodes.map((product) => (
            <FeaturedProductCard
              product={product}
              className="even:ml-auto"
              key={product.handle}
            />
          ))
        }
      </div>
    </section>
  )
}

export default FeaturedProducts