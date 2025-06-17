
const employees = [
  {
    name: "Akash Mehta",
    role: "Frontend Developer",
    department: "Engineering",
    contact: "akashk@supertech.com",
    photo: "images/emp1.jpg"
  },
  {
    name: "Priya Mehta",
    role: "HR Manager",
    department: "HR",
    contact: "priya@supertech.com",
    photo: "images/emp2.jpg"
  },
  {
    name: "Rohan Gupta",
    role: "Accountant",
    department: "Finance",
    contact: "rohan@supertech.com",
    photo: "images/emp3.jpg"
  },
  {
    name: "Sneha Verma",
    role: "Backend Developer",
    department: "Engineering",
    contact: "sneha@supertech.com",
    photo: "images/emp4.jpg"
  }
];

const container = document.getElementById("employeeContainer");
const searchInput = document.getElementById("searchInput");
const departmentFilter = document.getElementById("departmentFilter");

function displayEmployees(filteredEmployees) {
  container.innerHTML = "";
  filteredEmployees.forEach(emp => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${emp.photo}" alt="${emp.name}" />
      <h3>${emp.name}</h3>
      <p><strong>${emp.role}</strong></p>
      <p>${emp.department}</p>
      <p>${emp.contact}</p>
    `;
    container.appendChild(card);
  });
}

function filterEmployees() {
  const searchText = searchInput.value.toLowerCase();
  const selectedDept = departmentFilter.value;
  const filtered = employees.filter(emp => {
    const matchesName = emp.name.toLowerCase().includes(searchText);
    const matchesDept = selectedDept === "all" || emp.department === selectedDept;
    return matchesName && matchesDept;
  });
  displayEmployees(filtered);
}

searchInput.addEventListener("input", filterEmployees);
departmentFilter.addEventListener("change", filterEmployees);

// Initial display
displayEmployees(employees);
