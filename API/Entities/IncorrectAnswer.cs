using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;

namespace API.Entities
{
    [DataContract]
    public class IncorrectAnswer
    {
        public int Id { get; set; }

        public string Incorrect { get; set; }
        public AppQuestion AppQuestion { get; set; }

        public int AppQuestionId { get; set; }
    }
}