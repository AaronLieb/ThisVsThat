import { white } from "/styles/colors.js";

export default function Panel({ children }) {
  return (
    <div>
      {children}

      {/* <style jsx>{`
        @mixin color($baseColor) {
          background-color: $baseColor;
          box-shadow: 0px 6px 1px desaturate(darken($baseColor, 30%), 30%);
        }

        .container {
          @include color(${white});
          padding: 100px;
          border: 2px solid #aaa;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
        }
      `}</style> */}
    </div>
  );
}
