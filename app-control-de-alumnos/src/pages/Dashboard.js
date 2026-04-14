import React from "react";

function Dashboard() {
    return (
        <div>
            <h1>Panel Principal</h1>
      <p>Bienvenido, Profesor</p>

      <div>

        <div>
          <h2>Alumnos</h2>
          <p>Ver la lista de todos los alumnos</p>
          <button>Ver Alumnos</button>
        </div>

        <div>
          <h2>Calificaciones</h2>
          <p>Registrar y editar calificaciones</p>
          <button>Ver Calificaciones</button>
        </div>

        <div>
          <h2>Asistencia</h2>
          <p>Registrar asistencia diaria</p>
          <button>Ver Asistencia</button>
        </div>

      </div>
    </div>
    )
}

export default Dashboard;