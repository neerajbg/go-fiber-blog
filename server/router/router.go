package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/neerajbg/go-fiber-blog/controller"
)

// Setup routing information
func SetupRoutes(app *fiber.App) {

	// list => get
	// add => post
	// update => put
	// delete => delete

	app.Get("/", controller.BlogList)
	app.Post("/", controller.BlogCreate)
	app.Put("/:id", controller.BlogUpdate)
	app.Delete("/", controller.BlogDelete)

}
