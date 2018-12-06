using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace CoreApp.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ClientsController : ControllerBase
	{
		private MyDatabaseContext _context;

		public ClientsController(MyDatabaseContext context) 
		{
			_context = context;
		}

		[HttpGet]
		[Route("list")]
		public IActionResult GetSampleData()
		{
			// _context.<Entity>
			return Ok(
				new List<dynamic> {
					new {
						Name = "Data Result 1",
						Id = 1
					},
					new {
						Name = "Data Result 2",
						Id = 2
					},
					new {
						Name = "Data Result 3",
						Id = 3
					},
					new {
						Name = "Data Result 4",
						Id = 4
					}
				}
			);
		}
	}
}
