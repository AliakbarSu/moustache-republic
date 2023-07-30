function ProductImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full md:w-2/5">
      <img className="w-full" src={src} alt={alt} />
    </div>
  )
}

export default ProductImage
