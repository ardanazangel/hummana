import "../FourPillars/four-pillars.css";
import FourPillarsModule from "./FourPillarsModule";

export default function FourPillars() {
  return (
    <section>
      <div className="four-pillars__wrapper">
        <FourPillarsModule
          title={"Relationships"}
          source={"relationships"}
          subtitle={
            "LA CALIDAD DE NUESTRAS RELACIONES  DETERMINA LA CALIDAD DE NUESTRA VIDA."
          }
          content={
            "«Intimar» significa «dar a conocer» o «revelar». Este elemento de revelación señala por qué la intimidad provoca en nosotros una reacción ambigua: mostrar nuestra verdadera esencia a los demás puede ser un desafío. Es necesario entender la raíz de nuestros patrones relacionales. ¿Por qué se repiten y cómo liberarnos de ellos? Así como desarrollar las habilidades fundamentales para crear relaciones sanas, sostenibles y duraderas. Las relaciones personales nos muestran a menudo conflictos internos propios. Afrontarlos de forma no reactiva nos proporciona aprendizajes profundos para nuestro crecimiento personal. Con HUMMANA mentorship entrarás en un proceso de desarrollo y crecimiento personal para crear espacios de intimidad afines y conscientes."
          }
          skill={
            "DESARROLLAR CAPACIDADES SOCIALES / CONSTRUIR RELACIONES COMPATIBLES CON TU ESENCIA"
          }
        />
        <FourPillarsModule
          title={"Career"}
          source={"career"}
          subtitle={
            "NO SON NUESTRAS CREDENCIALES, SINO NUESTRO COMPROMISO CON UN PROPÓSITO SUPERIOR LO QUE HACE QUE NUESTRA CARRERA SEA EFICIENTE PARA EL MUNDO."
          }
          content={
            "Muchas personas no saben cómo identificar un trabajo afín a su verdadera naturaleza. Y si, tal vez, lo han encontrado, no han descubierto la conexión entre su profesión y su humanidad.  La llave para desarrollar una carrera «exitosa» es darte cuenta de que no es algo aparte, sino una extensión de tu vida; un  reflejo de ti mismo, de tu personalidad. Incorporar tu esencia en el trabajo es fundamental para desarrollar una carrera significativa y enriquecedora. Con HUMMANA mentorship entrarás en un proceso de desarrollo personal para descubrir tus talentos profesionales únicos y lograrás:  Transformar tu visión personal en una realidad próspera.  Fortalecer tu mentalidad y tu determinación para aterrizar los objetivos personales. Consolidar tus habilidades de liderazgo para llevar a cabo proyectos personales y de emprendimiento con éxito y claridad. "
          }
          skill={"DESARROLLAR TU TALENTO ÚNICO EN EL CAMPO PROFESIONAL."}
        />
        <FourPillarsModule
          title={"Wealth"}
          source={"wealth"}
          subtitle={
            "«HAY PERSONAS TAN POBRES QUE LO ÚNICO QUE TIENEN ES DINERO». Bob Marley."
          }
          content={
            "El dinero es una herramienta de la consciencia. Por lo tanto, nuestro estado de consciencia determina nuestra forma de verlo, cómo lo ganamos y para qué lo usamos. Una vez que eres capaz de conectar tu consciencia con el dinero, estarás dando un paso correcto. La situación en la que te encuentras, ha sido creada por la mente. Las apariencias físicas de una casa, un trabajo, un sueldo, una cuenta bancaria, son el resultado de un estado particular de consciencia. A través de HUMMANA mentorship obtendrás el conocimiento para profundizar la correlación entre el dinero y tu consciencia. Desarrollarás las habilidades necesarias para restaurar tu balance de riqueza interno. "
          }
          skill={
            "RESTAURAR LA RIQUEZA INTERNA PARA TUS LOGROS PERSONALES Y PROFESIONALES"
          }
        />
        <FourPillarsModule
          title={"Health"}
          source={"health"}
          subtitle={
            "EL MAYOR PODER QUE SE NOS HA DADO ES EL PODER DE CAMBIAR NUESTRA MENTE."
          }
          content={
            "Para vivir un estilo de vida saludable es importante tener en cuenta que nuestra genética es el hardware (el 5-20% de lo que no podemos reemplazar); y nuestro entorno y estilo de vida son el software (el 85-95% que está bajo nuestro control a través de nuestros pensamientos, elecciones personales y conductas). El autocuidado implica asumir el 95% de las decisiones que están bajo nuestro control. Uno de los grandes problemas de los seres humanos es que somos expertos en rendirnos ante las exigencias del mundo exterior y no escuchar nuestro mundo interior. Para cuidarnos es de vital importancia desarrollar una «Practice foundation» para nuestro día a día y así optimizar las funciones de nuestro cuerpo. El objetivo de HUMMANA mentorship es desarrollar una base práctica de bienestar con técnicas para superar el estrés y calmar la ansiedad. Alcanzando la estabilidad y el balance interior."
          }
          skill={"TÉCNICAS PARA CALMAR LA MENTE Y SUPERAR EL ESTRÉS."}
        />
      </div>
    </section>
  );
}
