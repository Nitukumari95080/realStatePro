document.addEventListener("DOMContentLoaded", () => {
    // Add default date to the "move-in-date" input
    const moveInDateInput = document.getElementById("move-in-date");
    const today = new Date().toISOString().split("T")[0];
    moveInDateInput.setAttribute("min", today);
    moveInDateInput.setAttribute("value", today);

    // Highlight selected option button and log action to console
    const optionButtons = document.querySelectorAll(".option-button");
    optionButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            optionButtons.forEach((btn) => btn.classList.remove("active"));

            // Add active class to clicked button
            button.classList.add("active");

            // Log the button action to console
            console.log(`Selected action: ${button.textContent}`);
        });
    });

    // Handle form submission
    const browseButton = document.querySelector(".browse-button");
    browseButton.addEventListener("click", () => {
        const location = document.getElementById("location").value;
        const moveInDate = moveInDateInput.value;

        if (!location || !moveInDate) {
            alert("Please fill out all fields before browsing properties.");
            return;
        }

        // Log the search details (or handle as needed)
        console.log(`Searching properties in ${location} for move-in date ${moveInDate}`);
        alert(`Searching properties in ${location} for move-in date ${moveInDate}`);
    });
});
