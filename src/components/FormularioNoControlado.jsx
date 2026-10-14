import { useRef, useState } from "react";
import { MousePointerClick, RotateCcw, UserRound, Mail, Calendar } from "lucide-react";

export default function FormularioNoControlado() {
  const nombreRef = useRef(null);
  const correoRef = useRef(null);
  const edadRef = useRef(null);

  const [datosConsultados, setDatosConsultados] = useState(null);
  const [errorEdad, setErrorEdad] = useState("");

  function consultarDatos() {
    const nombreVal = nombreRef.current.value.trim();
    const correoVal = correoRef.current.value.trim();
    const edadVal = edadRef.current.value;

    // Validación de edad
    if (edadVal !== "" && Number(edadVal) < 16) {
      setErrorEdad("La edad debe ser mayor o igual a 16.");
      setDatosConsultados(null);
      return;
    } else {
      setErrorEdad("");
    }

    if (!nombreVal) {
      setDatosConsultados("");
      return;
    }

    setDatosConsultados({
      nombre: nombreVal,
      correo: correoVal || "(sin correo)",
      edad: edadVal || "(no especificada)"
    });
  }

  function limpiar() {
    nombreRef.current.value = "";
    correoRef.current.value = "";
    edadRef.current.value = "";
    setDatosConsultados(null);
    setErrorEdad("");
    nombreRef.current.focus();
  }

  return (
    <article className="example-card ref-card">
      <div className="card-topline">
        <span className="method-icon ref-icon"><MousePointerClick size={20} /></span>
        <span className="method-label ref-label">FORMULARIO NO CONTROLADO</span>
      </div>

      <h3>Lee los datos al consultar</h3>
      <p className="card-description">Con <code>useRef()</code>, los campos conservan lo escrito. Leemos sus valores directamente del DOM cuando pulsas el botón.</p>

      {/* Nombre */}
      <label className="field-label" htmlFor="nombre-no-controlado">Nombre del estudiante</label>
      <div className="input-wrap ref-input-wrap">
        <UserRound size={18} />
        <input 
          id="nombre-no-controlado" 
          type="text" 
          ref={nombreRef} 
          placeholder="Escribe tu nombre" 
          autoComplete="off" 
          onKeyDown={e => { if (e.key === "Enter") consultarDatos(); }}
        />
      </div>

      {/* Correo */}
      <label className="field-label" htmlFor="correo-no-controlado" style={{ marginTop: "12px" }}>Correo electrónico</label>
      <div className="input-wrap ref-input-wrap">
        <Mail size={18} />
        <input 
          id="correo-no-controlado" 
          type="email" 
          ref={correoRef} 
          placeholder="estudiante@correo.com" 
          autoComplete="off" 
          onKeyDown={e => { if (e.key === "Enter") consultarDatos(); }}
        />
      </div>

      {/* Edad */}
      <label className="field-label" htmlFor="edad-no-controlado" style={{ marginTop: "12px" }}>Edad (Mínimo 16 años)</label>
      <div className="input-wrap ref-input-wrap">
        <Calendar size={18} />
        <input 
          id="edad-no-controlado" 
          type="number" 
          ref={edadRef} 
          placeholder="Ej. 18" 
          onKeyDown={e => { if (e.key === "Enter") consultarDatos(); }}
        />
      </div>
      {errorEdad && <span className="error-message" style={{ color: "#ef4444", fontSize: "0.85rem", marginTop: "4px", display: "block" }}>{errorEdad}</span>}

      <button className="consult-button" onClick={consultarDatos}>Consultar datos <span>→</span></button>

      {/* Panel de resultados */}
      <div className="result-panel" aria-live="polite">
        <div className="result-heading">Resultado de la consulta</div>
        {datosConsultados === null ? (
          <p className="result-placeholder">Escribe los datos y pulsa Consultar.</p>
        ) : datosConsultados === "" ? (
          <p className="result-error">El campo de nombre está vacío. Escribe un nombre e inténtalo de nuevo.</p>
        ) : (
          <div className="result-name">
            <p>Nombre: <strong>{datosConsultados.nombre}</strong></p>
            <p>Correo: <strong>{datosConsultados.correo}</strong></p>
            <p>Edad: <strong>{datosConsultados.edad}</strong></p>
          </div>
        )}
      </div>

      <div className="concept-note ref-note">
        <span>02</span>
        <p><strong>ref.current.value</strong> permite leer lo que hay escrito en cada campo del DOM cuando se ejecuta la consulta sin necesidad de renderizar en cada tecla.</p>
      </div>

      <div className="code-sample">
        <div className="code-title">FormularioNoControlado.jsx <span>JSX</span></div>
        <pre><code>
          <span className="syntax-purple">const</span> nombreRef = <span className="syntax-green">useRef</span>(<span className="syntax-purple">null</span>);{"\n\n"}
          <span className="syntax-purple">function</span> consultarDatos() {"{\n"} 
          &nbsp;&nbsp;<span className="syntax-purple">const</span> valor = nombreRef.current.value;{"\n"} 
          &nbsp;&nbsp;alert(<span className="syntax-orange">"Nombre: "</span> + valor);{"\n"}
          {"}"}{"\n\n"}
          <span className="syntax-muted">&lt;input</span> ref={"{"}nombreRef{"}"} <span className="syntax-muted">/&gt;</span>
        </code></pre>
      </div>

      <button className="text-button" onClick={limpiar}><RotateCcw size={14} /> Limpiar y volver a empezar</button>
    </article>
  );
}