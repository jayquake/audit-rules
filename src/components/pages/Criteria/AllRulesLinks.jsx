import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ItemPage from "../../layout/rulePage";
import { createFilter } from "../../util/Filter";
import { useLoading } from "../../util/LoadingContext";

function AllRulesWithRoutes({ filters }) {
  const { showLoading, hideLoading } = useLoading();
  const location = useLocation();
  const [filteredFormRules, setFilteredFormRules] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    // Prevent fetching if data is already loaded
    if (filteredFormRules.length > 0) {
      return;
    }

    const fetchData = async () => {
      showLoading();
      try {
        const response = await fetch("/audit-rules/data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        let data = await response.json();
        if (Array.isArray(filters) && filters.length) {
          data = data.filter(createFilter(...filters));
        }
        if (isMounted) {
          setFilteredFormRules(data);
        }
      } catch (err) {
        if (isMounted) setError(err);
      } finally {
        if (isMounted) hideLoading();
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [filters, showLoading, hideLoading, filteredFormRules.length]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Routes>
      {filteredFormRules.map((formRule) => (
        <Route
          key={`${formRule.id}-${formRule.criteria}-${formRule.route}`}
          path={`${formRule.criteria}/${formRule.route}`}
          element={<ItemPage ruleData={formRule} />}
        />
      ))}
    </Routes>
  );
}

export default AllRulesWithRoutes;
