import { NavMain } from "../components/NavMain";
import { Footer } from "../components/Footer";

export default function Agricultura() {
    return (
        <>
            <NavMain />
            
            <div class="barra-ruta">
                <ul>
                    <li>ECONOMÍA</li>
                    <li>|</li>
                    <li>AGRICULTURA, GANADERÍA Y PESCA</li>
                </ul>
            </div>
            <div class="title-agricultura">
                <h1>INFORMES AGROPECUARIOS</h1>
                <div class="container-botones-agricultura">
                    <div class="fila-a">
                        <a href="#">INFORME AGROPECUARIO</a>
                        <a href="agricolas">ESTADÍSTICAS AGRÍCOLAS</a>
                        <a href="#">ESTADÍSTICAS GANADERAS</a>
                    </div>
                    <div class="fila-b">
                        <a href="#">ESTADÍSTICAS DE PESCA</a>
                        <a href="#">SERVICIOS AGROPECUARIOS</a>
                    </div>
                </div>
            </div>
            <div class="main-mercado-laboral">
                <section class="info">
                    <p>El Informe Agropecuario de la provincia de Buenos Aires, desarrollado por la Dirección Provincial de Estadística, surge en respuesta a la necesidad de contar con datos coyunturales sobre una de las actividades más importantes que se desarrollan en la provincia. El informe, de divulgación trimestral, muestra aspectos relevantes de la producción, mercados y comercio exterior de la actividad agropecuaria bonaerense.
                    </p>
                </section>
                <div class="img-tableau">
                    <img src="images/INFORMEAGROPECUARIO-PBA 2T 2023 - INFOGRAFIA.jpg.jpg" alt="tableau" width="80%"></img>
                </div> 
               
                <section class="title-mision">
                    <p>INFORMES AGROPECUARIOS</p>
                </section>
                <div class="sub-subtitle">
                    <p>En este informe se presentan los aspectos relevantes de la coyuntura agropecuaria bonaerense</p>
                </div>
                <div class="card-b">
                    <div class="container-card-b">
                        <p>Informe Agropecuario PBA - 2do Trim. 2023</p>
                        <div>
                            <img src="images/pdf.jpg" alt="pdf"></img>
                            <input type="submit" value="Descargar" class="boton-secundario"></input>

                            </div>
                    </div>
                </div>
                <div class="card-b">
                    <div class="container-card-b">
                        <p>Informe Agropecuario PBA - 1er Trim. 2023</p>
                        <div>
                            <img src="images/pdf.jpg" alt="pdf"></img>
                            <input type="submit" value="Descargar" class="boton-secundario"></input>

                            </div>
                    </div>
                </div>
                <div class="card-b">
                    <div class="container-card-b">
                        <p>Informe Agropecuario PBA - 4to Trim. 2022</p>
                        <div>
                            <img src="images/pdf.jpg" alt="pdf"></img>
                            <input type="submit" value="Descargar" class="boton-secundario"></input>

                            </div>
                    </div>
                </div>
                <div class="card-b">
                    <div class="container-card-b">
                        <p>Informe Agropecuario PBA - 3er Trim. 2022</p>
                        <div>
                            <img src="images/pdf.jpg" alt="pdf"></img>
                            <input type="submit" value="Descargar" class="boton-secundario"></input>

                            </div>
                    </div>
                </div>
                <div class="card-b">
                    <div class="container-card-b">
                        <p>Informe Agropecuario PBA - 2do Trim. 2022</p>
                        <div>
                            <img src="images/pdf.jpg" alt="pdf"></img>
                            <input type="submit" value="Descargar" class="boton-secundario"></input>

                            </div>
                    </div>
                </div>
                <div class="card-b">
                    <div class="container-card-b">
                        <p>Informe Agropecuario PBA - 1er Trim. 2022</p>
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