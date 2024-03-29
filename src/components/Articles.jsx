import React, { useState, useEffect } from "react";
import axios from "axios";
import TemplateNews from "../assets/Bootstrap/TemplateNews";
import { Row } from "react-bootstrap";
export default function Articles() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios(
      `https://newsapi.org/v2/everything?q=${
        search || "Indonesia"
      }&apiKey=290e7b44129e4f8fa93f3c2afef91faa`
    )
      .then((response) => {
        // console.log(response.data.articles);
        setAllData(response.data.articles);
        setFilteredData(response.data.articles);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, [search]);
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <>
      <div className="d-flex">
        <input
          className="container-fluid mb-4 rounded-2"
          placeholder="Search your news..."
          type="text"
          onChange={(event) => handleSearch(event)}
        />
      </div>
      <Row>
        {filteredData.map((article, index) => {
          return (
            <>
              <TemplateNews
                key={index}
                titles={article.title}
                descriptions={article.description}
                urls={article.url}
                urlToImages={article.urlToImage}
                date={article.publishedAt}
              />
            </>
          );
        })}
      </Row>
    </>
  );
}
