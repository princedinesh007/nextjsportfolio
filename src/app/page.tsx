import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <div style={{display:"flex",flexDirection:"row", justifyContent:"center"}}>
     <div style={{margin:"10px",padding:"10px"}}>
      <h3 style={{margin:"10px"}}>Hi,  Im <span style={{color:"blue"}}>Dineshkumar A</span></h3>
      <div style={{display:"flex" ,flexDirection:"column",margin:"10px",padding:"10px"}}>
        A passionate Frontend Developer crafting beautiful and <br/>
        functional web experiences.
        <Link href="/project">
        <button style={{  backgroundColor:"blue",color:"white",borderRadius:"15px", height:"36px",width:"148px",outline:"none", border:"none",margin:"10px"}}>View My Work</button>
        </Link>
      </div>
     </div>
     <div style={{margin:"10px"}}>
       <Image src="/banner.jpg" width={500} height={200} style={{borderRadius:"20px"}} alt="profile Picture" />  
     </div>
    </div>
  );
}
