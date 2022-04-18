import styled from "styled-components";
import colors from "../styles/styleVariables";

export const QrImage = styled.img`
  width: 100%;
  border-radius: 1rem;
`;

export const Box = styled.div`
  width: 87%;
  background-color: ${colors.secondary};
  max-width: 40rem;
  padding: 1.5rem 1.5rem 3.5rem 1.5rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Title = styled.h1`
  color: ${colors.primaryDark};
  font-size: 2.2rem;
  text-align: center;
  padding: 0 2rem;
`;

export const Subtitle = styled.p`
  color: ${colors.primary};
  font-weight: 400;
  text-align: center;
  padding: 0 2.7rem;
  font-size: 1.5rem;
`;
