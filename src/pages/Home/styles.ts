import styled from "styled-components";
import { softexTheme } from "../../css/themes/softexTheme";
import { reposivityQuery } from "../../css/themes/reposivityQuery";

export const InfoHomeContent = styled.section`
  display: flex;
  justify-content: space-between;
  letter-spacing: 2px;
  gap: 20px;
  color: ${softexTheme.textColors.secondary};

  span {
    p {
      letter-spacing: 4px;
      font-size: ${softexTheme.fontSizes.veryLarge};
      strong {
        font-family: "Ubuntu", sans-serif;
        color: ${softexTheme.colors.primary};
        font-weight: 900;
      }
    }
  }

  img {
    box-shadow: ${softexTheme.boxShadow.large};
  }

  ${reposivityQuery.desktop} {
    font-size: ${softexTheme.fontSizes.veryLarge};
    padding: ${softexTheme.spacing.veryLarge};
    margin: ${softexTheme.spacing.veryLarge};

    div {
      display: flex;
      flex-direction: column;
      line-height: 2;
    }

    img {
      max-width: 450px;
      max-height: 500px;
      border-radius: 20px;
    }
  }

  ${reposivityQuery.tablet} {
    flex-direction: column;
    text-align: justify;
    margin: ${softexTheme.spacing.large};

    div {
      line-height: 1.5;
    }

    img {
      border-radius: 20px;
      max-height: 500px;
      width: ${softexTheme.imageSizes.full};
    }
  }

  ${reposivityQuery.mobile} {
    flex-direction: column;
    text-align: justify;
    font-size: ${softexTheme.fontSizes.large};
    padding: ${softexTheme.spacing.large};
    margin: ${softexTheme.spacing.large};

    img {
      width: ${softexTheme.imageSizes.full};
      border-radius: 20px;
    }

    span {
      margin: ${softexTheme.spacing.small};
      text-align: center;
    }
  }
`;
