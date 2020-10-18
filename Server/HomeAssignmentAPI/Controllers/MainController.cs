using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Web;
using System.Web.Http;
using DAL;

namespace HomeAssignmentAPI.Controllers
{
    public class MainController : BaseController
    {
        [HttpPost]
        public HttpResponseMessage SetUserID([FromBody] dynamic UserToken)
        {
            try
            {
                InitUserID(UserToken);
                return Request.CreateResponse(HttpStatusCode.OK, UserID);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        [HttpPost]
        public HttpResponseMessage AddMission()
        {
            try
            {
                string CurrentUserID = HttpContext.Current.Request.Form["UserID"];
                string MissionTitle = HttpContext.Current.Request.Form["MissionTitle"];
                var ImageFile = HttpContext.Current.Request.Files.Count > 0
                    ? HttpContext.Current.Request.Files[0]
                    : null;
                string MissionImagePath = SaveImage(HttpContext.Current, ImageFile, CurrentUserID, MissionTitle);
                Mission NewMission = Dal.Instance.AddMission(CurrentUserID, MissionTitle, MissionImagePath);
                return Request.CreateResponse(HttpStatusCode.OK, NewMission);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        [HttpGet]
        public HttpResponseMessage GetUserMissions(string UserID)
        {
            try
            {
                List<Mission> UserMissions = Dal.Instance.GetUserMissions(UserID);
                return Request.CreateResponse(HttpStatusCode.OK, UserMissions);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        [HttpGet]
        public HttpResponseMessage GetAllMission()
        {
            try
            {
                List<Mission> AllMissions = Dal.Instance.GetAllMission();
                return Request.CreateResponse(HttpStatusCode.OK, AllMissions);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        private void EnsureDirectoriesExist(HttpServerUtility Server)
        {
            if (!Directory.Exists(Server.MapPath(@"~/pix/")))
            {
                Directory.CreateDirectory(Server.MapPath(@"~/pix/"));
            }
        }

        private string SaveImage(HttpContext context, HttpPostedFile ImageFile, string CurrentUserID, string MissionTitle)
        {
            var Server = context.Server;
            EnsureDirectoriesExist(Server);
            string NewPath = Server.MapPath(@"~/pix/" + ImageFile.FileName);
            if (File.Exists(NewPath))
            {
                return NewPath;
            }
            ImageFile.SaveAs(NewPath);
            return NewPath;
            ;
        }
    }
}