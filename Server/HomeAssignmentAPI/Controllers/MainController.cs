using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Net.Http.Headers;
using System.Reflection;
using System.Web;
using System.Web.Http;
using DAL;

namespace HomeAssignmentAPI.Controllers
{
    public class MainController : BaseController
    {
        [HttpPost]
        public HttpResponseMessage SetUserID([FromBody]dynamic UserToken)
        {
            try
            {
                InitUserID(UserToken);
                return Request.CreateResponse(HttpStatusCode.OK, UserID);
            }
            catch(Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        [HttpPost]
        public HttpResponseMessage AddMission()
        {
            try
            {
                var imageFile = HttpContext.Current.Request.Files.Count > 0
                    ? HttpContext.Current.Request.Files[0]
                    : null;
                string UserID = HttpContext.Current.Request.Form["UserID"];
                string MissionTitle = HttpContext.Current.Request.Form["MissionTitle"];
                return Request.CreateResponse(HttpStatusCode.OK, "");
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }
    }
}