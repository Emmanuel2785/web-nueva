import { NavMain } from "../components/NavMain";
import { Footer } from "../components/Footer";
import Link from "next/link";

export default function Agricolas() {
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
                <h1>ESTADÍSTICAS AGRÍCOLAS</h1>
                <div class="container-botones-agricultura">
                    <div class="fila-a">
                        <a href="#">INFORME AGROPECUARIO</a>
                        <a href="#">ESTADÍSTICAS AGRÍCOLAS</a>
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
                    <p>En esta sección se muestran datos referentes a los principales cultivos de la provincia. Los datos refieren a superficies sembradas, cosechadas y volúmenes de producción, por campaña agrícola y desagregados a nivel municipio.
                    </p>
                </section>
                <section class="titulos">
                    <p>Producción de principales granos. Provincia de Buenos Aires.</p>
                    
                    <p>Campañas 2012/13 a 2020/2021</p>
                </section>
                

                <div className="contenedor1">
                    <section >
                        <iframe 
                        className="tableau"
                        src="https://public.tableau.com/views/Estad_Agro_PBA/Resumen?:embed=y&:embed_code_version=3&:loadOrderID=0&:display_count=y&:origin=viz_share_link"
                        ></iframe>
                     </section>
                </div>
                
                <section class="title-mision">
                    <p>Cuadros Estadísticos</p>
                </section>
                <div class="subtitle">
                    <p>Campañas 2012/13 a 2020/2021</p>
                </div>
                <div class="card-b">
                    <div class="container-card-b">
                        <p>Superficie sembrada con Cebada Cervecera</p>
                        <div >
                            <img src="images/xls.jpg" alt="xls"></img>
                            <input type="submit" value="Descargar" class="boton-secundario"></input>
                        </div>
                    </div>
                </div>
                <div class="card-b">
                    <div class="container-card-b">
                        <p>Superficie sembrada con Girasol</p>
                        <div >
                            <img src="images/xls.jpg" alt="xls"></img>
                            <input type="submit" value="Descargar" class="boton-secundario"></input>
                        </div>
                    </div>
                </div>
                <div class="card-b">
                    <div class="container-card-b">
                        <p>Superficie sembrada con Maíz</p>
                        <div >
                            <img src="images/xls.jpg" alt="xls"></img>
                            <input type="submit" value="Descargar" class="boton-secundario"></input>
                        </div>
                    </div>
                </div>
                <div class="card-b">
                    <div class="container-card-b">
                        <p>Superficie sembrada con Trigo</p>
                        <div >
                            <img src="images/xls.jpg" alt="xls"></img>
                            <input type="submit" value="Descargar" class="boton-secundario"></input>
                        </div>
                    </div>
                </div>
                <div class="card-b">
                    <div class="container-card-b">
                        <p>Superficie sembrada con Soja</p>
                        <div >
                            <img src="images/xls.jpg" alt="xls"></img>
                            <input type="submit" value="Descargar" class="boton-secundario"></input>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        
        </>
    );
}