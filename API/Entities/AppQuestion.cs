using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;
using API.Test;

namespace API.Entities
{
    public class AppQuestion
    {
        public int Id { get; set; }
        public string Question  { get; set; }

        public IList<IncorrectAnswer> Incorrect { get; set; }

        public string Correct { get; set; }
    }
}