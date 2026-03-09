export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900  border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {/* Aquí puedes poner iconos de Instagram, Facebook o LinkedIn */}
          <span className="text-gray-400 text-sm">Síguenos en redes</span>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} AsesoríaPro. Todos los derechos reservados. <br className="md:hidden" />
            <span className="ml-2 font-medium">Calidad Académica Garantizada.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}