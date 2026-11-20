variable "project_id" {
  type        = string
  description = "Project ID"
}

variable "site_id" {
  type        = string
  description = "Firebase Hosting site id"
}

variable "domain" {
  type        = string
  description = "Domain of the help center"
}

variable "firebase_hosting_ips" {
  type        = list(string)
  description = "IP addresses a custom domain of Firebase Hosting must point to"
  default     = ["199.36.158.100"]
}
