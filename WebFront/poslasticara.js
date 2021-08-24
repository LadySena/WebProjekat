import {Sto} from "./sto.js";
import {Porudzbina} from "./porudzbina.js"; 

export class Poslasticara{
    constructor(id,naziv,adresa,kapacitet,maxljudi,maxlokala){
        this.id=id;
        this.naziv=naziv;
        this.adresa=adresa;
        this.kapacitet=kapacitet; //stolovi u jednom lokalu
        this.stolovi=[];
        this.porudzbine=[];
        this.kontejner=null; //crtanje poslasticare
        this.maxljudi=maxljudi;
        this.maxlokala=maxlokala;
    }

    dodajSto(sto){
        this.stolovi.push(sto);
    
    }

    dodajPorudzbinu(p){
        this.porudzbine.push(p);
    }


    crtajPoslasticaru(host){

        if(!host)
          throw new Exception("Roditeljski element ne postoji!");

        this.kontejner=document.createElement("div");
        this.kontejner.classList.add("kontPoslasticara");
        this.kontejner.classList.add(`${this.id}`);
        console.log(this.kontejner);
        host.appendChild(this.kontejner);

       
        let naslov=document.createElement("label");
        naslov.className="naslov";
        naslov.innerHTML=` Poslastičara ${this.naziv}`;
        this.kontejner.appendChild(naslov);

        let divZaElemente=document.createElement("div");
        divZaElemente.className="divZaElemente";
        
        

        let dugme=document.createElement("button");
        dugme.className="dugmeUcitaj";
        dugme.innerHTML="Vidi lokal";
        
        this.kontejner.appendChild(dugme);
       
        
        
    
       var count=1;

        dugme.addEventListener("click",()=>
        {
            count+=1;
           var btn=this.kontejner.querySelector(".dugmeUcitaj");
           if(count>=this.maxlokala){
               btn.disabled=true;
               alert("Dostignut maksimalni kapacitet lokala/nivoa ove poslasticare!")

           }
           else{
                  
               this.crtajFormu(this.kontejner.appendChild(divZaElemente));
               this.crtajStolove(this.kontejner.appendChild(divZaElemente));

           }
        });
        
       
      


       
        
   
        
        
        console.log("cao");
    


    }

