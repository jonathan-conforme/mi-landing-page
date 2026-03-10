export function Services() {
    const services = [
        { title: 'Tesis', desc: 'Asesoría integral en investigación y metodología.' },
        { title: 'Normas APA/7ma', desc: 'Formateo impecable de citas y referencias bibliográficas.' },
        { title: 'Análisis de Plagio', desc: 'Reportes detallados con software Turnitin original.' },
        { title: 'Proyectos de Aula', desc: 'Apoyo en la elaboración de proyectos académicos.' },
        { title: 'Artículos Científicos', desc: 'Redacción y revisión para publicación en revistas.' },
        { title: 'Tareas Complejas', desc: 'Asistencia personalizada para tareas académicas difíciles.' },
        { title: 'Revisión de Contenidos', desc: 'Corrección de estilo, gramática y coherencia.' },
        
    ]

    return (
        <section id="servicios" className="py-16 bg-white dark:bg-gray-900 transition-colors">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 dark:bg-gray-900">
                <div className=" mx-auto max-w-2xl text-center  dark:bg-gray-900">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-900 sm:text-4xl">
                        Servicios Académicos Especializados
                    </h1>
                   
                </div>

                <div className="dark:bg-gray-800 mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="flex flex-col rounded-3xl border transition-all duration-300 p-8 hover:shadow-lg
                       /* MODO CLARO: Fondo blanco o gris muy tenue */
                       bg-white border-gray-200 
                       /* MODO OSCURO: Fondo oscuro real para que contraste */
                       dark:bg-gray-900 dark:border-gray-800 dark:hover:border-indigo-500/50"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {service.title}
                            </h3>
                            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                                {service.desc}
                            </p>
                            <a
                                href="#"
                                className="mt-6 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                            >
                                Saber más <span>→</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}