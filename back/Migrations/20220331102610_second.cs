using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace workorooms.Migrations
{
    public partial class second : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Resource");

            migrationBuilder.RenameColumn(
                name: "DateOut",
                table: "Booking",
                newName: "HourOut");

            migrationBuilder.RenameColumn(
                name: "DateIn",
                table: "Booking",
                newName: "HourIn");

            migrationBuilder.AddColumn<DateTime>(
                name: "Date",
                table: "Booking",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Date",
                table: "Booking");

            migrationBuilder.RenameColumn(
                name: "HourOut",
                table: "Booking",
                newName: "DateOut");

            migrationBuilder.RenameColumn(
                name: "HourIn",
                table: "Booking",
                newName: "DateIn");

            migrationBuilder.CreateTable(
                name: "Resource",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Quantity = table.Column<int>(type: "int", nullable: false),
                    RoomId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Resource", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Resource_Room_RoomId",
                        column: x => x.RoomId,
                        principalTable: "Room",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Resource_RoomId",
                table: "Resource",
                column: "RoomId");
        }
    }
}
