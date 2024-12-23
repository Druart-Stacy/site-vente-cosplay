document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll("aside input[type='checkbox']");
  const items = document.querySelectorAll(".item");

  function filterItems() {
    const selectedFilters = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);

    items.forEach(item => {
      const matchesFilter = selectedFilters.length === 0 || selectedFilters.some(filter => item.classList.contains(filter));
      item.style.display = matchesFilter ? "block" : "none";
    });
  }

  checkboxes.forEach(checkbox => checkbox.addEventListener("change", filterItems));
  filterItems(); // Filtrage initial
});
