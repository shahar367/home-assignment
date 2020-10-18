using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class Dal
    {

        private static Dictionary<int, Mission> DB_Dictionary = new Dictionary<int, Mission>();

        private static Dal instance = null;
        private static readonly object padlock = new object();

        public static Dal Instance
        {
            get
            {
                lock (padlock)
                {
                    if (instance == null)
                    {
                        instance = new Dal();
                    }
                    return instance;
                }
            }
        }

        Dal()
        {
        }

        public Mission AddMission(string UserID, string MissionTitle, string MissionImagePath)
        {
            Mission NewMission = new Mission(UserID, MissionTitle, MissionImagePath);
            DB_Dictionary.Add(DB_Dictionary.Count(), NewMission);
            return NewMission;
        }

        public List<Mission> GetUserMissions(string userID)
        {
            var missions = DB_Dictionary.Where(DB => DB.Value.UserID == userID);
            List<Mission> userMissions = missions.Select(mission => mission.Value).ToList();
            return userMissions;
        }

        public List<Mission> GetAllMission()
        {
            return DB_Dictionary.Values.ToList();
        }
    }
}
