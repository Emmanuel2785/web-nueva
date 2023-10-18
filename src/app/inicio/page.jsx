import { Baner } from "../components/Baner";
import { NavMain } from "../components/NavMain";
import Image from "next/image";
import { Footer } from "../components/Footer";

export default function Inicio() {
  return (
    <>
      <Baner />
      <NavMain />

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "50px",
        }}
      >
        <Image
          src="/../images/foto1.jpg"
          padding={50}
          width={150}
          height={150}
          alt=""
        ></Image>
        <Image
          src="/../images/foto2.jpg"
          width={150}
          height={150}
          alt=""
        ></Image>
        <Image
          src="/../images/foto3.jpg"
          width={150}
          height={150}
          alt=""
        ></Image>
        <Image
          src="/../images/foto4.jpg"
          width={150}
          height={150}
          alt=""
        ></Image>
      </div>

      <main>
        <div className="container-1">
          <section className="titulo-1">
            <p className="titulo-p">ULTIMAS NOVEDADES</p>
          </section>
          <section className="ultimas-novedades">
            <div className="card">
              <div>
                <h2>CONVOCATORIA A AUTORES</h2>
                <p>
                  Se encuentra abierta la inscripción para que publiques tu
                  artículo en nuestra revista n 5. Tenés tiempo hasta el 30 de
                  junio 2023
                </p>
              </div>
              <a type="submit" value="VER INFORME →" className="boton-nota"></a>
            </div>
            <div className="card">
              <div>
                <h2>EXPORTACIONES</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus ab in provident quia perspiciatis minima at
                </p>
              </div>
              <a type="submit" value="VER INFORME →" className="boton-nota"></a>
            </div>
            <div className="card">
              <div>
                <h2>INDICADORES SINTETICOS DESAGREGADOS</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus ab in provident quia perspiciatis minima at
                </p>
              </div>
              <a type="submit" value="VER INFORME →" className="boton-nota"></a>
            </div>
            <div className="card">
              <div>
                <h2>INDICADORES SINTETICOS DESAGREGADOS</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus ab in provident quia perspiciatis minima at
                </p>
              </div>
              <a type="submit" value="VER INFORME →" className="boton-nota"></a>
            </div>
          </section>
        </div>

        <div className="container-2">
          <section className="titulo-2">
            <p className="titulo-p">CALENDARIO DE DIFUSIÓN</p>
          </section>

          <iframe className="iframe-calendar" src="/cal/index.html"></iframe>

          <section className="calendario-boton-genero">
            <a href="https://www.sipg.ec.gba.gob.ar" className="boton-genero">
              <Image
                className="genero"
                src="/../images/PLACA GENERO1-01.jpg"
                alt="boton-genero"
                width={885}
                height={100}
              ></Image>
            </a>
          </section>
        </div>
      </main>
      <section className="botones">
        <a className="item-a" href="publicaciones">
          PUBLICACIONES
        </a>
        <a className="item-b" href="#">
          DATOS BÁSICOS
        </a>
        <a className="item-d" href="#">
          VERIFICACION DE ENCUESTADORES
        </a>
        <a className="item-f" href="operativos">
          OPERATIVOS EN CAMPO
        </a>
        <a className="item-c" href="#">
          BIBLIOTECA DIGITAL
        </a>
        <a className="item-g" href="#">
          CENSOS
        </a>
        <a className="item-e" href="#">
          CONVOCATORIA ABIERTA A ENCUESTADORES
        </a>
        <a className="item-h" href="#">
          CONVOCATORIA A AUTORES
        </a>
      </section>
      <Footer />
    </>
  );
}
