using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebBack.Models;
using Microsoft.EntityFrameworkCore;

namespace WebBack.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PoslasticaraController : ControllerBase
    {
       
       public PoslasticaraContext Context {get; set;}

        public PoslasticaraController(PoslasticaraContext context)
        {
            Context=context;
        }

        [Route("PreuzmiPoslasticare")]
        [HttpGet]
        public async Task<List<Poslasticara>> PreuzmiPoslasticare()
        {
            //return await Context.Poslasticare.ToListAsync();
            return await Context.Poslasticare.Include(p=>p.Stolovi).Include(p=>p.Porudzbine).ToListAsync();
        }

        [Route("UpisiPoslasticaru")]
        [HttpPost]
        public async Task UpisiPoslasticaru([FromBody] Poslasticara posl)
        {
            Context.Poslasticare.Add(posl);
            await Context.SaveChangesAsync();
        }

        [Route("IzmeniPoslasticaru")]
        [HttpPut]
        public async Task IzmeniPoslasticaru([FromBody] Poslasticara posl)
        {
            Context.Poslasticare.Update(posl);
            await Context.SaveChangesAsync();

        }

        [Route("IzbrisiPoslasticaru/{id}")]
        [HttpDelete]
        public async Task IzbrisiPoslasticaru(int id)
        {
            var posl= await Context.Poslasticare.FindAsync(id);
            Context.Poslasticare.Remove(posl);
            await Context.SaveChangesAsync();
        }

        [Route("ZauzmiSto/{id}")]
        [HttpPost]
        public async Task<IActionResult>  ZauzmiSto(int id, [FromBody] Sto sto)
        {
            var posl= await Context.Poslasticare.FindAsync(id);
            sto.Poslasticara=posl;
            var sto_pret= await Context.Stolovi.Where(s=> s.BrojStola==sto.BrojStola && s.Poslasticara.ID==id).FirstOrDefaultAsync();
            if(sto_pret!=null)
            {
                 return StatusCode(406);

            }
            else{
                Context.Stolovi.Add(sto);
                await Context.SaveChangesAsync();
                return Ok();
            }
            
            //Context.Stolovi.Add(sto);
            //await Context.SaveChangesAsync();

        }

        [Route("OslobodiSto/{br}/{id}")]
        [HttpDelete]
        public async Task OslobodiSto(int br, int id)
        {
            var sto= await Context.Stolovi.Where(s=> s.BrojStola==br && s.Poslasticara.ID==id).FirstOrDefaultAsync();
            Context.Stolovi.Remove(sto);
            await Context.SaveChangesAsync();

            
        }


        [Route("IzmeniSto/{br}/{ime}/{prezime}/{brljudi}")]
        [HttpPut]
        public async Task IzmeniSto(int br, string ime, string prezime, int brljudi)
        {
            var sto= await Context.Stolovi.Where(s=> s.BrojStola==br).FirstOrDefaultAsync();
            sto.Ime=ime;
            sto.Prezime=prezime;
            sto.KapacitetStola=brljudi;
            await Context.SaveChangesAsync();

        }

        [Route("DodaPorudzbinu/{id}")]
        [HttpPost]
        public async Task DodaPorudzbinu(int id, [FromBody]Porudzbina pr)
        {
            var posl=await Context.Poslasticare.FindAsync(id);
            pr.Poslasticara=posl;
            Context.Porudzbine.Add(pr);
            await Context.SaveChangesAsync();
        }

      [Route("OtkaziPorudzbinu/{br}")]
      [HttpDelete]
      public async Task OtkaziPorudzbinu(int br)
      {
          var pr= await Context.Porudzbine.Where(p=>p.IDPorudzbine==br).FirstOrDefaultAsync();
          Context.Porudzbine.Remove(pr);
         await Context.SaveChangesAsync();

      }

      [Route("IzmeniPorudzbinu/{br}/{deserti}/{pice}")]
      [HttpPut]
      public async Task IzmeniPorudzbinu(int br, string deserti, string pice)
      {
          var pr= await Context.Porudzbine.Where(p=>p.IDPorudzbine==br).FirstOrDefaultAsync();
          pr.Deserti=deserti;
          pr.Pice=pice;
          await Context.SaveChangesAsync();
      }

       [Route("PreuzmiStolove/{idStola}")]
       [HttpGet]
        public async Task<List<Sto>> PreuzmiStolove(int id)
        {
            return await Context.Stolovi.Where(sto=>sto.Poslasticara.ID==id).ToListAsync();
        }

        [Route("PreuzmiStolove1")]
         [HttpGet]
        public async Task<List<Sto>> PreuzmiStolove1()
        {
            return await Context.Stolovi.ToListAsync();
        }

      




      
    }
}
