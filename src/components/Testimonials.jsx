import testimonios from '../assets/images/testimonios.jpeg';
const testimonials = [
  {
    name: 'Karan',
    title: 'Estudiante de Derecho',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100', // Unsplash Avatar
    rating: 5,
    text: 'Mi experiencia fue increíble. Recibieron mi proyecto de aula muy rápido y me guiaron en toda la metodología. ¡Aprobé con excelencia y sin observaciones!',
  },
  {
    name: 'Catherine',
    title: 'Licenciatura en Salud',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100', // Unsplash Avatar
    rating: 5,
    text: 'Increíble servicio. Tenía muchas dudas con mi artículo científico y ellos me ayudaron a darle rigor académico y un formato APA impecable. ¡Muy recomendados!',
  },
  {
    name: 'Adrian Cardenas ',
    title: 'Ingeniero en Tecnologías de la Información',
    avatar: testimonios,
    rating: 5,
    text: 'No sabía cómo empezar mi tesis. El cronograma de trabajo me dio orden y el reporte de Compilatio me dejó súper tranquilo. ¡Al fin me gradué!',
  },

];


export function Testimonials() {
  return (
    <section id="testimonios" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Encabezado General (Estilo Trustpilot) */}
        <div className="text-center mb-20 flex flex-col items-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Testimonios
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Tu éxito académico es nuestro compromiso. Cientos de estudiantes confían en nosotros para sus proyectos y tesis.
          </p>
          
          {/* Calificación Simulada */}
          <div className="mt-8 flex flex-col items-center gap-2 border-y border-gray-200 dark:border-gray-800 py-6 w-full max-w-lg">
             <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-3xl text-indigo-600 dark:text-indigo-400 hover:underline">★</span>
                ))}
            </div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
                4.8 / 5 basado en <span className="font-bold">210+</span> reseñas. <span className="text-gray-500 dark:text-gray-400 font-normal">Excelencia Académica</span>
            </p>
          </div>
        </div>

        {/* Grid de Testimonios (Responsive) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="relative flex flex-col justify-between bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              <div>
                {/* Estrellas */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-2xl text-indigo-600 dark:text-indigo-400">★</span>
                  ))}
                </div>
                
                {/* Texto del Testimonio */}
                <p className="text-base leading-7 text-gray-600 dark:text-gray-400 italic">
                  "{t.text}"
                </p>
              </div>

              {/* Info del Cliente */}
              <div className="mt-8 flex items-center gap-4 border-t border-gray-100 dark:border-gray-700 pt-6">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="h-12 w-12 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700" 
                />
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}