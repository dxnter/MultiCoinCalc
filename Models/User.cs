using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


namespace MultiCoinCalc.Models
{
    public class User : BaseEntity
    {
        public int UserId { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public User() {
            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
        }
    }
}
