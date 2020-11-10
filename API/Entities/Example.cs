using System.Collections.Generic;
using System.Runtime.Serialization;

namespace API.Entities
{
    [DataContract]
    public class Example
    {
        [DataMember(Name="Question")]
        public string Question  { get; set; }

        [DataMember(Name="Incorrect")]
        public IList<string> Incorrect { get; set; }

        [DataMember(Name="Correct")]
        public string Correct { get; set; }
    }
}