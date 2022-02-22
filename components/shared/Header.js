import Button from "./Button.js";

export default function Header() {
  return (
    <div>
      <Button color="blue" size="15">
        Login / Register
      </Button>
      <style jsx>{`
        div {
          width: 100%;
          display: flex;
          justify-content: right;
          min-width: 100%;
        }
      `}</style>
    </div>
  );
}
