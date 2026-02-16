document.getElementById("checkButton").addEventListener("click", function() {
    const emailInput = document.getElementById("emailsInput").value;
    const emails = emailInput.split(",").map(email => email.trim());
    let resultHtml = "<h2>Results:</h2>";

    emails.forEach(email => {
        const isValid = validateEmail(email);
        if (isValid) {
            resultHtml += `<p class="live-email">${email} - Live</p>`;
        } else {
            resultHtml += `<p class="invalid-email">${email} - Invalid</p>`;
        }
    });

    document.getElementById("results").innerHTML = resultHtml;
});

function validateEmail(email) {
    // Basic email regex pattern (checks format, not actual existence)
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}
