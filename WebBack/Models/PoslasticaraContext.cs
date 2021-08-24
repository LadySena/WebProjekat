using Microsoft.EntityFrameworkCore;


namespace WebBack.Models
{
    public class PoslasticaraContext:DbContext
    {
        public DbSet<Poslasticara> Poslasticare {get; set;}

        public DbSet<Sto> Stolovi {get; set;}

        public DbSet<Porudzbina> Porudzbine {get; set;}

        public PoslasticaraContext(DbContextOptions options):base(options)
        {
            
        }

    }

}

