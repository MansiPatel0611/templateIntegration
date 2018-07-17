using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace MyApp.Models
{
    public class ApiResponse
    {
        public bool Status { get; set; }
        public Employee Employee { get; set; }
        public ModelStateDictionary ModelState { get; internal set; }
    }
}
