import 'animate.css';
import { Link } from "react-router-dom";
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon, SunIcon, MoonIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

// Navegación actualizada para tu negocio
const navigation = {
    pages: [
        { name: 'Inicio', href: '/#nav' },
        { name: 'Servicios', href: '/#servicios' },
        { name: 'Cómo trabajamos', href: '/#trabajo' },
        { name: 'Testimonios', href: '/#testimonios' },
        { name: 'Nosotros', href: '/#nosotros' },
        { name: 'Precios', href: '/precios' },
        { name: 'Equipo', href: '/equipo' },
        

    ],
}

export function Navbar() {
    const [open, setOpen] = useState(false)




    return (
        // Añadido dark:border-gray-800 para que la línea divisoria no brille en modo oscuro
        <div className="bg-white border-b border-gray-100 dark:bg-gray-800 dark:border-gray-900 transition-colors duration-300 dark:text-white">

            {/* Mobile menu */}
            <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
                <DialogBackdrop transition className="fixed inset-0 bg-black/25 transition-opacity" />
                <div className="fixed inset-0 z-40 flex">
                    {/* Añadido dark:bg-gray-900 para que el menú móvil sea oscuro */}
                    <DialogPanel transition className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white dark:bg-gray-900 pb-12 shadow-xl transition-colors duration-300">
                        <div className="flex px-4 pt-5 pb-2">
                            <button type="button" onClick={() => setOpen(false)} className="p-2 text-gray-400">
                                <XMarkIcon className="size-6" />
                            </button>
                        </div>
                        <div className="space-y-6 px-4 py-6">
                            {navigation.pages.map((page) => (
                                <div key={page.name} className="flow-root">
                                    {/* Añadido dark:text-gray-200 */}
                                    <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900 dark:text-gray-200 " onClick={() => setOpen(false)}>
                                        {page.name}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

            <header className="animate__animated animate__flipInX relative bg-white dark:bg-gray-900 transition-colors duration-300">
                <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">

                        {/* Botón Móvil */}
                        <button type="button" onClick={() => setOpen(true)} className="lg:hidden p-2 text-gray-400">
                            <Bars3Icon className="size-6" />
                        </button>

                        {/* Logo Izquierda */}
                        <div className="flex lg:ml-0 items-center gap-2">
                            <a href="#" className="flex items-center gap-2">
                                <AcademicCapIcon className="h-8 w-auto text-indigo-600" />
                                {/* Texto del logo adaptado para modo dark */}
                                <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">
                                    EducaTask Academic
                                </span>
                            </a>
                        </div>

                        {/* Enlaces Centrales (Desktop) */}
                        <div className="hidden lg:flex lg:space-x-8">
                            {navigation.pages.map((item) => (
                                item.href.startsWith('/') ? (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className="text-sm font-medium hover:text-indigo-600"
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-sm font-medium hover:text-indigo-600"
                                    >
                                        {item.name}
                                    </a>
                                )
                            ))}
                        </div>

                        <div className="flex items-center space-x-6">


                            {/* BOTÓN WHATSAPP OFICIAL */}
                            <div className="flex">
                                <a
                                    href="https://wa.me/593980659712?text=Hola%20quiero%20cotizar%20mi%20proyecto"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center p-2 transition-all duration-300"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        // dark:fill-gray-300 añadido
                                        className="size-6 fill-gray-400 dark:fill-gray-300 group-hover:fill-[#25D366] transition-colors duration-300"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    {/* dark:text-gray-300 añadido */}
                                    <span className="hidden md:block ml-2 text-xs font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300 group-hover:text-[#25D366]">
                                        WhatsApp
                                    </span>
                                </a>
                            </div>


                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}