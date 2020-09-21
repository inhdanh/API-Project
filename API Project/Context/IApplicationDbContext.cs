using API_Project.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace API_Project.Context
{
    public interface IApplicationDbContext
    {
        DbSet<Student> Students { get; set; }

        Task<int> SaveChanges();
    }
}