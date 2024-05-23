import styled from "styled-components";

const StyledInfoButton = styled.a`
  background-color: transparent;
  border: 2px solid #000;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 0.05em;
  overflow: visible;
  padding: 10px;
  margin: 10px 0;
  position: relative;
  text-decoration: none;
  text-transform: none;
  transition: all 0.3s ease-in-out;
  font-size: 12px;
  width: 45%;
  margin: 7px 5px;

  &::before {
    content: " ";
    width: 1.5625rem;
    height: 2px;
    background: black;
    top: 50%;
    left: 1.5em;
    position: absolute;
    transform: translateY(-50%);
    transform-origin: center;
    transition: background 0.3s linear, width 0.3s linear;
  }

  .text {
    font-size: 1.125em;
    padding-left: 2em;
    display: block;
    text-align: left;
    transition: all 0.3s ease-in-out;
    text-transform: uppercase;
    text-decoration: none;
    color: black;
  }

  &:hover {
    color: white;
    background: black;
  }

  &:hover::before {
    width: 0.9375rem;
    background: white;
  }

  &:hover .text {
    color: white;
    padding-left: 1.5em;
  }

  &:hover .top-key {
    left: -2px;
    width: 0px;
  }

  &:hover .bottom-key-1,
  &:hover .bottom-key-2 {
    right: 0;
    width: 0;
  }

  div {
    display: flex;
    justify-content: center;
  }
`;

interface InfoButtonProps {
  urlTo?: string;
}

const InfoButton = ({ urlTo }: InfoButtonProps) => {
  return (
    <StyledInfoButton href={urlTo}>
      <div className="infoButtonContainer">
        <span className="text">Saiba Mais</span>
      </div>
    </StyledInfoButton>
  );
};

export default InfoButton;
