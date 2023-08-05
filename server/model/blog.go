package model

type Blog struct {
	ID uint `json:"id" gorm:"primaryKey"`

	Title string `json:"title" gorm:"not null;column:title;size:255"`
	Post  string `json:"post" gorm:"not null;column:post;size:255"`
}
