using Common.Enums;

namespace ProfileService.Domain.Entities
{
    public class Profile
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public int Age { get; set; }
        public Sex? Sex { get; set; }
        public EducationLevel? EducationLevel { get; set; }
    }
}
