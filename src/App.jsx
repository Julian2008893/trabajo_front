import { useState } from "react";
import { Code2, Sparkles, CheckCircle2, BookOpen, Terminal } from "lucide-react";
import FormularioControlado from "./components/FormularioControlado.jsx";
import FormularioNoControlado from "./components/FormularioNoControlado.jsx";

export default function App() {
  const [vista, setVista] = useState("comparar");
  return <main className="app-shell">
    <nav className="topbar">
      <a className="brand" href="#inicio"><span className="brand-mark"><Code2 size={21}/></span><span>React<span className="brand-light">Forms Lab</span></span></a>
      <span className="topbar-tag"><span className="status-dot"/> Proyecto didáctico</span>
    </nav>
    <section className="hero" id="inicio">
      <div className="hero-copy">
        <span className="eyebrow"><Sparkles size={15}/> APRENDER HACIENDO</span>
        <h1>Dos formas de trabajar con <span>formularios en React.</span></h1>
        <p>Compara <code>useState()</code> y <code>useRef()</code> con ejemplos interactivos. Escribe, prueba y observa qué ocurre en cada caso.</p>
        <div className="hero-pills"><span><CheckCircle2 size={15}/> React + Vite</span><span><CheckCircle2 size={15}/> Ejemplos interactivos</span><span><CheckCircle2 size={15}/> Código explicado</span></div>
      </div>
      <div className="hero-visual"><div className="orb orb-one"/><div className="orb orb-two"/>
        <div className="code-window"><div className="window-head"><span/><span/><span/><b>Formulario.jsx</b></div>
          <div className="code-lines">
            <p><i>01</i> <em>const</em> [nombre, <strong>setNombre</strong>] =</p><p><i>02</i> &nbsp; <b>useState</b>(<mark>""</mark>);</p><p><i>03</i></p>
            <p><i>04</i> <em>function</em> <strong>manejarCambio</strong>(evento) {"{"}</p><p><i>05</i> &nbsp; <strong>setNombre</strong>(evento.target.value);</p><p><i>06</i> {"}"}</p>
          </div><div className="window-footer"><Terminal size={15}/> Código claro. Conceptos sólidos.</div>
        </div><div className="floating-chip chip-top"><span className="chip-dot state-dot"/> useState</div><div className="floating-chip chip-bottom"><span className="chip-dot ref-dot"/> useRef</div>
      </div>
    </section>
    <section className="lesson-intro"><div><span className="section-kicker">LABORATORIO PRÁCTICO</span><h2>Explora los dos ejemplos</h2><p>Prueba cada formulario. La diferencia está en cómo React obtiene y muestra el dato.</p></div>
      <div className="tabs" role="tablist" aria-label="Vista de formularios">
        <button className={vista==="comparar"?"tab active":"tab"} onClick={()=>setVista("comparar")} role="tab" aria-selected={vista==="comparar"}>Comparar</button>
        <button className={vista==="state"?"tab active":"tab"} onClick={()=>setVista("state")} role="tab" aria-selected={vista==="state"}>useState()</button>
        <button className={vista==="ref"?"tab active":"tab"} onClick={()=>setVista("ref")} role="tab" aria-selected={vista==="ref"}>useRef()</button>
      </div>
    </section>
    <section className={vista!=="comparar"?"examples single-example":"examples"}>
      {(vista==="comparar"||vista==="state")&&<FormularioControlado/>}
      {(vista==="comparar"||vista==="ref")&&<FormularioNoControlado/>}
    </section>
    <section className="takeaway"><div className="takeaway-icon"><BookOpen size={23}/></div><div><h3>¿Cuál es la diferencia clave?</h3><p><strong>useState()</strong> guarda el valor en el estado y permite que la interfaz se actualice al escribir. <strong>useRef()</strong> conserva una referencia al campo y permite leer su valor cuando lo necesitas, por ejemplo, al pulsar Consultar.</p></div></section>
    <footer className="footer"><span>React Forms Lab</span><span>Hecho para aprender · React + Vite</span></footer>
  </main>;
}