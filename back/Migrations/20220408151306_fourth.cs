using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace workorooms.Migrations
{
    public partial class fourth : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Participant");

            migrationBuilder.DropTable(
                name: "DTOBookingWithParticipants");

            migrationBuilder.AddColumn<string>(
                name: "Participants",
                table: "Booking",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Participants",
                table: "Booking");

            migrationBuilder.CreateTable(
                name: "DTOBookingWithParticipants",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BookingId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DTOBookingWithParticipants", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DTOBookingWithParticipants_Booking_BookingId",
                        column: x => x.BookingId,
                        principalTable: "Booking",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Participant",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BookingId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    DTOBookingWithParticipantsId = table.Column<int>(type: "int", nullable: true),
                    UserId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Participant", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Participant_Booking_BookingId",
                        column: x => x.BookingId,
                        principalTable: "Booking",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Participant_DTOBookingWithParticipants_DTOBookingWithParticipantsId",
                        column: x => x.DTOBookingWithParticipantsId,
                        principalTable: "DTOBookingWithParticipants",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Participant_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DTOBookingWithParticipants_BookingId",
                table: "DTOBookingWithParticipants",
                column: "BookingId");

            migrationBuilder.CreateIndex(
                name: "IX_Participant_BookingId",
                table: "Participant",
                column: "BookingId");

            migrationBuilder.CreateIndex(
                name: "IX_Participant_DTOBookingWithParticipantsId",
                table: "Participant",
                column: "DTOBookingWithParticipantsId");

            migrationBuilder.CreateIndex(
                name: "IX_Participant_UserId",
                table: "Participant",
                column: "UserId");
        }
    }
}
