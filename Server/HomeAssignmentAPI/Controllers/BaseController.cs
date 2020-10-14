using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Web;
using System.Web.Http;
using System.Web.SessionState;

namespace HomeAssignmentAPI.Controllers
{
    public class BaseController : ApiController
    {
        public string UserID
        {
            get
            {                
                return UserID;
            }
            set
            {
                if (UserID == null)
                {
                    UserID = GetSessionID();
                }
            }
        }
        private string GetSessionID()
        {
            return "user" + System.Web.HttpContext.Current.Session.SessionID;
        }


    }
}
