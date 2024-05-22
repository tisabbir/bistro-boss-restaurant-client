

const PrimaryButton = ({btnText}) => {
    return (
        <div className="md:max-w-xl mx-auto my-4 px-4">
            <button className="btn bg-[#D1A054] text-white w-full">{btnText}</button>
        </div>
    );
};

export default PrimaryButton;