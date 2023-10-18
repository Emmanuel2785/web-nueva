import Image from "next/image"

export function Cabecera () {
  return (
    <header>
      <Image className="header-img" width={700} height={150} alt="" src="/../images/header.jpg" />
    </header>
  )
}

