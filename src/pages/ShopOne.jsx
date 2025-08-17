
const ShopOne = ({data}) => {
    const {shopName,description, address, opening_hours, category} = data;
    return (
        <div>
            <div className="card bg-base-100 md:w-96 ring-4 ring-[#16a34a]">
  <figure>
    <div className='bg-[#16a34a1a] rounded-lg m-4'>
    <img
      src="/public/images/shoppp.png"
      alt="Shoes" className='h-72 lg:h-full ' />
      </div>
  </figure>
  <div className="card-body">
    <h2 className="text-xl font-bold">
     {shopName}
      <div className="badge ml-2 bg-red-500 text-white text-md lg:text-lg p-4 ">{category}</div>
    </h2>
    <p className='text-md lg:text-lg'>{description}</p>
    <h3 className="font-semibold">{address}</h3>
    <div className='mt-2 mb-2'>
        <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="1 star" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="2 star"  />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="3 star" defaultChecked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="4 star"  />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="5 star" />
</div>
    </div>
  
        <div className='flex items-center gap-3 pb-3'>
            <div className='text-lg text-red-500 font-bold'>{opening_hours}</div>
          
        </div>
  
    <div className="card-actions justify-end">
      <div className="btn rounded-full border-2 border-[#16a34a] text-[#16a34a] hover:bg-[#16a34a] hover:text-white ">Contact</div>
      <div className="btn bg-[#16a34a] text-white hover:border-2 hover:border-[#16a34a] hover:bg-white hover:text-[#16a34a] rounded-full">See Details</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default ShopOne;