module "dependencies" {
  source     = "../../../modules/dependencies"
  project_id = var.project_id
  domain     = var.domain
}

output "name_servers" {
  value = module.dependencies.name_servers
}

terraform {
  backend "gcs" {
    bucket = "akecld-terraform-paas-helpcenter-prd"
    prefix = "dependencies/prd"
  }
  required_version = "= 1.6.5"
}
