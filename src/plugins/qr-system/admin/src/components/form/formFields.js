import React, {useState} from "react";
// @ts-ignore
import { TextInput, Button } from '@strapi/design-system';
import QRCode from "react-qr-code";

const formFields = () =>{
    const [url, setUrl] = useState('');
    const [slug, setSlug] = useState('');
    const [QR, setQR] = useState('');
    const [showQr, setShowQR] = useState(false);

    const generateQR =() =>{
        const urlComplete = url+"/"+slug;
        setQR(urlComplete);
    };

    // @ts-ignore
    const handleSubmit= (e)=>{
        e.preventDefault();
        generateQR();
        setShowQR(true);

    };
    
    return( 
        <div>
            <div>
                {showQr && <QRCode value={QR}/>}
            </div>
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
  
};

export default formFields;
