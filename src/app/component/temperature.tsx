'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./loading";
import Image from "next/image";

export default function Temperature({city, setCity}:{city:string, setCity:any}) {
    
    const [searchCity, setSearchCity] = useState<string>("curitiba")
    const [temperature, setTemperature] = useState<any>()
    const APIKEY = '837cd98f4f9cdd0be34f19020a0a6f88'

    const handleKeyPress = (e:any) => {
        if (e.key === "Enter") {
          setCity(searchCity);
        }
    };

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&lang=pt_br&units=metric`)
            .then( res => setTemperature(res.data) )
            .catch( res => console.error(res.data) )
    },[city])

    return (
        <div className="bg-neutral-100 bg-opacity-20 rounded-2xl">
            <div 
            className="
                bg-opacity-30 bg-neutral-100 backdrop-filter backdrop-blur-md 
                w-64 h-64 rounded-2xl 
                flex flex-col gap-3 
                items-center justify-between py-4
            "
            >
                <div className="flex w-64 items-center justify-center">
                    <input 
                    value={searchCity} 
                    onChange={(e) => setSearchCity(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className="
                    rounded-l p-1
                    bg-neutral-100/70 bg-transparent-20 
                    text-gray-950 font-bold
                    capitalize px-2
                    w-[95%]
                    " 
                    />
                    <button 
                    onClick={() => setCity(searchCity)}
                    className="bg-neutral-100/70 p-1 rounded-r text-gray-950"
                    > 
                    🔍 
                    </button>
                </div>
                {temperature ?
                    <>
                        <div className="text-center">
                            <p className="text-neutral-950 text-3xl font-bold tracking-wide"> 
                                {temperature?.name} 
                            </p>
                            <p className="text-neutral-950 text-xs tracking-wide"> 
                                {temperature?.sys.country} 
                            </p>
                        </div>
                        <p className="text-xl text-neutral-950"> 
                            {temperature && temperature?.main.temp + ' °C'}
                        </p>
                        <div className="flex items-center justify-center gap-6">
                            <p className="text-blue-800"> Min. {temperature?.main.temp_min} ⬇️</p>
                            <p className="text-red-800"> Max. {temperature?.main.temp_max} ⬆️</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image 
                                src={`https://openweathermap.org/img/wn/${temperature?.weather[0].icon}@2x.png`}
                                alt="icon" 
                                height='40' 
                                width='40' 
                                className="bg-neutral-300 rounded-full"
                            />
                            <p className="capitalize"> {temperature?.weather[0].description} </p>
                        </div>
                    </>
                    :
                    <>
                        <Loading/>
                    </>
                }
            </div>
        </div>
    )
}