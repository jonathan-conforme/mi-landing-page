// src/components/Hero.jsx
export const Hero = () => {
    return (
        <div id="Servicios" className="animate__animated animate__jello relative isolate lg:px-8 dark:bg-gray-800 px-6 bg-white transition-colors duration-300">
            {/* Fondo degradado suave (opcional, le da un toque extra elegante) */}
            {/* Añade pointer-events-none aquí */}
            <div
                className=" absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none"
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
  <div className="mx-auto max-w-2xl pt-10 pb-5 sm:pt-16 sm:pb-16 lg:pt-24 text-center">
    
    {/* Badge: Ahora resalta más y tiene soporte para modo oscuro */}
    <div className="mb-8 flex justify-center">
        <div className="relative rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium text-indigo-700 bg-indigo-50 ring-1 ring-inset ring-indigo-600/20 hover:bg-indigo-100 dark:text-indigo-300 dark:bg-indigo-900/30 dark:ring-indigo-500/30 transition-colors cursor-pointer">
            🔥 20% de descuento en tu primer proyecto
        </div>
    </div>

    {/* Título principal (Heading) */}
    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
        Tu Éxito Académico <br className="hidden sm:block" />
        <span className="text-indigo-600 relative">Sin Estrés</span>
    </h1>

    {/* Párrafo descriptivo */}
    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
        Nos encargamos de investigar, redactar y estructurar tu tesis, artículos científicos y trabajos universitarios. Te entregamos documentos listos para presentar, 100% libres de plagio.
    </p>

    {/* Botones de acción (CTA) */}
    <div className="relative z-10 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
        <a
            href="https://wa.me/593980659712?text=Hola%20quiero%20cotizar%20mi%20proyecto"
                                    target="_blank"
            className="w-full sm:w-auto rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-all hover:-translate-y-1"
        >
            Cotizar mi proyecto
        </a>
        <a
            href="#servicios"
            className="w-full sm:w-auto rounded-full bg-white dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 px-8 py-3.5 text-sm font-semibold text-gray-900 dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
        >
            Ver servicios
        </a>
    </div>
</div>
        </div>
        


    );
};