import { SearchResult } from "@/services/models/searchResult";

type SearchResultsProps = {
  searchResults: SearchResult[];
}

export default function SearchResults({searchResults}: SearchResultsProps) {
  return(
    <>
      {searchResults.map((book) => <div key={book.key}>{book.title}</div>)}
    </>
  );
}