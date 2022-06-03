import React, { useEffect, useState } from 'react';
// import Main from './components/form';
function App() {

  const[data, setData] = useState(null);
  
  useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, []);
  
  return(
    <div>
      {/* <Main></Main> */}
      <p>{!data ? "Loading..." : data}</p>
    </div>
    
  );
}

export default App;
