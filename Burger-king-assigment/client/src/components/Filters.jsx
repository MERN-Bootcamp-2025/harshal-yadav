const Filters = ({ filters, setFilters }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={filters.search}
        onChange={e => setFilters({ ...filters, search: e.target.value })}
      />
      <button onClick={() => setFilters({ ...filters, isVeg: true })}>Veg</button>
      <button onClick={() => setFilters({ ...filters, isVeg: false })}>Non-Veg</button>
      <button onClick={() => setFilters({ ...filters, isVeg: null })}>All</button>
    </div>
  );
};

export default Filters;
