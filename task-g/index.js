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


            // Basic validation
            if (!fullName || !email || !phone || !birthdate) {
                alert("Please fill in all fields.");
                return;
            }

            if (!terms) {
                alert("You must accept the terms and conditions.");
                return;
            }

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
