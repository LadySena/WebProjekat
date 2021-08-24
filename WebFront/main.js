import {Poslasticara} from "./poslasticara.js";
import { Porudzbina } from "./porudzbina.js";
import {Sto} from "./sto.js";

//const posl=new Poslasticara(1,"Slatkica","Slatka",12,3,3);
//posl.crtajPoslasticaru(document.body);


//const posl1=new Poslasticara(2,"Baby", "Baby",10,2,3);
//posl1.crtajPoslasticaru(document.body);

fetch("https://localhost:5001/Poslasticara/PreuzmiPoslasticare").then(p=>{
    p.json().then(data=>{
        console.log(data);
        
        data.forEach(poslasticara=>{
            //alert(poslasticara.naziv);
            const poslasticara1=new Poslasticara(poslasticara.id,poslasticara.naziv,poslasticara.adresa,poslasticara.kapacitet,poslasticara.maxLjudi,poslasticara.maxLokala);
            console.log(poslasticara.id);
            //console.log(poslasticara);
           // poslasticara1.stolovi=poslasticara.stolovi;


          poslasticara.stolovi.forEach((s,index)=>{
                //var sto=poslasticara1.stolovi[s.brojStola];
                //var por=poslasticara1.porudzbine[s.brojStola];
                //console.log(sto);
                 //console.log(por);
                 poslasticara1.stolovi[index]=s.brojStola;
                 
               
                
            }); 
            poslasticara.porudzbine.forEach((s,index)=>{
                //var sto=poslasticara1.stolovi[s.brojStola];
                //var por=poslasticara1.porudzbine[s.brojStola];
                //console.log(sto);
                 //console.log(por);
                
                 poslasticara1.porudzbine[index]=s.brojStola;
               
                
            }); 


            console.log(poslasticara1);
            poslasticara1.crtajPoslasticaru(document.body);
        });
    });
});