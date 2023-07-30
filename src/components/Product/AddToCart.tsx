function AddToCart({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="mt-8 py-2 px-10 border-2 border-mr-border-dark text-mr-font-secondary font-bold hover:bg-mr-border-dark hover:text-white transition duration-200"
      onClick={onClick}
    >
      Add to cart
    </button>
  )
}

export default AddToCart
