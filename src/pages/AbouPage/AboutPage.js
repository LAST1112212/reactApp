import React from 'react';

function AboutPage({object}) {
  return (
    <div>
      <h1>{object.title}</h1>
      <p>{object.body}</p>
    </div>
  );
}

export default AboutPage;