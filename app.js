// Hardcoded parties
const mockParties = [
  { id: 1, name: "Beach party" },
  { id: 2, name: "House party" },
];

// Select DOM elements
const partyList = document.getElementById("party-list");
const partyForm = document.getElementById("party-form");

// State to store parties
let parties = [];

// Fetch parties
async function getParties() {
  console.log("Fetching parties...");

  // Fetch from API
  // const response = await fetch('/api/events');

  // Mock response
  const response = {
    json: () => Promise.resolve(mockParties),
  };

  parties = await response.json();
  render();
}

// Render parties
function render() {
  console.log("Rendering parties...");

  // Display parties
}

// Delete party
async function deleteParty(id) {
  // API delete logic
}

// Create party
async function createParty(party) {
  // API create logic
}

// Submit form
partyForm.addEventListener("submit", (event) => {
  // Form handling
});

getParties();
