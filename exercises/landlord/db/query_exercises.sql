-- Retrieve all info on all tenants
Tenant.all
-- Retrieve the name, age, and gender of all tenants
Tenant.select("name, age, gender")
-- Retrieve all info on all tenants older than 65
Tenant.where("age > ?", 65)
-- Retrieve all info on all tenants in apartment with id 20
Apartment.find_by(id: 20).tenants
-- Retrieve all info on all tenants in apartment with ids 20 or 15
Apartment.where(id: 15..20).tenants
-- Delete all tenants whose age is greater than 65
Tenant.where("age > ?", 65).delete_all
-- Create one new tenant, put them in any apartment you want
Tenant.new(name: "Coco", age: 42, gender: "female", apartment_id: 3)
-- Find just the ids for all apartments
Apartment.select("id")
-- Find all info for apartments whose price is greater than $2300
Apartment.where("monthly_rent > ?", 2300)
-- Geriatric Birthday! Update all tenants whose age is 90 to be 91
Tenant.where("age = ?", 90).update_all("age = 91")
-- Change all tenants ages to increase by 1
Tenant.update_all("age += 1")
-- Find all tenants who live in an apartment that costs more than $2300
Apartment.where("monthly_rent > ?", 2300).tenant.name
