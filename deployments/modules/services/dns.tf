# Records Firebase Hosting asks for a custom domain: the A record of Firebase Hosting and the TXT
# record proving the domain belongs to the site. The "required_dns_updates" output shows what
# Firebase expects, to compare with these records if the domain stays unverified.
resource "google_dns_record_set" "hosting_a" {
  name         = "${var.domain}."
  managed_zone = replace(var.domain, ".", "-")
  type         = "A"
  ttl          = 300
  project      = var.project_id

  rrdatas = var.firebase_hosting_ips
}

resource "google_dns_record_set" "hosting_txt" {
  name         = "${var.domain}."
  managed_zone = replace(var.domain, ".", "-")
  type         = "TXT"
  ttl          = 300
  project      = var.project_id

  rrdatas = ["\"hosting-site=${var.site_id}\""]
}
