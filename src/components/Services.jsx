import { useState } from "react";
import { useInView } from 'react-intersection-observer';

import {
  AcademicCapIcon,
  DocumentTextIcon,
  BeakerIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

export function Services() {
  const [selected, setSelected] = useState(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "Tesis",
      desc: "Desarrollamos tu trabajo de titulación completo, listo para presentar.",
      fullDesc:
        "Elaboramos tu tesis completa con investigación rigurosa, redacción académica profesional y estructura formal, garantizando un trabajo listo para su presentación.",
      icon: AcademicCapIcon,
    },
    {
      title: "Trabajos Académicos",
      desc: "Desarrollo de tareas y proyectos académicos.",
      fullDesc:
        "Realizamos trabajos académicos con redacción clara, estructura adecuada y cumplimiento de normas APA 7ª edición, utilizando herramientas como Mendeley para la correcta gestión de referencias.",
      icon: DocumentTextIcon,
    },
    {
      title: "Artículos Científicos",
      desc: "Redacción y revisión para publicación.",
      fullDesc:
        "Desarrollamos artículos científicos con enfoque investigativo, metodología sólida y redacción académica orientada a publicación en revistas especializadas.",
      icon: BeakerIcon,
    },
    {
      title: "Proyectos de Grado",
      desc: "Desarrollo de proyectos escolares.",
      fullDesc:
        "Elaboramos proyectos de grado con estructura académica completa, contenido original y enfoque claro, adaptado a los requisitos institucionales.",
      icon: ClipboardDocumentListIcon,
    },
  ];

  return (
   <section id="servicios" className="py-20 bg-gray-100 dark:bg-gray-900 overflow-hidden">
      <div 
        ref={ref} // 3. El láser apunta aquí
        className={`mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
      >

        {/* HEADER */}
        <div className={`text-center max-w-2xl mx-auto ${inView ? 'animate__animated animate__fadeInDown' : ''}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Servicios de <span className="text-indigo-600">EduTask Academic</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Soluciones profesionales en investigación y tecnología.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div
                key={service.title}
                // 4. Agregamos un delay pequeño a cada tarjeta para que aparezcan en cascada
                className={`${inView ? `animate__animated animate__fadeInUp` : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="group h-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 transition duration-300 hover:shadow-xl hover:-translate-y-2">
                  <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4 transition group-hover:scale-110" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{service.desc}</p>
                  <button
                    onClick={() => setSelected(service)}
                    className="mt-4 text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline flex items-center gap-1"
                  >
                    Ver detalles <span>→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL (Se mantiene igual) */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelected(null)}></div>
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-lg w-full shadow-2xl animate__animated animate__zoomIn animate__faster">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selected.title}</h3>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{selected.fullDesc}</p>
            <button
              onClick={() => setSelected(null)}
              className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 dark:shadow-none"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </section>
  );
}