import React, { useState } from "react";

const App = () => {
  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to fetch a random fact from the API
  const fetchFact = async () => {
    setLoading(true);
    try {
      // used async/await to handle the fetch request
      const res = await fetch("https://api.api-ninjas.com/v1/facts", {
        headers: {
          "X-Api-Key": import.meta.env.VITE_API_NINJAS_KEY,
        },
      });

      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        setFact(data[0].fact);
      } else {
        setFact("No fact found.");
      }
    } catch (err) {
      setFact("Error fetching fact.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="">
      <h1>Random Facts</h1>
      <button onClick={fetchFact} disabled={loading}>
        {loading ? "Loading..." : "Get Fact"}
      </button>
      {/* Display the fetched fact */}
      {fact && <p>{fact}</p>}
    </div>
  );
};

export default App;
