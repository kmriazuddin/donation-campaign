const Banner = () => {
    return (
        <div className="text-center my-20">
            <h2 className="text-4xl font-semibold my-10">I Grow By Helping People In Need</h2>
            <div className="my-10">
                <input className="border border-slate-600 px-3 py-2" type="text" placeholder="Search Here..." />
                <button className="border border-pink-600 px-3 py-2 rounded-r-lg bg-[#FF444A] text-white">Search</button>
            </div>
        </div>
    );
};

export default Banner;