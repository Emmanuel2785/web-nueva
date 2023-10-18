import Image from "next/image";
import imgDPE from "../../../public/images/imgDPE.jpg";

export function Baner() {
  return (
    <div
      style={{
        display: "grid",
        gridGap: "8px",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px,auto))",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "250px",
        }}
      >
        <Image
          alt="baner"
          src={imgDPE}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="titulo">
        Dirección Provincial de <br />
        <span>Estadística</span>
      </div>
    </div>
  );
}
