import styled from "styled-components";

export const HeaderItemContainer = styled.div`
  display: inline-block;
  margin-right: 10px;

  input[type="radio"] {
    display: none;
  }

  label {
    display: inline-block;
    cursor: pointer;
    padding: 0px 15px;
    line-height: 34px;
    border: 1px solid #999;
    border-radius: 6px;
    user-select: none;
  }

  /* Checked */
  input[type="radio"]:checked + label {
    background: #ffe0a6;
  }

  /* Hover */
  label:hover {
    color: #666;
  }

  /* Disabled */
  input[type="radio"]:disabled + label {
    background: #efefef;
    color: #666;
  }
`;
