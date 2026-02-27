import { useState } from "react";
import "./App.css";

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
  "Unidad 1 - Matrices y sistemas",
  "Unidad 2 - Complejos",
  "Unidad 3 - Geometría en R2",
  "Unidad 4 - Transformaciones",
  "Unidad 5 - Geometría en R3",
  "Unidad 6 - Transformaciones del espacio",
];

/* =========================
   LINKS TEORÍA
   ========================= */

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

const linksParcialesAnalisis = {
  1: {
    1: "https://drive.google.com/file/d/1vtfBxZr4eiXRYSITr90wC-cWWD1G0O7n/view?usp=share_link",
    2: "https://drive.google.com/file/d/1zpz0WFyztcy-CrdN8ROcmTRFuUlDrdd0/view?usp=share_link",
    3: "https://drive.google.com/file/d/179BAlyz7spmAXokxe6kOlwOkj00-t6D4/view?usp=share_link",
    4: "https://drive.google.com/file/d/17xQG2Vy3pDD4oBlvWi9qFRWGA3QfgpI2/view?usp=share_link",
  },
  2: {
    1: "PEGÁ_A==",
    2: "PEGÁ_ACÁ_LINK_PARCIAL1_MODELO2",
  },
  3: {
    1: "PEGÁ_ACÁ_LINK_PARCIAL1_MODELO1",
    2: "PEGÁ_ACÁ_LINK_PARCIAL1_MODELO2",
  },
};

const linksParcialesAlgebra = {
  1: {
    1: "PEGÁ_ACÁ_LINK_PARCIAL1_MODELO1",
    2: "PEGÁ_ACÁ_LINK_PARCIAL1_MODELO2",
  },
  2: {
    1: "PEGÁ_ACÁ_LINK_PARCIAL1_MODELO1",
    2: "PEGÁ_ACÁ_LINK_PARCIAL1_MODELO2",
  },
  3: {
    1: "PEGÁ_ACÁ_LINK_PARCIAL1_MODELO1",
    2: "PEGÁ_ACÁ_LINK_PARCIAL1_MODELO2",
  },
};

/* =========================
   BASES DE DATOS
   ========================= */

