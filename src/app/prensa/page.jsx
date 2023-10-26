import { NavMain } from "../components/NavMain";
import { Footer } from "../components/Footer";

export default function Prensa() {
    return (
        <>
            <NavMain />

            <div class="main-title">
                <ul>
                    <li>PRENSA</li>
                </ul>
            </div>
            <main class= "mainc">
                <div class="contenedorc">
                    <div class="tituloc">
                        <p>DATOS PRODUCTIVOS DE LA PROVINCIA DE BUENOS AIRES - Datos Agosto 2023</p>
                    </div>
                    <div class="info">
                        <p>En esta sección la Dirección Provincial de Estadística presta un conjunto de series de datos referidos a la actividad productiva de determinados sectores industriales de la Provincia de Buenos Aires
                            
                            El objetivo es poner a disposición información, tanto de origen secundario a partir de fuentes provinciales o nacionales como producida
                            a partir de relevamientos propios de esta Dirección, dirigida a los usuarios del sistema estadístico para el seguimiento del desempeño de
                            estas actividades.
                        </p>
                    </div>
                    <div class="boton-flecha">
                        <input type="submit" value="VER INFORME →" class="boton-nota"></input>
                    </div>
                </div>
                <div class="contenedorc">
                    <div class="tituloc">
                        <p>INDICADOR SINTETICO DE LA INDUSTRIA MANUFACTURERA DE LA PROVINCIA DE BUENOS AIRES - Datos Mayo 2023</p>
                    </div>
                    <div class="info">
                        <p>En mayo, el ISIM-PBA evidenció un alza de 2,0% respecto a igual mes del año anterior, en tanto que acumuló una suba de 4,0% en los
                            primeros cinco meses de 2023.
                            
                            Con respecto al mes de abril, el índice desestacionalizado registró una merma de 2,1%.
                        </p>
                    </div>
                    <div class="boton-flecha">
                        <input type="submit" value="VER INFORME →" class="boton-nota"></input>
                    </div>
                </div>
                <div class="contenedorc">
                    <div class="tituloc">
                        <p>VENTAS DE SUPERMERCADOS DE LA PROVINCIA DE BUENOS AIRES - Datos junio 2023</p>
                    </div>
                    <div class="info">
                        <p>
                            Durante el mes de junio las ventas totales a precios corrientes en supermercados de la provincia de Buenos Aires totalizaron 143.332,6
                            millones de pesos, lo que significó un aumento de 114,5% respecto de igual mes del año 2022.
                            
                            A nivel nacional las estimaciones indicaron un total de 425.783,3 millones de pesos, lo que implicó un incremento de 117,1% respecto de
                            igual mes del año previo
                            
                            La provincia de Buenos Aires participó en el 33,7% de las ventas corrientes totalizadas durante el mes de junio de 2023.
                        </p>
                    </div>
                    <div class="boton-flecha">
                        <input type="submit" value="VER INFORME →" class="boton-nota"></input>
                    </div>
                </div>
            </main>





            <Footer />
        
        </>
    );
}