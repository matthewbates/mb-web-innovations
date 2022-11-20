import styled from "styled-components";

export const CarouselContentSection = styled.section`
  .active {
    /* display: inline-block; */
  }

  .inactive {
    display: none;
  }
`;

export const CarouselContentContainer = styled.div`
  height: auto;
  max-width: 100%;
  position: relative;

  .slides {
    height: 50vh;
    width: 100%;
    position: relative;
  }

  .active {
    display: inline-block;
  }

  .inactive {
    display: none;
  }
`;

export const CarouselContentImg = styled.img`
  object-fit: contain;
  text-align: center;
  height: 150px;
  width: 150px;
  margin-left: 45%;
  margin-right: 55%;
`;

export const CarouselContentText = styled.p`
  width: 100%;
  height: 100%;
  text-align: center;
  top: 40%;
  z-index: 10;
  font-size: 18px;
  color: #fff;
  margin-top: 2rem;
`;