const ejerciciosAnalisis = {
  1: {
    1: {
      titulo: "Sistemas numéricos",
      enunciado: "Decidir a qué sistema numérico pertenecen los siguientes números: √2, -2, π, 1/2",
      ayuda: "Números Naturales: N = {1, 2, 3, 4, 5 …}\nNúmeros Enteros: naturales, sus inversos aditivos y el cero Z = {…, –3, –2, –1, 0, 1, 2, 3, …}\nNúmeros Racionales: enteros y fraccionarios Q = {x = a/b ∶ a ∈ Z, b ∈ N}\nNúmeros Irracionales: números reales que no son racionales (√2, e, π)\nNúmeros Reales (R): números racionales e irracionales.",

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
      imagen: "/imagenes/funciones_2.png",
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
      imagen: "/imagenes/inyectivas_sobreyectivas_biyectivas.png",
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

    10: {
      titulo: "Composición",
      enunciado: "Dadas f(x) = 2x + 1 y g(x) = x², encontrar (g o f)(x) y (f o g)(x)",
      ayuda: "Sean f : A → B y g : B → C dos funciones, la composición de g y f, que notamos g o f y se lee “g compuesta con f” es la función h = g o f : A → C definida como: (g o f)(x) = g(f(x)) → Im(f(x)) ⊆ Dom(g(x)).\nTambién (f o g)(x) = f(g(x)) → Im(g(x)) ⊆ Dom(f(x)).",

      resolucion: `
      (g o f)(x) = g(f(x)) = (f(x))² = (2x + 1)²
      (f o g)(x) = f(g(x)) = 2(g(x)) + 1 = 2x² + 1
      Solución:
      (g o f)(x) = (2x + 1)²
      (f o g)(x) = 2x² + 1
      `,
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "(2x+1)²,2x²+1" ||
          s === "(2x+1)²2x²+1" ||
          s === "(gof)(x)=(2x+1)²,(fog)(x)=2x²+1" ||
          s === "(gof)(x)=(2x+1)²(fog)(x)=2x²+1"
        );
      },
    },

    11: {
      titulo: "Función inversa",
      enunciado: "Dada f(x) = 2x + 1, encontrar (si existe) su inversa",
      ayuda: "Sea f(x) una función biyectiva, existe la posibilidad de definir una función f⁻¹(x) que realiza el camino inverso → f : A → B y f–1 : B → A → a f⁻¹ se la llama inversa",

      resolucion: `
      f(x) = 2x + 1 ¿f⁻¹(x)? → planteo f(f⁻¹(x)) = x → 2 f⁻¹(x) + 1 = x → despejando: 2 f⁻¹(x) = x – 1 → f⁻¹(x) = (x-1)/2
      Solución:
      ff⁻¹(x) = (x-1)/2

      Notar que Dom(f(x)) = Im(f⁻¹(x)) y Dom(f⁻¹(x)) = Im(f(x))
      `,
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "(x-1)/2"
        );
      },
    },

    12: {
      titulo: "Funciones lineales",
      enunciado: "1) Hallar la función lineal que pasa por A = (2; –2) y tiene m = –1\n2)Hallar la función lineal que pasa por A = (2; –2) y B = (8; 0)\nGraficar f(x) = 2x – 4",
      ayuda: "Forma: f : R → R, f(x) = mx + b → m = pendiente (dirección e inclinación de la recta), b = ordenada al origen\nDominio: R\nGráfica: línea recta\nPara cualquier x₁, x₂ ∈ Dom(f) con x₁ ≠ x₂ la pendiente se puede calcular como m = (y₂ – y₁) / (x₂ – x₁)",

      resolucion: `
      1) f(x) = mx + b → como m = -1 → f(x) = -x + b → pasa por (2, -2), entonces f(2) = -2 → b = 0
      2) m = (y₂ – y₁) / (x₂ – x₁) → m = (0 – (–2)) / (8 – 2) → m = 1/3 → f(x) = (1/3)x + b → –2 = (1/3)·2 + b → b = -8/3
      
      Solución:
      1) f(x) = –x
      2) f(x) = (1/3)x – 8/3

      `,
      resolucionImagen: "/imagenes/funciones_lineales.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "f(x)=–x,f(x)=(1/3)x–8/3" ||
          s === "f(x)=–xf(x)=(1/3)x–8/3" ||
          s === "–x,(1/3)x–8/3" ||
          s === "–x(1/3)x–8/3"
        );
      },
    },

    13: {
      titulo: "Función módulo",
      enunciado: "¿Cómo será el grafico de x? ¿Y el de | x | + 1?",
      ayuda: "Módulo: valor absoluto de un número.\nQueda definido por la regla | x | = x si x ≥ 0 y | x | = -x si x < 0\nEl módulo nos indica la distancia de 0 a x, o sea, d(0, x) = | x |",

      resolucion: `
      | x + 1 | → correr al gráfico de | x | una unidad hacia la izquierda
      | x | + 1 → correr al gráfico de | x | 1 unidad hacia arriba
      Solución:
      `,
      resolucionImagen: ["/imagenes/1.png", "/imagenes/2.png"],
      
    },

    14: {
      titulo: "Valor absoluto como distancia",
      enunciado: "Resolver la inecuación |x − 4| ≤ 5",
      ayuda: "Pensar al valor absoluto como distancia",

      resolucion: `
      x − 4| ≤ 5 ⇐⇒ d(x, 4) ≤ 5 → podemos marcarlo en la recta (nos paramos en 4 y nos movemos 5 unidades a la derecha y 5 a la izquierda.)
      
      Analíticamente:
      |x − 4| ≤ 5 ⇔ − 5 ≤ x − 4 ≤ 5 ⇔ − 5 + 4 ≤ x − 4 + 4 ≤ 5 + 4 ⇔ − 1 ≤ x ≤ 9

      Solución:
      I = [-1, 9]
      `,
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "[-1,9]"
        );
      },
    },

    15: {
      titulo: "Funciones cuadráticas",
      enunciado: "Dada la siguiente función: f(x) = x² – 8x + 16, hallar vértice, raíces (si las tuviera), forma canónica y factorizada (si se pudiera).",
      ayuda: "Forma:\nPolinómica: f : R → R, f(x) = ax² + bx + c con a, b, c ∈ R, a ≠ 0\nCanónica: f : R → R, f(x) = a . (x – xᵥ)² + yᵥ donde V = (xᵥ, yᵥ) es el vértice de la parábola.\nLa forma canónica puede obtenerse a partir de la polinómica completando cuadrados ((α + β)² = α² + 2αβ + β²).\nFactorizada: f : R → R, f(x) = a . (x – x₁) . (x – x₂)\nLa recta x = xᵥ se llama eje de simetría de la parábola → xᵥ = (-b)/2a",

      resolucion: `
      Forma factorizada: buscamos dos números que multiplicados den 16 y sumen -8 → -4 y -4 → f(x) = (x – 4)(x – 4) = (x – 4)²
      Raíces: resolvemos (x – 4)² = 0 → x = 4 (es doble)
      Forma canónica: ya la tenemos, (x – 4)² → xᵥ = 4 yᵥ = 0
      Vértice: (4, 0)

      Solución:
      Vértice = (4, 0)
      Raíces = 2 (doble)
      Forma canónica = (x – 4)²
      Forma factorizada = (x – 4)²
      `,
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "vertice=(4, 0),raices=2,formacanonica=(x – 4)^2,formafactorizada=(x – 4)^2" ||
          s === "vertice=(4, 0)raices=2,2formacanonica=(x – 4)^2formafactorizada=(x – 4)^2" ||
          s === "vertice=(4, 0)raices=22formacanonica=(x – 4)^2formafactorizada=(x – 4)^2" ||
          s === "(4, 0),2,(x – 4)^2,(x – 4)^2" ||
          s === "(4, 0),2,2,(x – 4)^2,(x – 4)^2" ||
          s === "(4, 0)2(x – 4)^2(x – 4)^2" ||
          s === "(4, 0)22(x – 4)^2(x – 4)^2"
        );
      },
    },

    16: {
      titulo: "Raíz cuadrada",
      enunciado: "Hallar el dominio de: f(x) = √((4-2x)) – √(x+3)",
      ayuda: "Vimos que f : R → R, f(x) = x² no es inyectiva ni sobreyectiva.\nSin embargo, si restringimos el dominio y tomamos el codominio igual a la imagen / g : [0, +∞) → [0, +∞), g(x) = x² → es biyectiva y existe su inversa llamada función raíz cuadrada:\ng⁻¹ : [0, +∞) → [0, +∞), g⁻¹(x) = √x (x ≥ 0) y su gráfico es simétrico al gráfico de g(x) = x² respecto a la recta y = x.",

      resolucion: `
      4 – 2x ≥ 0 → –2x ≥ –4 → x ≤ 2
      x + 3 ≥ 0 → x ≥ -3
      Entonces: –3 ≤ x ≤ 2

      Solución: Dom(f) = [-3, 2]

      `,
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "[-3,2]"
        );
      },
    },

    17: {
      titulo: "Funciones polinómicas",
      enunciado: "Graficar f(x) = (x – 3)³",
      ayuda: "Forma: f : R → R, f(x) = aₙxⁿ + ... + a₁x + a₀  (aₙ = coeficiente principal; a₀ = coeficiente independiente)",
      resolucionImagen: "/imagenes/3.png",
      
    },
  },

  2: {
    1: {
      titulo: "Sucesiones",
      enunciado: "Escribir los primeros 5 termino de an = n^2",
      ayuda: "Una sucesión es un conjunto ordenado de infinitos elementos (números) que se pueden “etiquetar” con n ∈ N.\nEjemplo: an = 1/n → a1 = 1/1 = 1; a2 = 1/2; a3 = 1/3; ...\nEntonces an = 1/n (término general) quiere decir {1; 1/2; ...; 1/n; ...}.",

      resolucion: `
      
      Solución:
      an = n^2 → b1 = 1; b2 = 4; b3 = 8; b4 = 16; b5 = 32; ...

      `,
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "1,4,8,16,32" ||
          s === "1481632"
        );
      },
    },

    2: {
      titulo: "Límites",
      enunciado: "calcular el límite de an = (4 – 3/n) . (2 + 5/n^2)",
      ayuda: "Sea an una sucesión real, diremos que un número real L es su límite si para todo ε > 0, existe\nun número natural n0 a partir del cual los valores de la sucesion distan de L en menos de ε.",
      resolucionImagen: "/imagenes/4.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "8"
        );
      },
    },
    3: {
      titulo: "Límites 2",
      enunciado: "calcular el límite de bn = (3n^2 - n) / (5 + n + n^2)",
      ayuda: "Sea an una sucesión real, diremos que un número real L es su límite si para todo ε > 0, existe\nun número natural n0 a partir del cual los valores de la sucesion distan de L en menos de ε.",
      resolucionImagen: "/imagenes/5.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "3"
        );
      },
    },
    4: {
      titulo: "Límites e Indeterminaciones",
      enunciado: "calcular el límite de la sucesión cn = (4n^3 + n^2) / (5n^2 + 3n)",
      ayuda: "Sea an una sucesión real, diremos que un número real L es su límite si para todo ε > 0, existe\nun número natural n0 a partir del cual los valores de la sucesion distan de L en menos de ε.",
      resolucionImagen: "/imagenes/6.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "+inf" ||
          s === "+infinito" ||
          s === "+∞"
        );
      },
    },
    5: {
      titulo: "Teorema del Sándwich",
      imagen: "/imagenes/teorema_sandwich.png",
      ayuda: "Si las sucesiones an , bn y cn verifican an ≤ bn ≤ cn ∀ n > n0 y además lim an = lim cn = L → lim bn = L",
      resolucionImagen: "/imagenes/7.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "0"
        );
      },
    },
    6: {
      titulo: "Cero por acotado",
      imagen: "/imagenes/cero_por_acotado.png",
      ayuda: "Si an = bn . cn con lim bn = 0 y cn acotada, entonces lim an = 0",
      resolucionImagen: "/imagenes/8.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "0"
        );
      },
    },
    7: {
      titulo: "Criterio de D'Alembert",
      imagen: "/imagenes/d_alembert.png",
      ayudaImagen: "/imagenes/d_alembert_ayuda.png",
      resolucionImagen: "/imagenes/9.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "0"
        );
      },
    },
    8: {
      titulo: "Criterio de Cauchy",
      imagen: "/imagenes/cauchy.png",
      ayudaImagen: "/imagenes/cauchy_ayuda.png",
      resolucionImagen: "/imagenes/10.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "+inf" ||
          s === "+infinito" ||
          s === "+∞"
        );
      },
    },
  },

  3: {
    1: {
      titulo: "Límites",
      imagen: "/imagenes/limites_3.png",
      ayudaImagen: "/imagenes/limites_3_ayuda.png",
      resolucionImagen: "/imagenes/11.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "9"
        );
      },
    },
    2: {
      titulo: "Asíntotas horizontales y oblicuas",
      imagen: "/imagenes/ah_ao.png",
      ayuda: "Se dice que y = L es A.H. de f(x) si lim(x→+∞)f(x) = L y/o lim(x→-∞)f(x) = L\nse dice que y = mx + b es A.O. de f(x) si lim(x→∞) (f(x))/x) = m ≠ 0 y b = lim(x→∞)(f(x)-mx)",
      resolucionImagen: "/imagenes/12.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "y=0y=-2x" ||
          s === "ah:y=0ao:y=-2x" ||
          s === "asintotahorizontal:y=0asintotaoblicua:y=-2x" ||
          s === "asíntotahorizontal:y=0asíntotaoblicua:y=-2x"
          );
        },
      },
      3: {
      titulo: "Asíntotas verticales",
      imagen: "/imagenes/av.png",
      ayuda: "Sea f una función definida en algún intervalo abierto alrededor de x0,\nexcepto posiblemente en x0. Si alguno de los límites laterales\nlim(x→x0+) f(x) o lim(x→x0-) f(x) da +∞ o −∞\ndecimos que la recta vertical de ecuación x = x0 es una asíntota vertical para f.",
      resolucionImagen: "/imagenes/13.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "x=-3" ||
          s === "av:x=-3" ||
          s === "asintotavertical:x=-3" ||
          s === "asíntotavertical:x=-3"
          );
        },
      },
      4: {
      titulo: "Teorema del Sándwich",
      imagen: "/imagenes/teorema_sandwich_2.png",
      ayuda: "Sean f, g, h funciones definidas en un entorno de a tales que en ese entorno vale\nf(x) ≤ g(x) ≤ h(x)\nsi lim(x→a) f(x) = lim(x→a) h(x) = L, entonces lim(x→a) g(x) = L",
      resolucionImagen: "/imagenes/14.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "0"
        );
      },
    },
    5: {
      titulo: "Continuidad",
      imagen: "/imagenes/continuidad.png",
      ayuda: "Sea f : D ⊂ R → R una función. Diremos que f es continua en x0 si:\ni) x0 ∈ Dom(f) ii) existe lim(x→x0) f(x) iii) f(x0) = lim(x→x0) f(x)\nCuando f es continua en todo punto de su dominio, diremos que f es continua en D.",
      resolucionImagen: "/imagenes/15.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "no,no" ||
          s === "nono"
        );
      },
    },
    6: {
      titulo: "Bolzano",
      enunciado: "Decidir si el polinomio f(x) = x^6 − 4x^4 − 12x^2 + 1 posee al menos una raíz en el intervalo [0, 2/5].",
      imagen: "/imagenes/bolzano.png",
      ayuda: "Sea f : [a, b] → R una función continua tal que f(a) y f(b) tienen distinto signo, entonces existe c ∈ (a, b) tal que f(c) = 0.",
      resolucion: `
      Vamos a aplicar directamente el teorema de Bolzano.
      Podemos hacerlo pues f es continua en ese intervalo al tratarse de un polinomio.
      Investigamos signos en los extremos:
      f(0) = 1, f(2/5) ≈ −1,018 ⇒ f tiene una raíz en [0, 2/5]
      `,
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "si" ||
          s === "sí"
        );
      },
    },
    7: {
      titulo: "Valor Medio",
      enunciado: "Decidir si dada la función f(x) = x^3 − 8x + 10 existe un valor c tal que f(c) = π",
      ayuda: "Sea f : [a, b] → R una función continua. Entonces para todo k ∈ (f(a), f(b)) o k ∈ (f(b), f(a))\nexiste c ∈ (a, b) tal que f(c) = k",
      resolucion: `
      La función f es continua en R ya que es polinómica.
      Vamos a justificar la existencia del valor de c utilizando el teorema de los valores intermedios.

      Observemos que f(0) = 10 y f(1) = 3.
      Como f es continua en [0, 1] (ya que es continua en R) y f(1) < π < f(0), existe c ∈ (0, 1) tal que f(c) = π.
      `,
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "si" ||
          s === "sí"
        );
      },
    },
    8: {
      titulo: "Weierstrass",
      imagen: "/imagenes/weierstrass.png",
      ayuda: "Sea f : [a, b] → R una función continua, entonces existen xm, xM ∈ [a, b] tales que f(xm) ≤ f(x) ≤ f(xM) ∀ x ∈ [a, b]",
      resolucionImagen: "/imagenes/16.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "max:x=0,min:x=3" ||
          s === "máx:x=0,mín:x=3" ||
          s === "maximo:x=0,minimo:x=3" ||
          s === "máximo:x=0,mínimo:x=3" ||
          s === "maximox=0,minimox=3" ||
          s === "maximox=0minimox=3" ||
          s === "x=0,x=3" ||
          s === "x=0x=3"
        );
      },
    },
  },


  4: {
    1: {
      titulo: "Razones trigonométricas",
      imagen: "/imagenes/triangulo_1.png",
      enunciado: "Encontrar las razones trigonométricas del triángulo",
      ayudaImagen: "/imagenes/trangulo_1_ayuda.png",
      resolucionImagen: "/imagenes/17.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "..."
        );
      },
    },
    2: {
      titulo: "Altura",
      enunciado: "Una persona camina por la avenida Corrientes y observa la parte superior del obelisco elevando su vista 9º.\nSe acerca al mismo 250 m y para ver la parte superior debe elevar la vista 24º.\nHallar la altura del obelisco.",
      ayudaImagen: "/imagenes/trangulo_1_ayuda.png",
      resolucionImagen: "/imagenes/18.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "61,426m" ||
          s === "61,426"
        );
      },
    },
    3: {
      titulo: "Longitud",
      imagen: "/imagenes/triangulo_1.png",
      enunciado: "En un triangulo ABC, rectángulo en B, de área 40, calcular el largo de cada cateto, si ambos tienen igual longitud.",
      ayuda: "Recordar que el área de un triángulo se puede calcular como la mitad del producto de 2 lados por el seno del ángulo entre ellos.",
      resolucionImagen: "/imagenes/19.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "raiz40" ||
          s === "√40"
        );
      },
    },
    4: {
      titulo: "Teorema del seno",
      imagen: "/imagenes/seno.png",
      enunciado: "Cuando en la sucursal bancaria que se muestra en la siguiente figura\nsuena una alarma, la señal se recibe en las dos comisarías más cercanas. Los policías de la comisaría A acuden al banco a una velocidad de 80 kilómetros por hora, y los de la\ncomisaría B lo hacen a 120 kilómetros por hora. ¿Qué policías llegarán primero?",
      imagen: "/imagenes/policias.png",
      ayuda: "Dado cualquier triángulo de lados a, b y c y angulos interiores α, β y γ se verifica: (sen(α))/a = (sen(β))/b = (sen(γ))/c",
      resolucionImagen: "/imagenes/20.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "a" ||
          s === "policiaa" ||
          s === "políciaa"
        );
      },
    },
    5: {
      titulo: "Teorema del coseno",
      enunciado: "Encontrar los ángulos interiores del triángulo:",
      imagen: "/imagenes/coseno.png",
      ayuda: "Dado cualquier triángulo de lados a, b y c y angulos interiores α, βy γse verifica: a^2 = b^2 + c^2 – 2bc . cos(α); b^2 = a^2 + c^2 – 2ac . cos(β); c^2 = a^2 + b^2 – 2ab . cos(γ).",
      resolucionImagen: "/imagenes/21.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === ""
        );
      },
    },
    6: {
      titulo: "Circunferencia trigonométrica",
      enunciado: "Hallar todos los x ∈ [0; 2π] tal que cos(x) = √3/2 → coordenada xp = √3/2",
      ayudaImagen: "/imagenes/circunferencia_ayuda.png",
      resolucionImagen: "/imagenes/22.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === ""
        );
      },
    },
    7: {
      titulo: "Identidades trigonométricas",
      enunciado: "Hallar todas las soluciones de cos(2x) = sen(x)",
      ayudaImagen: "/imagenes/identidades_ayuda.png",
      resolucionImagen: "/imagenes/23.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "1/2,-1" ||
          s === "1/2-1" ||
          s === "-1,1/2" ||
          s === "-11/2"
        );
      },
    },
    8: {
      titulo: "Un límite importante: lim(x→0)⁡(sen(x)/x)",
      enunciado: "Hallar algunos límites: lim(x→0)(sen(3x))/5x; lim(x→0)(sen(6x))/(tan(3x)); lim(x→0)(1 - cos⁡(2x))/(sen(10x)) y lim(x→1)sen(πx)/(x - 1)",
      ayudaImagen: "/imagenes/limite_importante_ayuda.png",
      resolucionImagen: "/imagenes/24.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "3/5,1,0,–π" ||
          s === "3/510–π"
        );
      },
    },
    9: {
      titulo: "Funciones exponenciales ",
      enunciado: "Graficar f(x) = 5^x",
      ayuda: "Una función exponencial f : R → R es una función de la forma f(x) = a^x, a > 0, a ≠ 1.\nEl número a se llama base y x se llama exponente.",
      resolucionImagen: "/imagenes/25.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === ""
        );
      },
    },
    10: {
      titulo: "Funciones logarítmicas",
      enunciado: "Encontrar log_2(16)",
      ayuda: "Vimos que las funciones exponenciales f : R → R, f(x) = a^x son inyectivas.\nSi en vez de considerar como codominio a R, tomamos al intervalo (0, +∞) resulta que\nf : R → (0, +∞), f(x) = a^x es biyectiva para todo a > 0, a ≠ 1.\nPor lo tanto, existe la función inversa f^−1 : (0, +∞) → R, f^−1(x) = log_a(x), llamada logaritmo en base a.",
      resolucion: "Tenemos que log_2(16) = 4 ya que 2^4 = 16",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "4"
        );
      },
    },
  },

  5: {
    1: {
      titulo: "Recta tangente",
      enunciado: "Hallar la ecuación de la recta tangente a f(x) = 2x + 1",
      ayudaImagen: "/imagenes/tangente_ayuda.png",
      resolucionImagen: "/imagenes/26.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "2"
        );
      },
    },
    2: {
      titulo: "Tasa de cambio",
      enunciado: "Una explosión de dinamita lanza verticalmente una roca\npesada que estaba originalmente en reposo sobre la suelo. La altura (en metros) de la roca\nen función del tiempo viene dada por h(t) = 160t − 16t^2.\nHallar la velocidad promedio de la roca entre los instantes t0 = 0, t1 = 2, t2 = 4, y\ncalcule las velocidades instantáneas en cada uno de esos momentos.",
      ayuda: "El cociente incremental de f entre x0 y x0 + h da la tasa promedio de cambio\nde la función en ese intervalo mientras que f'(x0) es la tasa instantánea de cambio enese punto.",
      resolucionImagen: "/imagenes/27.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === ""
        );
      },
    },
    3: {
      titulo: "Derivada por definición",
      enunciado: "Calcular por definición la derivada de f(x) = sen(x)",
      ayudaImagen: "/imagenes/tangente_ayuda.png",
      resolucionImagen: "/imagenes/28.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "cos(x)"
        );
      },
    },
    4: {
      titulo: "Reglas de derivación",
      enunciado: "Calcular la derivada de f(x) = 4 + 5x + 6x^3",
      ayudaImagen: "/imagenes/reglas_ayuda.png",
      resolucionImagen: "/imagenes/29.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "5+18x^2"
        );
      },
    },
    5: {
      titulo: "Continuidad y derivabilidad para funciones partidas",
      imagen: "/imagenes/continuidad_y_derivabilidad.png",
      resolucionImagen: "/imagenes/30.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === ""
        );
      },
    },
    6: {
      titulo: "Regla de la cadena",
      imagen: "/imagenes/cadena.png",
      ayuda: "Si h(x) = (f o g)(f) = f(g(x)), entonces la derivada de h(x) resulta h’(x) = f’(g(x)) . g’(x)",
      resolucionImagen: "/imagenes/31.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === ""
        );
      },
    },
    7: {
      titulo: "Regla de la cadena",
      imagen: "/imagenes/cadena_2.png",
      ayuda: "Si h(x) = (f o g)(f) = f(g(x)), entonces la derivada de h(x) resulta h’(x) = f’(g(x)) . g’(x)",
      resolucionImagen: "/imagenes/32.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "-1/x"
        );
      },
    },
    8: {
      titulo: "Recta tangente 2",
      enunciado: "Hallar el punto donde las rectas tangentes a f(x) = 3x^2 + x y g(x) = 5x + 2 resultan paralelas",
      ayudaImagen: "/imagenes/tangente_2.png",
      resolucionImagen: "/imagenes/33.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === ""
        );
      },
    },
    9: {
      titulo: "Recta tangente 3",
      enunciado: "Hallar los puntos de f(x) = 2x^3 + 3x^2 – 36x + 1 donde la recta tangente es horizontal",
      ayudaImagen: "/imagenes/tangente_2.png",
      resolucionImagen: "/imagenes/34.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === ""
        );
      },
    },
    10: {
      titulo: "Linealización",
      enunciado: "Hallar la linealización de f(x) = √(1 + x) alrededor de x0 = 3.",
      ayudaImagen: "/imagenes/linealizacion_ayuda.png",
      resolucionImagen: "/imagenes/35.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === ""
        );
      },
    },
    11: {
      titulo: "Estimación de cambio",
      enunciado: "El radio de un círculo pasa de 10 metros a 10 metros y 10 centímetros.\nEstime el cambio en el área del círculo utilizando una aproximación lineal y luego compare\nla estimación con el cambio verdadero en dicha área.",
      ayuda: "Sea f es derivable en x0, entonces el cambio aproximado de f cuando la variable independiente para de x0 a x0 + ∆x viene dado por ∆f ≈ ∆L = f’(x0)∆x.\nCuando estos incrementos son pequeños, tradicionalmente se suele utilizar “diferenciales”, es decir, ponemos ∆x = dx, ∆L = df con lo cual una aproximación a la variación de f cuando la variable pasa de x0 a x0 + dx es df = f’(x0)dx",
      resolucionImagen: "/imagenes/36.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === ""
        );
      },
    },
  },
  6: {
    1: {
      titulo: "Teorema de Fermat",
      enunciado: "Dada f(x) = x^2 - 4x + 1, hallar los puntos críticos usando el Teorema de Fermat y determinar si son máximos o mínimos.",
      ayuda: "Sea f(x) definida en el intervalo (a; b) y que alcanza un extremo local en x0 ∈ (a; b), si f(x) es derivable en x0, ocurre: f’(x0) = 0.\nSi f(x) es continua en [a; b], es acotada en [a; b], existe M y m ∈ R tales que m ≤ f(x) ≤ M → f(x) seguro tiene máximo y mínimo en [a; b]",
      resolucionImagen: "/imagenes/37.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "x=2,maximo" ||
          s === "x=2maximo" ||
          s === "x=2,máximo" ||
          s === "x=2máximo" ||
          s === "2,maximo" ||
          s === "2maximo" ||
          s === "2,máximo" ||
          s === "2máximo" ||
          s === "2,max" ||
          s === "2max" ||
          s === "2,máx" ||
          s === "2máx"
        );
      },
    },
    2: {
      titulo: "Teorema de Rolle",
      enunciado: "Sea. f(x)=x^2 − 4x + 3, verificar que se cumplen las hipótesis del Teorema de Rolle en el intervalo [1,3] y hallar el valor c.",
      ayuda: "Sea f(x) : [a; b] → R, continua en [a; b] y derivable en (a; b), si f(a) = f(b), existe al menos un c ∈ (a; b) tal que f’(c) = 0.",
      resolucionImagen: "/imagenes/38.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "" ||
          s === ""
        );
      },
    },
    3: {
      titulo: "Teorema de Lagrange",
      enunciado: "Sea f(x) = x^2 en el intervalo [1,3], verificar que se cumplen las hipótesis y hallar el valor de c que garantiza el Teorema de Lagrange.",
      ayudaImagen: "/imagenes/lagrange_ayuda.png",
      resolucionImagen: "/imagenes/39.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "" ||
          s === ""
        );
      },
    },
    4: {
      titulo: "Teorema de Cauchy",
      imagen: "/imagenes/cauchy_enunciado.png",
      ayudaImagen: "/imagenes/cauchy_ayuda_6.png",
      resolucionImagen: "/imagenes/40.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "" ||
          s === ""
        );
      },
    },
    5: {
      titulo: "Regla de L'Hôpital",
      imagen: "/imagenes/l_hopital_enunciado.png",
      ayudaImagen: "/imagenes/l_hopital_ayuda.png",
      resolucionImagen: "/imagenes/41.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "" ||
          s === ""
        );
      },
    },
    6: {
      titulo: "Estudio completo de funciones",
      enunciado: "Completar...", /*va a ser una imagen completar cpn p. 27 del libro*/
      ayudaImagen: "",
      resolucionImagen: "/imagenes/42.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "" ||
          s === ""
        );
      },
    },
    7: {
      titulo: "Máximos y mínimos absolutos",
      enunciado: "Hallar los máximos y mínimos absolutos de f(x) = 3 + 2sen^2(2x) en el intervalo [0, π].",
      ayuda: "f alcanza un máximo global o absoluto en x = x0 si f(x0) ≥ f(x) para todo x ∈ Dom(f)\ny f alcanza un m ́ınimo global o absoluto en x = x0 si f(x0) ≤ f(x) para todo x ∈ Dom(f)",
      resolucionImagen: "/imagenes/43.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "" ||
          s === ""
        );
      },
    },
  },

  7: {
    1: {
      titulo: "Polinomio de Taylor",
      imagen: "/imagenes/polinomio_taylor_enunciado.png",
      ayuda: "/imagenes/polinomio_taylor_ayuda.png",
      resolucionImagen: "/imagenes/44.png",
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "" ||
          s === ""
        );
      },
    },
    /*2: {
      titulo: "Error en Aproximación Polinomial",
      enunciado: "",
      ayuda: "",

      resolucion: `
      
      Solución:

      `,
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "" ||
          s === ""
        );
      },
    },*/
    /*usar la teoria de la pagina 14 y por ejemplo el ejercicio 2 de la pagina 15 solo el item a */
  },

  8: {
    1: {
      titulo: "",
      enunciado: "",
      ayuda: "",

      resolucion: `
      
      Solución:

      `,
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "" ||
          s === ""
        );
      },
    },
  },

  9: {
    1: {
      titulo: "",
      enunciado: "",
      ayuda: "",

      resolucion: `
      
      Solución:

      `,
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "" ||
          s === ""
        );
      },
    },
  },
};

