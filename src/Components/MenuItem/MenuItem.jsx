

const MenuItem = ({item}) => {
    const {name, recipe, price, image} = item;
    return (
        <div className="flex items-center gap-4">
            <img className="w-24 h-24 rounded-tl-none rounded-tr-full rounded-bl-full rounded-br-full" src={image} alt="" />
            <div>
            <h1 className="text-xl text-[#151515] ">{name}-------------</h1>
            <p className="text-[#151515] max-w-[450px]">{recipe}</p>
            </div>
            <p className="text-xl text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;