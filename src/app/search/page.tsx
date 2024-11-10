"use client";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Suspense } from "react";

interface SearchResult {
  slug: string;
  title: string;
  desc: string;
  name: string;
  post: string;
  content: string;
  link: string;
}

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [results, setResults] = useState<SearchResult[]>([]);

  const params = useParams();

  useEffect(() => {
    if (query) {
      console.log("Fetching results for query:", query);
      fetchResults(query);
    }
  }, [query]);

  const fetchResults = async (query: string) => {
    try {
      const response = await fetch(`/api/search?query=${query}`);
      const searchResults = await response.json();

      console.log("Fetched search results:", searchResults);

      if (searchResults) {
        setResults(searchResults);
      } else {
        console.log("No results were returned from the search API.");
      }
    } catch (error) {
      console.error("An error occurred while fetching results:", error);
    }
  };

  return (
    <Suspense fallback={<div>уншиж байна</div>}>
      <head>
        <title>Хайх | Бат-Ирээдүй</title>
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <div id="content">
        <h1>Хайх : {query}</h1>
        {results.length ? (
          results.map((result) => (
            <div key={result.slug} className="post_list">
              <div className="post_intro">
                <Link href={result.link} className="read-more">
                  <h2>{result.title}</h2>
                </Link>
                <span className="post_info">{result.post}</span>
                <div className="post_content">{result.content}</div>
              </div>
              <hr />
            </div>
          ))
        ) : (
          <p>Таны хайлтанд тохирох зүйл олдсонгүй.</p>
        )}
      </div>
    </Suspense>
  );
};

export default SearchPage;
