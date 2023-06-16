import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FullImage({city}:{city:string}) {

    const [image, setImage] = useState<any[]>([])
    const accessKey = 'GyAJfX7_CLvA02-_zT8ePe1OjD6cRVvSxgGaM4Xg62Y';

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
      },[city])

    return (
        <div className="w-screen h-screen"> 
            <Image src={image[0]?.urls.full} alt="image" fill />
        </div>
    )
}