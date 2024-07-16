import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NavLight = styled.nav`
  background: #ddd;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

export const NavNight = styled.nav`
  background: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

export const NavLinkLight = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #00a7d1;
  }
`;

export const NavLinkNight = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
`;

export const NavToggleTheme = styled.div
`
display: flex;
align-items: center;
`

export const NavSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

export const NavCheckbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const NavSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #0079ff;
  transition: .4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }

  ${NavCheckbox}:checked + & {
    background-color: #2196F3;
  }

  ${NavCheckbox}:checked + &:before {
    transform: translateX(26px);
  }
`;

export const NavLabelLight = styled.span`
  margin: 0 10px;
  color: #000;
`;

export const NavLabelNight = styled.span`
  margin: 0 10px;
  color: #fff;
`;
