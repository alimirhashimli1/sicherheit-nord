import React from "react";
import lgbt_flag from "../images/LGBT-flag.svg";
import logo_white from "../images/SN_Logo_weiss.png";

const Footer = () => {
  let currentDate = new Date();
  let year = currentDate.getFullYear();

  return (
    <footer className=" w-screen bg-teal-700">
      <div className=" mx-auto max-w-7xl py-10 px-2 sm:px-6 lg:px-8 md:grid grid-cols-2 bg-teal-700 text-white">
        <div className="flex flex-col justify-start items-start ">
          <img className="w-48" src={logo_white} alt="Sicherheit Nord logo" />
          <div className="flex justify-start items-center pt-8">
            <img className="w-16" src={lgbt_flag} alt="lgbt flag " />
            <p className="w-2/4 text-sm ml-2">
              Gegen jede Form der Diskriminierung und für eine weltoffene
              Gesellschaft.
            </p>
          </div>
        </div>
        <ul className="flex flex-column pl-0 mt-4 text-2xl md:ml-48">
          <li className="mb-2 ">Startseite</li>
          <li className="mb-2">Dienstleistungen</li>
          <li className="mb-2">Unternehmen</li>
          <li className="mb-2">Karriere</li>
        </ul>
      </div>
      <div className="flex flex-col md:flex-row-reverse md:justify-between md:items-center pl-2 text-white mx-auto max-w-7xl border-solid border-t-4 border-white">
        <ul className="flex flex-col md:flex-row pl-0 mt-4 text-md">
          <li className="mb-2 mr-2">Kontakt</li>
          <li className="mb-2 mr-2">Datenschutz</li>
          <li className="mb-2 mr-2">Impressum</li>
          <li className="mb-2 mr-2">Feedback</li>
          <li className="mb-2 mr-2">AGB</li>
        </ul>
        <p className="m-0 md:mr-24">© {year} Sicherheit Nord GmbH & Co. KG</p>
      </div>
    </footer>
  );
};

export default Footer;
