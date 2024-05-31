import { useForm } from "react-hook-form";
import SectionTitles from "../../../Components/SectionTitles/SectionTitles";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <SectionTitles headings={"Add Items"} subheadings={"What's New"} />
      <div className="mt-12 bg-base-200 p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className="input" {...register("firstName")} />

          <select {...register("gender")} className="select bg-base-100 w-full max-w-xs">
            <option disabled selected>
              Select Your Food Category
            </option>
            <option value={'salad'}>Salad</option>
            <option value={'pizza'}>Pizza</option>
            <option value={'soup'}>Soup</option>
            <option value={'dessert'}>Dessert</option>
            <option value={'drinks'}>Drinks</option>
          </select>

          <input className="btn" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
