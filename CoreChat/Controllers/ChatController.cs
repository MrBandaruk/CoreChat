﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CoreChat.Controllers
{
    [Produces("application/json")]
    [Route("api/chat")]
    public class ChatController : Controller
    {
    }
}