require 'faker'

# Client.destroy_all

10.times do
  Client.create(
    name: Faker::Beer.brand,
    cuit: rand(1..10),
    domicilio: Faker::Appliance.equipment
  )
end
