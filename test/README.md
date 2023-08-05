# AutoSuggestion Component

The `AutoSuggestion` component is a React component that provides auto-suggestions based on user input. It allows you to customize the visibility of different suggestion blocks and set the number of characters required before showing suggestions.

## Usage

To use the `AutoSuggestion` component, follow the steps below:

1. Import the component into your React component where you want to display the auto-suggestion box.

```jsx
import React, { useState } from "react";
import AutoSuggestion from "./AutoSuggestion";
```

2. Prepare the suggestions data and handle the necessary callbacks in your parent component.

```jsx
const ParentComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [charactersToShow, setCharactersToShow] = useState(1);

  // Function to handle changes in the input field
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    // Perform the logic to generate suggestions based on the input
    // and update the suggestions state accordingly.
    // Example: setSuggestions(getSuggestionsFromAPI(event.target.value));
  };

  // Function to handle clearing the input field
  const handleInputClear = () => {
    setSearchQuery("");
    setSuggestions([]);
  };

  // Function to handle changes in the number of characters for suggestions
  const handleChangeCharacters = (value) => {
    setCharactersToShow(value);
  };

  // ... Rest of the parent component code ...

  return (
    <div>
      <AutoSuggestion
        searchQuery={searchQuery}
        suggestions={suggestions}
        charactersToShowSuggestions={charactersToShow}
        handleInputClear={handleInputClear}
        handleInputChange={handleInputChange}
        handleChangeCharacters={handleChangeCharacters}
      />
      {/* Render other components here */}
    </div>
  );
};

3. Customize the appearance and behavior of the `AutoSuggestion` component using the provided props and styles.

The `AutoSuggestion` component will display an input field for the user to enter their search query. As the user types, suggestions will be generated based on the input and displayed in the suggestion box. The user can control which types of suggestions (suggestionTerm, collection, product) are visible and set the number of characters required before showing suggestions.

Remember to replace the `getSuggestionsFromAPI` with your actual logic for fetching suggestions based on user input.

## Props

The `AutoSuggestion` component accepts the following props:

- `searchQuery` (string): The current search query entered by the user.
- `suggestions` (array): An array of suggestions to be displayed in the suggestion box.
- `charactersToShowSuggestions` (number, default: 1): The number of characters required before showing suggestions.
- `handleInputClear` (function): A callback function to handle clearing the input field.
- `handleInputChange` (function): A callback function to handle changes in the input field.
- `handleChangeCharacters` (function): A callback function to handle changes in the number of characters required before showing suggestions.