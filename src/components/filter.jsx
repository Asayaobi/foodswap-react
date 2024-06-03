function Filter() {
  return (
    <>
      <div className="bg-slate-50 flex justify-center gap-4 px-48">
        {/* location */}
        <select
          name="location"
          className="border border-gray-300 rounded ps-9 w-full p-2"
        >
          <option value="">Any Location</option>
        </select>
        {/* country */}
        <select
          name="country"
          className="border border-gray-300 rounded ps-9 w-full p-2"
        >
          <option value="">Cuisine Type</option>
        </select>
        {/* category */}
        <select
          name="category"
          className="border border-gray-300 rounded ps-9 w-full p-2"
        >
          <option value="">Course Category</option>
        </select>
        {/* keyword */}
        <input
          name="keyword"
          className="border border-gray-300 rounded ps-9 w-full p-2"
          type="text"
          placeholder="keywords..."
        />
        {/* button */}
        <button className="flex relative bg-slate-100 items-center p-5 border h-11 sm:w-full lg:w-40">
          Search
        </button>
      </div>
    </>
  )
}

export default Filter