const ejerciciosAlgebra = {
  1: {
    1: {
      titulo: "",
      enunciado: "",
      ayuda: "",

      resolucion: `

      Solución:
      `,

      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "" ||
          s === ""
        );
      },
    },

    2: {
      titulo: "",
      enunciado: "",
      ayuda: "",

      resolucion: `

      Solución:
      `,

      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "" ||
          s === ""
        );
      },
    },
    
  },

  2: {
    1: {
      titulo: "",
      enunciado: "",
      ayuda: "",

      resolucion: `
      
      Solución:

      `,
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "" ||
          s === ""
        );
      },
    },

    2: {
      titulo: "",
      enunciado: "",
      ayuda: "",

      resolucion: `
      
      Solución:

      `,
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "" ||
          s === ""
        );
      },
    },
  },

  3: {
    1: {
      titulo: "",
      enunciado: "",
      ayuda: "",

      resolucion: `
      
      Solución:

      `,
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "" ||
          s === ""
        );
      },
    },
  },

  4: {
    1: {
      titulo: "",
      enunciado: "",
      ayuda: "",

      resolucion: `
      
      Solución:

      `,
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "" ||
          s === ""
        );
      },
    },
  },

  5: {
    1: {
      titulo: "",
      enunciado: "",
      ayuda: "",

      resolucion: `
      
      Solución:

      `,
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "" ||
          s === ""
        );
      },
    },
  },

  6: {
    1: {
      titulo: "",
      enunciado: "",
      ayuda: "",

      resolucion: `
      
      Solución:

      `,
      verificar: (r) => {
        const s = r.replace(/\s/g, "").toLowerCase();
        return (
          s === "" ||
          s === ""
        );
      },
    },
  },

};


