import {Store} from "./Store"
import {GetStores, ContextStore} from "../requests/GetStores";
import {IStore} from "../models";
import {Link} from "react-router-dom";
import React from "react";

export function HomePage() {
    return (
        <div className="bg-yellow-50 min-h-screen">
            <p className="ml-4 text-2xl font-normal text-black">
                Freebie shop
            </p>

            <p className="text-center text-5xl font-bold text-pink-500">
                Доступные промокоды на Ноябрь 2022
            </p>

            <p className="text-center text-2xl font-normal text-black">
                Сортировать по:{" "}
                <Link to="/store/name" className="mr-2" state={{sort: "name"}}>
                    названию
                </Link>

                <Link to="/store/price" className="mr-2" state={{sort: "price"}}>
                    цене
                </Link>
                <Link to="/store/quantity" className="mr-2" state={{sort: "quantity"}}>
                    количеству
                </Link>
            </p>

            {GetStores("uuid").map((store: IStore) => {
                return (
                    <ContextStore.Provider value={store}>
                        <Store/>
                    </ContextStore.Provider>
                )
            })}
        </div>

    )
}