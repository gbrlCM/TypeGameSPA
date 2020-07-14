using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TypeGameSPA.Models;

namespace TypeGameSPA.Data
{
    public class DataService : IDataService
    {
        private readonly ApplicationContext context;

        public DataService(ApplicationContext context)
        {
            this.context = context;
        }

        public void Initialize()
        {
            context.Database.Migrate();

            context.Set<Frase>().Add(new Frase ("Para conseguir o que quer, você deve olhar além do que você vê."));
            context.Set<Frase>().Add(new Frase("São os seus defeitos que fazem de você uma pessoa única."));
            context.Set<Frase>().Add(new Frase("Sim, o passado pode machucar. Mas, do modo como vejo, você pode fugir dele ou aprender com ele."));
            context.Set<Frase>().Add(new Frase("Não enxergue o mundo como ele é, enxergue como ele poderia ser"));
            context.Set<Frase>().Add(new Frase("Nunca devemos julgar as pessoas pela aparência, pois elas podem nos surpreender."));
            context.Set<Frase>().Add(new Frase("A jornada de mil quilômetros começa com o primeiro passo."));
            context.Set<Frase>().Add(new Frase("Um relógio quebrado está certo duas vezes por dia, meu amigo."));
            context.Set<Frase>().Add(new Frase("Temos aqui uma garota estranha, tão distraída lá vai ela. Não se dá com o pessoal, pensa que é especial."));
            context.Set<Frase>().Add(new Frase("Não sou eu quem estou confuso, você nem sabe quem você é"));
            context.Set<Frase>().Add(new Frase("A cada dia que passa nos tornamos menos humanos."));
            context.Set<Frase>().Add(new Frase("Quando a vida te decepciona, qual é a solução? Simplesmente continue a nadar."));

            context.SaveChanges();

        }
    }
}
