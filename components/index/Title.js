export default function Title() {
  return (
    <div>
      <h1>
        <span className='red'>This</span>
        <span className='gray'> vs </span>
        <span className='blue'>That</span>
      </h1>
      <style jsx>{`
        $red: #ff7b7b;
        $blue: #78aeff;
        $gray: #e8e8e8;

        @mixin floatyColor($baseColor) {
        color: $baseColor;
        $dark: desaturate(darken($baseColor, 30%), 30%);
        text-shadow: 0px 1px $dark, 0px 2px $dark, 0px 3px $dark, 0px 4px $dark,
            0px 5px $dark, 0px 6px $dark, 0px 20px 5px #ddd;
        }

        h1 {
        font-size: 12vw;
        margin: 50px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        animation: float 5s ease-in-out infinite;
        .red {
            @include floatyColor($red);
        }
        .gray {
            @include floatyColor($gray);
        }
        .blue {
            @include floatyColor($blue);
        }
        }

        @keyframes float {
        0% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(0, 10px);
        }
        100% {
            transform: translate(0, 0);
        }
        }
    `}</style>
    </div>
  );
}
