using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
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
    }
}