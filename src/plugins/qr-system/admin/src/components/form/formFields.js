import React, {useState} from "react";
// @ts-ignore
import { TextInput, Button, Box } from '@strapi/design-system';
import QRCode from "react-qr-code";
import * as html2image from 'html-to-image';

export default function FormFields({addUrl}){
    const [url, setUrl] = useState('');
    const [slug, setSlug] = useState('');
    const [QR, setQR] = useState('');
    const [showQr, setShowQR] = useState(false);

    const generateQR =() =>{
        const urlComplete = "http://localhost:1337/qr-system/find/"+slug;
        setQR(urlComplete);
    };

    // @ts-ignore
    const handleSubmit= async (e)=>{
        e.preventDefault();
        generateQR();
        setShowQR(true);
        let image="";
        if(slug === '' || url === ''){
            alert("Please fill all the fields");
            return;
        }else{
            // Convierte el QR a imagen
            const qrImage = document.getElementById('qrImage');
            html2image.toPng(qrImage)
            .then(async function (dataUrl) {
            // Almacena la imagen en la variable
                console.log("dataUrl", dataUrl);
                image = image + dataUrl;
                console.log("dataUrl.valueOf", typeof dataUrl);
                console.log("image", image);
                const link = document.createElement("a");
                link.href = dataUrl;
                link.download = "qr-code.png";
                link.click();
                try {
                    await addUrl({ 
                        slug: slug,
                        urlRedirect: url,
                        qrImage: image,
                    });
                    console.log("Estoy en el try despues de addUrl");
                    
                } catch (e) {
                    console.log("error", e);
                }
                          
            })
            .catch(function (error) {
            console.error('Error al convertir a imagen:', error);
            });
        }
        
    };
    
    return( 
        <div>
            <Box id="qrImage" width={`${16}rem`} height={`${16}rem`}>
                <Box width={`${16}rem`} height={`${16}rem`}>
                    {showQr && <QRCode value={QR}/>}
                </Box>
            </Box>
            <br />
            <form onSubmit={handleSubmit}>
                <TextInput
                    // @ts-ignore
                    placeholder="Enter the URL" 
                    label="To:" 
                    name="url" 
                    required
                    onChange={e => {setUrl(e.target.value);}} 
                    value={url} 
                />
                <br />

                <TextInput
                    // @ts-ignore
                    placeholder="Enter the Slug" 
                    label="http://localhost:1337/qr-system/find/..."
                    name="slug"
                    required 
                    onChange={e => {setSlug(e.target.value);}}
                    value={slug}
                />
                <br />
                <Button type="submit">Save</Button>
            </form>
        </div>
    );
  
}
