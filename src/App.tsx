import { useState } from 'react';
import './App.css';
import apiResponse from './data.json';

function App() {
  const [data, setData] = useState(apiResponse);

  return (
    <div className="container">
      {data.result.map((item, index) => {
        const styles = {
          backgroundColor: item.backgroundColor,
        };

        return (
          <span
            className="square"
            style={styles}
            key={index}
            onClick={() => {
              console.log();
              if (item.backgroundColor === 'lightcoral') {
                data.result[index].backgroundColor = 'lightgray';
              }
            }}
          >
            {item.label}
          </span>
        );
      })}
    </div>
  );
}

export default App;
