import styled from "styled-components";

export const Button = styled.button`
  background: var(--cyan);
  padding: 1.24rem 4rem;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  transition: 0.5s ease-in-out;
  border: none;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  &:hover {
    transform: scale(0.935);
  }
`;