import { Link, Head } from "@inertiajs/react";
import { useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
export default function Welcome({ auth }) {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const handleButtonClick = () => {
        setIsButtonClicked(!isButtonClicked);
        console.log("is clicked");
    };
    return (
        <>
            <Head title="Bienvenue" />
            <div
                className={
                    isButtonClicked
                        ? "relative sm:flex sm:justify-center sm:items-center min-h-screen bg-val bg-contain bg-no-repeat bg-center  selection:bg-red-500 selection:text-white"
                        : "relative sm:flex sm:justify-center sm:items-center min-h-screen bg-mainpage bg-contain bg-no-repeat bg-center  selection:bg-red-500 selection:text-white"
                }
            >
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right space-x-6">
                    {auth.user ? (
                        <PrimaryButton>
                            <Link href={route("dashboard")}>
                                Tableau de bord
                            </Link>
                        </PrimaryButton>
                    ) : (
                        <>
                            <PrimaryButton>
                                <Link href={route("login")}>Se connecter</Link>
                            </PrimaryButton>
                            <PrimaryButton href={route("register")}>
                                <Link href={route("register")}>S'inscrire</Link>
                            </PrimaryButton>
                        </>
                    )}
                </div>
                <div className="absolute bottom-2 right-4">
                    <PrimaryButton onClick={handleButtonClick}>
                        {" "}
                        Presentation{" "}
                    </PrimaryButton>
                </div>
            </div>
        </>
    );
}
