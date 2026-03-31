import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export function Precios() {
    const planes = [
        {
            nombre: "Tesis Completa",
            precio: "350",
            descripcion: "Desarrollo completo de tu tesis, desde cero hasta final.",
            caracteristicas: ["Redacción completa", "Gestor Bibliográfico Mendeley", "Formato APA actualizado", "Correcciones incluidas", "Entrega lista para revisión", "Avances por etapas"],
            popular: false
        },
        {
            nombre: "Sistemas & SaaS",
            precio: "450", // Precio base sugerido para software
            descripcion: "Desarrollo de software funcional para proyectos técnicos.",
            caracteristicas: ["Arquitectura de Software", "Base de Datos incluida", "Frontend & Backend", "Manual de Usuario / DER", "Despliegue (Hosting)", "Código fuente original"],
            popular: true // Ahora este destaca como tu especialidad técnica
        },
        {
            nombre: "Artículo + Publicación",
            precio: "350",
            descripcion: "Nos encargamos de todo el proceso de publicación.",
            caracteristicas: ["Redacción Completa", "Formato académico \"APA\"", "Revisión Antiplagio", "Correciones incluidas", "Gestión de Publicación"],
            popular: false 
        },
        {
            nombre: "Trabajos Académicos",
            precio: "20",
            descripcion: "Ensayos, informes y tareas específicas.",
            caracteristicas: ["Uso de Mendeley", "Redacción original", "Formato APA 7ma Ed.", "Referencias Bibliográficas", "Correcciones rápidas"],
            popular: false
        }
    ];

    return (
        <section className="bg-white dark:bg-gray-900 py-12 transition-colors duration-300">
            <div className="container px-6 py-8 mx-auto">
                <div className="text-center sm:text-left">
                    <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl dark:text-gray-100">
                        Planes claros, <span className="text-indigo-600">resultados garantizados</span>
                    </h2>
                    <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl">
                        Desde investigación académica hasta implementación de software profesional.
                    </p>
                </div>

                {/* He cambiado xl:grid-cols-4 para que entren los 4 planes cómodamente */}
                <div className="grid gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {planes.map((plan, index) => (
                        <div 
                            key={index}
                            className={`flex flex-col justify-between px-6 py-8 transition-all duration-300 transform border rounded-2xl 
                                ${plan.popular 
                                    ? 'bg-gray-50 dark:bg-gray-800 border-indigo-500 shadow-xl scale-105 z-10' 
                                    : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-indigo-300 hover:scale-[1.02]'
                                }`}
                        >
                            <div>
                                {plan.popular && (
                                    <span className="px-3 py-1 text-xs font-semibold text-white bg-indigo-500 rounded-full uppercase tracking-wider">
                                        Recomendado
                                    </span>
                                )}
                                <p className={`text-lg font-bold mt-2 ${plan.popular ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-800 dark:text-gray-100'}`}>
                                    {plan.nombre}
                                </p>

                                <h4 className="mt-4 text-4xl font-bold text-gray-800 dark:text-gray-100">
                                    ${plan.precio} 
                                    <span className="text-base font-normal text-gray-500 dark:text-gray-400">/ Desde</span>
                                </h4>

                                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed min-h-[40px]">
                                    {plan.descripcion}
                                </p>

                                <div className="mt-8 space-y-4">
                                    {plan.caracteristicas.map((item, i) => (
                                        <div key={i} className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="mx-3 text-sm text-gray-700 dark:text-gray-300">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-10">
                                <Button 
                                    variant={plan.popular ? "contained" : "outlined"} 
                                    fullWidth 
                                    sx={{ 
                                        borderRadius: '12px', 
                                        textTransform: 'none', 
                                        fontWeight: 'bold',
                                        py: 1.5,
                                        cursor: 'pointer', // La manito que pediste
                                        backgroundColor: plan.popular ? '#6366f1' : 'transparent',
                                        '&:hover': {
                                            backgroundColor: plan.popular ? '#4f46e5' : 'rgba(99, 102, 241, 0.04)',
                                            borderColor: '#6366f1'
                                        }
                                    }}
                                    onClick={() => {
                                        const msg = encodeURIComponent(`Hola EduTask Academic, me gustaría cotizar el plan: ${plan.nombre}`);
                                        window.open(`https://wa.me/980659712?text=${msg}`, '_blank');
                                    }}
                                >
                                    Cotizar ahora
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}