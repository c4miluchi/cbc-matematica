import { useState } from "react";

/* ============================
   LINKS A LOS APUNTES OFICIALES
   ============================ */

/* ==========================================================
   BASE DE DATOS DE EJERCICIOS
   ========================================================== */

const ejercicios = {
  1: {
    1: {
      titulo: "Sistemas numéricos",
      enunciado: "Decidir a qué sistema numérico pertenecen los siguientes números: √2, -2, π, 1/2",
      ayuda: "Números Naturales: N = {1, 2, 3, 4, 5 …}\nNúmeros Enteros: naturales, sus inversos aditivos y el cero Z = {…, –3, –2, –1, 0, 1, 2, 3, …}\nNúmeros Racionales: enteros y fraccionarios Q = {x = a/b ∶ a ∈ Z, b ∈ N}\nNúmeros Irracionales: números reales que no son racionales (√2,e,π)\nNúmeros Reales (R): números racionales e irracionales.",

      resolucion: `
      √2: número real que no es racional (parte decimal finita o periódica)
      -2: número natural negativo
      π: número real que no es racional (parte decimal finita o periódica)
      1/2: número fraccionario de la forma x = a/b

      Solución: Irracionales, Enteros, Irracionales, Racionales
      `,

      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "irracionales,enteros,irracionales,racionales" ||
          s === "irracional,entero,irracional,racional"
        );
      },
    },

    2: {
      titulo: "Conjuntos",
      enunciado: "Dado el conjunto A = {x ∈ R / x² = 4}, ¿cuáles son los elementos que pertenecen a A?",
      ayuda: "Los elementos que pertenecen a un conjunto son los x pertenecientes a R (o los x reales) tales que x se cumple cierta condición",

      resolucion: `
      x² = 4
      √x² = √4
      |x| = 2
      x = -2 & x = 2

      Solución: A = {-2, 2}
      `,

      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "a={-2,2}" ||
          s === "-2,2" ||
          s === "2,-2"
        );
      },
    },

    3: {
      titulo: "Intervalos",
      enunciado: "Decidir si los siguientes intervalos son abiertos, semiabiertos o cerrados:\n(1, 2); [1, 5); [8, 7]; (8, 9]",
      ayuda: "Abiertos: no contienen al extremo (con paréntesis) → (a, b) = (a, +∞) ∩ (–∞, b) = {x ∈ R : a < x < b}\nCerrados: contienen al extremo (con corchetes) → [a, b] = [a, +∞) ∩ (–∞, b] ={x ∈ R : a ≤ x ≤ b}\nSemiabiertos → [a, b) = [a, +∞) ∩ (–∞, b) = {x ∈ R : a ≤ x < b}",

      resolucion: `
      (1, 2): no contiene a ninguno de los extremos
      [1, 5): contienen a alguno de los extremos
      [8, 7]: contiene ambos extremos
      (8, 9]: contienen a alguno de los extremos

      Solución: Abierto, Semiabierto, Cerrado, Semiabierto
      `,
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "abierto,semiabierto,cerrado,semiabierto"
        );
      },
    },

    4: {
      titulo: "Operaciones con conjuntos",
      enunciado: "Sean A = {1, 2, 3}, B = {2, 4, 6} y C = {4, 5, 6}, encontrar A ∪ B, A ∩ B, A ∪ C, A ∩ C, B ∪ C y B ∩ C",
      ayuda: "La unión de A y B es el conjunto formado por todos los elementos que pertenecen a A o a B.\nNotación: A ∪ B, donde A ∪ B = {x/ x ∈ A o x ∈ B}\nNotemos que x pertenece a A ∪ B si x pertenece a A o x pertenece a B o a ambos conjuntos.\nLa intersección de A y B es el conjunto formado por todos los elementos que pertenecen a A y a B simultáneamente.\nNotación: A ∩ B, donde A ∩ B = {x/ x ∈ A y x ∈ B}",

      resolucion: `
      A ∪ B = {1, 2, 3, 4, 6}
      A ∩ B = {2}
      A ∪ C = {1, 2, 3, 4, 5, 6}
      A ∩ C = ∅
      B ∪ C = {2, 4, 5, 6}
      B ∩ C = {4, 6}
      `,
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "{1, 2, 3, 4, 6},{2},{1, 2, 3, 4, 5, 6},∅,{2, 4, 5, 6},{4, 6}" ||
          s === "{1, 2, 3, 4, 6}{2}{1, 2, 3, 4, 5, 6}∅{2, 4, 5, 6}{4, 6}" ||
          s === "{1, 2, 3, 4, 6},{2},{1, 2, 3, 4, 5, 6},vacío,{2, 4, 5, 6},{4, 6}" ||
          s === "{1, 2, 3, 4, 6},{2},{1, 2, 3, 4, 5, 6},vacio,{2, 4, 5, 6},{4, 6}" ||
          s === "{1, 2, 3, 4, 6}{2}{1, 2, 3, 4, 5, 6}vacío{2, 4, 5, 6}{4, 6}" ||
          s === "{1, 2, 3, 4, 6}{2}{1, 2, 3, 4, 5, 6}vacio{2, 4, 5, 6}{4, 6}"
        );
      },
    },

    5: {
      titulo: "Inecuaciones",
      enunciado: "Resolver la siguiente inecuación: 4 + 6x < 12 - 2x",
      ayuda: "Aplicar propiedades para intentar 'despejar' la variable x.",

      resolucion: `
      4 + 6x < 12 - 2x (sumamos -4 a ambos miembros)
      4 + 6x − 4 < 12 − 2x − 4
      6x < 8 − 2x (sumamos 2x a ambos miembros)
      6x + 2x < 8 − 2x + 2x
      8x < 8 (multiplicamos por 1/8 a ambos miembros)
      1/8 8x < 1/8 8
      x < 1

      Solución: (–∞, 1)
      `,
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "x<1" ||
          s === "(-infinito,1)" ||
          s === "(–∞,1)"
        );
      },
    },

    6: {
      titulo: "Regla de los signos",
      enunciado: "Escribir al conjunto A = {x ∈ R : (2x + 1)(3 − x) ≤ 0} como un intervalo o unión de intervalos.",
      ayuda: "Para que el producto sea menor o igual a 0, uno de los factores debe ser mayor o igual a 0 y el otro factor menor o igual a 0.",

      resolucion: `
      Primer caso: 2x + 1 ≥ 0 y 3 − x ≤ 0
      a) 2x + 1 ≥ 0 ⇔ 2x ≥ −1 ⇔ x ≥ −1/2 ⇔ x ∈ [−1/2, +∞)
      b) 3 − x ≤ 0 ⇔ 3 ≤ x ⇔ x ∈ [3, +∞)
      Intersección entre ambas: x ∈ [-1/2, +∞) ∩ [3, +∞) = [3, +∞)

      Segundo caso: 2x + 1 ≤ 0 y 3 − x ≥ 0
      a) 2x + 1 ≤ 0 ⇔ 2x ≤ −1 ⇔ x ≤ −1/2 ⇔ x ∈ (−∞, −1/2].
      b) 3 − x ≥ 0 ⇔ 3 ≥ x ⇔ x ∈ (−∞, 3]
      Intersección entre ambas: x ∈ (−∞, −1/2] ∩ (−∞, 3] = (−∞, −1/2]

      Unión de los dos casos: A = (−∞, −1/2] ∪ [3, +∞)

      Solución: A = (−∞, −1/2] ∪ [3, +∞)
      `,
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "a=(−∞,−1/2]∪[3, +∞)" ||
          s === "(−∞, −1/2]u[3, +∞)" 
        );
      },
    },

    7: {
      titulo: "Funciones",
      enunciado: "Dada la función f : (2, +∞) → R, f(x) = (x + 3)/(2x - 4) dar su dominio, codominio, imagen y preimagen de 1",
      ayuda: "Dominio: elementos del conjunto de partida (“x”) que se relacionan con un elemento del conjunto de llegada.\nCodominio: elementos del conjunto de llegada (“y”).\nImagen: resultados de aplicar la fórmula a los elementos del dominio de f.\nPreimagen: dado un valor y ∈ Im(f), es el conjunto de los valores de x ∈ Dom(f) tales que f(x) = y.",

      resolucion: `
      Para el dominio y codominio: 2x - 4 ≠ 0 → 2x ≠ 4 → x ≠ 2 pero recordemos que f : (2, +∞) → R
      Para la imagen: f(x) ⇔ (x + 3)/(2x - 4) = y ⇔ (x + 3) = y(2x - 4) ⇔ ... ⇔ x = (-4y - 3)/(1 - 2y)
      Debemos ver para que valores de y, el x que encontramos pertenece al intervalo (2, +∞):
      (-4y - 3)/(1 - 2y) > 2 ⇔ (-4y - 3)/(1 - 2y) - 2 > 0 ⇔ ... ⇔ y  > 1/2
      Para la preimagen de 1, hacemos (x + 3)/(2x - 4) = 1 → x = 7
      Solución: Dom(f) = (2, +∞), Codom(f) = R, Im(f) = (1/2, +∞), Preimagen: x = 7
      `,
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "(2, +∞),R,(1/2, +∞),7" ||
          s === "(2, +∞)R(1/2, +∞)7"  ||
          s === "dom=(2, +∞),cod=R,im=(1/2, +∞),x=7" ||
          s === "dom=(2, +∞)cod=Rim=(1/2, +∞)x=7"
        );
      },
    },

    8: {
      titulo: "Funciones 2",
      imagen: "/Users/gustavo/Desktop/cbc-matematica/public/imagenes/funciones_2.png",
      enunciado: "Dada la imagen dar su dominio, imagen, conjunto de ceros/positividad/negatividad/crecimiento/decrecimiento, máximos locales, mínimo local, mínimo absoluto",
      ayuda: "Dominio: elementos del conjunto de partida (“x”) que se relacionan con un elemento del conjunto de llegada.\nImagen: resultados de aplicar la fórmula a los elementos del dominio de f.\nConjunto de ceros: todos los x ∈ Dom(f) tales que f(x) = 0\nConjunto de positividad: todos los x ∈ Dom(f) por arriba del eje x\nConjunto de negatividad: todos los x ∈ Dom(f) por debajo del eje x\nConjunto de crecimiento (en x): todos los x ∈ Dom(f) tales que la función aumenta su valor\nConjunto de decrecimiento (en x): todos los x ∈ Dom(f) tales que la función disminuye su valor\nMáximos locales (en x): intervalo I ⊆ Dom(f) con x₀ ∈ I que verifica f(x₀) ≥ f(x) para todo x ∈ I\nMáximos absolutos (en x): f(x₀) ≥ f(x) para todo x ∈ Dom(f)\nMínimo local (en x): intervalo I ⊆ Dom(f) con x₀ ∈ I que verifica f(x₀) ≤ f(x) para todo x ∈ I\nMínimo absoluto (en x): f(x₀) ≤ f(x) para todo x ∈ Dom(f)",

      resolucion: `
      Solución:
      Dom f(x) = [–4; +∞)
      Im f(x) = [–2; +∞)
      C⁰ f(x) = {–2; 1; 4}
      C⁺ f(x) = [–4; –2) ∪ (4; +∞)
      C⁻ f(x) = (–2; 1) ∪ (1; 4)
      I↗ f(x) = (–1; 1) y (3; +∞)
      I↘ f(x) = (–4; –1) y (1; 3)
      MÁX f(x) = {–4; 1}
      MÍN f(x) = {3}
      MÍN f(x) = {–1}
      `,
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "[–4; +∞),[–2; +∞),{–2; 1; 4},[–4; –2)∪(4; +∞),(–2; 1)∪(1; 4),(–1; 1)y(3; +∞),(–4; –1)y(1; 3),{–4; 1},{3},{–1}" ||
          s === "[–4; +∞)[–2; +∞){–2; 1; 4}[–4; –2)∪(4; +∞)(–2; 1)∪(1; 4)(–1; 1)y(3; +∞)(–4; –1)y(1; 3){–4; 1}{3}{–1}" ||
          s === "dom=[–4; +∞),im=[–2; +∞),ceros={–2; 1; 4},positividad=[–4; –2)∪(4; +∞),negatividad=(–2; 1)∪(1; 4),crecimiento=(–1; 1)y(3; +∞),decrecimiento=(–4; –1)y(1; 3),maximolocal={–4; 1},minimolocal={3},minimoabsoluto={–1}" ||
          s === "dom=[–4; +∞)im=[–2; +∞)ceros={–2; 1; 4}positividad=[–4; –2)∪(4; +∞)negatividad=(–2; 1)∪(1; 4)crecimiento=(–1; 1)y(3; +∞)decrecimiento=(–4; –1)y(1; 3)maximolocal={–4; 1}minimolocal={3}minimoabsoluto={–1}"
        );
      },
    },

    9: {
      titulo: "Funciones inyectivas, sobreyectivas y biyectivas",
      imagen: "public/imagenes/inyectivas_sobreyectivas_biyectivas.png",
      enunciado: "Dada la imagen (f : R → R, f(x) = x²) definir si es inyectiva, sobreyectiva y/o biyectiva (sí o no)",
      ayuda: "Inyectiva: ∀ a, b ∈ Dom(f), si f(a) = f(b) entonces a = b ⇒ si a ≠ b entonces f(a) ≠ f(b)\nSobreyectiva: ∀ c ∈ Cod(f), existe al menos un a ∈ Dom(f) / f(a) = c → Im(f) = Cod(f)\nBiyectiva: es inyectiva y sobreyectiva",

      resolucion: `
      La función es f(x) = x²
      No es inyectiva porque a ≠ b y f(a) = f(b).
      No es sobreyectiva porque d ∈ Codom(f) no tiene preimagen (∄ a ∈ Dom(f) / f(a) = d).
      No es biyectiva porque no es inyectiva ni sobreyectiva.
      Solución: no, no, no
      `,
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "no,no,no" ||
          s === "nonono"
        );
      },
    },








  },

  2: {},
  3: {},
  4: {},
  5: {},
  6: {},
  7: {},
  8: {},
  9: {},
};


