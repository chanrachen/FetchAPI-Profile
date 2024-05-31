export const cardComponent = (product) => {
    return `
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow m-6">
<a href="#" class="flex justify-center">
    <img class="p-8 rounded-t-lg h-[200px]" src="${product.image || '../asset/placeholder.png'}" alt="product image" />
</a>
<div class="px-5 pb-5">
    <a href="#">
        <h5 class="line-clamp-1 text-xl font-semibold tracking-tight text-gray-900">${product.title || "No product titles"}</h5>
    </a>
    <div class="flex items-center justify-between mt-5">
        <span class="text-3xl font-bold text-gray-900 ">${ product?.price || "0"}$</span>
        <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
    </div>
</div>
</div>
    `
}
