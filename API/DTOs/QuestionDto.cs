using System.Collections.Generic;

namespace API.DTOs
{
    public class QuestionDto
    {
        public int Id { get; set; }
        public string Question  { get; set; }

        public string Correct { get; set; }
        public IList<IncorrectDto> Incorrect { get; set; }
    }
}