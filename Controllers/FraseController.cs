using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TypeGameSPA.Data;
using TypeGameSPA.Models;

namespace TypeGameSPA.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class FraseController : ControllerBase
    {
        private readonly ApplicationContext context;

        public FraseController(ApplicationContext context)
        {
            this.context = context;
        }


        public string RequestSetence()
        {
            var n = new Random();
            return context.Set<Frase>().Find(n.Next(context.Set<Frase>().Count())).Senteca;
        }
    }
}
