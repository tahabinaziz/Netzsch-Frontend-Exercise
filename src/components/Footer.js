// YourFooterComponent.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 font-light text-lg text-primary py-8 ">

      <div className="container  mx-auto flex flex-col md:flex-row py-6 px-4 border-t-2 border-lineColor"></div>
      <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Column 1 */}
        <div>
          <h2 className="text-xl  font-medium mb-4 hover:text-hoverColor"><Link to="/">ÜBER NETZSCH</Link></h2>
          <ul>
            <li className='hover:text-hoverColor'><Link to="/"> Unternehmen</Link></li>
            <li className='hover:text-hoverColor'><Link to="/">News</Link></li>
            <li className='hover:text-hoverColor'><Link to="/">Standorte</Link></li>
            <li className='hover:text-hoverColor'><Link to="/">Stellenangebote</Link></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-xl  font-medium mb-4 hover:text-hoverColor">NETZSCH WEBSEITEN</h2>
          <ul>
            <li className='hover:text-hoverColor'><Link to="/">Analysieren & Prüfen</Link></li>
            <li className='hover:text-hoverColor'><Link to="/">Pumpen & Systeme</Link></li>
            <li className='hover:text-hoverColor'><Link to="/">Mahlen & Dispergieren</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-xl  font-medium mb-4 hover:text-hoverColor"><Link to="/">RECHTLICHES</Link></h2>
          <ul>
            <li className='hover:text-hoverColor'><Link to="/">Datenschutz</Link></li>
            <li className='hover:text-hoverColor'><Link to="/">Code of Conduct</Link></li>
            <li className='hover:text-hoverColor'><Link to="/">Impressum</Link></li>
            <li className='hover:text-hoverColor'><Link to="/">Cookie-Einstellungen</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h2 className="text-xl  font-medium mb-4 hover:text-hoverColor"><Link to="/">KONTAKT</Link></h2>
          <ul>
            <li className='hover:text-hoverColor'><Link to="/">Finden Sie Ihren lokalen</Link></li>
            <li className='hover:text-hoverColor'><Link to="/">Ansprechpartner</Link></li>
            <li className='hover:text-hoverColor'><Link to="/">Standorte</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
