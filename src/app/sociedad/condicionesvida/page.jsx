import { NavMain } from "../../components/NavMain";
import { Footer } from "../../components/Footer";

export default function CONDICIONES() {
    return (
        <>
            <NavMain />
        
            <div class="barra-ruta">
                <ul>
                    <li>SOCIEDAD</li>
                    <li>|</li>
                    <li>CONDICIONES DE VIDA</li>
                </ul>

            </div>    
                
            <div class="title-mercado-laboral">
                <h1>Distribucion del Ingreso</h1>
                <div class="container-botones-condiciones-vida">
                    <a href="#">INDICADOR CONDICIONES DE VIDA. TOTAL 6 AGLOMERADOS</a>
                    <a href="#">NECESIDADES BASICAS INSATISFECHAS</a>
                    <a href="#">INCIDENCIA DE LA POBREZA Y LA INDIGENCIA</a>
                    <a href="#">DISTRIBUCION DEL INGRESO</a>
                </div>
            </div>

            <div class="main-mercado-laboral">
                <section class="info">
                    <p>Este apartado tiene como objetivo proporcionar información actualizada sobre la distribución del ingreso y medidas de desigualdad de la población de la
                        provincia de Buenos Aires, a partir del análisis de la Encuesta Permanente a Hogares (EPH). Se presentan las principales escalas de distribución del ingreso por
                        deciles, y series de indicadores de desigualdad (brecha de ingresos y coeficiente de Gini). Los datos fueron construidos utilizando las bases de microdatos de la
                        EPH, un programa nacional de producción sistemática y permanente de indicadores sociales que lleva a cabo el Instituto Nacional de Estadística y Censos
                        (INDEC) conjuntamente con las Direcciones Provinciales de Estadística (DPE). La EPH abarca 31 aglomerados urbanos del país y los resultados son publicados en
                        forma trimestral brindando información a nivel de cada aglomerado y del total nacional de los aglomerados. Los datos relacionados con la Provincia son los
                        resultantes de los relevamientos realizados en los 6 aglomerados urbanos correspondientes.
                    </p>
                </section>
            
                <div class="img-tableau">
                    <img src="/../images/tableau.jpg" alt="tableau"></img>
                </div> 

                <section class="title-mision">
                     <p>METODOLOGÍA</p>
                </section>


                <div class="card-a">
                    <p>El análisis de la Distribución del Ingreso es el estudio de cómo está repartido el producto entre los integrantes de un área específica. La manera usual de evaluar la desigualdad...</p>
                    <div class="boton-secundario">
                        <input type="submit" value="LEER MÁS" class="boton-secundario"></input> 
                    </div>
                </div>


                <section class="title-mision">
                    <p>SERIES HISTÓRICAS</p>
                </section>

                <div class="card-b">
                    <div class="container-card-b">
                        <p>Cuadros Estadísticos - 4to trimestre de 2022</p>
                        <div >
                            <img src="/../images/xls.jpg" alt="tableau"></img>
                            <input type="submit" value="Descargar" class="boton-secundario"></input>
                        </div>
                    </div>
                </div>   

                <section class="title-mision">
                    <p>INFORMES TÉCNICOS</p>
                </section>             
            
                <div class="card-b">
                    <div class="container-card-b">
                        <p>Distribucion del ingreso - 4to trimestre de 2022</p> 
                        <div>
                            <img src="/../images/pdf.jpg" alt="tableau"></img>
                            <input type="submit" value="Descargar" class="boton-secundario"></input>
                        </div>
                    </div>

                </div>

                <div class="card-b">
                    <div class="container-card-b">
                        <p>Distribucion del ingreso - 3er trimestre de 2022</p>
                        <div>
                            <img src="/../images/pdf.jpg" alt="pdf"></img>
                            <input type="submit" value="Descargar" class="boton-secundario"></input>
                        </div>
                    </div>
                </div>

                <div class="card-b">
                    <div class="container-card-b">
                        <p>Distribucion del ingreso - 2do trimestre de 2022</p>
                        <div>
                            <img src="/../images/pdf.jpg" alt="pdf"></img>
                            <input type="submit" value="Descargar" class="boton-secundario"></input>
                        </div>
                    </div>
                </div>
            </div> 
            
            <Footer />
        </>

    );
}
    