import { useInView } from 'react-intersection-observer';

export function Features() {

  const stats = [
    { number: '316+', label: 'Trabajos Académicos' },
    { number: '100%', label: 'Aprobación Garantizada', highlight: true },
    { number: '15+', label: 'Líneas de Investigación' },
    { number: '0%', label: 'Índice de Plagio (Compilatio)' },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="nosotros" className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >

          {/* IZQUIERDA */}
          <div
            className={`transition-all duration-700 ease-out
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Nosotros
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Hemos ayudado a cientos de estudiantes a superar sus retos académicos con metodologías probadas y atención personalizada 24/7.
            </p>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-2xl flex flex-col justify-center transition-all duration-700 ease-out hover:scale-105
                  ${stat.highlight
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-100 dark:border-gray-700'
                    }
                  ${inView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                    }`}
                  style={{
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  <span className="text-3xl font-bold">{stat.number}</span>
                  <span className={`text-sm mt-2 ${stat.highlight ? 'text-indigo-100' : 'text-gray-500 dark:text-gray-400'}`}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* DERECHA (IMÁGENES) */}
          <div
            className={`relative transition-all duration-1000 ease-out
            ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="grid grid-cols-2 gap-4">

              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400"
                  alt="Estudiante 1"
                  className="rounded-3xl object-cover h-64 w-full shadow-lg transition duration-500 hover:scale-105"
                />
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400"
                  alt="Estudiante 2"
                  className="rounded-3xl object-cover h-48 w-full shadow-lg transition duration-500 hover:scale-105"
                />
              </div>

              <div className="pt-12 space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=400"
                  alt="Asesoría"
                  className="rounded-3xl object-cover h-80 w-full shadow-lg transition duration-500 hover:scale-105"
                />
              </div>

            </div>

            {/* CÍRCULO */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex h-24 w-24 items-center justify-center rounded-full bg-indigo-600 border-8 border-white dark:border-gray-900 shadow-xl transition-all duration-700
              ${inView ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
              style={{ transitionDelay: '500ms' }}
            >
              <span className="text-white font-bold text-center text-[10px] leading-tight">
                100%<br />CALIDAD
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}