import React, { useState } from "react";
import AutoSuggestion from "./components/AutoSuggestion";
import { mockData } from "./api/data";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState(null);
  const [charactersToShowSuggestions, setCharactersToShowSuggestions] =
    useState(1);

  const handleCharactersChange = (value) => {
    setCharactersToShowSuggestions(value);
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);

    if (value.length >= charactersToShowSuggestions) {
      if (value === "t") {
        setSuggestions(mockData[0]);
      } else if (value === "to") {
        setSuggestions(mockData[1]);
      }
    } else {
      setSuggestions(null);
    }
  };

  const handleInputClear = () => {
    setSearchQuery("");
    setSuggestions(null);
  };

  return (
    <div className="container mx-auto my-8">
      <div className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row items-center">
        <p className="text-lg uppercase text-gray-500 w-full text-center lg:text-left">
          BOOSTCOMERCE DEMO
        </p>
        <AutoSuggestion
          searchQuery={searchQuery}
          suggestions={suggestions}
          charactersToShowSuggestions={charactersToShowSuggestions}
          handleInputClear={handleInputClear}
          handleInputChange={handleInputChange}
          handleChangeCharacters={handleCharactersChange}
        />
      </div>
      <div className="h-[1px] w-full my-6 bg-gray-200" />
      <p className="text-sm">
        Note: Type <span className="font-bold">t</span> or{" "}
        <span className="font-bold">to</span> in the search bar.
      </p>
    </div>
  );
}

export default App;
