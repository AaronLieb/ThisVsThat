import { red, blue, gray } from "/styles/colors.js";

export default function Button({ size = 30, color, children }) {
  return (
    <a className={color}>
      {children}

      {/* <style jsx>{`
        @mixin buttonHoverAndClick($baseColor) {
          background-color: $baseColor;
          box-shadow: 0px 6px 1px desaturate(darken($baseColor, 30%), 30%);
          &:hover {
            background-color: desaturate(darken($baseColor, 10%), 30%);
          }
          &:active {
            transform: translate(0px, 6px);
            box-shadow: 0px 1px 1px desaturate(darken($baseColor, 30%), 30%);
            transition: transform 0.08s, box-shadow 0.08s;
          }
        }

        a {
          cursor: pointer;
          padding: ${size}px;
          font-size: ${size}px;
          color: black !important;
          border-radius: ${size * 0.666}px;
          margin: 10px;
          text-align: center;
          justify-content: center;
          user-select: none;
          @include buttonHoverAndClick(${gray});
        }

        .red {
          color: white !important;
          @include buttonHoverAndClick(${red});
        }

        .blue {
          color: white !important;
          @include buttonHoverAndClick(${blue});
        }
      `}</style> */}
    </a>
  );
}
