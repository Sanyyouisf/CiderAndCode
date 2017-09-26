using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CiderAndCode.Web.ViewModels
{
    public class SanyBushels
    {
        public int Id { get; set; }
        public string AppleType { get; set; }
        public int BushelQuantity { get; set; }
        public string User { get; set; }
        public bool Pressed { get; set; }
        public bool Ripe { get; set; } 
    }

}

