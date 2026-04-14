import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">

      <div className="text-center mb-5">
        <h1>🎓 Control de Alumnos</h1>
        <p className="text-muted">Bienvenido, Profesor</p>
      </div>

      <div className="row justify-content-center g-4">

        <div className="col-md-4">
          <div className="card text-center shadow p-4">
            <div style={{ fontSize: "50px" }}></div>
            <h4 className="mt-3">Alumnos</h4>
            <p className="text-muted">Ver, agregar y editar alumnos</p>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/alumnos")}
            >
              Ver Alumnos
            </button>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center shadow p-4">
            <div style={{ fontSize: "50px" }}></div>
            <h4 className="mt-3">Calificaciones</h4>
            <p className="text-muted">Registrar y editar calificaciones</p>
            <button
              className="btn btn-success"
              onClick={() => navigate("/calificaciones")}
            >
              Ver Calificaciones
            </button>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center shadow p-4">
            <div style={{ fontSize: "50px" }}></div>
            <h4 className="mt-3">Asistencia</h4>
            <p className="text-muted">Registrar asistencia diaria</p>
            <button
              className="btn btn-warning"
              onClick={() => navigate("/asistencia")}
            >
              Ver Asistencia
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;