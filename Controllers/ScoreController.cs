using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TypeGameSPA.Data;
using TypeGameSPA.Models;

namespace TypeGameSPA.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class ScoreController : ControllerBase
    {
        private readonly ApplicationContext context;

        public ScoreController(ApplicationContext context)
        {
            this.context = context;
        }

        public IEnumerable<Score> FetchHighScore()
        {
            var data = context.Set<Score>().OrderByDescending(s => s.Pontos);
            return data.ToArray();
        }

        public string PostScore(string nome, int pontos)
        {
            context.Set<Score>().Add(new Score(pontos, nome));
            context.SaveChanges();
            return nome;
        }
    }
}
