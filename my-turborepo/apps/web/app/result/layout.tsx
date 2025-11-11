import { Header } from "../../shared/components/Header";
import { NAME } from "../../shared/constants/info";

export default function ResultLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-400 flex flex-col">
            <Header text={NAME} />
            {children}
        </div>
    );
}
