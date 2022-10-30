import {Promos} from "../repository/Promos";
import {Promo} from "./Promo";

export function HomePage() {
    return (
        <div className="bg-yellow-50">
            <p className="text-center text-6xl font-bold mb-6 text-pink-500	whitespace-pre-wrap">
                Доступные промокоды на Октябрь 2022
            </p>
            {Promos.map((promo) => {
                return <Promo promo={promo}/>
            })}
        </div>
    )
}