document.addEventListener("DOMContentLoaded", () => {
    const table = document.querySelector("table");
    const rows = Array.from(table.querySelectorAll("tbody tr"));
    const searchInput = document.createElement("input");
    const backToTopButton = document.createElement("button");

    // Add search input field
    searchInput.type = "text";
    searchInput.placeholder = "Search Cuisine...";
    searchInput.style.margin = "1rem auto";
    searchInput.style.padding = "0.5rem";
    searchInput.style.border = "1px solid rgba(255, 255, 255, 0.2)";
    searchInput.style.borderRadius = "10px";
    searchInput.style.fontSize = "1rem";
    document.body.insertBefore(searchInput, table);

    // Add search functionality
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        rows.forEach((row) => {
            const cuisineCell = row.cells[1].textContent.toLowerCase();
            row.style.display = cuisineCell.includes(query) ? "" : "none";
        });
    });

    // Highlight rows on hover
    rows.forEach((row) => {
        row.addEventListener("mouseover", () => {
            row.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            row.style.transition = "background-color 0.3s ease";
        });
        row.addEventListener("mouseout", () => {
            row.style.backgroundColor = "";
        });
    });

    // Sort functionality for headers
    table.querySelectorAll("th").forEach((header, index) => {
        header.style.cursor = "pointer";
        header.addEventListener("click", () => {
            const sortedRows = rows.sort((a, b) => {
                const aText = a.cells[index].textContent;
                const bText = b.cells[index].textContent;
                return isNaN(aText) || isNaN(bText)
                    ? aText.localeCompare(bText)
                    : parseFloat(aText) - parseFloat(bText);
            });
            table.querySelector("tbody").append(...sortedRows);
        });
    });

    // Add "Back to Top" button
    backToTopButton.textContent = "Back to Top";
    backToTopButton.style.position = "fixed";
    backToTopButton.style.bottom = "20px";
    backToTopButton.style.right = "20px";
    backToTopButton.style.padding = "0.8rem 1.5rem";
    backToTopButton.style.backgroundColor = "#ff7e67";
    backToTopButton.style.color = "#fff";
    backToTopButton.style.border = "none";
    backToTopButton.style.borderRadius = "50px";
    backToTopButton.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.3)";
    backToTopButton.style.cursor = "pointer";
    backToTopButton.style.display = "none";
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.body.appendChild(backToTopButton);

    // Show/hide "Back to Top" button on scroll
    window.addEventListener("scroll", () => {
        backToTopButton.style.display = window.scrollY > 200 ? "block" : "none";
    });
});
