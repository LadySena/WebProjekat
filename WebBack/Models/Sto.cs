using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace WebBack.Models
{
    [Table("Sto")]
    public class Sto
    {
        [Key]
        [Column("IDStola")]
        public int IDStola{get; set;}

        [Column("BrojStola")]
        public int BrojStola{get; set;}

        [Column("Stanje")]
        [MaxLength(255)]
        public string Stanje{ get; set;}

        [Column("MaxKapacitet")]
        public int MaxKapacitet{get; set;}

        [Column("KapacitetStola")]
        public int KapacitetStola{get; set;}

        [Column("Ime")]
        [MaxLength(255)]
        public string Ime{get; set;}

        [Column("Prezime")]
        [MaxLength(255)]
        public string Prezime{get; set;}

        [JsonIgnore]
        public Poslasticara Poslasticara {get; set;}










        

    }
}