import { useInView } from 'react-intersection-observer';

import testimonios from '../../assets/images/testimonios.jpeg';
import testimonio3 from '../../assets/images/testimonio3.png';
import jonathan from '../../assets/images/jonathan.jpg';

const team = [
  {
    name: "Ing. Erika Anchundia",
    role: "Especialista en Investigación",
    image: testimonio3,
  },
  {
    name: "Ing. Jonás",
    role: "Fundador & Tech Lead",
    image: jonathan,
  },
  {
    name: "Ing. Adrian Cardenas",
    role: "Metodología y Tesis",
    image: testimonios,
  },
];

export function Team() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id='equipo' className="py-20 bg-gray-100 dark:bg-gray-900">

      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* HEADER */}
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto transition-all duration-700
          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Nuestro Equipo de Trabajo
          </h2>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Profesionales especializados que garantizan calidad, confidencialidad y resultados académicos.
          </p>
        </div>

        {/* MÉTRICAS */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[ 
            { value: "+316", label: "Trabajos realizados" },
            { value: "100%", label: "Clientes satisfechos" },
            { value: "+2 años", label: "Experiencia" },
            { value: "24/7", label: "Soporte" }
          ].map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-700
              ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <p className="text-2xl font-bold text-indigo-600">{item.value}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>

        {/* TEAM */}
        <div className="mt-16 flex flex-wrap justify-center gap-12 lg:gap-16">
          {team.map((member, index) => {

            const { ref: cardRef, inView: visible } = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            return (
              <div
                ref={cardRef}
                key={index}
                className={`group text-center w-full sm:w-auto transition-all duration-700
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >

                <div className="relative mx-auto w-36 h-36">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full shadow-lg transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-full bg-indigo-600/0 group-hover:bg-indigo-600/10 transition"></div>
                </div>

                <h3 className="mt-5 text-sm font-semibold text-gray-900 dark:text-white">
                  {member.name}
                </h3>

                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {member.role}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}