using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using MultiCoinCalc.ActionFilters;
using MultiCoinCalc.Models;
using Newtonsoft.Json;

namespace MultiCoinCalc.Controllers {
    public class UserController : Controller {
        private MultiCoinCalcContext _context;

        public UserController(MultiCoinCalcContext context) => _context = context;
    }
}