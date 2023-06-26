import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  //   console.log(location);
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query"); // 이 query는 어디서 나오는 query??
  useEffect(() => {
    console.log(query);
  }, [query]);
  return (
    <div>
      <h1>검색결과</h1>
      <h3>검색어: {query}</h3>
    </div>
  );
};

export default SearchResults;
