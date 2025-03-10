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
        <h5 className="uppercase">{subtitle}</h5>
        <p>{description}</p>
        {/* <h4 className="uppercase">Action Plan</h4>
        <p>{actionDescription}</p> */}
        {/* <p className="uppercase" style={{ textDecoration: "underline" }}>
          Saber más
        </p> */}
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
        "Respiramos 20 mil veces al día y la forma en que lo hacemos afecta nuestro sistema nervioso e inmunológico.",
      fullDescription: `La mente y la respiración van de la mano. Cuando la respiración está fuera de balance, también lo está la mente y viceversa. La respiración es una práctica de bienestar para despejar la mente y el cuerpo y para entrar, de manera efectiva, al momento presente.
      Durante las sesiones de HUMMANA breathwork, aprenderás a consolidar una práctica de respiración para aplicar a tu día a día. La constancia de este hábito te dará la base para regular tu sistema nervioso y para mejorar significativamente tu bienestar físico, mental y emocional. 
      Cuanto más entiendas tu respiración, mejor sabrás gestionarla y adaptarla a cualquier situación.
      HUMMANA breathwork incorpora técnicas intrínsecas para acceder a tu estado mental. El breathwork es efectivo y se utiliza para desbloquear estados mentales estancados y liberar emociones reprimidas. `,
      actionDescription:
        "Implementar el breathwork para reducir ansiedad, dispersión mental y regresar al momento presente.",
    },
    {
      title: "Meditation",
      subtitle: "Convierte la meditación en tu estado natural.",
      description:
        "Meditar es mirar nuestro interior para darle lugar y espacio a lo que late en nosotros.",
      fullDescription: `La meditación es una habilidad para la vida. Una vez que la desarrollas, puedes recurrir a ella en cualquier momento. Al principio, el poder de nuestra concentración no es estable, nuestros pensamientos nos dominan. Nos distraemos y perdemos la conciencia de nuestra respiración. Pero con práctica, el poder de nuestra atención se fortalece, nuestra conciencia se enfoca, y lo que permanece es un estado de meditación.
      Este reconocimiento crea la base para una comprensión real de cualquier conflicto o malestar. Cultivar estabilidad emocional es fundamental para lograr tus aspiraciones personales y tus objetivos profesionales. 
      A través de HUMMANA meditation desarrollarás una práctica de meditación auto-suficiente. La intención no es trascender los pensamientos, sino llevar la mirada hacia el interior para darle lugar y espacio a que emerja lo que está latente en ti. `,
      actionDescription:
        "Desarrollar resiliencia emocional para mantener la calma y responder con solidez ante los retos de la vida.",
    },
    {
      title: "Movement",
      subtitle: "El movimiento es medicina.",
      description:
        "El movimiento es fundamental para tu salud, tu longevidad y tu calidad de vida.",
      fullDescription: `El movimiento conecta tu mente con tu cuerpo, te mantiene en el presente. Cuando tu cuerpo está sano y fuerte, tu mente se sintoniza con tu estado interior, elevando la autoconciencia y alineando cada paso que das.
      Estar en equilibrio es encontrar la armonía entre tu profesión y tu estilo de vida. Si cualquiera de estos dos está desequilibrado, tu bienestar se afecta.
      Con HUMMANA movement aprenderás un método con posturas (asanas) para tonificar, revitalizar y oxigenar tu cuerpo. `,
      actionDescription:
        "Integrar a tu vida una base de movimiento sencilla y sólida para impulsar tu vitalidad, plenitud y bienestar mental y emocional.",
    },
    {
      title: "Mindset",
      subtitle: "Fortalece tu mente, resetea tu vida.",
      description:
        "El cambio comienza cuando la respuesta ante lo que nos sucede se basa en una versión actualizada de nosotros mismos.",
      fullDescription: `Vivimos en una sociedad que nos incita a reaccionar. Podemos ser adictos a ciertas maneras de hacer las cosas porque nos sirvieron en el pasado. Sin embargo, el cambio sucede cuando nos damos cuenta de que dicha manera, corresponde a una versión caducada de nosotros mismos. 
      Es crucial educar continuamente nuestra forma de responder ante la vida. Un growth mindset es fundamental en momentos de incertidumbre o de cambio. 
      A través de HUMMANA mindset, desarrollarás tus habilidades de liderazgo, aumentarás tu resiliencia emocional y cultivarás un lenguaje alineado con tus metas y con tus objetivos. `,
      actionDescription:
        "Desarrollar tu capacidad para responder a situaciones desafiantes de formas nuevas y empoderadas, potenciar tu pensamiento creativo y alinear logros personales.",
    },
    {
      title: "Self Knowledge",
      subtitle: "Diseña una vida afín a tu verdadera naturaleza.",
      description:
        "Si no vivimos sintonizados con nuestra esencia, todo lo demás se desequilibra.",
      fullDescription: `El diseño de una vida afín a tu verdadera naturaleza comienza con una comprensión clara de tus valores y de ti mismo. Conocer tus valores humanos es esencial porque te servirán como brújula interna, guiando tus decisiones y acciones. Cada uno de nosotros tiene talentos únicos y especiales, la plenitud reside en encontrarlos y compartirlos con el mundo. Aprender a diferenciar entre éxito y significado es fundamental para diseñar una vida coherente con tu naturaleza. El éxito se mide por los logros externos (estatus, fama, reconocimiento). Sin embargo, el significado proviene de la realización interna y de la armonía entre nuestra vida y nuestros valores personales. Mientras que una vida exitosa trae satisfacción a corto plazo, una vida significativa proporciona plenitud a largo plazo. 
      A través de HUMMANA self-knowledge lograrás dar pasos sólidos hacia una vida en balance y armonía, tomando decisiones y acciones asertivas en tus relaciones, carrera, salud y riqueza.`,
      actionDescription:
        "Serás guiado para diseñar tu propia definición de una vida exitosa y significativa.",
    },
    {
      title: "Self Talk",
      subtitle: "Tu voz tiene poder.",
      description:
        "Tenemos entre 60 mil y 70 mil pensamientos al día, el 80% son negativos.",
      fullDescription: `Nuestros cerebros están programados para la negatividad, lo que desde un punto de vista evolutivo nos ayuda a evaluar las amenazas. Sin embargo, cuando se trata de mejorar nuestro rendimiento, el diálogo interno negativo es perjudicial para el éxito. 
      El diálogo interno es una habilidad altamente efectiva. Practicarla con el fin de desarrollar uno positivo durante momentos de estrés o de adversidad no sólo mejora el rendimiento en esas situaciones, sino que crea un efecto dominó en las cuatro áreas principales de la vida: las relaciones, la carrera, la salud y la riqueza.
      El diálogo interno es esencial para diseñar, conscientemente, una vida que respalde tu verdadera naturaleza. Como cualquier músculo requiere entrenarse para ver los beneficios reales. 
      A través de HUMMANA self-talk, aprenderás a gestionar mejor tu diálogo interno.`,
      actionDescription:
        "Cambiar la forma en que te hablas a ti mismo todos los días, eliminar la duda y transformarte de adentro hacia afuera.",
    },
    {
      title: "Mindfulness",
      subtitle: "El arte del mindfulness.",
      description:
        "Podemos entrenar nuestro cerebro para cambiar reacciones impulsivas por respuestas adecuadas.",
      fullDescription: `El estrés es una condición de la sociedad contemporánea. El mindfulness o la atención plena tiene el poder de transformar la forma en que respondemos a él. La práctica del mindfulness provoca cambios estructurales en el cerebro, lo que se conoce como neuroplasticidad. El cerebro genera nuevas asociaciones neuronales que moldean nuevas formas de respuesta.
      Con HUMMANA mindfulness, desarrollarás la habilidad para mantenerte centrado y presente ante la adversidad.`,
      actionDescription:
        "Cultivar la pausa entre estímulo y respuesta para lograr aquello que te propongas.",
    },
    {
      title: "The creative plan",
      subtitle: "Crea una vida con propósito.",
      description:
        "Al ponerle fecha a un proyecto, se convierte en una meta. Una meta, dividida en pasos, se convierte en un plan. Y un plan, respaldado por acciones, se convierte en una realidad.",
      fullDescription: `Es tan importante tener una visión de lo que quieres para tu vida, como dar los pasos adecuados para lograrlo. Se trata de entrenar la mente para pasar a la acción.`,
      actionDescription:
        "Desarrollar tus habilidades para abordar tu trabajo creativo con conciencia, sensibilidad, disciplina y asertividad.",
    },
  ];

  return (
    <section className="grid__section-wrapper">
      <div className="img" style={{ position: "absolute", zIndex: "-1" }}>
        <Image
          width={1920}
          height={1080}
          src={"/images/mentorship/grid-section.png"}
          alt="Grid steps background image"
        />
      </div>
      <div className="grid__title-wrapper">
        <h2 className="white-type">The Method</h2>
        <h3 className="white-type uppercase">
          8 STEP WELLNESS & SELF DEVELOPMENT FOUNDATION
        </h3>
        <p className="white-type center-type">
          Con HUMMANA the method aprenderás un método que te permitirá conocer,
          en ocho pasos, cómo afrontar cualquier situación de manera asertiva.
          Esta metodología integral materializa la esencia de HUMMANA
          mentorships.
        </p>
      </div>
      <div className="grid__section">
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
      </div>
    </section>
  );
}
