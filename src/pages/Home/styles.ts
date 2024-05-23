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

export const FooterContent = styled.footer`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: ${softexTheme.spacing.veryLarge};

  ${reposivityQuery.desktop} {
    div {
      display: flex;
      flex-direction: column;

      img {
        width: 300px;
      }
    }

    section {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      span {
        display: flex;
        justify-content: space-between;

        a {
          color: red;
          img {
            width: 40px;
          }
        }
      }

      a {
        text-decoration: none;
        color: black;
        font-weight: 500;
      }
    }

    article {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      height: 50%;
      margin: 0 10px;
    }
  }

  ${reposivityQuery.tablet} {
    div {
      display: flex;
      flex-direction: column;

      img {
        width: 300px;
      }
    }

    section {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      span {
        display: flex;
        justify-content: space-between;

        a {
          color: red;
          img {
            width: 40px;
          }
        }
      }

      a {
        text-decoration: none;
        color: black;
        font-weight: 500;
      }
    }

    article {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      height: 50%;
      margin: 0 10px;
    }
  }

  ${reposivityQuery.mobile} {
    div {
      display: flex;
      flex-direction: column;
      text-align: center;

      img {
        width: 280px;
      }
    }

    section {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: center;
      margin: ${softexTheme.spacing.extraLarge};
      width: 90%;

      h5 {
        font-size: 20px;
      }

      p{
        padding:${softexTheme.spacing.small};
        font-size: ${softexTheme.fontSizes.large};
      }

      span {
        display: flex;
        justify-content: space-around;
        padding: 15px;

        a {
          img {
            width: 50px;
          }
        }
      }

      a {
        text-decoration: none;
        color: black;
        font-weight: 500;
      }
    }

    article {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
    }
  }
`;
