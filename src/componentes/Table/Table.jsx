import "./Table.css";
import apiCategories from "../../services/categoryService";
import { useEffect, useState } from "react";

function Table() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    apiCategories.getAll().then((res) => {
      setCategories(res);
    });
  }, []);

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <div className="outlineTable">
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Editar</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 &&
            categories.map((category, i) => (
              <tr key={i}>
                <td>{category.nombre}</td>
                <td>{category.desc}</td>
                <td>
                  <button onClick={() => console.log(category.id)}>
                    Editar
                  </button>
                </td>
                <td>
                  <button onClick={() => console.log(category.id)}>
                    Remover
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
