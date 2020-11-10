using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using API.Entities;
using API.Test;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class Seed
    {
        public static async Task SeedQuestions(DataContext context)
        {
            if (await context.Questions.AnyAsync()) return;

            var questionData = await System.IO.File.ReadAllTextAsync("Data/QuestionSeedData.json");

            var myDeserializedClass = JsonSerializer.Deserialize<List<Example>>(questionData);
            

            foreach (var item in myDeserializedClass)
            {
                var appQuestion = new AppQuestion();
                var incorrectAnswerList = new List<IncorrectAnswer>();

                appQuestion.Question = item.Question;
                appQuestion.Correct = item.Correct;
                foreach (var thing in item.Incorrect)
                {
                    var incorrectAnswer = new IncorrectAnswer();
                    incorrectAnswer.Incorrect = thing;
                    incorrectAnswerList.Add(incorrectAnswer);
                }
                appQuestion.Incorrect = incorrectAnswerList;

                context.Questions.Add(appQuestion);
            }
            await context.SaveChangesAsync();
        }
    }
}
