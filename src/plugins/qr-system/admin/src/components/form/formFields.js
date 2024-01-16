import React, {useState} from "react";
// @ts-ignore
import { TextInput, Button, Box } from '@strapi/design-system';
import QRCode from "react-qr-code";
import * as html2image from 'html-to-image';

export default function FormFields({addUrl}, {addImage}){
    const [url, setUrl] = useState('');
    const [slug, setSlug] = useState('');
    const [QR, setQR] = useState('');
    const [showQr, setShowQR] = useState(false);

    const generateQR =() =>{
        const urlComplete = url+"/"+slug;
        setQR(urlComplete);
    };

    // @ts-ignore
    const handleSubmit= async (e)=>{
        e.preventDefault();
        generateQR();
        setShowQR(true);

        // Convierte el QR a imagen
        const qrImage = document.getElementById('qrImage');
        let image;
        html2image.toPng(qrImage)
        .then(function (dataUrl) {
          // Almacena la imagen en la variable
            console.log("dataUrl", dataUrl);
            image = dataUrl;
            console.log("image", image);   
            const link = document.createElement("a");
            link.href = dataUrl;
            link.download = "qr-code.png";
            link.click();       

        })
        .catch(function (error) {
          console.error('Error al convertir a imagen:', error);
        });

        try {
            await addUrl({ 
                slug: slug,
                urlRedirect: url,
                qrImage: image
            });
            console.log("Estoy en el try despues de addUrl");
            
        } catch (e) {
            console.log("error", e);
        }

        try {
            console.log("Estoy en el try antes de addImage");
            await addImage({ 
                slug: slug,
                urlRedirect: url,
                qrImage: image
            });
            console.log("Estoy en el try despues de addImage");
        } catch (e) {
            console.log("error", e);
        }

    };
    
    return( 
        <div>
            <Box id="qrImage" width={`${16}rem`} height={`${16}rem`} shadow="filterShadow" borderColor="danger600">
                <Box width={`${16}rem`} height={`${16}rem`}>
                    {showQr && <QRCode value={QR}/>}
                </Box>
            </Box>
            

            <form onSubmit={handleSubmit}>
                <TextInput
                    // @ts-ignore
                    placeholder="Enter the URL" 
                    label="Url" 
                    name="url" 
                    onChange={e => {setUrl(e.target.value);}} 
                    value={url} 
                />

                <TextInput
                    // @ts-ignore
                    placeholder="Enter the Slug" 
                    label="Slug"
                    name="slug" 
                    onChange={e => {setSlug(e.target.value);}}
                    value={slug} 
                />
                <Button type="submit">Save</Button>
            </form>
        </div>
    );
  
}
