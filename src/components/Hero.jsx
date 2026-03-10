// src/components/Hero.jsx
export const Hero = () => {
    return (
        <div id="Servicios" className="relative isolate lg:px-8 dark:bg-gray-900 px-6">
            {/* Fondo degradado suave (opcional, le da un toque extra elegante) */}
            {/* Añade pointer-events-none aquí */}
            <div
                className="dark:bg-gray-900 absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

            {/* Contenido principal */}
            {/* Bajamos el padding superior (pt) drásticamente */}
            <div className="dark:bg-gray-900 mx-auto max-w-2xl pt-10 pb-5 sm:pt-16 sm:pb-16 lg:pt-24 text-center">
                {/* Badge: En móvil se ve centrado y pequeño */}
                <div className="mb-8 flex justify-center">
                    <div className="relative rounded-full px-3 py-1 text-xs sm:text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20  bg-indigo-50/50">
                        🔥 20% Descuento en Proyectos Académicos.
                    </div>
                </div>
                {/* Título principal (Heading) */}
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
                    Asesoría académica  <span className="text-indigo-600 relative">
                        Profesional 

                    </span>{' '}
                    para Tesis, Artículos, Proyectos de Grado.
                </h1>

                {/* Párrafo descriptivo */}
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Te acompañamos en la elaboración de tesis, artículos científicos, proyectos de aula y tareas complejas.
                    Resultados garantizados con rigor académico y total confidencialidad.   </p>

                {/* Botones de acción (CTA) */}
                <div className="relative z-10 mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="#"
                        className="rounded-full border border-gray-300 bg-gray-900 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 
             dark:bg-white dark:hover:bg-white transition-colors"
                    >
                        Cotizar mi proyecto
                    </a>
                    <a
                        href="#"
                        className="rounded-full border border-gray-300 px-8 py-3 text-sm font-semibold shadow-sm 
             /* Modo Claro */
             text-gray-900 bg-white hover:bg-gray-50 
             /* Modo Oscuro */
             dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 
             transition-colors"
                    >
                        Ver servicios
                    </a>
                </div>
            </div>
        </div>
    );
};