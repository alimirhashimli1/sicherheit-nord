import React from "react";
import Mobile_Sicherheit from "../images/Mobile-Sicherheit.svg";
import Personelle_Sicherheit from "../images/Personelle-Sicherheit.svg";
import Technische_Sicherheit from "../images/Technische-Sicherheit.svg";
import Weitere_Dienstleistungen from "../images/Weitere-Dienstleistungen.svg";

const Content = () => {
  return (
    <main className="mb-12">
      <div className=" mx-auto max-w-7xl py-10 px-2 sm:px-6 lg:px-8 md:grid grid-cols-2 border-solid border-b-4 border-teal-700">
        <h2>Unsere Leistungen</h2>
        <p className="text-lg">
          Die Bewachung großer Liegenschaften erfordert Professionalität,
          Erfahrung und Sensibilität. Ob Diebstahl, Vandalismus oder
          Manipulation – der Schutz eines Unternehmens vor kriminellen
          Handlungen erfordert ein komplexes Sicherheitssystem.
        </p>
      </div>
      <div className=" text-center mx-auto max-w-7xl py-10 px-2 sm:px-6 lg:px-8 md:grid grid-cols-2 lg:grid-cols-4 border-solid border-b-4 border-teal-700">
        <div className="p-24">
          <img src={Mobile_Sicherheit} alt="car" />
          <h3 className="mt-4">Mobile Sicherheit</h3>
        </div>
        <div className="p-24">
          <img src={Personelle_Sicherheit} alt="car" />
          <h3 className="mt-4">Personelle Sicherheit</h3>
        </div>
        <div className="p-24">
          <img src={Technische_Sicherheit} alt="car" />
          <h3 className="mt-4">Technische Sicherheit</h3>

        </div>
        <div className="p-24">
          <img src={Weitere_Dienstleistungen} alt="car" />
          <h3 className="mt-4">Weitere Dienstleistungen</h3>

        </div>
      </div>
    </main>
  );
};

export default Content;
