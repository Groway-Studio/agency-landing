import * as React from "react";
import "../sass/component/_form.scss";
import fbIlus from "./../assets/fb.svg";
import linkedinIlus from "./../assets/linkedin.svg";
import igIlus from "./../assets/instagram.svg";
import ButtonComponent from "./shared/button";

import { Form, FormGroup, Label, Input,TextArea } from "./shared/forms";

export default function FormContact() {
  return (
    <React.Fragment>
      <div className="formComponent">
        <section className="container">
          <hr />
          <article className="talkto">
            <aside>
              <h1>Conversemos</h1>
              <p>
                <b>Groway</b> cuenta con excelentes profesionales con años construyendo
                productos y servicios digitales que pueden convertirse en el
                brazo tecnológico que tu empresa necesita para enfocarse en lo
                que mejor saben hacer: <b>crear.</b>
              </p>
              <br />
              <p>
                Dejanos tus datos y nuestro equipo se pondrá en contacto contigo
                para poder hacer realidad esta alianza.
              </p>
              <div className="socials">
                <a
                  target="_blank"
                  href="https://www.instagram.com/groway.studio/"
                >
                  <img src={igIlus} alt="Instagram Groway" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/growaystudio/"
                >
                  <img src={linkedinIlus} alt="Linkedin Groway" />
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/groway.studio"
                >
                  <img src={fbIlus} alt="Facebook Groway" />
                </a>
              </div>
            </aside>
            <aside>
              <Form>
                <FormGroup>
                  <Label htmlFor="label">¿Cuál es tu nombre?*</Label>
                  <Input id="label" />
                </FormGroup>
                <FormGroup>
                  <Label>¿Cuál es tu el sitio web de tu empresa?</Label>
                  <Input />
                </FormGroup>
                <FormGroup>
                  <Label>Tu mensaje</Label>
                  <TextArea />
                </FormGroup>
                <FormGroup>
                  <Label>¿Cómo nos contactamos contigo?*</Label>
                  <Input />
                </FormGroup>
                <ButtonComponent label="Enviar" />
              </Form>

             
            </aside>
          </article>
        </section>
      </div>
    </React.Fragment>
  );
}
