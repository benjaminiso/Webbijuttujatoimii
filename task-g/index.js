// index.js
// Author: Benjamin Isohanni
// Date: 2025-11-07
// Handles adding registration rows to the table

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");             // your only form
    const tableBody = document.getElementById("timetable").querySelector("tbody");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get values
        const fullName = document.getElementById("Fname").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const birthdate = document.getElementById("date").value.trim();
        const terms = document.getElementById("terms").checked;

        const errors = {
            fullname: document.getElementById('fnameError'),
            email: document.getElementById('emailError'),
            phone: document.getElementById('phoneError'),
            birthdate: document.getElementById('birthdateError'),
            acceptedTerms: document.getElementById('termsError'),
        };

         // Clear old errors
        Object.values(errors).forEach(err => err.textContent = "");

        let valid = true;
         // FULL NAME
        if (fullName === "") {
            errors.fullname.textContent = "Full name is required.";
            valid = false;
        } else if (fullName.split(" ").length < 2) {
            errors.fullname.textContent = "Please include first and last name.";
            valid = false;
        }

        // EMAIL
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            errors.email.textContent = "Email is required.";
            valid = false;
        } else if (!emailPattern.test(email)) {
            errors.email.textContent = "Please enter a valid email address.";
            valid = false;
        }

        // PHONE
        const phonePattern = /^[0-9+\s()-]{7,15}$/;
        if (phone === "") {
            errors.phone.textContent = "Phone number is required.";
            valid = false;
        } else if (!phonePattern.test(phone)) {
            errors.phone.textContent = "Invalid phone number.";
            valid = false;
        }

        // BIRTHDATE
        if (birthdate === "") {
            errors.birthdate.textContent = "Birth date is required.";
            valid = false;
        }

        // TERMS
        if (!terms) {
            errors.acceptedTerms.textContent = "You must accept the terms.";
            valid = false;
        }

        // STOP if validation failed
        if (!valid) return;







      /*  // Basic validation
        if (!fullName || !email || !phone || !birthdate) {
            alert("Please fill in all fields.");
            return;
        }

        if (!terms) {
            alert("You must accept the terms and conditions.");
            return;
        }
            */
            



        // Timestamp
        const timestamp = new Date().toLocaleString();

        // Create table row
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${timestamp}</td>
            <td>${fullName}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td>${birthdate}</td>
        `;

        // Add row to table
        tableBody.appendChild(row);

        // Reset form
        form.reset();
    });

    // Clear button resets the form automatically, but we can add focus reset
    const clearBtn = document.getElementById("clearBtn");
    clearBtn.addEventListener("click", () => {
        form.reset();
        document.getElementById("Fname").focus();
    });
});
