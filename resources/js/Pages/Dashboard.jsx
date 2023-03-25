import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FeuilleSVG from "@/Components/FeuilleSVG.jsx";
import BaguetteSVG from "@/Components/BaguetteSVG";
import { Head } from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton";
import ThirdButton from "@/Components/ThirdButton";
import React, { useState } from "react";

export default function Dashboard({ auth, sentence }) {
    const [value, setValue] = useState(50); // initialisez une valeur de départ pour la plage de valeurs et créez un état pour gérer la valeur de la plage de valeurs

    const handleChange = (event) => {
        setValue(event.target.value); // mettez à jour la valeur de la plage de valeurs à chaque fois que l'utilisateur déplace le curseur
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={
            //     <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            //         Tableau de bord
            //     </h2>
            // }
        >
            <Head title="Tableau de bord" />
            <div className="grid grid-cols-12 grid-rows-4 h-[80vh] my-5 gap-[2rem]">
                <div className="col-start-3 col-end-8 row-start-1 row-end-3 bg-pink rounded-lg  flex flex-col py-4 px-5 justify-between text-center">
                    <h1 className="my-2 text-grey-800 border-gray-300 focus:border-darkgreen text-xl focus:ring-darkgreen">
                        {sentence}
                    </h1>
                    <div className=" m-auto">
                        {value >= 80 ? (
                            <img
                                src="/emoji/heureux.png"
                                alt="emoji"
                                className="h-12"
                            />
                        ) : value >= 60 ? (
                            <img
                                className="h-12"
                                src="/emoji/sourire.png"
                                alt="emoji"
                            />
                        ) : value >= 40 ? (
                            <img
                                className="h-12"
                                src="/emoji/confus.png"
                                alt="emoji"
                            />
                        ) : value >= 20 ? (
                            <img className="h-12" src="/emoji/triste.png" />
                        ) : (
                            <img className="h-12" src="/emoji/pleurs.png" />
                        )}
                    </div>

                    <div className="slidecontainer w-[80%]">
                        <input
                            className="slider"
                            id="myRange"
                            type="range"
                            min="0"
                            max="100"
                            value={value}
                            onChange={handleChange}
                        />
                    </div>
                    <textarea
                        placeholder="Dis nous en plus..."
                        className="border-gray-300 resize-none font-montserrat w-4/5 m-auto rounded-md focus:border-darkgreen focus:ring-darkgreen"
                    ></textarea>
                </div>
                <div className="col-start-8 col-end-11 row-start-1 shadow-md row-end-3 flex flex-col p-4 justify-between text-center bg-lightgreen  rounded-lg">
                    <h1 className="text-xl ">Votre score</h1>
                    <div className="flex justify-center gap-2">
                        <FeuilleSVG currentColor="#4E8C5A" form="35" />
                        <FeuilleSVG currentColor="#4E8C5A" form="35" />
                        <FeuilleSVG currentColor="#4E8C5A" form="35" />
                        <FeuilleSVG currentColor="#4E8C5A" form="35" />
                        <FeuilleSVG currentColor="#FFFEF9" form="35" />
                    </div>
                    <h1 className="text-4xl my-2 text-darkgreen">👏 80% 👏</h1>
                    <SecondaryButton className="bg-darkgreen w-content">
                        Relever un défi ?
                    </SecondaryButton>
                </div>

                <div className="col-start-3 col-end-6 row-start-3 shadow-md row-end-5 flex flex-col p-4 justify-between text-center bg-lightblue  rounded-md">
                    <h1 className="text-xl ">Rechercher un service? </h1>
                    <div className="flex flex-col justify-center gap-2 grow m-auto">
                        <ThirdButton>Menus</ThirdButton>
                        <ThirdButton>Cadeaux</ThirdButton>
                        <ThirdButton>Bien-être</ThirdButton>
                        <ThirdButton>
                            <BaguetteSVG currentColor="#D2EBFF" form="1rem" />
                            Aide domicile
                        </ThirdButton>
                    </div>
                </div>
                <div className="col-start-6 col-end-11 row-start-3 row-end-5 bg-orange shadow-md  flex flex-col py-4 px-5 justify-between text-center rounded-md">
                    <h1 className="my-2 text-grey-800 border-gray-300 focus:border-darkgreen text-xl focus:ring-darkgreen">
                        Des tips de notre communauté ?
                    </h1>

                    <textarea
                        placeholder="Dis nous en plus..."
                        className="border-gray-300 resize-none font-montserrat w-4/5 m-auto rounded-md  focus:border-darkgreen focus:ring-darkgreen"
                    ></textarea>
                </div>
            </div>
            {/* ajoute dans le main  */}
        </AuthenticatedLayout>
    );
}
