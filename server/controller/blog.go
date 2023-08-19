package controller

import (
	"github.com/gofiber/fiber/v2"
	"github.com/neerajbg/go-fiber-blog/database"
	"github.com/neerajbg/go-fiber-blog/model"
)

// Blog list
func BlogList(c *fiber.Ctx) error {

	context := fiber.Map{
		"statusText": "Ok",
		"msg":        "Blog List",
	}

	db := database.DBConn

	var records []model.Blog

	db.Find(&records)

	context["blog_records"] = records

	c.Status(200)
	return c.JSON(context)
}

// Add a Blog into Database
func BlogCreate(c *fiber.Ctx) error {
	context := fiber.Map{
		"statusText": "Ok",
		"msg":        "Add a Blog",
	}

	c.Status(201)
	return c.JSON(context)
}

// Update  a Blog
func BlogUpdate(c *fiber.Ctx) error {

	context := fiber.Map{
		"statusText": "Ok",
		"msg":        "Update Blog",
	}

	c.Status(200)
	return c.JSON(context)
}

// Delete a Blog
func BlogDelete(c *fiber.Ctx) error {

	context := fiber.Map{
		"statusText": "Ok",
		"msg":        "Delete Blog for the given ID",
	}

	c.Status(200)
	return c.JSON(context)
}
