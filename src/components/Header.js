import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.header`
  width: 100%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .logo {
    margin-left: 10px;
    font-size: 1.5rem;
    font-weight: bold;
  }
  nav {
    margin-right: 10px;
  }
  nav ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  li {
    padding: 5px;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1rem;
`;
function Header() {
  return (
    <Container>
      <div className="logo">HIDDENC</div>
      <nav>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <Link to="/mypage">My Page</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
export default Header;
