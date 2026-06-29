function SearchFilter({
  searchTerm,
  setSearchTerm,
  category,
  setCategory,
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        margin: "20px 0",
      }}
    >
      <input
        type="text"
        placeholder="Search expense..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>All</option>
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
        <option>Bills</option>
        <option>Entertainment</option>
        <option>Education</option>
        <option>Others</option>
      </select>
    </div>
  );
}

export default SearchFilter;