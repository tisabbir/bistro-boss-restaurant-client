import FoodCard from "../../../Components/FoodCard/FoodCard";


const OrderItems = ({items}) => {
    return (
        <div>
            <div className='grid md:grid-cols-2 gap-6'>
          {
            items.map(item => <FoodCard key={item._id} item={item} />)
          }
          </div>
        </div>
    );
};

export default OrderItems;