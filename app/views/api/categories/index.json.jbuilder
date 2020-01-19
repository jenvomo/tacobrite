@categories.each do |category| 
  json.set! category.id do
    json.id category.id
    json.title category.title
  end
end
