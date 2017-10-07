using CiderAndCode.Web.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CiderAndCode.Web.ViewModels
{
    public class SanyCider
    {
        public int Id { get; set; }
        public string AppleType { get; set; }
        public string Notes { get; set; }
        public int HowManyGallons { get; set; }
        public bool filtered { get; set; }
        public string Bushel { get; set; }
    }
}