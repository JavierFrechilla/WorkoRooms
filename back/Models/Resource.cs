namespace workorooms.Models
{
    public class Resource
    {
        public int Id { get; set; }
        public int RoomId { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; }
        public Room Room { get; set; }
    }
}
