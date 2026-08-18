import { portfolioData } from "../data/portfolioData";

export default function Footer() {

  return (
    <footer className="footer">

      <div>

        <strong>
          {portfolioData.name}
        </strong>

        <span>
          © {new Date().getFullYear()}
        </span>

      </div>

      <p>
        Designed & built with React.
      </p>

    </footer>
  );
}