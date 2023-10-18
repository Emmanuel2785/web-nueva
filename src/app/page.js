import Inicio from "./inicio/page";

export default function homePage() {
  return <Inicio />;
}

/*
async function loadNav() {
  connectDB();
  const nav_db = await Nav_db.find();
  return nav_db;
}

async function homePage() {
  const nav_db = await loadNav();
  return (
    <div>
      {nav_db.map((nav) => (
        <div key={nav._id}>
          <h3>{nav.label}</h3>
          <p>{nav.link}</p>
        </div>
      ))}
    </div>
  );
}*/
