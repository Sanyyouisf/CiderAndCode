﻿namespace CiderAndCode.Web.ViewModels
{
    public class AppleResult
    {
        public int Id { get; set; }
        public string TypeOfApple { get; set; }
        public int BushelsQuantity { get; set; }
        public string ContributingUser { get; set; }
        public int NumberOfBushels { get; internal set; }
    }
}