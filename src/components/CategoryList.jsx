import "../components/CategoryList.css";
import { NavLink } from "react-router-dom";

    const MIS_RUTAS = [
        {
          path: "/",
          label: "Home",
        },
        {
          path: "/category/clasicos",
          label: "Clásicos",
        },
        {
          path: "/category/anime",
          label: "Anime",
        },
        {
          path: "/category/random",
          label: "Objetos Random",
        },
      ];
      
      function CategoryList() {
        return(
            <nav>
      <ul className="category--list">
        {MIS_RUTAS.map((ruta) => (
          <li key={ruta.path}>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to={ruta.path}
            >
              {ruta.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
    );
}

export default CategoryList;