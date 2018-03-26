using Microsoft.EntityFrameworkCore;

namespace MultiCoinCalc.Models
{
    public class MultiCoinCalcContext : DbContext
    {
        // base() calls the parent class' constructor passing the "options" parameter along
        public MultiCoinCalcContext(DbContextOptions<MultiCoinCalcContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
