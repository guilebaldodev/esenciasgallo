import Image from "next/image";

const WhatsAppButton = () => {

  const message = encodeURIComponent('¡Buenos dias! Me gustaría recibir más información sobre las flores.');
  const whatsAppURL = `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=${message}`;



    return ( <>
         <a 
         href={whatsAppURL}
         className="whatsapp-float" target="_blank" rel="noopener noreferrer">
            <Image src="/layout/whatsapp-icon.png" alt="WhatsApp" width={20} height={20} style={{width:"100%",height:"100%",padding:"10px"}} />
        </a>
    
    </> );
}
 
export default WhatsAppButton;