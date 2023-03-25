import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FeuilleSVG from "@/Components/FeuilleSVG.jsx";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
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

            {/* <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Vous êtes connecté·e en tant que{" "}
                            {auth.user.firstname} {auth.user.name} !
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="grid grid-cols-12 grid-rows-4 h-[80vh] my-5 gap-4">
                <div className="col-start-2 col-end-5 row-start-1 row-end-3 bg-pink rounded-lg p-5 flex justify-end">
                    <FeuilleSVG currentColor="#9DD3A8" />
                </div>
                <div className="col-start-5 col-end-7 row-start-1 row-end-3 bg-lightgreen  rounded-lg">
                    Box 2
                </div>
                <div className="col-start-7 col-end-12  row-start-1 row-end-3  bg-lightblue  rounded-md">
                    Box 3
                </div>
                <div className="col-start-2 col-end-4 row-start-3 row-end-5 bg-orange  rounded-md">
                    Box 4
                </div>
                <div className="col-start-4 col-end-7 row-start-3 row-end-5 bg-lightblue  rounded-md">
                    Box 5
                </div>
                <div className="col-start-7 col-end-9 row-start-3 row-end-5 bg-lightgreen  rounded-md">
                    Box 6
                </div>
                <div className="col-start-9 col-end-12 row-start-3 row-end-5 bg-pink p-5 flex justify-end rounded-md">
                    <FeuilleSVG currentColor="#9DD3A8" />
                </div>
            </div>
            {/* ajoute dans le main  */}
        </AuthenticatedLayout>
    );
}
