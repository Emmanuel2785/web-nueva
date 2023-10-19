"use client";
import Link from "next/link";

import React, { useState } from "react";

export function NavMain() {
  // Paso 1: Modificar el estado inicial
  const [isStyleChanged, setIsStyleChanged] = useState(false);

  // Paso 2: Manejar el evento onClick
  const cambiarEstilo = () => {
    // Cambiar el estado a su opuesto
    setIsStyleChanged(!isStyleChanged);
  };

  return (
    <>
      <nav className="bottom-nav">
        <ul>
          <li className="estadistica" onClick={cambiarEstilo}>
            <Link href="#">ESTÁDISTICAS</Link>
          </li>
          <li>
            <Link href="#">DATOS ABIERTOS</Link>
          </li>
          <li>
            <Link href="#">PRENSA</Link>
          </li>
          <li>
            <Link href="#">CENSOS</Link>
          </li>
        </ul>
      </nav>
      <nav
        className="nav-container"
        style={{
          opacity: isStyleChanged ? 1 : 0,
          width: isStyleChanged ? "75%" : "1%",
        }}
      >
        <ul className="dropdown colum-1">
          <li className="titulo-li">
            <p>ECONOMIA</p>
          </li>
          <li>
            <Link href="Economia/agricultura">Agricultura,Ganaderia y Pesca</Link>
          </li>
          <li>
            <Link href="Economia/comercio">Comercio</Link>
          </li>
          <li>
            <Link href="#">Comercio Exterior</Link>
          </li>
          <li>
            <Link href="#">Construcción</Link>
          </li>
          <li>
            <Link href="#">Cuentas provinciales</Link>
          </li>
          <li>
            <Link href="#">Electricidad y gas</Link>
          </li>
          <li>
            <Link href="#">Industria</Link>
          </li>
        </ul>

        <ul className="dropdown column-2">
          <li>
            <p>POBLACION</p>
          </li>
          <li>
            <Link href="#">Proyecciones</Link>
          </li>
          <li>
            <Link href="#">Dinámica</Link>
          </li>
          <li>
            <Link href="#">Estructura</Link>
          </li>
          <li>
            <Link href="#">Migraciones</Link>
          </li>
          <li>
            <Link href="#">Distribución Espacial y Urbanización</Link>
          </li>
        </ul>

        <ul className="dropdown column-3">
          <li>
            <p>SOCIEDAD</p>
          </li>
          <li>
            <Link href="sociedad/condicionesvida">Condiciones de vida</Link>
          </li>
          <li>
            <Link href="#">Salud</Link>
          </li>
          <li>
            <Link href="#">Educación</Link>
          </li>
          <li>
            <Link href="#">Mercado Laboral</Link>
          </li>
          <li>
            <Link href="#">Genero</Link>
          </li>
          <li>
            <Link href="#">Medio ambiente</Link>
          </li>
          <li>
            <Link href="#">Vivienda y habitat</Link>
          </li>
        </ul>

        <ul className="dropdown column-4">
          <li>
            <p></p>
          </li>
          <li>
            <Link href="#">Seguridad y asistencia social</Link>
          </li>
          <li>
            <Link href="#">Niñez, adolescencia y juventud</Link>
          </li>
          <li>
            <Link href="#">Seguridad pública</Link>
          </li>
          <li>
            <Link href="#">Seguridad vial</Link>
          </li>
          <li>
            <Link href="#">Gasto de los hogares</Link>
          </li>
        </ul>

        <ul className="dropdown column-5">
          <li>
            <p>TERRITORIO</p>
          </li>
          <li>
            <Link href="#">Portal de mapas</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
