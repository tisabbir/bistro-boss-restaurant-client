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
          {/* one input start */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe Name</span>
            </div>
            <input
              {...register("recipe")}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full mb-6"
            />
          </label>
          {/* one input ends */}

          <div className="flex gap-4">
            
            {/* one input start */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
           
            <select
              {...register("category")}
              className="select bg-base-100 w-full"
            >
              <option disabled selected>
                Select Your Food Category
              </option>
              <option value={"salad"}>Salad</option>
              <option value={"pizza"}>Pizza</option>
              <option value={"soup"}>Soup</option>
              <option value={"dessert"}>Dessert</option>
              <option value={"drinks"}>Drinks</option>
            </select>
          </label>
          {/* one input ends */}


            {/* one input start */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input
                {...register("price")}
                type="text"
                placeholder="Price"
                className="input input-bordered w-full mb-6"
              />
            </label>
            {/* one input ends */}
          </div>

          {/* one input start */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
              {...register("description")}
              type="text"
              placeholder="Recipe Details"
              className="textarea textarea-bordered textarea-lg w-full mb-6"
            />
          </label>
          {/* one input ends */}

          <input type="file" className="file-input block w-full max-w-xs" />

          <input className="btn block mt-6 bg-[#D1A054] text-white w-1/4" type="submit" value={'Add Items'} />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
