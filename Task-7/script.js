const userContainer = document.getElementById("userContainer");
const reloadBtn = document.getElementById("reloadBtn");
const loader = document.getElementById("loader");
const errorMsg = document.getElementById("errorMsg");

async function fetchCitizens() {
  userContainer.innerHTML = "";
  errorMsg.textContent = "";
  loader.style.display = "block";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    errorMsg.textContent = `🚨 Lost in Space: ${error.message}`;
  } finally {
    loader.style.display = "none";
  }
}

function displayUsers(users) {
  users.forEach((user) => {
    const card = document.createElement("div");
    card.className = "user-card";
    card.innerHTML = `
      <h3>👤 Citizen: ${user.name}</h3>
      <p>📧 Comms ID: <a href="mailto:${user.email}">${user.email}</a></p>
      <p>🌍 Planet Coordinates: ${user.address.city}, ${user.address.street}</p>
    `;
    userContainer.appendChild(card);
  });
}

reloadBtn.addEventListener("click", fetchCitizens);

// Fetch citizens on load
fetchCitizens();
