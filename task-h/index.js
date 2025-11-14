document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const tableBody = document.getElementById("timetableBody");

    const errors = {
        fullname: document.getElementById('fnameError'),
        email: document.getElementById('emailError'),
        phone: document.getElementById('phoneError'),
        birthdate: document.getElementById('birthdateError'),
        acceptedTerms: document.getElementById('termsError'),
    };

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const fullName = document.getElementById("Fname").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const birthdate = document.getElementById("date").value.trim();
        const terms = document.getElementById("terms").checked;

        // Clear previous errors
        Object.values(errors).forEach(err => err.textContent = "");

        let valid = true;

        // Full Name
        if (!fullName) {
            errors.fullname.textContent = "Full name is required.";
            valid = false;
        } else if (fullName.split(" ").length < 2) {
            errors.fullname.textContent = "Please include first and last name.";
            valid = false;
        }

        // Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            errors.email.textContent = "Email is required.";
            valid = false;
        } else if (!emailPattern.test(email)) {
            errors.email.textContent = "Please enter a valid email address.";
            valid = false;
        }

        // Phone
        const phonePattern = /^[0-9+\s()-]{6,20}$/;
        if (!phone) {
            errors.phone.textContent = "Phone number is required.";
            valid = false;
        } else if (!phonePattern.test(phone)) {
            errors.phone.textContent = "Invalid phone number.";
            valid = false;
        }

        // Birthdate
        if (!birthdate) {
            errors.birthdate.textContent = "Birth date is required.";
            valid = false;
        }

        // Terms
        if (!terms) {
            errors.acceptedTerms.textContent = "You must accept the terms.";
            valid = false;
        }

        if (!valid) return;

        // Add row
        const timestamp = new Date().toLocaleString();
        const row = document.createElement("tr");
        row.classList.add("bg-gray-200", "border-b");
        row.innerHTML = `
            <td class="px-4 py-2">${timestamp}</td>
            <td class="px-4 py-2">${fullName}</td>
            <td class="px-4 py-2">${email}</td>
            <td class="px-4 py-2">${phone}</td>
            <td class="px-4 py-2">${birthdate}</td>
        `;
        tableBody.appendChild(row);

        form.reset();
    });

    // Clear button resets errors too
    document.querySelector("button[type='reset']").addEventListener("click", () => {
        Object.values(errors).forEach(err => err.textContent = "");
    });
});
