using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace HomeAssignmentAPI.Controllers
{
    public class MainController : BaseController
    {

        [HttpGet]
        public HttpResponseMessage GetUserID()
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, UserID);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }

        }

    }
}