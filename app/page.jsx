"use client"; // Add this line to make the component a Client Component
import React from 'react';

function Page() {
  return (
    <section>
      <h1>Page</h1>
      <button onClick={() => { alert('Button clicked!'); }}>Click me</button>
    </section>
  );
}

export default Page;
