'use client'
import { useState } from "react";
import Temperature from "./component/temperature";
import FullImage from "./component/fullImage";

export default function Home() {

  const [city, setCity] = useState<string>('curitiba')

  return (
    <div className="w-screen h-screen bg-teal-950">
      <FullImage city={city} />
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
        <Temperature city={city} setCity={setCity}/>
      </div>
    </div>
  )
}
