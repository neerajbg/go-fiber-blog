package database

import (
	"log"
	"os"

	"github.com/neerajbg/go-fiber-blog/model"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

var DBConn *gorm.DB

func ConnectDB() {

	// Access DB credentials from environment
	host := os.Getenv("db_host")
	user := os.Getenv("db_user")
	password := os.Getenv("db_password")
	dbname := os.Getenv("db_name")

	dsn := user + ":" + password + "@tcp(" + host + ":3306)/" + dbname + "?charset=utf8mb4&parseTime=True&loc=Local"

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Error),
	})

	if err != nil {
		panic("Database connection failed.")
	}

	log.Println("Connection successful.")

	db.AutoMigrate(new(model.Blog))

	DBConn = db
}