    crtajFormu(host){
        
        //Forma za unos informacija o stolovima
        var kontForma =document.createElement("div");
        kontForma.className = "klasaForma"
        host.appendChild(kontForma);
          

        var kontForma1 = document.createElement("div");
        kontForma.appendChild(kontForma1);
        kontForma1.className = "kontForma";  
        
        //naslov
        var naslov = document.createElement("h3");
        naslov.innerHTML = "Rezervišite sto";
        naslov.className = "naslov1";  
        kontForma1.appendChild(naslov);

        //labela br stola
        var labela = document.createElement("label");
        labela.innerHTML = "Broj stola"
        labela.className = "labele";  
        kontForma1.appendChild(labela);
        let unos = document.createElement("input");
        unos.className= "brojStola"; 
        unos.type="number";  
        kontForma1.appendChild(unos);

         //labela za ime
         labela = document.createElement("label");
         labela.innerHTML = "Ime"
         labela.className = "labele";  
         kontForma1.appendChild(labela);
 
         unos = document.createElement("input");
         unos.className = "ime";  
         kontForma1.appendChild(unos);
 
         //labela za prezime
         labela = document.createElement("label");
         labela.innerHTML = "Prezime"
         labela.className = "labele";  
         kontForma1.appendChild(labela);
 
         unos = document.createElement("input");
         unos.className = "prezime";   
         kontForma1.appendChild(unos);

         //labela broj ljudi za stolom
          labela = document.createElement("label");
         labela.innerHTML = "Broj ljudi za stolom"
         labela.className = "labele";  
         kontForma1.appendChild(labela);
         unos = document.createElement("input");
         unos.className= "brojLjudi"; 
         unos.type="number";  
         kontForma1.appendChild(unos);




         //Forma za porudzbine

         var kontForma2 = document.createElement("div");
         kontForma.appendChild(kontForma2);
         kontForma2.className = "kontForma";   

          //naslov
          let naslovNarudzbina = document.createElement("h3");
          naslovNarudzbina.innerHTML = "Poručite";
          naslovNarudzbina.className = "naslov1";    
          kontForma2.appendChild(naslovNarudzbina);
  
          //labela broja stola koji narucuje
          labela = document.createElement("label");
          labela.innerHTML = "Broj stola"
          labela.className = "labele"; 
          kontForma2.appendChild(labela);
  
          unos = document.createElement("input");
          unos.className= "brojStola1";  
          unos.type="number"; 
          kontForma2.appendChild(unos);
  
          
          let deserti = ["","Macarons", "Cupcake voćni", "Cupcake čokoladni", "Palačinka Slatkica", "Palačinka", "Torta parče","Voćna salata"];
          let pice = ["", "Voda obična", "Voda mineralna","Sok","Limunada", "Kafa", "Pivo"];
  
          let selD= document.createElement("select");
          selD.className = "selektovanje";
          labela = document.createElement("label");
          labela.innerHTML="Deserti ";
          labela.className = "labele"
          kontForma2.appendChild(labela);
          kontForma2.appendChild(selD);
  
          for(let i=0; i<8;i++){
              let opcija=document.createElement("option");
              opcija.innerHTML=deserti[i];
              opcija.value=deserti[i];
              selD.appendChild(opcija);
          }
  
          let selP= document.createElement("select");
          selP.className = "selektovanje";
          labela = document.createElement("label");
          labela.innerHTML="Piće ";
          labela.className = "labele"
          kontForma2.appendChild(labela);
          kontForma2.appendChild(selP);
  
          for(let i=0; i<7;i++){
              let opcija=document.createElement("option");
              
              opcija.innerHTML=pice[i];
              opcija.value=pice[i];
              selP.appendChild(opcija);
          }


          //dugme za rezervaciju stola
          let dugme=document.createElement("buttton");
          dugme.innerHTML="Rezerviši sto";
          dugme.className="dugmici";
          kontForma1.appendChild(dugme);

          dugme.onclick=(ev)=>{
              

            const ime=this.kontejner.querySelector(".ime");
            console.log(ime);

            const prezime=this.kontejner.querySelector(".prezime");
            console.log(prezime);

            const brojStola= this.kontejner.querySelector(".brojStola");
            console.log(brojStola);

            const brojLjudi=this.kontejner.querySelector(".brojLjudi");
            console.log(brojLjudi);

            //const inputtip= this.kontejner.querySelector(`input[name='this.unos']:checked`);

            let provera=this.stolovi.find(br=>br.brojStola==brojStola>this.kapacitet  && br.brojLjudi==brojLjudi)

            if(brojStola.value>=this.kapacitet)
             
              alert("Ne postoji sto sa tim rednim brojem! Izaberite neki drugi sto!");
            else if (brojLjudi.value>this.maxlokala) {
              alert("Maksimalan broj ljudi za ovim stolom je:" + " "+ this.maxlokala);
                
            }else {
               


                console.log(brojStola.value);
                console.log(brojLjudi.value);
                console.log(ime.value);
                console.log(prezime.value);

                fetch("https://localhost:5001/Poslasticara/ZauzmiSto/"+this.id,{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({
                        brojStola:brojStola.value,
                        stanje:"zauzet",
                        kapacitetStola:brojLjudi.value,
                        ime:ime.value,
                        prezime:prezime.value


                    })
                }).then(p=>{
                    if(p.ok)
                    {
                        console.log(this.stolovi[brojStola.value]);
                        this.stolovi[brojStola.value].zauzmiSto(brojStola.value,brojLjudi.value);
                        this.stolovi[brojStola.value].kliknuto(brojStola.value,ime.value,prezime.value);
                       
                        
                       
                        
                    }
                    else if(p.status==406){
                        alert("Sto je vec rezervisan!");
                    }
                })

                
                
            }
           




        //}

       }

          //dugme za ukljanjanje rezervacije
          dugme=document.createElement("buttton");
          dugme.innerHTML="Oslobodi sto";
          dugme.className="dugmici";
          kontForma1.appendChild(dugme);
          dugme.onclick=(ev)=>{
            const ime=this.kontejner.querySelector(".ime");
            console.log(ime);

            const prezime=this.kontejner.querySelector(".prezime");
            console.log(prezime);

            const brojStola= this.kontejner.querySelector(".brojStola").value;
            console.log(brojStola);

            const brojLjudi=this.kontejner.querySelector(".brojLjudi");
            console.log(brojLjudi);

            
            console.log(brojStola.value);
            console.log(brojLjudi.value);
            console.log(ime.value);
            console.log(prezime.value);

            fetch("https://localhost:5001/Poslasticara/OslobodiSto/"+ brojStola + "/"+ this.id,{
                method:"DELETE"
            }).then(resp=>{
                if(resp.ok){
                   
                    this.stolovi[brojStola].oslobodiSto(brojStola);
                    alert("Sto je sada slobodan!");
                    location.reload();
                   
                    
                    
                }
            }).catch(err=>{
                console.log(err);
            });
            this.kontejner.querySelector(".brojStola").value= " ";
            this.kontejner.querySelector(".ime").value= " ";
            this.kontejner.querySelector(".prezime").value= " ";
            this.kontejner.querySelector(".brojLjudi").value= " ";





        }

        //dugmee za izmenu
         dugme=document.createElement("buttton");
         dugme.innerHTML="Izmeni rezervaciju";
         dugme.className="dugmici";
         kontForma1.appendChild(dugme);
         dugme.onclick=(ev)=>{

            const ime=this.kontejner.querySelector(".ime").value;
            console.log(ime);

            const prezime=this.kontejner.querySelector(".prezime").value;
            console.log(prezime);

            const brojStola= this.kontejner.querySelector(".brojStola").value;
            console.log(brojStola);

            const brojLjudi=this.kontejner.querySelector(".brojLjudi").value;
            console.log(brojLjudi);


            fetch("https://localhost:5001/Poslasticara/IzmeniSto/"+brojStola + "/" + ime + "/" + prezime + "/" + brojLjudi,{
                method: "PUT"
            }).then(resp=>{
                if(resp.ok){
                   
                    this.stolovi[brojStola].izmeniSto(brojStola,brojLjudi,ime,prezime);
                    alert("Izmena je ucitana u bazu!");
                    location.reload();
                    
                   
                    
                    
                   

                }
            }).catch(err=>{
                console.log(err);
            });
            
            
            
        


        }

        //dugme za narucivanje
          dugme=document.createElement("buttton");
          dugme.innerHTML="Poruči";
          dugme.className="dugmici";
          kontForma2.appendChild(dugme);
          dugme.onclick=(ev)=>{

            const br = this.kontejner.querySelector(".brojStola1").value;               
            console.log(br);

            const desertici = selD.value;       
            console.log(desertici);

            const picence = selP.value;
            console.log(picence);

            let porudbina= new Porudzbina(br,desertici,picence);

            if(br>this.kapacitet)
              alert("Ne postoji sto sa tim rednim brojem! Izaberite neki drugi sto!");
            else{
                
                fetch("https://localhost:5001/Poslasticara/DodaPorudzbinu/"+ this.id,{
                    method: "POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id:br.value,
                        deserti:desertici,
                        pice:picence, // ispravljeno i ovo
                    })
                }).then(p=>{
                    if(p.ok)
                    {
                        this.stolovi[br].naruciSaStola(br,porudbina);

                    }
                })
            } 
            this.kontejner.querySelector(".brojStola1").value= " ";
            selD.value=" ";
            selP.value=" ";
            

        }


  
    }

    crtajStolove(host){
        const stolovi= document.createElement("div");
        stolovi.className="crtaniStolovi";
        this.kontejner.querySelector(".divZaElemente").appendChild(stolovi);


            fetch("https://localhost:5001/Poslasticara/PreuzmiStolove1").then(p=>{
             p.json().then(data=>{
            var niz = [];
            var brel =0;
            data.forEach(sto=>{
            //alert(poslasticara.naziv);
            const sto1=new Sto(sto.brojStola,sto.stanje,sto.maxKapacitet,sto.kapacitetStola,sto.ime,sto.prezime);
            //console.log(sto.idStola);
            console.log(sto.brojStola);
           
                    niz[brel++]=sto.brojStola;
                    this.dodajSto(sto1);
                    sto1.crtajSto1(stolovi);
                   
  
                
            });
            for(let i =0;i<this.kapacitet;i++)
            {
                var zauzet = false;
                for(var j =0;j<brel;j++)
                {
                    if(i==niz[j])
                    {
                        zauzet= true;
                        break;
                    }
                }
                if(zauzet == false)
                {
                    const sto1 = new Sto(i,"slobodan",3," "," "," ");
                    this.dodajSto(sto1);
                    sto1.crtajSto(stolovi);

                }
            }
            //OVO JE ISPRAVLJENO 



        });
    });
    


           


    }

    

   
   


   

  
}

