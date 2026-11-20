# Static hosting of the help center: Firebase Hosting serves it over HTTPS, with a managed certificate
# and its CDN. The content is deployed by scripts/publish.py (Firebase Hosting REST API).
resource "google_firebase_hosting_site" "front" {
  provider = google-beta
  project  = var.project_id
  # Also served on https://<site_id>.web.app, so it must be unique across Firebase.
  site_id = var.site_id
}

resource "google_firebase_hosting_custom_domain" "front" {
  provider = google-beta
  project  = var.project_id

  site_id               = google_firebase_hosting_site.front.site_id
  custom_domain         = var.domain
  wait_dns_verification = false

  depends_on = [
    google_dns_record_set.hosting_a,
    google_dns_record_set.hosting_txt,
  ]
}
