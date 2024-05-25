import { Link } from "react-router-dom";
import MenuItem from "../../../Components/MenuItem/MenuItem";
import useMenu from "../../Hooks/useMenu";

const Menu = ({ categoryName }) => {
  const [menu] = useMenu();
  const category = menu.filter((item) => item.category === categoryName);

  return (
    <section className="mt-12 max-w-6xl mx-auto ">
      <div className="grid md:grid-cols-2 gap-4 mt-12">
        {category.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>

      <Link to={`/shop/${categoryName}`}>
        <button className="btn btn-outline border-0 border-b-4 mt-6 flex justify-center mx-auto mb-6 text-center">
          Order Your Favorite Foods
        </button>
      </Link>
    </section>
  );
};

export default Menu;
