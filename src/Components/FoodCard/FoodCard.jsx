const FoodCard = ({item}) => {
  const {name, recipe, category, price} = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline">{category}</button>
          <button className="btn btn-outline">${price}</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
