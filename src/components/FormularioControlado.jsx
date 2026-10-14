import { useState } from "react";
import { Activity, RotateCcw, UserRound, Mail, Calendar } from "lucide-react";

export default function FormularioControlado() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [errorEdad, setErrorEdad] = useState("");

  function manejarCambioEdad(evento) {
    const valor = evento.target.value;
    setEdad(valor);
    if (valor !== "" && Number(valor) < 16) {
      setErrorEdad("La edad debe ser mayor o igual a 16.");
    } else {
      setErrorEdad("");
    }
  }

  function limpiar() {
    setNombre("");
    setCorreo("");
    setEdad("");
    setErrorEdad("");
  }

  function manejarSubmit(evento) {
    evento.preventDefault();
    if (nombre.trim() === "" || Number(edad) < 16) return;
    alert(`[useState] Registrado con éxito:\nNombre: ${nombre}\nCorreo: ${correo}\nEdad: ${edad}`);
  }

  const esInvalido = nombre.trim() === "" || Number(edad) < 16 || edad === "";

  return (
    <article className="example-card state-card">
      <div className="card-topline">
        <span className="method-icon state-icon"><Activity size={20}/></span>
        <span className="method-label state-label">FORMULARIO CONTROLADO (useState)</span>
      </div>
      
      <h3>React conoce cada cambio en tiempo real</h3>
      <p className="card-description">Con <code>useState()</code>, cada vez que escribes, actualizamos el estado y React refleja el cambio y las validaciones en pantalla.</p>
      
      <form onSubmit={manejarSubmit}>
        {/* Nombre */}
        <label className="field-label" htmlFor="nombre-controlado">Nombre del estudiante</label>
        <div className="input-wrap">
          <UserRound size={18}/>
          <input 
            id="nombre-controlado" 
            type="text" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            placeholder="Escribe tu nombre" 
            autoComplete="off"
          />
          {nombre && (
            <button type="button" className="clear-mini" onClick={limpiar} aria-label="Limpiar nombre">
              <RotateCcw size={15}/>
            </button>
          )}
        </div>

        {/* Correo */}
        <label className="field-label" htmlFor="correo-controlado" style={{ marginTop: "12px" }}>Correo electrónico</label>
        <div className="input-wrap">
          <Mail size={18}/>
          <input 
            id="correo-controlado" 
            type="email" 
            value={correo} 
            onChange={(e) => setCorreo(e.target.value)} 
            placeholder="estudiante@correo.com" 
            autoComplete="off"
          />
        </div>

        {/* Edad */}
        <label className="field-label" htmlFor="edad-controlado" style={{ marginTop: "12px" }}>Edad (Mínimo 16 años)</label>
        <div className="input-wrap">
          <Calendar size={18}/>
          <input 
            id="edad-controlado" 
            type="number" 
            value={edad} 
            onChange={manejarCambioEdad} 
            placeholder="Ej. 18" 
          />
        </div>
        {errorEdad && <span className="error-message" style={{ color: "#ef4444", fontSize: "0.85rem", marginTop: "4px", display: "block" }}>{errorEdad}</span>}

        {/* Panel en vivo */}
        <div className="live-panel" style={{ marginTop: "15px" }}>
          <div className="live-heading"><span className="live-indicator"/> Vista previa mientras escribes</div>
          <div className="live-value">
            <strong>Nombre:</strong> {nombre || "(vacío)"} <br/>
            <strong>Correo:</strong> {correo || "(vacío)"}
          </div>
          <div className="character-row"><span>Caracteres en nombre</span><strong>{nombre.length}</strong></div>
        </div>

        <button type="submit" disabled={esInvalido} style={{ marginTop: "15px", width: "100%", padding: "10px", background: esInvalido ? "#9ca3af" : "#4f46e5", color: "white", border: "none", borderRadius: "6px", cursor: esInvalido ? "not-allowed" : "pointer", fontWeight: "bold" }}>
          Registrar (useState)
        </button>
      </form>

      <div className="concept-note state-note" style={{ marginTop: "15px" }}>
        <span>01</span>
        <p><strong>value</strong> conecta el campo con el estado. <strong>onChange</strong> llama a <strong>setNombre()</strong> y demás funciones cuando escribes.</p>
      </div>
    </article>
  );
}