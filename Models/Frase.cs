using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace TypeGameSPA.Models
{
    public class Frase
    {
        public Frase(string senteca)
        {
            Senteca = senteca;
        }

        [DataMember]
        public int Id { get; protected set; }
        [Required]
        public string Senteca { get; private set; }
    }
}
