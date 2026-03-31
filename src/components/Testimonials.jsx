import { useInView } from 'react-intersection-observer';
import mory_mora from '../assets/images/mory_mora.jpg';
import testimonio2 from '../assets/images/testimonio2.jpeg';
import testimonio_jami from '../assets/images/testimonio_jami.png';
import testimonio4 from '../assets/images/testimonio4.jpg';
import testimonio_ana from '../assets/images/testimonio_ana.png';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";

dayjs.extend(relativeTime);
dayjs.locale("es");

const testimonials = [
  {
    name: 'Jamileth Denisse',
    title: 'Ingeniera en Tecnologías de la Información - UNESUM',
    avatar: testimonio_jami,
    rating: 5,
    text: 'Me ayudaron con mi estudio de caso para Ingeniería en TIC. El trabajo quedó bien estructurado y con buena metodología. Gracias a su apoyo obtuve una excelente calificación.',
    fecha: "2025-12-10"
  },
  {
    name: 'Ashley Perez',
    title: 'Bachiller en Informática - Colegio Eduardo Granja Garcés',
    avatar: testimonio2,
    rating: 5,
    text: 'Excelente trabajo. Me ayudaron con mi proyecto de grado en la especialidad de Informática. Todo quedó muy bien explicado y presentado, lo que me permitió graduarme sin problemas. ¡Totalmente recomendados!',
    fecha: "2026-01-18"
  },
  {
    rating: 5,
    text: 'Nos brindaron un excelente apoyo en nuestro proyecto grupal de nivelación. El trabajo fue entregado por etapas, con revisiones constantes y correcciones oportunas hasta dejarlo completamente listo para su presentación final.',
    name: 'Grupo de Estudiantes',
    avatar: null,
    title: 'Ingeniería Civil - Nivelación Académica UNESUM',
    fecha: "2026-02-23"
  },
  {
    name: 'Mary Mora',
    title: 'Estudiante de Ingeniería Civil - UNESUM',
    avatar: mory_mora,
    rating: 5,
    text: 'Delegar la investigación de mis trabajos grupales fue la mejor decisión. Te entregan todo bien estructurado, con reportes de originalidad y listo para presentar. ¡100% recomendados!.',
    fecha: "2026-01-24"
  },
  {
    name: 'Delgado Nohelia, Peñafiel Jemima',
    title: 'Bachiller en Ciencias - Colegio Eduardo Granja Garcés.',
    avatar: testimonio4,
    rating: 5,
    text: 'Nuestro proyecto de grado quedó bien estructurado y con buena investigación. Pudimos defenderlo sin problemas.',
    fecha: "2026-02-09"
  },
  {
    name: 'Ana Delgado',
    title: 'Ingeniera en Tecnologías de la Información - UNESUM',
    avatar: testimonio_ana,
    rating: 5,
    text: 'Me ayudaron con mi proyecto de Titulación, También en la implementación de Un Sistema. El trabajo quedó muy bien explicado y presentado, lo que me permitió graduarme sin problemas. ¡Totalmente recomendados!',
    fecha: "2026-03-05"
  }
];

export function Testimonials() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const getInitials = (name) => {
    return name
      .split(" ")
      .map(word => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  // Componente interno para evitar repetir el diseño del Card
  const TestimonialCard = ({ t, index }) => {
    const { ref: cardRef, inView: cardVisible } = useInView({
      triggerOnce: true,
      threshold: 0.2,
    });

    return (
      <div
        ref={cardRef}
        className={`w-full max-w-sm flex flex-col justify-between bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md transition-all duration-700 ease-out hover:shadow-xl hover:-translate-y-1 hover:border-indigo-500/40
        ${cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ transitionDelay: `${index * 200}ms` }}
      >
        <div>
          <div className="flex gap-1 mb-3">
            {[...Array(t.rating)].map((_, i) => (
              <span key={i} className="text-indigo-600 text-lg">★</span>
            ))}
          </div>

          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            "{t.text}"
          </p>
          
          {/* DIFF FOR HUMAN ACTIVO AQUÍ */}
          {t.fecha && (
            <span className="text-[10px] font-medium uppercase tracking-wider text-indigo-500 dark:text-indigo-400 mt-3 block">
              Publicado {dayjs(t.fecha).fromNow()}
            </span>
          )}
        </div>

        <div className="mt-6 flex items-center gap-3 border-t border-gray-200 dark:border-gray-700 pt-4">
          {t.avatar ? (
            <img
              src={t.avatar}
              alt={t.name}
              className="h-10 w-10 rounded-full object-cover border border-gray-300 dark:border-gray-700"
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-bold">
              {getInitials(t.name)}
            </div>
          )}

          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              {t.name}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {t.title}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="testimonios" className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        
        {/* HEADER */}
        <div
          ref={ref}
          className={`text-center mb-16 flex flex-col items-center transition-all duration-700
          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Testimonios
          </h2>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 max-w-xl">
            La confianza de nuestros estudiantes respalda la calidad de nuestro trabajo académico.
          </p>
          <div className="mt-6 flex flex-col items-center gap-2 border-y border-gray-200 dark:border-gray-800 py-4 w-full max-w-md">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-xl text-indigo-600">★</span>
              ))}
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              4.8 / 5 basado en <span className="font-semibold">210+</span> reseñas
            </p>
          </div>
        </div>

        {/* FILA 1 - 3 TESTIMONIOS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {testimonials.slice(0, 3).map((t, index) => (
            <TestimonialCard key={index} t={t} index={index} />
          ))}
        </div>

        {/* FILA 2 - CENTRADA */}
        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          {testimonials.slice(3).map((t, index) => (
            <TestimonialCard key={index + 3} t={t} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}