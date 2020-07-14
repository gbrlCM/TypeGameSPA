using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace TypeGameSPA.Models
{
    public class Score
    {
        public Score(int pontos, string nome)
        {
            Pontos = pontos;
            Nome = nome;
        }

        [DataMember]
        public int Id { get; protected set; }
        [Required]
        public int Pontos { get; private set; }
        [Required]
        public string Nome { get; private set; }
    }
}
