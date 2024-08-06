
import React, { useState, useEffect } from 'react';
import { Form, FormControl, ListGroup } from 'react-bootstrap';

const TypeAheadSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setQuery(query);
    if (query.length > 2) {
      const filteredResults = data.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="type-ahead-search">
      <Form>
        <FormControl
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
          className="mb-2"
        />
      </Form>
      {results.length > 0 && (
        <ListGroup>
          {results.map((item) => (
            <ListGroup.Item key={item.id}>{item.name}</ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default TypeAheadSearch;
