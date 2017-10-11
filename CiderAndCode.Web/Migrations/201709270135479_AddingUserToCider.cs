namespace CiderAndCode.Web.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddingUserToCider : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Ciders", "User_Id", c => c.Int());
            CreateIndex("dbo.Ciders", "User_Id");
            AddForeignKey("dbo.Ciders", "User_Id", "dbo.Users", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Ciders", "User_Id", "dbo.Users");
            DropIndex("dbo.Ciders", new[] { "User_Id" });
            DropColumn("dbo.Ciders", "User_Id");
        }
    }
}