const parcialesAnalisis = {
  1: {
    1: {
      1: {
        titulo: "Intervalos",
        enunciado: "Escribir al conjunto A ∩ B como intervalo o unión de intervalos y graficarlo en la recta real para",
        imagen: "/imagenes/analisis_modelo_1_ejercicio_1.png",

        ayuda: `
          1) Valor absoluto:
          Recordar que |x - a| ≥ k significa que la distancia entre x y a es mayor o igual que k.
          Equivale a:
          |x - a| ≥ k ⇔ x - a ≥ k  ó  x - a ≤ -k.

          2) Inecuaciones racionales:
          Cuando aparece una fracción:
            f(x) / g(x) < 0  ó  < 1
          se debe:
          - Llevar todo a un mismo miembro.
          - Unificar en una sola fracción.
          - Analizar el signo del numerador y del denominador.
          - Tener en cuenta que el denominador no puede ser cero.

          3) Conjunto intersección:
          A ∩ B significa:
          Los valores de x que pertenecen a A y también pertenecen a B.
          Gráficamente es la parte común en la recta real.

          4) Para graficar intervalos:
          - Paréntesis → extremo no incluido.
          - Corchetes → extremo incluido.
          - Punto abierto/cerrado según corresponda.`,

        resolucion: "Solución final: (-∞, -5) ∪ (-3, -1] ∪ (3, +∞)",
        resolucionImagen: "/imagenes/analisis_modelo_1_ejercicio_1_solucion.png",

        verificar: (r) => {
          const s = r.replace(/\s/g, "").toLowerCase();
          return (
            s === "(-inf,-5)u(-3,-1]u(3,+inf)" ||
            s === "(-inf,-5)∪(-3,-1]∪(3,+inf)" ||
            s === "(-infinito,-5)u(-3,-1]u(3,+infinito)" ||
            s === "(-infinito,-5)∪(-3,-1]∪(3,+infinito)" ||
            s === "(-∞,-5)u(-3,-1]u(3,+∞)" ||
            s === "(-∞,-5)∪(-3,-1]∪(3,+∞)"
          );
        },
      },

      2: {
        titulo: "Monotonía",
        enunciado: "Decida si es monótona la sucesión",
        imagen: "/imagenes/analisis_modelo_1_ejercicio_2.png",

        ayuda: `
          Para estudiar si una sucesión es monótona:

          1) Definición:
          Una sucesión {aₙ} es:
          - Creciente si: aₙ₊₁ ≥ aₙ
          - Decreciente si: aₙ₊₁ ≤ aₙ
          - Monótona si cumple una de las dos.

          2) Método habitual:
          Se compara aₙ₊₁ − aₙ o el cociente aₙ₊₁ / aₙ.

          3) Atención al término (−1)ⁿ:
          Este factor alterna signo:
          - si n es par → (−1)ⁿ = 1  
          - si n es impar → (−1)ⁿ = −1  

          Por lo tanto puede generar oscilaciones en la sucesión.

          4) Idea clave:
          Si la sucesión cambia de comportamiento entre n par e impar,
          probablemente no sea monótona.

          Sugerencia:
          Calcular algunos primeros términos para observar el comportamiento.
          `,

        resolucion: "Solución final: La sucesión no es monótona",
        resolucionImagen: "/imagenes/analisis_modelo_1_ejercicio_2_solucion.png",

        verificar: (r) => {
          const s = r.replace(/\s/g, "").toLowerCase();
          return (
            s === "no" ||
            s === "noesmonotona" ||
            s === "noesmonótona"
          );
        },
      },

      3: {
        titulo: "Bolzano",
        enunciado: "Explicar por qué la función f es continua en R y probar utilizando el teorema de Bolzano que existe c ∈ [0, π/2] tal que f(c) = 0.",
        imagen: "/imagenes/analisis_modelo_1_ejercicio_3.png",
        ayuda: `
          Para estudiar si una sucesión es monótona:

          1) Continuidad de funciones:
          - cos(x) y sen(x) son funciones continuas en ℝ.
          - √(x² + 1) es continua porque x² + 1 > 0 para todo x ∈ ℝ.
          - La suma, resta y producto de funciones continuas es continua.
          - El cociente de funciones continuas es continuo siempre que el denominador no sea cero.

          En este ejercicio:
          3 − sen(x) ≠ 0 para todo x ∈ ℝ porque −1 ≤ sen(x) ≤ 1 ⇒ 3 − sen(x) ≥ 2 > 0.
          Por lo tanto, f es continua en ℝ.

          2) Teorema de Bolzano: sea f continua en [a, b], si f(a) · f(b) < 0 (entonces f cambia de signo en el intervalo)
          ⇒ Existe al menos un c ∈ (a, b) tal que f(c) = 0.

          3) Cómo aplicar Bolzano (pasos prácticos):
          Paso 1: Verificar que f sea continua en [a, b].
          Paso 2: Calcular f(a) y f(b).
          Paso 3: Verificar cambio de signo:
          - si f(a) > 0 y f(b) < 0 (o al revés)
            ⇒ se puede aplicar Bolzano.
          Paso 4: Concluir:
          ∃ c ∈ (a, b) tal que f(c) = 0.

          4) Sugerencia para este ejercicio:
          Evaluar f(0) y f(π/2) y verificar que tengan signos opuestos.
          `,
        resolucionImagen: "/imagenes/analisis_modelo_1_ejercicio_3_solucion.png",
      },

      4: {
        titulo: "Trigonometría",
        enunciado: "El ojo humano puede distinguir entre dos puntos distantes P y Q siempre que el\nángulo de resolución θ no sea muy pequeño.\nSuponga que P y Q están a x unidades entre sí\ny a d unidades del ojo, como se ilustra en la figura.\nExprese x en términos de θ y d y decida para qué valores de d será distinguinble\nuna pluma de 6 pulgadas de alto vista desde d pies si el\nángulo de resolución es de θ = 0,0005 radianes.",
        imagen: "/imagenes/analisis_modelo_1_ejercicio_4.png",
        resolucion: "",
        resolucionImagen: "/imagenes/analisis_modelo_1_ejercicio_4_solucion.png",
      },

      5: {
        titulo: "Dominio y asíntotas",
        enunciado: "Calcule dominio y asíntotas de f(x) = ln(2x − 4) − ln(x − 1)\ny encuentre la cantidad de soluciones de la ecuación f(x) = k para todo k ∈ R.",
        ayuda: `
          1) Dominio de funciones logarítmicas:
          ln(u) está definido ⇔ u > 0, por lo tanto, para hallar el dominio se debe exigir:
          - 2x − 4 > 0
          - x − 1 > 0
          El dominio será la intersección de ambas condiciones.

          2) Propiedad de logaritmos:
          Si u > 0 y v > 0:
          ln(u) − ln(v) = ln(u/v)

          3) Asíntotas verticales:
          Una recta x = a es asíntota vertical si: lim (x → a⁺ o a⁻) f(x) = ±∞.

          En funciones logarítmicas, las asíntotas verticales aparecen
          cuando el argumento del logaritmo tiende a 0⁺.

          Sugerencia:
          Buscar los puntos donde:

          - 2x − 4 = 0
          - x − 1 = 0

          y verificar si pertenecen al borde del dominio.

          4) Asíntota horizontal (idea general):
          Se estudia calculando: lim (x → +∞) f(x)

          Si el límite es un número real L,
          entonces y = L es asíntota horizontal.

          Sugerencia:
          Usar la propiedad del logaritmo para simplificar antes de hacer el límite.
          `,
        resolucion: "",
        resolucionImagen: "/imagenes/analisis_modelo_1_ejercicio_5_solucion.png",
        verificar: (r) => {
          const s = r.replace(/\s/g, "").toLowerCase();
          return (
            s === "dominio=(2; +inf)ah:y=ln(2)av:x=2" ||
            s === "dom=(2; +inf)ah:y=ln(2)av:x=2" ||
            s === "dominio=(2; +infinito)ah:y=ln(2)av:x=2" ||
            s === "dom=(2; +infinito)ah:y=ln(2)av:x=2" ||
            s === "dominio=(2; +∞)ah:y=ln(2)av:x=2" ||
            s === "dom=(2; +∞)ah:y=ln(2)av:x=2"
          );
        },
      },
    },
  },
  2: {
    1: {
      1: {
        titulo: "Intervalos",
        enunciado: "Escribir al conjunto A ∩ B como intervalo o unión de intervalos y graficarlo en la recta real para",
        imagen: "/imagenes/analisis_modelo_1_ejercicio_1.png",

        ayuda: `
          `,

        resolucion: "Solución final: (-∞, -5) ∪ (-3, -1] ∪ (3, +∞)",
        resolucionImagen: "/imagenes/analisis_modelo_1_ejercicio_1_solucion.png",

        verificar: (r) => {
          const s = r.replace(/\s/g, "").toLowerCase();
          return (
            s === "..."
          );
        },
      },
    },
  },
  3: {
    1: {
      1: {
        titulo: "Intervalos",
        enunciado: "Escribir al conjunto A ∩ B como intervalo o unión de intervalos y graficarlo en la recta real para",
        imagen: "/imagenes/analisis_modelo_1_ejercicio_1.png",

        ayuda: `
          `,

        resolucion: "Solución final: (-∞, -5) ∪ (-3, -1] ∪ (3, +∞)",
        resolucionImagen: "/imagenes/analisis_modelo_1_ejercicio_1_solucion.png",

        verificar: (r) => {
          const s = r.replace(/\s/g, "").toLowerCase();
          return (
            s === "..."
          );
        },
      },
    },
  },
};

