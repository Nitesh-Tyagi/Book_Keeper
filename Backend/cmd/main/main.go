package main

import (
	"log"
	"net/http"

	"github.com/Nitesh-Tyagi/BookKeeper/pkg/routes"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

func main() {
	headers := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
	methods := handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE"})
	origins := handlers.AllowedOrigins([]string{"*"})

	r := mux.NewRouter()
	routes.RegisterBookKeeperRoutes(r)
	http.Handle("/", r)
	log.Fatal(http.ListenAndServe("localhost:8000", handlers.CORS(headers, methods, origins)(r)))
}
