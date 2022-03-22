import * as React from "react";
import "./../sass/component/_hero.scss";
import fbIlus from "./../assets/fb.svg";
import linkedinIlus from "./../assets/linkedin.svg";
import igIlus from "./../assets/instagram.svg";
import ilusHero from "./../assets/ilus-hero.svg";
import ButtonComponent from "./shared/button";

export default function Hero() {
  return (
    <React.Fragment>
      <div className={"heroComponent"}>
        <div className="contentHero">
          <div><h1>Enfocate </h1> <span> en crear ...</span> </div>
          <div><h1>Nosotros </h1> <span> en el código</span></div>
          <p>
            Si tienes una agencia de marketing o publicidad
            con un equipo increíblemente <b>creativo</b>, pero con dificultades 
            para construir un <b>staff de tecnología</b> que esté a la medida de tus ideas...
          </p>

          <div className="cta-socials">
            <ButtonComponent label="Conversemos" />
            <div>
              <a target="_blank" rel="noopener" href="https://www.instagram.com/groway.studio/"><img src={igIlus} alt="Instagram Groway" /></a>
              <a target="_blank" rel="noopener" href="https://www.linkedin.com/company/growaystudio/"><img src={linkedinIlus} alt="Linkedin Groway" /></a>
              <a target="_blank" rel="noopener" href="https://www.facebook.com/groway.studio"><img src={fbIlus} alt="Facebook Groway" /></a>
            </div>
          </div>
        </div>
        <img src={ilusHero} className="ilusHero" alt="" />
      </div>
    </React.Fragment>
  );
}
