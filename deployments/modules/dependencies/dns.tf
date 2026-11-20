# Zone of the help center domain. Its name servers must be declared at the registrar of the parent
# domain (NS records of flexibility.help.akeneo.com at Gandi), see the "name_servers" output.
resource "google_dns_managed_zone" "project_zone" {
  name        = replace(var.domain, ".", "-")
  dns_name    = "${var.domain}."
  description = "${var.domain} DNS zone"
  project     = var.project_id

  dnssec_config {
    state = "on"
  }

  depends_on = [
    google_project_service.apis,
  ]
}
