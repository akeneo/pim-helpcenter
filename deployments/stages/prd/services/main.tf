module "services" {
  source     = "../../../modules/services"
  project_id = var.project_id
  site_id    = var.site_id
  domain     = var.domain
}

terraform {
  backend "gcs" {
    bucket = "akecld-terraform-paas-helpcenter-prd"
    prefix = "services/prd"
  }
  required_version = "= 1.6.5"
}
