import React, { useState, useEffect } from "react";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [userInput, setUserInput] = useState("");
  const [storedItems, setStoredItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Get stored items from local storage when the component mounts
    const storedItems = JSON.parse(localStorage.getItem("storedItems")) || [];

    // Update state with stored items
    setStoredItems(storedItems);
  }, []);

  const handleSearch = () => {
    
    const newItem = { searchQuery, userInput };
    const updatedItems = [...storedItems, newItem];

  
    localStorage.setItem("storedItems", JSON.stringify(updatedItems));
    setStoredItems(updatedItems);

    // Clear input fields after adding new item
    setSearchQuery("");
    setUserInput("");
  };


  const handleDelete = (index) => {
    // Create a new array with the item at the specified index removed
    const updatedItems = [
      ...storedItems.slice(0, index),
      ...storedItems.slice(index + 1)
    ];

    // Store updated items in local storage and update state to display on page
    localStorage.setItem("storedItems", JSON.stringify(updatedItems));
    setStoredItems(updatedItems);
  };
  const handleEdit = (index) => {
    // Prompt user to enter new value for the item being edited
    const newValue = prompt("Enter a new value:");

    // Update the item object with the new value
    const editedItem = { ...storedItems[index], userInput: newValue };

    // Create a new array with the edited item replacing the original item
    const updatedItems = [
      ...storedItems.slice(0, index),
      editedItem,
      ...storedItems.slice(index + 1)
    ];
    // Store updated items in local storage and update state to display on page
    localStorage.setItem("storedItems", JSON.stringify(updatedItems));
    setStoredItems(updatedItems);
};

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter search query"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter additional input"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          
        />
        <button onClick={handleSearch}>ADD</button>
        <button onClick={handleSearch}>Search</button>
      </div>
      {storedItems.map((item, index) => (
        <div key={index}>
          <p>
            <strong>Search query:</strong> {item.searchQuery} <br />
            <strong>User input:</strong> {item.userInput}
          </p>
          <button onClick={() => handleEdit(index)}>Edit</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
      
    </div>
    
  );
}































{/* import React, { useState, useEffect } from "react";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [userInput, setUserInput] = useState("");
  const [storedItems, setStoredItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Get stored items from local storage when the component mounts
    const storedItems = JSON.parse(localStorage.getItem("storedItems")) || [];

    // Update state with stored items
    setStoredItems(storedItems);
  }, []);

  const handleAdd = () => {
    // Create a new item object and add to stored items
    const newItem = { name: searchQuery, userInput };
    const updatedItems = [...storedItems, newItem];

    // Store updated items in local storage and update state to display on page
    localStorage.setItem("storedItems", JSON.stringify(updatedItems));
    setStoredItems(updatedItems);

    // Clear input fields after adding new item
    setSearchQuery("");
    setUserInput("");
  };

  const handleEdit = (index) => {
    // Prompt user to enter new value for the item being edited
    const newValue = prompt("Enter a new value:");

    // Update the item object with the new value
    const editedItem = { ...storedItems[index], userInput: newValue };

    // Create a new array with the edited item replacing the original item
    const updatedItems = [
      ...storedItems.slice(0, index),
      editedItem,
      ...storedItems.slice(index + 1)
    ];

    // Store updated items in local storage and update state to display on page
    localStorage.setItem("storedItems", JSON.stringify(updatedItems));
    setStoredItems(updatedItems);
  };

  const handleSearch = () => {
    // Filter stored items to find matches based on search query
    const matchingItems = storedItems.filter(
      (item) => item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Update state with search results
    setSearchResults(matchingItems);
  };
  const handleDelete = (index) => {
    // Create a new array with the item at the specified index removed
    const updatedItems = [
      ...storedItems.slice(0, index),
      ...storedItems.slice(index + 1)
    ];

    // Store updated items in local storage and update state to display on page
    localStorage.setItem("storedItems", JSON.stringify(updatedItems));
    setStoredItems(updatedItems);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter search query"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter additional input"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {storedItems.map((item, index) => (
        <div key={index}>
          <p>
            <strong>Search query:</strong> {item.searchQuery} <br />
            <strong>User input:</strong> {item.userInput}
          </p>
          <button onClick={() => handleEdit(index)}>Edit</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
      <ul>
        Display search results if there are any 
        {searchResults.length > 0 ? (
          searchResults.map((item, index) => (
            <li key={index}>
              {item.name}: {item.userInput}
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))
        ) : (
          // Otherwise, display all stored items
          storedItems.map((item, index) => (
            <li key={index}>
              {item.name}: {item.userInput}
              <button onClick={() => handleEdit(index)}>Edit</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
     
    <div>
      
      {storedItems.map((item, index) => (
        <div key={index}>
          <p>
            <strong>Search query:</strong> {item.searchQuery} <br />
            <strong>User input:</strong> {item.userInput}
          </p>
          <button onClick={() => handleEdit(index)}>Edit</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
     );
}
      */}
    
 

export default SearchBar;