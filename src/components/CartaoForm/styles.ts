import styled from "styled-components";
import { cores } from "../../styles";

export const Form = styled.form`
  display: grid;
  gap: 16px;
  max-width: 460px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: ${cores.laranjaEscuro};
  margin-bottom: 6px;
`;

export const Input = styled.input<{ $error?: boolean }>`
  width: 100%;
  height: 44px;
  border-radius: 8px;
  padding: 0 12px;
  border: 2px solid ${({ $error }) => ($error ? "#e53935" : "#ddd")};
  outline: none;
  font-size: 16px;
  background: #fff;
  color: #111;

  &:focus {
    border-color: ${({ $error }) => ($error ? "#e53935" : cores.laranjaEscuro)};
    box-shadow: 0 0 0 3px rgba(228, 91, 104, 0.2);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const Help = styled.small`
  display: block;
  margin-top: 6px;
  color: #6b7280;
`;

export const ErrorText = styled.small`
  display: block;
  margin-top: 6px;
  color: #e53935;
  font-weight: 700;
`;

export const Button = styled.button`
  height: 44px;
  border-radius: 8px;
  border: 0;
  font-weight: 800;
  cursor: pointer;
  background: ${cores.laranjaClaro};
  color: ${cores.laranjaEscuro};

  &:hover {
    filter: brightness(0.98);
  }

  &:disabled {
    filter: grayscale(0.4);
    opacity: 0.7;
    cursor: not-allowed;
  }
`;