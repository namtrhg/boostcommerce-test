import React, { useState } from "react";
import SuggestionBox from "../AutoSuggestionBox";

const AutoSuggestion = ({
  searchQuery,
  suggestions,
  charactersToShowSuggestions = 1,
  handleInputClear,
  handleInputChange,
  handleChangeCharacters,
}) => {
  const [showBlocks, setShowBlocks] = useState({
    suggestionTerm: true,
    collection: true,
    product: true,
  });

  const handleSettingsChange = (block) => {
    setShowBlocks((prevState) => ({
      ...prevState,
      [block]: !prevState[block],
    }));
  };

  return (
    <div className="flex flex-col lg:items-end w-full text-sm px-4 lg:px-0">
      <div>
        <div className="space-y-2 mb-2 w-full">
          <div className="flex justify-between items-center space-x-1">
            <label>Show Suggestions: </label>
            <input
              type="checkbox"
              checked={showBlocks.suggestionTerm}
              onChange={() => handleSettingsChange("suggestionTerm")}
            />
          </div>
          <div className="flex justify-between items-center space-x-1">
            <label>Show Collections: </label>
            <input
              type="checkbox"
              checked={showBlocks.collection}
              onChange={() => handleSettingsChange("collection")}
            />
          </div>
          <div className="flex justify-between items-center space-x-1">
            <label>Show Products: </label>
            <input
              type="checkbox"
              checked={showBlocks.product}
              onChange={() => handleSettingsChange("product")}
            />
          </div>
          <div className="flex justify-between items-center space-x-1">
            <label>Number of characters: </label>
            <input
              className="text-right"
              type="number"
              value={charactersToShowSuggestions}
              onChange={(e) => handleChangeCharacters(e.target.value)}
            />
          </div>
        </div>
        <div className="relative">
          <input
            className="border px-2 w-full lg:w-[360px] py-2"
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Search..."
          />
          {searchQuery && (
            <button
              className="absolute inset-y-0 right-2 text-gray-100 cursor-pointer"
              onClick={handleInputClear}
            >
              <p className="bg-gray-400 h-4 w-4 rounded-full flex justify-center items-center text-sm">
                x
              </p>
            </button>
          )}
        </div>
        {searchQuery && (
          <div className="lg:absolute">
            <SuggestionBox
              suggestions={suggestions}
              showBlocks={showBlocks}
              searchQuery={searchQuery}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoSuggestion;
