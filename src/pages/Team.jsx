import { Card } from "@/components/ui/card";
import React from "react";

const Team = () => {
  return (
    <>
      <Card className="container mt-8 hover:shadow-2xl transition-all duration-150">
        <div className="flex justify-center">
          <p className="mt-2 font-freightmedium font-bold text-secondary text-2xl">
            <span className="text-primary">meet</span>{" "}
            <span className="font-nephilmitalic">the team</span>
          </p>
        </div>
        <div className="container flex space-x-32 justify-center py-28">
          <div>
            <div className="rounded-full shadow-2xl hover:scale-105 transition-all">
              <img
                src="Assets/giri.jpg"
                alt="Giri"
                className="h-[250px] w-[250px] object-cover sm:rounded-full"
              />
            </div>
            <div>
              <h2 className="flex pt-4 text-2xl font-freightmedium font-bold tracking-widest uppercase justify-center">
                Girishkanna
              </h2>
              <p className="flex justify-center font-tommymedium text-secondary uppercase">
                22BPS1015
              </p>
            </div>
          </div>
          <div>
            <div className="rounded-full shadow-2xl hover:scale-105 transition-all">
              <img
                src="Assets/sumedh.jpg"
                alt="Sumedh"
                className="h-[250px] w-[250px] object-cover sm:rounded-full"
              />
            </div>
            <div>
              <h2 className="flex pt-4 text-2xl font-freightmedium font-bold tracking-widest uppercase justify-center">
                Sumedh Naidu
              </h2>
              <p className="flex justify-center font-tommymedium text-secondary uppercase">
                22BPS1030
              </p>
            </div>
          </div>
          <div>
            <div className="rounded-full shadow-2xl hover:scale-105 transition-all">
              <img
                src="Assets/suji.jpg"
                alt="Suji"
                className="h-[250px] w-[250px] object-cover sm:rounded-full"
              />
            </div>
            <div>
              <h2 className="flex pt-4 text-2xl font-freightmedium font-bold tracking-widest uppercase justify-center">
                P. Sujith
              </h2>
              <p className="flex justify-center font-tommymedium text-secondary uppercase">
                22BPS1193
              </p>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Team;
