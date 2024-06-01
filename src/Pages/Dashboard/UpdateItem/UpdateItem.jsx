import { useLoaderData } from "react-router-dom";
import SectionTitles from "../../../Components/SectionTitles/SectionTitles";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const imageHostingKey = import.meta.env.VITE_image_hosting_key;
const imageHostingAPI = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
const UpdateItem = () => {
  const item = useLoaderData();
  const { name, recipe, category, price, _id } = item;

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {

    //image upload to imgBB and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(imageHostingAPI, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

   
    if (res.data.success) {
      //now send the data to server and DB
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };

      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      if (menuRes.data.modifiedCount > 0) {
        //show success
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} has been updated to the database successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <div>
      <SectionTitles
        headings={"Update Item"}
        subheadings={"Make Infos Updated"}
      />
      <div className="mt-12 bg-base-200 p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* one input start */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe Name</span>
            </div>
            <input
              {...register("name")}
              type="text"
              defaultValue={name}
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
                defaultValue={category}
                className="select bg-base-100 w-full"
              >
                <option disabled value={"default"}>
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
                defaultValue={price}
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
              {...register("recipe")}
              type="text"
              defaultValue={recipe}
              placeholder="Recipe Details"
              className="textarea textarea-bordered textarea-lg w-full mb-6"
            />
          </label>
          {/* one input ends */}

          <input
            {...register("image")}
            type="file"
            className="file-input block w-full max-w-xs"
          />

          <input
            className="btn block mt-6 bg-[#D1A054] text-white w-1/4"
            type="submit"
            value={"Add Items"}
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
