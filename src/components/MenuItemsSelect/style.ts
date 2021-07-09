import styled from "styled-components";

export const Select = styled.select`
  position: relative;
  min-width: 200px;
  padding: 7px 40px 7px 12px;
  border: 1px solid #e8eaed;
  border-radius: 6px;
  background: white;
  box-shadow: 0 1px 3px -2px #9098a9;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  transition: all 150ms ease;
  color: #5a667f;

  option {
    color: #223254;
    &[value=""][disabled] {
      display: none;
    }

    &:focus {
      outline: none;
      border-color: #0077ff;
      box-shadow: 0 0 0 2px rgba(#0077ff, 0.2);
    }

    &:hover + svg {
      stroke: #0077ff;
    }
  }
`;
