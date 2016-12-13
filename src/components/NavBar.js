import React from 'react';
import {Link} from 'react-router';

const NavBar = props => (
  <div>
    <div>
      <form onSubmit={props.handleSubmit}>
        {props.show
          ? <input onChange={props.handleChange} placeholder="Search" value={props.search} />
          : null
        }
          <button type="submit">Submit</button>
      </form>
    </div>
    <div>
      <div id="stuff">
      </div>
    </div>
    <div>
      <Link to="/">
        <p>Home</p>
      </Link>
    </div>

    <div>
      <Link to="/Giphy">
        <p>Giphy</p>
      </Link>
    </div>
  </div>
)

export default NavBar;
