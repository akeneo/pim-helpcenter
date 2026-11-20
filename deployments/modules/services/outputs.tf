output "service_frontend_public_url" {
  value = "https://${var.domain}"
}

output "service_frontend_default_url" {
  value = google_firebase_hosting_site.front.default_url
}

output "required_dns_updates" {
  value = google_firebase_hosting_custom_domain.front.required_dns_updates
}
