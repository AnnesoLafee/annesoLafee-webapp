import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FeuilleSVG from "@/Components/FeuilleSVG.jsx";
import BaguetteSVG from "@/Components/BaguetteSVG";
import { Head } from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton";
import ThirdButton from "@/Components/ThirdButton";
import UserSVG from "@/Components/UserSVG";
import React, { useState } from "react";
import CadeauSVG from "@/Components/CadeauSVG";
import AssietteSVG from "@/Components/AssietteSVG";
import BouddahSVG from "@/Components/BouddahSVG";

export default function Dashboard({ auth, sentence }) {
    const [value, setValue] = useState(50); // initialisez une valeur de départ pour la plage de valeurs et créez un état pour gérer la valeur de la plage de valeurs
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setIsButtonClicked(!isButtonClicked);
    };
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
            <div className="grid grid-cols-12 pt-5 grid-rows-4 h-[80vh] my-5 gap-[2rem]">
                <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="col-start-3 col-end-8 row-start-1 row-end-3 bg-pink rounded-lg  flex flex-col py-4 px-5 justify-between text-center"
                >
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
                <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    className="col-start-8 col-end-11 row-start-1 shadow-md row-end-3 flex flex-col p-4 justify-between text-center bg-lightgreen rounded-lg"
                >
                    <h1 className="text-xl ">Votre score</h1>
                    <div className="flex justify-center gap-2">
                        <FeuilleSVG currentColor="#4E8C5A" form="35" />
                        <FeuilleSVG currentColor="#4E8C5A" form="35" />
                        <FeuilleSVG currentColor="#4E8C5A" form="35" />
                        <FeuilleSVG currentColor="#4E8C5A" form="35" />
                        <FeuilleSVG currentColor="#FFFEF9" form="35" />
                    </div>
                    <h1 className="text-4xl my-2 text-darkgreen">👏 80% 👏</h1>
                    <SecondaryButton
                        className="bg-darkgreen w-content mb-4"
                        onClick={handleButtonClick}
                    >
                        Relever un défi ?
                    </SecondaryButton>
                </div>

                <div
                    className={
                        isButtonClicked
                            ? "absolute z-10  top-[30%] left-[35%] shadow-md h-auto w-[25rem] flex flex-col p-8 text-center bg-lightgreen rounded-lg"
                            : "hidden"
                    }
                >
                    <h1 className="text-xl  ">Votre score</h1>
                    <div className="flex flex-col justify-between gap-3 ">
                        <div className="flex justify-start gap-2">
                            <FeuilleSVG currentColor="#4E8C5A" form="35" />
                            <FeuilleSVG currentColor="#4E8C5A" form="35" />
                            <FeuilleSVG currentColor="#4E8C5A" form="35" />
                            <FeuilleSVG currentColor="#FFFEF9" form="35" />
                            <FeuilleSVG currentColor="#FFFEF9" form="35" />
                        </div>
                        <div className="flex justify-start gap-2">
                            <FeuilleSVG currentColor="#4E8C5A" form="35" />
                            <FeuilleSVG currentColor="#4E8C5A" form="35" />
                            <FeuilleSVG currentColor="#FFFEF9" form="35" />
                            <FeuilleSVG currentColor="#FFFEF9" form="35" />
                            <FeuilleSVG currentColor="#FFFEF9" form="35" />
                        </div>
                        <div className="flex justify-start gap-2">
                            <FeuilleSVG currentColor="#4E8C5A" form="35" />
                            <FeuilleSVG currentColor="#4E8C5A" form="35" />
                            <FeuilleSVG currentColor="#4E8C5A" form="35" />
                            <FeuilleSVG currentColor="#FFFEF9" form="35" />
                            <FeuilleSVG currentColor="#FFFEF9" form="35" />
                        </div>
                        <div className="flex justify-start gap-2">
                            <FeuilleSVG currentColor="#4E8C5A" form="35" />
                            <FeuilleSVG currentColor="#4E8C5A" form="35" />
                            <FeuilleSVG currentColor="#4E8C5A" form="35" />
                            <FeuilleSVG currentColor="#4E8C5A" form="35" />
                            <FeuilleSVG currentColor="#4E8C5A" form="35" />
                        </div>
                    </div>
                </div>

                <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                    className="col-start-3 col-end-6 row-start-3 shadow-md row-end-5 flex flex-col p-4 justify-between text-center bg-lightblue  rounded-md"
                >
                    <h1 className="text-xl ">Rechercher un service? </h1>
                    <div className="flex flex-col justify-center gap-2 grow m-auto">
                        <ThirdButton>
                            <AssietteSVG></AssietteSVG> Menus
                        </ThirdButton>
                        <ThirdButton>
                            <CadeauSVG></CadeauSVG>Cadeaux
                        </ThirdButton>
                        <ThirdButton>
                            <BouddahSVG></BouddahSVG>Bien-être
                        </ThirdButton>
                        <ThirdButton>
                            <UserSVG></UserSVG>
                            Aide domicile
                        </ThirdButton>
                    </div>
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="600"
                    className="col-start-6 col-end-11 row-start-3 row-end-5 bg-orange shadow-md  flex flex-col py-4 px-10 justify-between text-center rounded-md"
                >
                    <h1 className="my-2 text-grey-800 border-gray-300 focus:border-darkgreen text-xl focus:ring-darkgreen">
                        Des tips de notre communauté ?
                    </h1>
                    <div className="flex justify-start items-center gap-5">
                        <img
                            src="/storage/avatar/face.jpg"
                            className="h-[2.5rem] rounded-full"
                            alt="avatar"
                        />
                        <p className="text-sm text-start">
                            {" "}
                            "Vous avez besoin d'un équipement de manière
                            ponctuelle : avez-vous pensé au prêt entre voisins
                            ?" <span className="font-monserrat"> - Rachel</span>
                        </p>
                    </div>
                    <div className="flex justify-start items-center gap-5">
                        <img
                            src="/storage/avatar/face1.jpg"
                            className="h-[2.5rem] rounded-full"
                            alt="avatar"
                        />
                        <p className="text-sm text-start">
                            {" "}
                            "Le troc : n'achetez plus, troquez !"{" "}
                            <span className="font-monserrat"> - Fred</span>
                        </p>
                    </div>
                    <div className="flex justify-start items-center gap-5 mb-10">
                        <img
                            src="/storage/avatar/face2.jpg"
                            className="h-[2.5rem] rounded-full"
                            alt="avatar"
                        />
                        <p className="text-sm text-start">
                            {" "}
                            "Votre potager : plus local, c'est pas possible !"{" "}
                            <span className="font-monserrat"> - Octave</span>
                        </p>
                    </div>
                </div>
            </div>
            {/* ajoute dans le main  */}
        </AuthenticatedLayout>
    );
}
