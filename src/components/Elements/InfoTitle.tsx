import styled from "styled-components";
import { softexTheme } from "../../css/themes/softexTheme";
import { reposivityQuery } from "../../css/themes/reposivityQuery";
import { HiCursorClick } from "react-icons/hi";

export const StyledInfoTitle = styled.p`
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;

  color: ${softexTheme.textColors.secondary};
  padding: ${softexTheme.spacing.medium};
  font-weight: ${softexTheme.fontWeights.bold};

  ${reposivityQuery.desktop} {
    font-size: ${softexTheme.fontSizes.veryLarge};
    padding: ${softexTheme.spacing.large};
    margin: ${softexTheme.spacing.veryLarge};
    strong {
      color: ${softexTheme.colors.primary};
    }
  }

  ${reposivityQuery.tablet} {
    font-size: ${softexTheme.fontSizes.large};
    margin: ${softexTheme.spacing.large};
    strong {
      color: ${softexTheme.colors.primary};
    }
  }

  ${reposivityQuery.mobile} {
    justify-content: center;
    font-size: ${softexTheme.fontSizes.medium};
    margin: ${softexTheme.spacing.large};
    strong {
      color: ${softexTheme.colors.primary};
    }
  }
`;

const InfoTitle = () => {
  return (
    <>
      <StyledInfoTitle >
        Fique Por <strong>Dentro</strong>
        <HiCursorClick size={40} color={softexTheme.colors.quaternary} />
      </StyledInfoTitle>
    </>
  );
};

export default InfoTitle;
