const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedCategories = () => db.Promise.map([
	{name: 'clothing'},
	{name: 'food'}
])

const seedProducts = () => db.Promise.map([
	{name: 'Stella and Chewys', category_id: 2, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71GLralsZPL._SY355_.jpg', description: 'Raw grass-fed beef. 100% complete & balanced dinner. Enchanced with probiotics & antioxidants', price: 18.99, weight: "5.5oz", tags:["raw", "grain-free"]},
	{name: 'Primal Raw', category_id: 2, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71CUG%2BVk5YL._AC_UL320_SR272,320_.jpg', description: 'Raw grass-fed duck. Grain and gluten free. Made in the USA!', price: 20.99, weight: "5.5oz", tags:["raw", "grain-free"]},
	{name: 'Nature\'s Variety Instinct', category_id: 2, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81iSGLVmCQL._SY450_.jpg', description: 'Raw grass-fed chicken. 95% meat, organs, bone & fat', price: 21.99, weight: "5.5oz", tags:["raw", "grain-free"]},
	{name: 'Orijen Original', category_id: 2, imageUrl: 'https://www.orijen.ca/wp-content/uploads/2014/02/DS-ORIJEN-dog-Original-fr-lg.jpg', description: 'Fresh free-run chicken and turkey. Free of rendered poultry meals. Infusions of gently freeze-dried liver', price: 23.99, tags:["dry", "grain-free"]},
	{name: 'Taste of the Wild', category_id: 2, imageUrl: 'http://www.tasteofthewildpetfood.com/wp-content/uploads/2015/05/PacStream2.png', description: 'Premium grain-free pet formula. Based on your pet\'s ancestral diet. ', inventory: "", price: 18.99, tags:["dry", "grain-free"]},
	{name: 'Buffalo Blue', category_id: 2, imageUrl: 'http://www.ruralking.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/0/1/013735019.jpg', description: 'Features real meat and includes only the finest natural ingredients', price: 10.99, tags:["dry", "grain-free"]},
	{name: 'Weruva Grain-Free Selects', category_id: 2, imageUrl: 'https://www.petsolutions.com/images/Products/78400517.jpg', description: 'Great for allergy-sensitive pooches. Whole chunks of wild caught tuna mixed with sweet potatoes.', price: 10.99, tags:["wet", "grain-free"]},
	{name: 'Halo Spot\'s Stew', category_id: 2, imageUrl: 'http://shop.halopets.com/Halo_Dog_chick-chickpea_5.png?resizeid=-2&resizeh=400&resizew=400', description: 'Wholesome, pure, and simple recipe for dogs. A complete and balanced formula.', price: 10.99, tags:["wet", "grain-free"]},
	{name: 'Nutro', category_id: 2, imageUrl: 'https://www.petsolutions.com/images/Products/79151353.jpg', description: 'Provides a wholesome and delicious taste. Enhances skin and coat quality', price: 10.99, tags:["wet", "grain-free"]}

	], user => db.model('foodProducts').create(foodProduct));


db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .catch(error => console.error(error))    
  .finally(() => db.close())
