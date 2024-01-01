import React from 'react'

function DestopDetail() {
    const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch('/Data/desktopdata.json')  // file
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  return (
    <div></div>
  )
}

export default DestopDetail