const parcialesAlgebra = {
  1: {
    1: {
      1: {
        titulo: "Regla de los signos",
        enunciado:
          "Escribir al conjunto A = {x ∈ R : (2x + 1)(3 − x) ≤ 0} como un intervalo o unión de intervalos.",
        ayuda:
          "Para que el producto sea menor o igual a 0, uno de los factores debe ser ≥ 0 y el otro ≤ 0.",
        resolucion: `
Primer caso...
Solución: A = (−∞, −1/2] ∪ [3, +∞)
        `,
        verificar: () => true,
      },

      2: {
        titulo: "Ejercicio 2",
        enunciado: "Completar...",
        ayuda: "",
        resolucion: "",
        verificar: () => true,
      },

      3: {
        titulo: "Ejercicio 3",
        enunciado: "Completar...",
        ayuda: "",
        resolucion: "",
        verificar: () => true,
      },

      4: {
        titulo: "Ejercicio 4",
        enunciado: "Completar...",
        ayuda: "",
        resolucion: "",
        verificar: () => true,
      },

      5: {
        titulo: "Ejercicio 5",
        enunciado: "Completar...",
        ayuda: "",
        resolucion: "",
        verificar: () => true,
      },
    },
  },
};

/* =========================
   THEMES
   ========================= */

const themes = {
  claro: {
    name: "☀️",
    background: "#f2f2f2",
    text: "#000",
    button: "#e0e0e0",
    secondaryButton: "#cccccc",
    buttonText: "#000",
    border: "#ccc",
    accent: "#bbb",
  },
  oscuro: {
    name: "🌑",
    background: "#121212",
    text: "#fff",
    button: "#2c2c2c",
    secondaryButton: "#3a3a3a",
    buttonText: "#fff",
    border: "#333",
    accent: "#444",
  },
};

