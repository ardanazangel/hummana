"use client";

import "../GridSection/gridsection.css";
import { useState } from "react";
import Image from "next/image";

function GridSectionCard({
  title,
  subtitle,
  description,
  actionDescription,
  fullDescription,
  onClick, // Add onClick to props
  isActive,
}) {
  return (
    <div
      className={`grid-card__wrapper ${isActive ? "active" : ""}`}
      onClick={() => onClick(fullDescription || description, title)}
    >
      <h3 className="grid-card__title">{title}</h3>
      <div className="grid-card__info">
        <h5>{subtitle}</h5>
        <p className="uppercase">{description}</p>
        <h4 className="uppercase">Action Plan</h4>
        <p>{actionDescription}</p>
        <p className="uppercase" style={{ textDecoration: "underline" }}>
          Saber más
        </p>
      </div>
    </div>
  );
}

export default function GridSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
  });

  const openModal = (fullDescription, title, index) => {
    setModalContent({ description: fullDescription, title });
    setModalOpen(true);
    setActiveCardIndex(index);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveCardIndex(null);
  };
  const cardsData = [
    {
      title: "Breathwork",
      subtitle: "La respiración como puente entre tu vida y tu conciencia.",
      description:
        "RESPIRAMOS 20 MIL VECES AL DÍA Y LA FORMA EN QUE LO HACEMOS AFECTA NUESTRO SISTEMA NERVIOSO E INMUNOLÓGICO.",
      fullDescription: `La mente y la respiración van de la mano. Cuando la respiración está fuera de balance, también lo está la mente y viceversa. La respiración es una práctica de bienestar para despejar la mente y el cuerpo y para entrar, de manera efectiva, al momento presente.
      Durante las sesiones de HUMMANA breathwork, aprenderás a consolidar una práctica de respiración para aplicar a tu día a día. La constancia de este hábito te dará la base para regular tu sistema nervioso y para mejorar significativamente tu bienestar físico, mental y emocional. 
      Cuanto más entiendas tu respiración, mejor sabrás gestionarla y adaptarla a cualquier situación.
      HUMMANA breathwork incorpora técnicas intrínsecas para acceder a tu estado mental. El breathwork es efectivo y se utiliza para desbloquear estados mentales estancados y liberar emociones reprimidas. `,
      actionDescription:
        "IMPLEMENTAR EL BREATHWORK PARA REDUCIR ANSIEDAD, DISPERSIÓN MENTAL Y REGRESAR AL MOMENTO PRESENTE.",
    },
    {
      title: "Meditation",
      subtitle: "Convierte la meditación en tu estado natural.",
      description:
        "MEDITAR ES MIRAR NUESTRO INTERIOR PARA DARLE LUGAR Y ESPACIO A LO QUE LATE EN NOSOTROS.",
      fullDescription: `La meditación es una habilidad para la vida. Una vez que la desarrollas, puedes recurrir a ella en cualquier momento. Al principio, el poder de nuestra concentración no es estable, nuestros pensamientos nos dominan. Nos distraemos y perdemos la conciencia de nuestra respiración. Pero con práctica, el poder de nuestra atención se fortalece, nuestra conciencia se enfoca, y lo que permanece es un estado de meditación.
      Este reconocimiento crea la base para una comprensión real de cualquier conflicto o malestar. Cultivar estabilidad emocional es fundamental para lograr tus aspiraciones personales y tus objetivos profesionales. 
      A través de HUMMANA meditation desarrollarás una práctica de meditación auto-suficiente. La intención no es trascender los pensamientos, sino llevar la mirada hacia el interior para darle lugar y espacio a que emerja lo que está latente en ti. `,
      actionDescription:
        "DESARROLLAR RESILIENCIA EMOCIONAL PARA MANTENER LA CALMA Y RESPONDER CON SOLIDEZ ANTE LOS RETOS DE LA VIDA.",
    },
    {
      title: "Movement",
      subtitle: "El movimiento es medicina.",
      description:
        "EL MOVIMIENTO ES FUNDAMENTAL PARA TU SALUD, TU LONGEVIDAD Y TU CALIDAD DE VIDA.",
      fullDescription: `El movimiento conecta tu mente con tu cuerpo, te mantiene en el presente. Cuando tu cuerpo está sano y fuerte, tu mente se sintoniza con tu estado interior, elevando la autoconciencia y alineando cada paso que das.
      Estar en equilibrio es encontrar la armonía entre tu profesión y tu estilo de vida. Si cualquiera de estos dos está desequilibrado, tu bienestar se afecta.
      Con HUMMANA movement aprenderás un método con posturas (asanas) para tonificar, revitalizar y oxigenar tu cuerpo. `,
      actionDescription:
        "INTEGRAR A TU VIDA UNA BASE DE MOVIMIENTO SENCILLA Y SÓLIDA PARA IMPULSAR TU VITALIDAD, PLENITUD Y BIENESTAR MENTAL Y EMOCIONAL.",
    },
    {
      title: "Mindset",
      subtitle: "Fortalece tu mente, resetea tu vida.",
      description:
        "EL CAMBIO COMIENZA CUANDO LA RESPUESTA ANTE LO QUE NOS SUCEDE SE BASA EN UNA VERSIÓN ACTUALIZADA DE NOSOTROS MISMOS.",
      fullDescription: `Vivimos en una sociedad que nos incita a reaccionar. Podemos ser adictos a ciertas maneras de hacer las cosas porque nos sirvieron en el pasado. Sin embargo, el cambio sucede cuando nos damos cuenta de que dicha manera, corresponde a una versión caducada de nosotros mismos. 
      Es crucial educar continuamente nuestra forma de responder ante la vida. Un growth mindset es fundamental en momentos de incertidumbre o de cambio. 
      A través de HUMMANA mindset, desarrollarás tus habilidades de liderazgo, aumentarás tu resiliencia emocional y cultivarás un lenguaje alineado con tus metas y con tus objetivos. `,
      actionDescription:
        "DESARROLLAR TU CAPACIDAD PARA RESPONDER A SITUACIONES DESAFIANTES DE FORMAS NUEVAS Y EMPODERADAS, POTENCIAR TU PENSAMIENTO CREATIVO Y ALINEAR LOGROS PERSONALES",
    },
    {
      title: "Self Knowledge",
      subtitle: "Diseña una vida afín a tu verdadera naturaleza.",
      description:
        "SI NO VIVIMOS SINTONIZADOS CON NUESTRA ESENCIA, TODO LO DEMÁS SE DESEQUILIBRA.",
      fullDescription: `El diseño de una vida afín a tu verdadera naturaleza comienza con una comprensión clara de tus valores y de ti mismo. Conocer tus valores humanos es esencial porque te servirán como brújula interna, guiando tus decisiones y acciones.Cada uno de nosotros tiene talentos únicos y especiales, la plenitud reside en encontrarlos y compartirlos con el mundo. Aprender a diferenciar entre éxito y significado es fundamental para diseñar una vida coherente con tu naturaleza. El éxito se mide por los logros externos, (estatus, fama, reconocimiento). Sin embargo, el significado proviene de la realización interna y de la armonía entre nuestra vida y nuestros valores personales. Mientras que una vida exitosa trae satisfacción a corto plazo, una vida significativa proporciona plenitud a largo plazo. 
      A través HUMMANA self-knowledge lograrás dar pasos sólidos hacia una vida en balance y armonía. Tomando decisiones y acciones asertivas en tus relaciones, carrera, salud y riqueza.`,
      actionDescription:
        "SERÁS GUIADO PARA DISEÑAR TU PROPIA DEFINICIÓN DE UNA VIDA EXITOSA Y SIGNIFICATIVA.",
    },
    {
      title: "Self Talk",
      subtitle: "Tu voz tiene poder.",
      description:
        "TENEMOS ENTRE 60 MIL Y 70 MIL PENSAMIENTOS AL DÍA, EL 80% SON NEGATIVOS.",
      fullDescription: `Nuestros cerebros están programados para la negatividad, lo que desde un punto de vista evolutivo nos ayuda a evaluar las amenazas. Sin embargo, cuando se trata de mejorar nuestro rendimiento, el diálogo interno negativo es perjudicial para el éxito. 
      El diálogo interno es una habilidad altamente efectiva. Practicarla con el fin de desarrollar uno positivo durante momentos de estrés o de adversidad no sólo mejora el rendimiento en esas situaciones, sino que crea un efecto dominó en las cuatro áreas principales de la vida: las relaciones, la carrera, la salud y la riqueza.
      El diálogo interno es esencial para diseñar, conscientemente, una vida que respalde tu verdadera naturaleza. Como cualquier músculo requiere entrenarse para ver los beneficios reales. 
      A través de HUMMANA self-talk, aprenderás a gestionar mejor tu diálogo interno.`,
      actionDescription:
        "CAMBIAR LA FORMA EN QUE TE HABLAS A TI MISMO TODOS LOS DÍAS, ELIMINAR LA DUDA Y TRANSFORMARTE DE ADENTRO HACIA AFUERA.",
    },
    {
      title: "Mindfulness",
      subtitle: "El arte del mindfulness.",
      description:
        "PODEMOS ENTRENAR NUESTRO CEREBRO PARA CAMBIAR REACCIONES IMPULSIVAS POR RESPUESTAS ADECUADAS. ",
      fullDescription: `El estrés es una condición de la sociedad contemporánea. El mindfulness o la atención plena tiene el poder de transformar la forma en que respondemos a él. La práctica del mindfulness provoca cambios estructurales en el cerebro, lo que se conoce como neuroplasticidad. El cerebro genera nuevas asociaciones neuronales que moldean nuevas formas de respuesta.
      Entre el estímulo y la respuesta hay un espacio. En ese espacio reside nuestra libertad para elegir qué respuesta damos y allí, en esta respuesta, reside nuestro crecimiento.
      Las reacciones son impulsivas, casi automáticas, y suelen estar guiadas por el estrés o por la emoción que predomina en el momento. Responder, en cambio, implica hacer una pausa, observar y elegir. Es crear un paréntesis entre la situación que está sucediendo y la forma en que respondemos ante ella. 
      Con HUMMANA mindfulness, desarrollarás la habilidad para mantenerte centrado y presente ante la adversidad.`,
      actionDescription:
        "CULTIVAR LA PAUSA ENTRE ESTÍMULO Y RESPUESTA PARA LOGRAR AQUELLO QUE TE PROPONGAS",
    },
    {
      title: "The creative plan",
      subtitle: "Crea una vida con propósito.",
      description:
        "AL PONERLE FECHA A UN PROYECTO, SE CONVIERTE EN UNA META. UNA META, DIVIDIDA EN PASOS, SE CONVIERTE EN UN PLAN. Y UN PLAN, RESPALDADO POR ACCIONES, SE CONVIERTE EN UNA REALIDAD.",
      fullDescription: `Es tan importante tener una visión de lo que quieres para tu vida, como dar los pasos adecuados para lograrlo. Se trata de entrenar la mente para pasar a la acción. 
      
      The seed phase. 
      En esta primera fase del proceso creativo, buscamos posibles puntos de partida que puedan convertirse en algo sustancial. No comparamos las distintas opciones para encontrar la mejor semilla, solo las recolectamos. 
      
      The experimentation phase
      Una vez que se han reunido las semillas creamos diferentes combinaciones, sin reglas ni ideas fijas. 
      Cuando algo interesante toma forma, la percepción sensorial es el mejor barómetro para escoger qué semillas de tu plan tienen el mayor potencial. Sigue ese instinto.
      
      The craft phase. 
      Una vez que las semillas estén definidas, tu dirección será clara. En ese momento, crearemos un plan de acción con las metas, con los objetivos y con los pasos a dar de principio a fin. Un plan de acción es fundamental para transformar objetivos abstractos en acciones tangibles.
      
      The completion phase. 
      Pondremos en práctica el plan de acción. La fase de finalización es la parte más gratificante del plan creativo, ya que implica ver y sentir cómo el proyecto se concreta.`,
      actionDescription:
        "DESARROLLAR TUS HABILIDADES PARA ABORDAR TU TRABAJO CREATIVO CON CONCIENCIA, SENSIBILIDAD, DISCIPLINA Y ASERTIVIDAD",
    },
  ];

  return (
    <section className="grid__section">
      {cardsData.map((card, index) => (
        <GridSectionCard
          key={index}
          title={card.title}
          subtitle={card.subtitle}
          description={card.description}
          actionTitle={card.actionTitle}
          actionDescription={card.actionDescription}
          fullDescription={card.fullDescription}
          onClick={(fullDescription, title) =>
            openModal(fullDescription, title, index)
          }
          isActive={activeCardIndex === index}
        />
      ))}
      <div
        className={`modal-overlay ${modalOpen ? "modal-visible" : ""}`}
        onClick={closeModal}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={closeModal}>
            <Image
              width={32}
              height={32}
              src="/images/close.svg"
              alt={"Close modal icon"}
              className="close-icon"
            />
          </button>
          <div className="modal-description">
            <p>{modalContent.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
