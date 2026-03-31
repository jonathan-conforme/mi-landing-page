import { useState } from "react";
import { useInView } from 'react-intersection-observer';
import Button from '@mui/material/Button';
import {
  AcademicCapIcon,
  DocumentTextIcon,
  BeakerIcon,
  ClipboardDocumentListIcon,
  CommandLineIcon,
  ArrowTopRightOnSquareIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";

export function Services() {
  const [selected, setSelected] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      title: "Tesis",
      desc: "Desarrollamos tu trabajo de titulación completo.",
      fullDesc: "Elaboramos tu tesis completa con investigación rigurosa, redacción académica profesional y estructura formal, garantizando un trabajo listo para su presentación.",
      icon: AcademicCapIcon,
    },
    {
      title: "Trabajos Académicos",
      desc: "Desarrollo de tareas y proyectos académicos.",
      fullDesc: "Realizamos trabajos académicos con redacción clara, estructura adecuada y cumplimiento de normas APA 7ª edición, utilizando herramientas como Mendeley.",
      icon: DocumentTextIcon,
    },
    {
      title: "Artículos Científicos",
      desc: "Redacción y revisión para publicación.",
      fullDesc: "Desarrollamos artículos científicos con enfoque investigativo, metodología sólida y redacción académica orientada a publicación.",
      icon: BeakerIcon,
    },
    {
      title: "Proyectos de Grado",
      desc: "Desarrollo de proyectos escolares.",
      fullDesc: "Elaboramos proyectos de grado con estructura académica completa, contenido original y enfoque claro, adaptado a los requisitos institucionales.",
      icon: ClipboardDocumentListIcon,
    },
    {
      title: "Sistemas & SaaS",
      category: "Ingeniería",
      desc: "Software funcional y arquitectura profesional.",
      fullDesc: "Desarrollo integral de plataformas SaaS, Web Apps y Móviles con código limpio. Incluimos documentación técnica (DER, Diccionario de Datos), despliegue en la nube y asesoría para la defensa técnica.",
      portfolioLink: "https://jonathan-conforme.github.io/jonathan-conforme/html/", 
      icon: CommandLineIcon,
      // Stack extendido con colores representativos
      techStack: [
        { name: "HTML5", color: "bg-orange-500" },
        { name: "CSS3", color: "bg-blue-500" },
        { name: "JS", color: "bg-yellow-400 text-black" },
        { name: "React", color: "bg-cyan-400 text-black" },
        { name: "Laravel", color: "bg-red-600" },
        { name: "Node.js", color: "bg-green-600" },
        { name: "Tailwind", color: "bg-teal-400 text-black" },
        { name: "Bootstrap", color: "bg-purple-600" },
        { name: "AJAX", color: "bg-blue-700" },
        { name: "MySQL", color: "bg-blue-800" },
        { name: "PostgreSQL", color: "bg-indigo-700" },
        { name: "Git", color: "bg-orange-600" },
        { name: "GitHub", color: "bg-gray-800" },
        { name: "Navicat", color: "bg-red-500" }
      ],
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div ref={ref} className={`mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Servicios de <span className="text-indigo-600">EduTask Academic</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Soluciones profesionales en investigación y tecnología de vanguardia.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`${inView ? `animate__animated animate__fadeInUp` : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="group h-full flex flex-col justify-between rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-b-4 hover:border-b-indigo-500">
                  <div>
                    <div className="inline-flex items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-900/30 p-3 mb-6 transition-colors group-hover:bg-indigo-600">
                      <Icon className="h-7 w-7 text-indigo-600 dark:text-indigo-400 group-hover:text-white" />
                    </div>
                    
                    {service.category && (
                        <span className="block text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em] mb-2">{service.category}</span>
                    )}
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{service.desc}</p>
                    
                    {/* Renderizado de Tecnologías con Colores */}
                    {service.techStack && (
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {service.techStack.map(tech => (
                          <span 
                            key={tech.name} 
                            className={`${tech.color} text-white text-[9px] px-2 py-0.5 rounded font-bold shadow-sm transform transition-transform hover:scale-110 cursor-default uppercase`}
                          >
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                    <button
                      onClick={() => setSelected(service)}
                      className="cursor-pointer text-indigo-600 dark:text-indigo-400 text-sm font-bold hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors flex items-center gap-1 group/btn"
                    >
                      Ver detalles 
                      <span className="block w-0 h-0.5 bg-indigo-600 transition-all group-hover/btn:w-4"></span>
                    </button>
                    
                    {service.portfolioLink && (
                      <a 
                        href={service.portfolioLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-indigo-600 transition-colors"
                      >
                        Portafolio <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL FUNCIONAL */}
      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-md cursor-pointer" onClick={() => setSelected(null)}></div>
          
          <div className="relative bg-white dark:bg-gray-800 rounded-[2.5rem] p-10 max-w-lg w-full shadow-2xl animate__animated animate__zoomIn animate__faster border border-gray-100 dark:border-gray-700">
            <button 
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 dark:hover:text-white cursor-pointer transition-transform hover:rotate-90"
            >
                <XMarkIcon className="h-7 w-7" />
            </button>

            <div className="flex items-center gap-5 mb-8">
                 <div className="p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl">
                    <selected.icon className="h-10 w-10 text-indigo-600" />
                 </div>
                 <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{selected.title}</h3>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-10">
                {selected.fullDesc}
            </p>

            <div className="space-y-4">
                <Button 
                    variant="contained" 
                    fullWidth 
                    size="large"
                    onClick={() => {
                        const msg = encodeURIComponent(`Hola EduTask Academic, me interesa el servicio de ${selected.title}. Vi que manejas tecnologías como Git, React y Laravel.`);
                        window.open(`https://wa.me/593980659712?text=${msg}`, '_blank');
                    }}
                    sx={{ 
                        borderRadius: '20px', 
                        textTransform: 'none', 
                        fontWeight: 'bold', 
                        py: 2,
                        fontSize: '1.1rem',
                        backgroundColor: '#4f46e5',
                        cursor: 'pointer',
                        boxShadow: '0 10px 15px -3px rgba(79, 70, 229, 0.4)',
                        '&:hover': { backgroundColor: '#4338ca', boxShadow: '0 20px 25px -5px rgba(79, 70, 229, 0.4)' }
                    }}
                >
                    Solicitar presupuesto
                </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}