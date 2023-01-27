import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropdownItem from "./DropdownItem";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Context } from "../App";

const Header = () => {
  const [newsDropdown, setNewsDropdown] = useContext(Context)
  const [partnerDropdown, setPartnerDropdown] = useState(false);
  const [mitarbeiterDropdown, setMitarbeiterDropdown] = useState(false);

  return (
    <header className="hidden md:block bg-gray-400 relative justify-center w-screen">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative flex h-16 items-center justify-between">
        <ul className=" flex justify-between  text-lg h-full items-center">
          <a
           onMouseOver={() => setNewsDropdown(true)}
           onMouseOut={() => setNewsDropdown(false)}
            className="relative mr-5 text-white no-underline h-full flex items-center"
            href="#"
          >
            News
            {newsDropdown && (
              <div
                
                className="z-20 absolute -left-10 top-12 border-solid border-8 border-transparent flex flex-col ease-linear bg-white bg-opacity-0 hover:bg-opacity-75 w-96 rounded-sm"
              >
                <DropdownItem text= {" Täterfestnahme durch effektives Zusammenwirken"}/>
                <DropdownItem text= {"EcoVadis Platin-Medaille"}/>
                <DropdownItem text= {"CSD Berlin 2022"}/>
                <DropdownItem text= {" Unsere Niederlassung in Neumünster"}/>
                <DropdownItem text= {" Nano & Blacky"}/>
                <DropdownItem text= {" Unsere Interne Sicherheitsschule"}/>
                <DropdownItem text= {"Diese Codes solltet ihr kennen!"}/>
                <DropdownItem text= {"Standorte"}/>
                
              </div>
            )}
          </a>
          <a className="mr-5 text-white no-underline" href="#">
          </a>
          <a
           onMouseOver={() => setPartnerDropdown(true)}
           onMouseOut={() => setPartnerDropdown(false)}
            className="relative mr-5 text-white no-underline h-full flex items-center"
            href="#"
          >
            Partner & Abteilungen
            {partnerDropdown && (
              <div
                
                className="z-20 absolute -left-10 top-12 border-solid border-8 border-transparent flex flex-col ease-linear bg-white bg-opacity-0 hover:bg-opacity-75 w-96 rounded-sm"
              >
                <DropdownItem text= {"CONEXIS GmbH"}/>
                <DropdownItem text= {"DWSI Berlin GmbH"}/>
                <DropdownItem text= {"DWSI - Dresdner Wach-und Sicherungsinstitut GmbH"}/>
                <DropdownItem text= {"Kilere Wach-und Sicherheitsgeselschaft"}/>
                <DropdownItem text= {"PRODIAC Sicherheit GmbH"}/>
                <DropdownItem text= {"SITEC Dienslestungs -GmbH"}/>
                <DropdownItem text= {"Sicherheitsschule"}/>
                <DropdownItem text= {"Wach- und SIcherungsdienst in Mecklenburg"}/>
                <DropdownItem text= {"Wolf Sicherheit GmbH"}/>
                <DropdownItem text= {"S WSI Security -GmbH"}/>
                <DropdownItem text= {"WWD Dienstleistung -GmbH"}/>
                
              </div>
            )}
          </a>
          <a
           onMouseOver={() => setMitarbeiterDropdown(true)}
           onMouseOut={() => setMitarbeiterDropdown(false)}
            className="relative mr-5 text-white no-underline h-full flex items-center"
            href="#"
          >
            Partner & Abteilungen
            {mitarbeiterDropdown && (
              <div
                
                className="z-20 absolute -left-10 top-12 border-solid border-8 border-transparent flex flex-col ease-linear bg-white bg-opacity-0 hover:bg-opacity-75 w-96 rounded-sm"
              >
                <DropdownItem text= {"Benefits"}/>
                <DropdownItem text= {"Lohnportal"}/>
                <DropdownItem text= {"Mitarbeiter Portraits"}/>
               
              
              
              </div>
            )}
            Mitarbeiter*innen
          </a>
        </ul>

        <div className="flex justify-between  ">
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-2xl mr-2 bg-white p-1 text-neutral-400 rounded-md"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-2xl mr-2 bg-white p-1 text-neutral-400 rounded-md"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-2xl mr-2 bg-white p-1 text-neutral-400 rounded-md"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-2xl mr-2 bg-white p-1 text-neutral-400  rounded-md"
          />
        </div>
      </div>
      <div className="bg-green-900"></div>
    </header>
  );
};

export default Header;
