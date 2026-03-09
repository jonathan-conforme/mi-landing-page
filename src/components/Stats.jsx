const timelineData = [
    {
        date: 'Paso 1',
        title: 'CONTACTO INICIAL',
        content:
            'El cliente se comunica con nosotros mediante WhatsApp, formulario o correo para contarnos sobre su proyecto o necesidad académica.',
        link: 'Solicitar Información →',
    },
    {
        date: 'Paso 2',
        title: 'ANÁLISIS DEL PROYECTO',
        content:
            'Revisamos los requerimientos del trabajo, el alcance y la complejidad del proyecto para ofrecer la mejor solución.',

    },
    {
        date: 'Paso 3',
        title: 'COTIZACIÓN Y PROPUESTA',
        content:
            'Se envía una propuesta clara con precio, tiempos de entrega y condiciones del servicio.',

    },
    {
        date: 'Paso 4',
        title: 'INICIO DEL PROYECTO',
        content:
            'Una vez aprobado el presupuesto se solicita el primer abono para comenzar el desarrollo del trabajo.',

    },
    {
        date: 'Paso 5',
        title: 'REVISIONES Y CORRECIONES',
        content:
            'Durante el proceso se entregan avances para revisión y se realizan correcciones según las indicaciones del cliente.',

    },
    {
        date: 'Paso 6',
        title: 'ENTREGA FINAL',
        content:
            'Se entrega el proyecto final listo para presentar y se realiza el pago restante del servicio.',

    },

];

export function Stats() {
    return (
        <section id="trabajo" className="py-16 bg-white dark:bg-gray-900 transition-colors">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        CÓMO TRABAJAMOS
                    </h1>
                    
                </div>

                {/* Timeline */}
                <div className="relative">

                    {/* Línea vertical */}
                    <div className="absolute left-4 lg:left-1/2 top-0 h-full w-[2px] bg-gray-200 dark:bg-gray-700 transform lg:-translate-x-1/2" />

                    <div className="space-y-4">
                        {timelineData.map((item, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col lg:flex-row items-start lg:items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                                    }`}
                            >

                                {/* Punto */}
                                <div className="hover:shadow-2xl absolute left-4 lg:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-white dark:border-gray-900 shadow-md z-10" />

                                {/* Contenido */}
                                <div className="ml-12 lg:ml-0 lg:w-1/2 lg:px-12">

                                    {/* Fecha */}
                                    <span className="inline-block mb-3 px-4 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r from-indigo-500 to-purple-600">
                                        {item.date}
                                    </span>

                                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition">

                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                            {item.title}
                                        </h3>

                                        <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                            {item.content}
                                        </p>

                                        <a
                                            href="https://wa.me/593980659712?text=Hola%20quiero%20información%20sobre%20mi%20proyecto"
                                            className="inline-block mt-6 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                                        >
                                            {item.link}
                                        </a>

                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
                {/* CTA */}
                <div className="mt-20 flex flex-col items-center text-center">

                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-xl">
                        ¿Listo para empezar tu proyecto? Escríbenos y te responderemos en pocos minutos.
                    </p>

                    <a
                        href="https://wa.me/593980659712?text=Hola%20quiero%20información%20sobre%20mi%20proyecto"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Solicitar Asesoría por WhatsApp
                    </a>

                    <span className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                        Respuesta rápida • Consulta gratuita
                    </span>

                </div>
            </div>
        </section>
    );
}
