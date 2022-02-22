export default function Button({ size = 30, color, children }) {
  return (
    <a className={color}>
      {children}

      <style jsx>{`
        $red: #ff7b7b;
        $blue: #78aeff;
        $gray: #e8e8e8;

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
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          @include buttonHoverAndClick($gray);
        }

        .red {
          color: white !important;
          @include buttonHoverAndClick($red);
        }

        .blue {
          color: white !important;
          @include buttonHoverAndClick($blue);
        }
      `}</style>
    </a>
  );
}
