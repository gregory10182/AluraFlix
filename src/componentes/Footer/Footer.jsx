import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <img className="logo" src="src\assets\Logo.png" alt="" />
      <p className="text">
        Site hecho en <span className="textChallenge">#challenge</span> de{" "}
        <span className="textAlura">Alura Latam</span>
      </p>
    </section>
  );
}

export default Footer;