/* =========================
   APP
   ========================= */

export default function App() {
  const [pantalla, setPantalla] = useState("inicio");
  const [materia, setMateria] = useState(null); // "analisis" | "algebra"
  const [tema, setTema] = useState("claro");
  const [unidadActual, setUnidadActual] = useState(1);
  const [ejercicioActual, setEjercicioActual] = useState(1);
  const [parcialActual, setParcialActual] = useState(1);
  const [modeloActual, setModeloActual] = useState(1);

  const theme = themes[tema];

  const pageStyle = {
    minHeight: "100vh",
    background: theme.background,
    color: theme.text,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };


  const innerStyle = {
    width: "100%",
    maxWidth: 600,
    padding: 32,
    textAlign: "center",
    background: theme.button,
    borderRadius: 24,
    boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
  };

  const buttonStyle = {
  width: "100%",
  padding: "14px 18px",
  margin: "10px 0",
  fontSize: 17,
  borderRadius: 14,
  border: "none",
  cursor: "pointer",
  background: theme.secondaryButton,
  color: theme.text,
  fontWeight: 500,
  transition: "all 0.2s ease",
};


  /* =========================
     PANTALLAS
     ========================= */

  function Inicio() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: 64, marginBottom: 10 }}>📚 CBC</h1>

      <p style={{ fontSize: 30, marginTop: 10, marginBottom: 50, opacity: 2.0 }}>
        ¿Qué querés estudiar?
      </p>

      <div
        style={{
          display: "flex",
          gap: 40,
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => {
            setMateria("analisis");
            setPantalla("menu_materia");
          }}
          style={{
            width: 280,
            height: 200,
            borderRadius: 28,
            fontSize: 24,
            fontWeight: 600,
            background: theme.accent,
            color: theme.text,
            boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
          }}
        >
          📘
          <div style={{ marginTop: 15 }}>Análisis Matemático</div>
        </button>

        <button
          onClick={() => {
            setMateria("algebra");
            setPantalla("menu_materia");
          }}
          style={{
            width: 280,
            height: 200,
            borderRadius: 28,
            fontSize: 24,
            fontWeight: 600,
            background: theme.accent,
            color: theme.text,
            boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
          }}
        >
          📗
          <div style={{ marginTop: 15 }}>Álgebra</div>
        </button>
      </div>
    </div>
  );
}

  function MenuMateria() {
    return (
      <div style={innerStyle}>
        <h1>{materia === "analisis" ? "📘 Análisis" : "📗 Álgebra"}</h1>

        <button style={buttonStyle} onClick={() => setPantalla("unidades")}>
          📘 Teoría y ejercicios
        </button>

        <button style={buttonStyle} onClick={() => setPantalla("parciales_menu")}>
          📝 Exámenes
        </button>

        <button style={buttonStyle} onClick={() => setPantalla("inicio")}>⬅ Volver</button>
      </div>
    );
  }

  function Unidades() {
    const lista = materia === "analisis" ? analisisUnits : algebraUnits;

    return (
      <div style={innerStyle}>
        <h1>Unidades</h1>

        {lista.map((u, i) => (
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

        <button style={buttonStyle} onClick={() => setPantalla("menu_materia")}>⬅ Volver</button>
      </div>
    );
  }

  function Unidad() {
    const links = materia === "analisis" ? linksAnalisis : linksAlgebra;

    return (
      <div style={innerStyle}>
        <h1>Unidad {unidadActual}</h1>

        <button style={buttonStyle} onClick={() => window.open(links[unidadActual])}>
          📘 Teoría
        </button>

        <button style={buttonStyle} onClick={() => setPantalla("ejercicios")}>
          ✏️ Ejercicios
        </button>

        <button style={buttonStyle} onClick={() => setPantalla("unidades")}>⬅ Volver</button>
      </div>
    );
  }

  function Ejercicios() {
    const base = materia === "analisis" ? ejerciciosAnalisis : ejerciciosAlgebra;
    const lista = base[unidadActual] || {};

    return (
      <div style={innerStyle}>
        <h1>Ejercicios</h1>

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

        <button style={buttonStyle} onClick={() => setPantalla("unidad")}>⬅ Volver</button>
      </div>
    );
  }

function Ejercicio() {
  const [respuesta, setRespuesta] = useState("");
  const [resultado, setResultado] = useState(null);
  const [mostrarAyuda, setMostrarAyuda] = useState(false);
  const [mostrarResolucion, setMostrarResolucion] = useState(false);

  const esParcial = pantalla === "parcial_ejercicio";

  let base;

  if (esParcial) {
    base = materia === "analisis" ? parcialesAnalisis : parcialesAlgebra;
  } else {
    base = materia === "analisis" ? ejerciciosAnalisis : ejerciciosAlgebra;
  }

  const ej = esParcial
    ? base[parcialActual]?.[modeloActual]?.[ejercicioActual]
    : base[unidadActual]?.[ejercicioActual];


  if (!ej) {
    return (
      <div style={innerStyle}>
        <p>Ejercicio no encontrado</p>
        <button
          style={buttonStyle}
          onClick={() => setPantalla(esParcial ? "parcial_ejercicios" : "ejercicios")
          }
        >
          ⬅ Volver
        </button>
      </div>
    );
  }

  function verificar() {
    const ok = ej.verificar ? ej.verificar(respuesta) : false;
    setResultado(ok);
  }

  return (
    <div style={innerStyle}>
      <h1>
        ✏️ {esParcial ? "Parcial" : "Unidad"}{" "}
        {esParcial ? parcialActual : unidadActual} - Ejercicio{" "}
        {ejercicioActual}
      </h1>

      <h3>{ej.titulo}</h3>


      <p>{ej.enunciado}</p>


      {ej.imagen && (
        <img
          src={ej.imagen}
          alt="Imagen del ejercicio"
          style={{ maxWidth: "100%", margin: "20px 0", borderRadius: 10 }}
        />
      )}

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

      {mostrarAyuda && (
        <>
          <pre style={{ textAlign: "left", whiteSpace: "pre-wrap" }}>
            {ej.ayuda}
          </pre>

          {ej.ayudaImagen && (
            <img
              src={ej.ayudaImagen}
              alt="Imagen de ayuda"
              style={{
                maxWidth: "100%",
                marginTop: 20,
                borderRadius: 10
              }}
            />
          )}
        </>
      )}

      <button
        style={buttonStyle}
        onClick={() => setMostrarResolucion(!mostrarResolucion)}
      >
        🧩 Ver resolución
      </button>

      {mostrarResolucion && (
        <>
          <pre style={{ textAlign: "left", whiteSpace: "pre-wrap" }}>
            {ej.resolucion}
          </pre>

          {ej.resolucionImagen && (
            <img
              src={ej.resolucionImagen}
              alt="Resolución gráfica"
              style={{ maxWidth: "100%", marginTop: 20, borderRadius: 10 }}
            />
          )}
        </>
      )}

      <button
        style={buttonStyle}
        onClick={() =>
          setPantalla(esParcial ? "parcial_ejercicios" : "ejercicios")
        }
      >
        ⬅ Volver
      </button>
    </div>
  );
}


  function ParcialesMenu() {
    const base = materia === "analisis" ? parcialesAnalisis : parcialesAlgebra;

    return (
      <div style={innerStyle}>
        <h1>📝 Exámenes</h1>

        {Object.keys(base).map((n) => (
          <button
            key={n}
            style={buttonStyle}
            onClick={() => {
              setParcialActual(Number(n));
              setPantalla("parcial");
            }}
          >
            Parcial {n}
          </button>
        ))}

        <button style={buttonStyle} onClick={() => setPantalla("menu_materia")}>
          ⬅ Volver
        </button>
      </div>
    );
  }

function Parcial() {
  const base = materia === "analisis" ? parcialesAnalisis : parcialesAlgebra;
  const modelos = base[parcialActual] || {};

  return (
    <div style={innerStyle}>
      <h1>📝 Parcial {parcialActual}</h1>
      <h3>Elegí un modelo</h3>

      {Object.keys(modelos).map((m) => (
        <button
          key={m}
          style={buttonStyle}
          onClick={() => {
            setModeloActual(Number(m));
            setPantalla("parcial_modelo_detalle");
          }}
        >
          Modelo {m}
        </button>
      ))}

      <button
        style={buttonStyle}
        onClick={() => setPantalla("parciales_menu")}
      >
        ⬅ Volver
      </button>
    </div>
  );
}

function ParcialEjercicios() {
  const base =
    materia === "analisis"
      ? parcialesAnalisis
      : parcialesAlgebra;

  const lista =
    base[parcialActual]?.[modeloActual] || {};

  return (
    <div style={innerStyle}>
      <h1>
        📝 Parcial {parcialActual} - Modelo {modeloActual}
      </h1>

      {Object.keys(lista).map((n) => (
        <button
          key={n}
          style={buttonStyle}
          onClick={() => {
            setEjercicioActual(Number(n));
            setPantalla("parcial_ejercicio");
          }}
        >
          Ejercicio {n} - {lista[n].titulo}
        </button>
      ))}

      <button
        style={buttonStyle}
        onClick={() =>
          setPantalla("parcial_modelo_detalle")
        }
      >
        ⬅ Volver
      </button>
    </div>
  );
}


  function ParcialModelo() {
    const base = materia === "analisis" ? parcialesAnalisis : parcialesAlgebra;
    const lista = base[parcialActual]?.[modeloActual] || {};

    return (
      <div style={innerStyle}>
        <h1>📝 Parcial {parcialActual} - Modelo {modeloActual}</h1>

        {Object.keys(lista).map((n) => (
          <button
            key={n}
            style={buttonStyle}
            onClick={() => {
              setEjercicioActual(Number(n));
              setPantalla("parcial_ejercicio");
            }}
          >
            Ejercicio {n} - {lista[n].titulo}
          </button>
        ))}

        <button
          style={buttonStyle}
          onClick={() => setPantalla("parcial")}
        >
          ⬅ Volver
        </button>
      </div>
    );
  }

  function ParcialModeloDetalle() {
  const links =
    materia === "analisis"
      ? linksParcialesAnalisis
      : linksParcialesAlgebra;

  return (
    <div style={innerStyle}>
      <h1>
        📝 Parcial {parcialActual} - Modelo {modeloActual}
      </h1>

      <button
        style={buttonStyle}
        onClick={() =>
          window.open(links[parcialActual]?.[modeloActual])
        }
      >
        📘 Ver examen (PDF)
      </button>

      <button
        style={buttonStyle}
        onClick={() => setPantalla("parcial_ejercicios")}
      >
        ✏️ Ver ejercicios
      </button>

      <button
        style={buttonStyle}
        onClick={() => setPantalla("parcial")}
      >
        ⬅ Volver
      </button>
    </div>
  );
}

  return (
    <div
      style={{
        minHeight: "100vh",
        background: theme.background,
        color: theme.text,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 900,
          padding: 60,
          borderRadius: 24,
          background: theme.button,
          boxShadow: "0 10px 40px rgba(0,0,0,0.25)"
        }}
      >
        {/* BOTÓN CAMBIO DE TEMA */}
        <div style={{ textAlign: "right", marginBottom: 10 }}>
          <button
            onClick={() => setTema(tema === "claro" ? "oscuro" : "claro")}
            style={{
              borderRadius: 999,
              padding: "6px 12px",
              fontSize: 18,
              background: theme.secondaryButton,
              color: theme.text
            }}
          >
            {theme.name}
          </button>
        </div>

        {pantalla === "inicio" && <Inicio />}
        {pantalla === "menu_materia" && <MenuMateria />}
        {pantalla === "unidades" && <Unidades />}
        {pantalla === "unidad" && <Unidad />}
        {pantalla === "ejercicios" && <Ejercicios />}
        {pantalla === "ejercicio" && <Ejercicio />}
        {pantalla === "parciales_menu" && <ParcialesMenu />}
        {pantalla === "parcial" && <Parcial />}
        {pantalla === "parcial_modelo" && <ParcialModelo />}
        {pantalla === "parcial_ejercicio" && <Ejercicio />}
        {pantalla === "parcial_modelo_detalle" && <ParcialModeloDetalle />}
        {pantalla === "parcial_ejercicios" && <ParcialEjercicios />}
      </div>
    </div>
  );
}