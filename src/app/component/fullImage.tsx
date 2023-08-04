import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FullImage({city}:{city:string}) {

    const [image, setImage] = useState<any[]>([])
    const accessKey = process.env.UNSPLASH_KEY

    useEffect(() => {
        axios.get(`https://api.unsplash.com/search/photos/?client_id=${accessKey}`, {
          params: {
            query: `${city}`,
            per_page: 18,
            page: 1
          }
        }) 
        .then(
          (res) => {
            setImage(res.data.results)
          }
        )
        .catch( (err) => console.error(err.data) )
      },[accessKey, city])

    return (
        <div className="w-screen h-screen"> 
            <Image src={image[0]?.urls.full} alt="image" fill />
        </div>
    )
}