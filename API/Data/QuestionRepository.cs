using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class QuestionRepository : IQuestionRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public QuestionRepository(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<IEnumerable<QuestionDto>> GetQuestionsAsync()
        {
            return await _context.Questions
            .ProjectTo<QuestionDto>(_mapper.ConfigurationProvider)
            .ToListAsync();
        }

        public async Task<QuestionDto> GetQuestionByIdAsync(int id)
        {
            return await _context.Questions
            .Where(x => x.Id == id)
            .ProjectTo<QuestionDto>(_mapper.ConfigurationProvider)
            .SingleOrDefaultAsync();
        }
    }
}