const linksAnalisis = {
  1: "https://drive.google.com/file/d/1k-WiyFo8ST4boAFPnyjUZ7yMQPeIhZoG/view?usp=sharing",
  2: "https://drive.google.com/file/d/1f25l4vsOm72NqOK-1Jkv-o0HVbB9bf18/view?usp=sharing",
  3: "https://drive.google.com/file/d/12bczHZLz4BDorTEkHYG1klM1NMRFV7ok/view?usp=sharing",
  4: "https://drive.google.com/file/d/1AzZU2lONXXvjTmTszkOnKyNQkTvK6lSK/view?usp=sharing",
  5: "https://drive.google.com/file/d/1M7oyySz-wc1ESX4v0aYmoonfxxGK52bc/view?usp=sharing",
  6: "https://drive.google.com/file/d/1ImpmTvrLhUXohxa8K-B5PtjFs8XyMuzg/view?usp=sharing",
  7: "https://drive.google.com/file/d/14sjy1ok-NibFMwPhy-YFKw81Pw1RchaZ/view?usp=sharing",
  8: "https://drive.google.com/file/d/1mQfPunQPpjaJPixQ6ezB2A24PD-cl21-/view?usp=sharing",
  9: "https://drive.google.com/file/d/1YQTXrwq_WtC2An_cnifDvt8xMxUT14jE/view?usp=sharing",
};

