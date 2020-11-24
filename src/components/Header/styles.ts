import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  text-transform: uppercase;
  font-weight: 600;

  .logo {
    font-size: 40px;
    span {
      color: #a6c335;
    }
  }

  .menu-links ul li {
    display: inline-block;
    padding-right: 20px;
  }

  .search,
  .cart {
    font-size: 20px;
  }

  .logo,
  .search,
  .cart,
  .menu-links ul li {
    cursor: pointer;
  }
`;
