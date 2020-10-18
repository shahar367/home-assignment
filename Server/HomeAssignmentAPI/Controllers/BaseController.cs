using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.SessionState;

namespace HomeAssignmentAPI.Controllers
{
    public class BaseController : ApiController
    {
        public string UserID { get; set; }
        public void InitUserID(string SessionID)
        {
            if (UserID == null)
            {
                UserID = SessionID;
            }
        }
    }
}