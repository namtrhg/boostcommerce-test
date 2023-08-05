import { ProductCard } from "../ProductCard";
import { makeLetterBold } from "../../utils/format";

const triangleStyles = {
  width: "0",
  height: "0",
  borderLeft: "15px solid transparent",
  borderRight: "15px solid transparent",
  borderBottom: "20px solid #e5e7eb",
};

const AutoSuggestionBox = ({ suggestions, showBlocks, searchQuery }) => {
  return (
    <>
      {suggestions ? (
        <div className="mt-4 relative">
          <div
            className="absolute right-8 top-[-10px]"
            style={triangleStyles}
          ></div>
          <div className="shadow-lg w-full lg:w-[360px] rounded-lg">
            {showBlocks.suggestionTerm && (
              <div>
                <p className="bg-gray-200 p-2 uppercase text-sm text-gray-400 rounded-t-lg">
                  Suggestions
                </p>
                <div className="flex flex-col space-y-2">
                  {suggestions.suggestion?.terms?.map((item) => (
                    <a
                      className="hover:bg-slate-100 px-2"
                      href={item.url}
                      key={item.id}
                    >
                      <span
                        dangerouslySetInnerHTML={{
                          __html: makeLetterBold(item.title, searchQuery),
                        }}
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {showBlocks.collection && (
              <div>
                <p className="bg-gray-200 p-2 uppercase text-sm text-gray-400">
                  Collections
                </p>
                <div className="p-2">
                  <p>{suggestions.collection?.title}</p>
                </div>
              </div>
            )}

            {showBlocks.product && (
              <div>
                <p className="bg-gray-200 p-2 uppercase text-sm text-gray-400">
                  Products
                </p>
                <div className="space-y-2 mt-2">
                  {suggestions.products?.slice(0, 3).map((item) => (
                    <div key={item.id}>
                      <a href={item.url}>
                        <ProductCard
                          title={item.title}
                          image={item.image}
                          brand={item.brand}
                          price={item.price}
                        />
                      </a>
                      <div className="w-full h-[1px] bg-slate-300 mt-2" />
                    </div>
                  ))}
                </div>
                <button className="font-bold p-2 text-center uppercase text-gray-400 w-full">
                  <p>View all {suggestions.products.length} products</p>
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <p>No results found!</p>
      )}
    </>
  );
};

export default AutoSuggestionBox;
