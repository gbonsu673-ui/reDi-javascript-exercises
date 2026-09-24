async function fetchUsers() {
  const API_URL = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const users = await response.json();
    console.log(`${users.length} users loaded!`);
    console.log(users[0]);
    return users;
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}

fetchUsers();
