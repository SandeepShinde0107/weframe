import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-6 md:px-12 py-8 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
        {/* Logo Section */}
        <div className="col-span-2 md:col-span-1">
          <Image
            src="/logo.png" // Replace with your logo path
            alt="WeFrameTech Logo"
            width={128} // Set an appropriate width
            height={32} // Set an appropriate height
          />
        </div>

        {/* Infos Pratiques */}
        <div>
          <h3 className="text-white font-semibold mb-4">INFOS PRATIQUES</h3>
          <ul className="space-y-2">
            <li>À propos</li>
            <li>Livraisons & Reprises</li>
            <li>Mode d&apos;emploi</li>
            <li>F.A.Q</li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">LÉGAL</h3>
          <ul className="space-y-2">
            <li>Mentions légales</li>
            <li>CGU</li>
            <li>CGV</li>
            <li>Politique de confidentialité</li>
          </ul>
        </div>

        {/* Mon Compte */}
        <div>
          <h3 className="text-white font-semibold mb-4">MON COMPTE</h3>
          <ul className="space-y-2">
            <li>Accéder à mon compte</li>
            <li>Ma liste d&apos;envie</li>
            <li>Créer un compte</li>
            <li>Mot de passe oublié</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-white font-semibold mb-4">NOUS SUIVRE</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700"
            >
              <Image
                src="/twitter.png"
                alt="Twitter Icon"
                width={24}
                height={24}
              />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700"
            >
              <Image
                src="/insta.png"
                alt="Instagram Icon"
                width={24}
                height={24}
              />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700"
            >
              <Image
                src="/link.png"
                alt="LinkedIn Icon"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
