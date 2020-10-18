using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class Mission
    {
        public string UserID { get; set; }
        public string MissionTitle { get; set; }
        public string MissionImagePath { get; set; }

        public Mission(string userID,string missionTitle,string missionImagePath)
        {
            UserID = userID;
            MissionTitle = missionTitle;
            MissionImagePath = missionImagePath;
        }
    }
}
