variable "project_id" {
  type        = string
  description = "Project ID"
}

variable "domain" {
  type        = string
  description = "Domain of the help center, with its own DNS zone"
}

variable "google_project_services" {
  type        = list(string)
  description = "List of all google project APIs to activate"
  default = [
    "monitoring.googleapis.com",
    "logging.googleapis.com",
    "dns.googleapis.com",
    "firebase.googleapis.com",
    "firebasehosting.googleapis.com",
  ]
}
