export default function Panel({ children }) {
  return (
    <div>
      {children}

      <style jsx>{`
        $red: #ff7b7b;
        $blue: #78aeff;
        $gray: #e8e8e8;
        $white: #fefefe;

        @mixin color($baseColor) {
          background-color: $baseColor;
          box-shadow: 0px 6px 1px desaturate(darken($baseColor, 30%), 30%);
        }

        .container {
          @include color($white);
          padding: 100px;
          border: 2px solid #aaa;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}
