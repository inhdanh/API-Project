using System;

namespace API_Project.Models
{
    public class Student : Entity
    {
        public Student()
        {
            Id = Guid.NewGuid();
        }
        public int Age { get; set; }
        public int Roll { get; set; }
        public string Name { get; set; }
        public int Class { get; set; }
        public string Section { get; set; }
    }
}
