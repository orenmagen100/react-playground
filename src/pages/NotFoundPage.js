import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <h2>Page Not Found!</h2>
      <p>
        <Link to='/'> Take Me Home </Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
