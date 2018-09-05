import React from 'react';
import myData from '../json/static-data.json';

console.log('myData', myData);

class Content extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
          <div className="col">
            <h1>{myData[0].title}</h1>
            <time>{myData[0].timestamp}</time>
            <p>{myData[0].content}</p>
          </div>
    );
  }
}

export default Content;
