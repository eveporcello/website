import React from 'react'
import { Link } from '@reach/router'

export const RegistrationNav = () => (
  <nav>
    <button>
      <Link to="/registration-1">Registration Page 1</Link>
    </button>
    <button>
      <Link to="/registration-2">Registration Page 2</Link>
    </button>
    <Link to="/">Back to Homepage</Link>
  </nav>
)
