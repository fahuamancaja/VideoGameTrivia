using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class QuizController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly IQuestionRepository _questionRepository;
        public QuizController(DataContext context, IQuestionRepository questionRepository)
        {
            _questionRepository = questionRepository;
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<QuestionDto>>> GetQuestionsAsync()
        {

            return Ok(await _questionRepository.GetQuestionsAsync());

        }

        [HttpGet("{id}", Name = "GetUser")]
        public async Task<ActionResult<QuestionDto>> GetUser(int id)
        {
            return await _questionRepository.GetQuestionByIdAsync(id);
        }
    }
}