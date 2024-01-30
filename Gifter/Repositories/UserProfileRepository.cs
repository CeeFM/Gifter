﻿using Gifter.Models;
using Gifter.Utils;

namespace Gifter.Repositories
{
    public class UserProfileRepository : BaseRepository, IUserProfileRepository
    {
        public UserProfileRepository(IConfiguration configuration) : base(configuration) { }

        public List<UserProfile> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                SELECT up.Id AS UserProfileId, up.Name, up.Email, up.DateCreated AS UserProfileDateCreated, 
                       up.ImageUrl AS UserProfileImageUrl
                  FROM UserProfile up";

                    var reader = cmd.ExecuteReader();

                    var userprofiles = new List<UserProfile>();
                    while (reader.Read())
                    {
                        userprofiles.Add(new UserProfile()
                        {

                            Id = DbUtils.GetInt(reader, "UserProfileId"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Email = DbUtils.GetString(reader, "Email"),
                            DateCreated = DbUtils.GetDateTime(reader, "UserProfileDateCreated"),
                            ImageUrl = DbUtils.GetString(reader, "UserProfileImageUrl"),
                        });
                    }

                    reader.Close();

                    return userprofiles;
                }
            }
        }

        public UserProfile GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            SELECT up.Id AS UserProfileId, up.Name, up.Email, up.DateCreated AS UserProfileDateCreated, 
                            up.ImageUrl AS UserProfileImageUrl
                             FROM UserProfile up
                            WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();

                    UserProfile userprofile = null;

                    if (reader.Read())
                    {
                        userprofile = new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "UserProfileId"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Email = DbUtils.GetString(reader, "Email"),
                            DateCreated = DbUtils.GetDateTime(reader, "UserProfileDateCreated"),
                            ImageUrl = DbUtils.GetString(reader, "UserProfileImageUrl"),
                        };
                        reader.Close();
                    }

                    return userprofile;
                }
            }
        }

        public void Add(UserProfile userprofile)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO UserProfile (Name, Email, DateCreated, ImageUrl)
                        OUTPUT INSERTED.ID
                        VALUES (@Name, @Email, @DateCreated, @ImageUrl)";

                    DbUtils.AddParameter(cmd, "@Title", userprofile.Name);
                    DbUtils.AddParameter(cmd, "@Email", userprofile.Email);
                    DbUtils.AddParameter(cmd, "@DateCreated", userprofile.DateCreated);
                    DbUtils.AddParameter(cmd, "@ImageUrl", userprofile.ImageUrl);

                    userprofile.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void Update(UserProfile userprofile)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE UserProfile
                           SET Name = @Name,
                               Email = @Email,
                               DateCreated = @DateCreated,
                               ImageUrl = @ImageUrl,
                         WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Title", userprofile.Name);
                    DbUtils.AddParameter(cmd, "@Email", userprofile.Email);
                    DbUtils.AddParameter(cmd, "@DateCreated", userprofile.DateCreated);
                    DbUtils.AddParameter(cmd, "@ImageUrl", userprofile.ImageUrl);
                    DbUtils.AddParameter(cmd, "@Id", userprofile.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM UserProfile WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
