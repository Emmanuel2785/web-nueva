import { NavMain } from "../components/NavMain";
import { Footer } from "../components/Footer";

export default function PUBLICACIONES() {
    return (
        <>  
        

            <NavMain/>
    
            <div class="title">
                <ul>
                <li>PUBLICACIONES</li>
                </ul>
            </div>
            <main>
                <div>
                    <div class="contenedor">
                        <div class="card-container">
                            <p>Revista</p>
                            <div class="card">
                                <img src="/images/img-revista.png" alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div class="mas-ediciones">
                        <a href="#">+ ediciones anteriores</a>
                    </div>
                </div>

                <div>
                    <div class="contenedor">
                        <div class="card-container">
                            <p>Anuarios</p>
                            <div class="card">
                                <img src="/../images/img-anuarios.png" alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div class="mas-ediciones">
                        <a href="#">+ ediciones anteriores</a>
                    </div>
                </div>

                <div>
                    <div class="contenedor">
                        <div class="card-container">
                            <p>Censos</p>
                            <div class="card">
                                <img src="/images/img-censos.png" alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div class="mas-ediciones">
                        <a href="#">+ ediciones anteriores</a>
                    </div>
                </div>
    
        
            </main>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />



            <Footer /> 
         </>
    )
}