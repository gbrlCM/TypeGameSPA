using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
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

            if (context.Set<Frase>().Count() == 0)
            {
                var frases = GetFrases();
                frases.ForEach(f => context.Set<Frase>().Add(new Frase(f.Senteca)));
                context.SaveChanges();
            }
        }

        private List<Frase> GetFrases()
        {
            var json = File.ReadAllText("Data/InitialSentenceData.json");
            var frase = JsonConvert.DeserializeObject<List<Frase>>(json);

            return frase;
        }
    }
}
