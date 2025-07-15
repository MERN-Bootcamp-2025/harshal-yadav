const Filters = ({ filter, setFilter }) => {
  console.log("filter",filter)
  return (
  <div className="relative bg-yellow-400 flex gap-2.5 px-5 py-2">
  <button
    onClick={() => setFilter('veg')}
    className={`pb-1 px-3 py-1 rounded text-white transition-all ${
      filter === 'veg'
        ? 'border-b-4 border-white bg-green-900'
        : 'bg-green-900 hover:border-b-2 hover:border-white'
    }`}
  >
    Veg
  </button>
  <button
    onClick={() => setFilter('nonveg')}
    className={`pb-1 px-3 py-1 rounded text-white transition-all ${
      filter === 'nonveg'
        ? 'border-b-4 border-white bg-red-500'
        : 'bg-red-500 hover:border-b-2 hover:border-white'
    }`}
  >
    Non-Veg
  </button>
  <button
    onClick={() => setFilter(null)}
    className={`pb-1 px-3 py-1 rounded text-white transition-all ${
      filter === null
        ? 'border-b-4 border-white bg-gray-500'
        : 'bg-gray-500 hover:border-b-2 hover:border-white'
    }`}>
    All
  </button>
     {/* <button
        onClick={() => setFilter('meals')}
        className={`pb-1 px-3 py-1 rounded text-white transition-all ${
          filter === 'meals'
            ? 'border-b-4 border-white bg-purple-600'
            : 'bg-purple-600 hover:border-b-2 hover:border-white'
        }`}
      >
        Meals
      </button> */}
</div>

  );
};

export default Filters;
