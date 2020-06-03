import styled from "@emotion/styled";

const SliderWrapper = styled("div")`
  .slick-list {
    overflow: ${props => (props.overflow ? "visible" : "hidden")};
  }
  /* Slider */
  .slick-slider {
    margin-bottom: 8px;

    position: relative;

    display: block;
    box-sizing: border-box;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;

    display: block;
    /* overflow: hidden; */

    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: none;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  /* Dots */
  .slick-dotted.slick-slider {
    margin-bottom: 30px;
  }

  .slick-dots {
    position: absolute;
    bottom: -20px;

    display: block;

    width: 100%;
    padding: 0;
    margin: 0;

    list-style: none;

    text-align: center;
  }
  .slick-dots li {
    position: relative;
    display: inline-block;
    width: 9px;
    height: 9px;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
    transition: width 0.3s ease-in-out;
  }
  .slick-dots li button {
    font-size: 0;
    line-height: 0;

    display: block;

    width: 9px;
    height: 9px;
    padding: 5px;

    cursor: pointer;

    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
  }
  .slick-dots li button:hover,
  .slick-dots li button:focus {
    outline: none;
  }
  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
    opacity: 1;
  }
  .slick-dots li button:before {
    font-family: "slick";
    font-size: 6px;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 9px;
    height: 9px;

    content: "•";
    text-align: center;

    opacity: 0.25;
    color: black;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: black;
  }

  /* Custom Slick Dots */

  .ft-slick__dots--custom {
    height: 9px;
    width: 9px;
    border:1px solid #9b9b9b;
    border-radius: 50%;
  }

  .slick-dots li {
    margin: 0 5px;
    transition: width 0.3s ease-in-out;
  }

  .slick-dots .slick-active {
    transition: width 0.3s ease-in-out;
  }

  .slick-dots .slick-active .ft-slick__dots--custom {
    background-color: #9b9b9b;
  }
`;

export default SliderWrapper;
