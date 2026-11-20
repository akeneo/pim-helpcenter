output "service_frontend_public_url" {
  value = module.services.service_frontend_public_url
}

output "service_frontend_default_url" {
  value = module.services.service_frontend_default_url
}

output "required_dns_updates" {
  value = module.services.required_dns_updates
}
