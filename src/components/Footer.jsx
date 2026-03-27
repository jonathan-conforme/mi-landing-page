/* ================= ICONOS ================= */
import tiktokIcon from '../assets/images/tiktok-logo.png';
const TikTok = (props) => (
  <svg {...props} viewBox="0 0 352.28 398.67" fill="currentColor">
    <path d="M137.17 156.98v-15.56c-5.34-.73-10.76-1.18-16.29-1.18C54.23 140.24 0 194.47 0 261.13c0 40.9 20.43 77.09 51.61 98.97-20.12-21.6-32.46-50.53-32.46-82.31 0-65.7 52.69-119.28 118.03-120.81Z" />
    <path d="M140.02 333c29.74 0 54-23.66 55.1-53.13l.11-263.2h48.08c-1-5.41-1.55-10.97-1.55-16.67h-65.67l-.11 263.2c-1.1 29.47-25.36 53.13-55.1 53.13-9.24 0-17.95-2.31-25.61-6.34C105.3 323.9 121.6 333 140.02 333Z" />
  </svg>
);

const Instagram = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm5 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm6.5-.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z" />
  </svg>
);

/* ================= FOOTER ================= */

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        
        <div className="flex justify-center space-x-6 md:order-2 items-center">
          <span className="text-gray-400 text-sm">Síguenos en redes</span>

          <a
  href="https://tiktok.com/tu_usuario"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src={tiktokIcon}
    alt="TikTok"
    className="h-10 w-10 object-contain transition transform hover:scale-110 duration-200"
  />
</a>

          <a
            href="https://www.instagram.com/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-6 w-6 text-gray-500 hover:text-pink-500 transition transform hover:scale-110 duration-200" />
          </a>
        </div>

        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} EduTask Academic. Todos los derechos reservados.
            <br className="md:hidden" />
            <span className="ml-2 font-medium">Calidad Académica Garantizada.</span>
          </p>
        </div>

      </div>
    </footer>
  );
}