import React, { useEffect, useState } from 'react'
import ImageComponent from './image'
import { getDogImage } from 'src/api/services/dog.services';

export default function ApiTestPage() {

    const [imagesList, setImagesList] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const images = await Promise.all(
                    Array.from({ length: 6 }).map(() => getDogImage())
                );
                setImagesList(images);
            } catch (error) {
                console.error('Error fetching dog images:', error);
            }
        };

        fetchImages();
        const intervalId = setInterval(fetchImages, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <React.Fragment>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {imagesList.map((src, index) => {
                        return <ImageComponent key={index} src={src} className="w-full h-full object-cover" />
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}
