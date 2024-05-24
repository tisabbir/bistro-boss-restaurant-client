const FoodCard = ({item}) => {
  const {name, recipe,  price} = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <p className="text-white text-xl bg-slate-800 px-2 rounded-md absolute right-0 mt-4 mr-4">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          
          <button className="btn btn-outline uppercase border-0 border-b-4 bg-base-300">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