const linksAlgebra = {
  1: "https://drive.google.com/file/d/1fklz92IeLe5G9pRrEDvkKPRI9OWkwp7M/view?usp=sharing",
  2: "https://drive.google.com/file/d/1iYH25-VwDTotvOqTwWgxg-2HWl1vRSgd/view?usp=sharing",
  3: "https://drive.google.com/file/d/15lRNhWEsftVyNQ3gfUIxRHw7pWomKOWi/view?usp=sharing",
  4: "https://drive.google.com/file/d/1pe5QjTI2aakU6netFOl8ZdI_QIIgvr8_/view?usp=sharing",
  5: "https://drive.google.com/file/d/1U2TEQaW03jn0KmOyxrfQyV4bJjmwB_bc/view?usp=sharing",
  6: "https://drive.google.com/file/d/19V5CPkCKPkOKKINyGyfZK-folACXopsB/view?usp=sharing",
};

function App() {
  const [pantalla, setPantalla] = useState("inicio");
  const [tema, setTema] = useState("claro");
  const [unidadActual, setUnidadActual] = useState(1);
  const [ejercicioActual, setEjercicioActual] = useState(1);

  const theme = themes[tema];

  const pageStyle = {
    minHeight: "100vh",
    width: "100vw",
    background: theme.background,
    color: theme.text,
    display: "flex",
    flexDirection: "column",
  };

  const topBarStyle = {
    padding: 10,
    display: "flex",
    gap: 10,
    justifyContent: "center",
    borderBottom: `1px solid ${theme.border}`,
  };

  const contentStyle = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const innerStyle = {
    width: "100%",
    maxWidth: 900,
    padding: 24,
    textAlign: "center",
  };

  const buttonStyle = {
    display: "block",
    width: "100%",
    textAlign: "left",
    padding: 14,
    margin: "10px 0",
    fontSize: 17,
    cursor: "pointer",
    borderRadius: 10,
    border: "none",
    background: theme.button,
    color: theme.buttonText,
  };

  const bigButtonStyle = {
    ...buttonStyle,
    textAlign: "center",
    fontSize: 22,
    padding: 20,
  };

  const backStyle = {
    marginTop: 20,
    padding: 12,
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    background: theme.secondaryButton,
    color: theme.buttonText,
  };

  function TopBar() {
    return (
      <div style={topBarStyle}>
        <span>Tema:</span>
        {Object.keys(themes).map((t) => (
          <button
            key={t}
            onClick={() => setTema(t)}
            style={{
              padding: "6px 12px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              background: tema === t ? theme.accent : theme.button,
              color: theme.buttonText,
            }}
          >
            {themes[t].name}
          </button>
        ))}
      </div>
    );
  }

  function Inicio() {
    return (
      <div style={innerStyle}>
        <h1>📚 CBC</h1>
        <h2>¿Qué querés estudiar?</h2>

        <button
          style={bigButtonStyle}
          onClick={() => setPantalla("analisis")}
        >
          📘 Análisis Matemático
        </button>

        <button
          style={bigButtonStyle}
          onClick={() => setPantalla("algebra")}
        >
          📗 Álgebra
        </button>
      </div>
    );
  }

  function Analisis() {
    return (
      <div style={innerStyle}>
        <h1>📘 Análisis Matemático</h1>

        {analisisUnits.map((u, i) => (
          <button
            key={i}
            style={buttonStyle}
            onClick={() => {
              setUnidadActual(i + 1);
              setPantalla("unidad");
            }}
          >
            {u}
          </button>
        ))}

        <button style={backStyle} onClick={() => setPantalla("inicio")}>
          ⬅ Volver
        </button>
      </div>
    );
  }

  function Unidad() {
    return (
      <div style={innerStyle}>
        <h1>📘 Unidad {unidadActual}</h1>
        <h2>{analisisUnits[unidadActual - 1]}</h2>

        <button
          style={bigButtonStyle}
          onClick={() => window.open(linksAnalisis[unidadActual], "_blank")}
        >
          📘 Teoría (Apunte de la cátedra)
        </button>

        <button
          style={bigButtonStyle}
          onClick={() => setPantalla("ejercicios")}
        >
          ✏️ Ejercicios
        </button>

        <button
          style={bigButtonStyle}
          onClick={() => alert("Parcial: después")}
        >
          📝 Parcial
        </button>

        <button style={backStyle} onClick={() => setPantalla("analisis")}>
          ⬅ Volver
        </button>
      </div>
    );
  }

  function Ejercicios() {
  const lista = ejercicios[unidadActual] || {};

  return (
    <div style={innerStyle}>
      <h1>✏️ Ejercicios - Unidad {unidadActual}</h1>

      {Object.keys(lista).length === 0 && (
        <p>Todavía no hay ejercicios cargados para esta unidad.</p>
      )}

      {Object.keys(lista).map((n) => (
        <button
          key={n}
          style={buttonStyle}
          onClick={() => {
            setEjercicioActual(Number(n));
            setPantalla("ejercicio");
          }}
        >
          Ejercicio {n} - {lista[n].titulo}
        </button>
      ))}

      <button style={backStyle} onClick={() => setPantalla("unidad")}>
        ⬅ Volver
      </button>
    </div>
  );
}


  /* ==========================================================
     ================= EJERCICIO 1 GENERICO ====================
     ========================================================== */

  function Ejercicio() {
  const [respuesta, setRespuesta] = useState("");
  const [resultado, setResultado] = useState(null);
  const [mostrarAyuda, setMostrarAyuda] = useState(false);
  const [mostrarResolucion, setMostrarResolucion] = useState(false);

  const ej = ejercicios[unidadActual]?.[ejercicioActual];

  if (!ej) {
    return (
      <div style={innerStyle}>
        <p>Ejercicio no encontrado</p>
        <button style={backStyle} onClick={() => setPantalla("ejercicios")}>
          ⬅ Volver
        </button>
      </div>
    );
  }

  function verificar() {
    const ok = ej.verificar(respuesta);
    setResultado(ok);
  }

  return (
    <div style={innerStyle}>
      <h1>
        ✏️ Ejercicio {ejercicioActual} - Unidad {unidadActual}
      </h1>

      <h3>{ej.titulo}</h3>

      <p>{ej.enunciado}</p>

      <input
        value={respuesta}
        onChange={(e) => setRespuesta(e.target.value)}
        placeholder="Escribí tu respuesta"
        style={{ padding: 10, fontSize: 16, width: "80%" }}
      />

      <div style={{ marginTop: 10 }}>
        <button style={buttonStyle} onClick={verificar}>
          Verificar
        </button>
      </div>

      {resultado !== null && (
        <p style={{ fontSize: 18 }}>
          {resultado ? "✅ Correcto" : "❌ Incorrecto"}
        </p>
      )}

      <button
        style={buttonStyle}
        onClick={() => setMostrarAyuda(!mostrarAyuda)}
      >
        📘 Ayuda teórica
      </button>

      {mostrarAyuda && <pre>{ej.ayuda}</pre>}

      <button
        style={buttonStyle}
        onClick={() => setMostrarResolucion(!mostrarResolucion)}
      >
        🧩 Ver resolución
      </button>

      {mostrarResolucion && <pre>{ej.resolucion}</pre>}

      <button style={backStyle} onClick={() => setPantalla("ejercicios")}>
        ⬅ Volver
      </button>
    </div>
  );
}


  function Algebra() {
    return (
      <div style={innerStyle}>
        <h1>📗 Álgebra</h1>

        {algebraUnits.map((u, i) => (
          <button
            key={i}
            style={buttonStyle}
            onClick={() => {
              setUnidadActual(i + 1);
              window.open(linksAlgebra[i + 1], "_blank");
            }}
          >
            {u}
          </button>
        ))}

        <button style={backStyle} onClick={() => setPantalla("inicio")}>
          ⬅ Volver
        </button>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <TopBar />
      <div style={contentStyle}>
        {pantalla === "inicio" && <Inicio />}
        {pantalla === "analisis" && <Analisis />}
        {pantalla === "unidad" && <Unidad />}
        {pantalla === "ejercicios" && <Ejercicios />}
        {pantalla === "ejercicio" && <Ejercicio />}
        {pantalla === "algebra" && <Algebra />}
      </div>
    </div>
  );
}

/* =========================
   LISTAS DE UNIDADES
   ========================= */

const analisisUnits = [
  "Unidad 1 - La recta real y las funciones elementales",
  "Unidad 2 - Sucesiones",
  "Unidad 3 - Límites y continuidad",
  "Unidad 4 - Funciones (parte II)",
  "Unidad 5 - Derivadas",
  "Unidad 6 - Aplicaciones de la derivada",
  "Unidad 7 - Aproximación polinomial",
  "Unidad 8 - Integrales",
  "Unidad 9 - Series",
];

const algebraUnits = [
  "Unidad 1 - Matrices, sistemas de ecuaciones lineales y determinantes",
  "Unidad 2 - Números complejos y polinomios",
  "Unidad 3 - Geometría en R²",
  "Unidad 4 - Transformaciones del plano",
  "Unidad 5 - Geometría en R³",
  "Unidad 6 - Transformaciones del espacio",
];

const themes = {
  claro: {
    name: "☀️",
    background: "#f2f2f2",
    text: "#000000",
    button: "#e0e0e0",
    secondaryButton: "#cccccc",
    buttonText: "#000000",
    border: "#cccccc",
    accent: "#bbbbbb",
  },
  oscuro: {
    name: "🌑",
    background: "#121212",
    text: "#ffffff",
    button: "#2c2c2c",
    secondaryButton: "#3a3a3a",
    buttonText: "#ffffff",
    border: "#333333",
    accent: "#444444",
  },
  /* ==========================================================
  azul: {
    name: "💙",
    background:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
    text: "#000000",
    button: "#e6f4ff",
    secondaryButton: "#cce9ff",
    buttonText: "#000000",
    border: "#99d6ff",
    accent: "#b3e5ff",
  },
  violeta: {
    name: "💜",
    background:
      "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
    text: "#000000",
    button: "#f0e9ff",
    secondaryButton: "#e0d4ff",
    buttonText: "#000000",
    border: "#d0c0ff",
    accent: "#e6ddff",
  },
  verde: {
    name: "💚",
    background:
      "linear-gradient(90deg, rgba(81,8,105,1) 0%, rgba(87,199,133,1) 50%, rgba(237,221,83,1) 100%)",
    text: "#000000",
    button: "#eef9e6",
    secondaryButton: "#dff2cc",
    buttonText: "#000000",
    border: "#cce6b3",
    accent: "#e6f5d6",
  },
  ========================================================== */
};

export default App;
