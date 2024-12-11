const whats_new_p = document.getElementById("WhatsNewP");
const whats_new_h2 = document.getElementById("WhatsNewH2")

const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

function toggleSidebar(){
  sidebar.classList.toggle('close');
  toggleButton.classList.toggle('rotate');

  closeAllSubMenus();
}


function main() {
  let req = new XMLHttpRequest();
  
  req.onreadystatechange = () => {
    if (req.readyState === XMLHttpRequest.DONE) {
      if (req.status === 200) { // Check for successful response (optional)
        try {
          // Parse the JSON response (assuming it's valid JSON)
          const jsonData = JSON.parse(req.responseText);
  
          // Extract the desired value based on your API structure
          const whatsNewValue = jsonData.record.one;
          // Set the value of "whats_new_p"
          whats_new_h2.innerText = whatsNewValue.Header;
          whats_new_p.innerText = whatsNewValue.description;
  
        } catch (error) {
          console.error("Error parsing JSON response:", error);
          // Handle potential parsing errors gracefully (e.g., display error message to user)
        }
      } else {
        console.error("Request failed with status:", req.status);
        // Handle request errors appropriately (e.g., display error message to user)
      }
    }
  };
  
  req.open("GET", "https://api.jsonbin.io/v3/b/6752c0c4acd3cb34a8b50f0d");
  req.send();
  
}

main()