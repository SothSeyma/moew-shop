import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query') || '';
  const [searchQuery, setSearchQuery] = useState(query);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchQuery(query);
  }, [query]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch laptop data
        const laptopResponse = await fetch('/Data/laptopdata.json');
        const laptopJson = await laptopResponse.json();

        // Fetch desktop data
        const desktopResponse = await fetch('/Data/desktopdata.json');
        const desktopJson = await desktopResponse.json();

        // Combine laptop and desktop data
        const allData = [...laptopJson, ...desktopJson];

        // Filter the combined data based on the search query
        const filteredData = allData.filter((item) => {
          const itemName = (item.name || '').toLowerCase();
          const itemSpec = item.spec || {};

          const specMatches =
            (itemSpec.cpu || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
            (itemSpec.gpu || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
            (itemSpec.memory || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
            (itemSpec.storage || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
            (itemSpec.display || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
            (itemSpec.price || '').toLowerCase().includes(searchQuery.toLowerCase());

          return itemName.includes(searchQuery.toLowerCase()) || specMatches;
        });

        setSearchResults(filteredData);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <div>
      <h1>Search Results</h1>
      <p>Showing results for "{searchQuery}"</p>

      <div className="card-container" style={{ display: 'flex', margin: '30px' }}>
        {searchResults.map((item) => (
          <Card key={item.id} style={{ width: '18rem' }}>
            <Link
               to={`/product/${item.type ? item.type.toLowerCase() + '/' : ''}${item.id}`}
              style={{ textDecoration: 'none' }}
            >
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + item.image}
                alt={item.name}
                className="card-img-top"
                style={{ width: '200px', height: '200px' }}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  <p>
                    CPU: {item.spec.cpu} <br />
                    GPU: {item.spec.gpu} <br />
                    RAM: {item.spec.memory} <br />
                    Storage: {item.spec.storage}
                  </p>
                </Card.Text>
                <Button style={{ backgroundColor: '#f0932b' }}>Add To Cart</Button>
              </Card.Body>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
