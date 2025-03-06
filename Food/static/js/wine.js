document.addEventListener("DOMContentLoaded", () => {
    const table = document.querySelector("table");
    const rows = Array.from(table.querySelectorAll("tbody tr"));
    const searchContainer = document.createElement("div");
    const searchInput = document.createElement("input");
    const backToTopButton = document.createElement("button");

    // Add a search bar
    searchContainer.style.marginBottom = "1.5rem";
    searchInput.type = "text";
    searchInput.placeholder = "Search Wine...";
    searchInput.style.padding = "0.8rem";
    searchInput.style.border = "1px solid rgba(255, 255, 255, 0.2)";
    searchInput.style.borderRadius = "10px";
    searchInput.style.fontSize = "1rem";
    searchInput.style.width = "90%";
    searchInput.style.maxWidth = "400px";
    searchInput.style.display = "block";
    searchInput.style.margin = "0 auto";
    searchContainer.appendChild(searchInput);
    document.body.insertBefore(searchContainer, table);

    // Search functionality
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        rows.forEach((row) => {
            const wineCell = row.cells[0].textContent.toLowerCase();
            row.style.display = wineCell.includes(query) ? "" : "none";
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
