import { Header } from "../../shared/components/Header";
import { NAME } from "../../shared/constants/info";
import { PreviousButton } from "./PreviousButton";

export default function ResultLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-400 flex flex-col">
            <Header text={NAME} />
            {children}
            <div className="px-6 pb-8 md:px-8 md:pb-10 lg:px-16 lg:pb-12">
                <PreviousButton />
            </div>
        </div>
    );
}
