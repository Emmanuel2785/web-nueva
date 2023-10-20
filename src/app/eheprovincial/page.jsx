import { NavMain } from "../components/NavMain";
import { Footer } from "../components/Footer";
import Link from "next/link";

export default function Comercio() {
    return (
        <>
            <NavMain />

            <div class="barra-ruta">
                <ul>
                    <li>SOCIEDAD</li>
                    <li>|</li>
                    <li>MERCADO LABORAL</li>
                </ul>
            </div>

            <div class="title-mercado-laboral">
                <h1>ENCUESTA DE HOGARES Y EMPLEO PROVINCIAL</h1>
                <div class="container-botones-mercado-laboral">
                    <Link href="#">EPH</Link>
                    <Link href="ehemunicipal">EHE - M</Link>
                    <Link href="#">EHE</Link>
                    <Link href="#">INDICADOR SINTÉTICO TASAS BÁSICAS</Link>
                    <Link href="#">INDICADORES DESAGREGADOS</Link>
                    <Link href="#">EPH URBANO</Link>
                </div>
            </div>

            <div class="main-mercado-laboral">
                <section class="info">
                    <p>La Encuesta de Hogares y Empleo (EHE) es un programa anual de la Dirección Provincial de Estadística que releva datos referidos a las características socioeconómicas de la población de la provincia de Buenos Aires. Comenzó a realizarse en el año 2014 y está pensada como un sistema integrado de indicadores sociales. Si bien es una encuesta de objetivos múltiples (características habitacionales, datos demográficos, educación, cobertura médica, migraciones, etc.) su propósito fundamental es relevar información referida al mercado laboral.
                    </p>
                </section>
                <div class="img-tableau">
                    <img src="/images/EHE_1er_trimestre_2021-01.jpg" alt="tableau"></img>
                </div>
                <section class="title-mision">
                    <p>METODOLOGÍA</p>
                </section>
                <div class="card-a">
                    <p>En el tercer trimestre de 2014 se realizó por primera vez la Encuesta de Hogares y Empleo (EHE) a nivel provincial. La misma recabó información en los 135 partidos de la provincia de Buenos Aires. La Dirección Provincial de Estadística (DPE) de la provincia de Buenos Aires desarrolló las siguientes tareas:</p>
                    <div class="boton-secundario">
                        <input type="submit" value="LEER MÁS" class="boton-secundario"></input>
                    </div>
                </div>
                <section class="title-mision">
                    <p>INFORMES</p>
                </section>
                <div class="subtitle">
                    <p>2021</p>
                </div>
                <div class="card-b">
                    <div class="container-card-b">
                        <p>Informe Final</p>
                        <div>
                            <img src="images/pdf.jpg" alt="pdf"></img>
                            <input type="submit" value="Descargar" class="boton-secundario"></input>

                        </div>
                    </div>
                    <div class="subtitle">
                        <p>2016</p>
                    </div>
                    <div class="container-card-b">
                        <p>Informe Final</p>
                        <div>
                            <img src="images/pdf.jpg" alt="pdf"></img>
                            <input type="submit" value="Descargar" class="boton-secundario"></input>

                        </div>
                    </div>
                    <div class="subtitle">
                        <p>2015</p>
                    </div>
                    <div class="container-card-b">
                        <p>Informe Final</p>
                        <div>
                            <img src="images/pdf.jpg" alt="pdf"></img>
                            <input type="submit" value="Descargar" class="boton-secundario"></input>

                        </div>
                    </div>
                    <div class="subtitle">
                        <p>2014</p>
                    </div>
                    <div class="container-card-b">
                        <p>Informe Final</p>
                        <div>
                            <img src="images/pdf.jpg" alt="pdf"></img>
                            <input type="submit" value="Descargar" class="boton-secundario"></input>

                        </div>
                    </div>
                </div>
            </div>
        
            <Footer />
        
        </>
    );
}