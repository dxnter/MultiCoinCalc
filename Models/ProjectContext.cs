using Microsoft.EntityFrameworkCore;

namespace MultiCoinCalc.Models {
    public class MultiCoinCalcContext : DbContext {
        public MultiCoinCalcContext(DbContextOptions<MultiCoinCalcContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}