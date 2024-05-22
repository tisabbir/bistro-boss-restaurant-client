

const SectionTitles = ({headings, subheadings}) => {
    return (
        <div className="text-center md:max-w-sm mx-auto space-y-4">
            <p className="text-[#D99904] text-xl italic">---{subheadings}---</p>
            <h1 className="text-[#151515] text-4xl border-y-2 py-4 uppercase">{headings}</h1>
        </div>
    );
};

export default SectionTitles;