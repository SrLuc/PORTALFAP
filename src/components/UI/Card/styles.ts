import styled from "styled-components";
import { softexTheme } from "../../../css/themes/softexTheme";
import { reposivityQuery } from "../../../css/themes/reposivityQuery";

export const StyledCard = styled.section`
  box-shadow: ${softexTheme.boxShadow.medium};
  //padding: ${softexTheme.spacing.medium};
  margin: ${softexTheme.spacing.medium} 0;
  border-radius: ${softexTheme.borderRadius.veryLarge};
  //background-color: ${softexTheme.colors.primary};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1,
  p {
    padding: ${softexTheme.spacing.medium};
  }

  ${reposivityQuery.desktop} {
    width: 30%;
  }

  ${reposivityQuery.tablet} {
    width: 85%;
  }

  ${reposivityQuery.mobile} {
    width: 75%;
  }

  img {
    border-radius: ${softexTheme.borderRadius.veryLarge}
      ${softexTheme.borderRadius.veryLarge} 0 0;
    box-shadow: ${softexTheme.boxShadow.medium};

    ${reposivityQuery.desktop} {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }

    ${reposivityQuery.mobile} {
      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
      }
    }
  }
`;
