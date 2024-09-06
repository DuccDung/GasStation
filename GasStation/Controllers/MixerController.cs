using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GasStation.Controllers
{
    public class MixerController : Controller
    {
        // GET: Mixer
        public ActionResult MixerBd()
        {
            return View();
        }
        public ActionResult MixerHy()
        {
            return View();
        }
    }
}