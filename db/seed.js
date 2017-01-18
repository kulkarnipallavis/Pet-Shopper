const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedCategories = () => db.Promise.map([
	{name: 'Clothing', imageURL: '/images/clothing/beecostume.jpg'},
	{name: 'Food', imageURL: '/images/food/stellaandchewys.jpg'},
	{name: 'Accessories', imageURL: '/images/accessories/santabeard.jpg'}
], category => db.model('categories').create(category));

const seedProducts = () => db.Promise.map([
	{name: 'Bee Costume', category_id: 1, imageURL: '/images/clothing/beecostume.jpg', description: 'Bee costume for miniature dogs. Made in America', price: 2899, tags:["costume", "halloween"]},
	{name: 'Red coat', category_id: 1, imageURL: '/images/clothing/redcoat.jpg', description: 'Red coat. Made in America', price: 2899, tags:["outerwear"]},
	{name: 'Red sweatshirt', category_id: 1, imageURL: '/images/clothing/redsweatshirt.jpg', description: 'Red sweatshirt. Made in America', price: 2899, tags:["casual", "sweatshirt"]},
	{name: 'Blue T-Shirt', category_id: 1, imageURL: '/images/clothing/blueshirt.jpg', description: 'Plain blue shirt for miniature dogs. Made in America', price: 1899, tags:["casual", "shirt"]},
	{name: 'Tribal Patterned Dress', category_id: 1, imageURL: '/images/clothing/dress.jpg', description: 'Handmade dress for fancy occasions. Made in America', price: 4899, tags:["costume", "dress"]},
	{name: 'Gray Sweatshirt', category_id: 1, imageURL: '/images/clothing/graysweatshirt.jpg', description: 'Gray sweatshirt for miniature dachsunds. Made in America', price: 2899, tags:["outerwear", "sweatshirt", "casual"]},
	{name: 'Patterned Coat', category_id: 1, imageURL: '/images/clothing/patternedcoat.jpg', description: 'Coat for miniature dachsunds. Made in America', price: 2899, tags:["outerwear"]},
	{name: 'Pink shirt', category_id: 1, imageURL: '/images/clothing/pinkshirt.jpg', description: 'Pink shirt for miniature dachsunds. Made in America', price: 1099, tags:["casual", "shirt"]},
	{name: 'Pink sweater', category_id: 1, imageURL: '/images/clothing/pinksweater.jpg', description: 'Pink sweater for miniature dachsunds. Made in America', price: 1899, tags:["sweater"]},

	{name: 'Stella and Chewys', category_id: 2, imageURL: '/images/food/stellaandchewys.jpg', description: 'Raw grass-fed beef. 100% complete & balanced dinner. Enhanced with probiotics & antioxidants', price: 1899, weight: "5.5oz", tags:["raw", "grain-free"]},
	{name: 'Primal Raw', category_id: 2, imageURL: '/images/food/primalraw.jpeg', description: 'Raw grass-fed duck. Grain and gluten free. Made in the USA!', price: 2099, weight: "5.5oz", tags:["raw", "grain-free"]},
	{name: 'Nature\'s Variety Instinct', category_id: 2, imageURL: '/images/food/instinct.jpeg', description: 'Raw grass-fed chicken. 95% meat, organs, bone & fat', price: 2199, weight: "5.5oz", tags:["raw", "grain-free"]},
	{name: 'Orijen Original', category_id: 2, imageURL: '/images/food/orijen.jpeg', description: 'Fresh free-run chicken and turkey. Free of rendered poultry meals. Infusions of gently freeze-dried liver', price: 2399, tags:["dry", "grain-free"]},
	{name: 'Taste of the Wild', category_id: 2, imageURL: '/images/food/tasteofthewild.png', description: 'Premium grain-free pet formula. Based on your pet\'s ancestral diet.', price: 1899, tags:["dry", "grain-free"]},
	{name: 'Buffalo Blue', category_id: 2, imageURL: '/images/food/buffaloblue.jpeg', description: 'Features real meat and includes only the finest natural ingredients', price: 1099, tags:["dry", "grain-free"]},
	{name: 'Weruva Grain-Free Selects', category_id: 2, imageURL: '/images/food/weruva.jpeg', description: 'Great for allergy-sensitive pooches. Whole chunks of wild caught tuna mixed with sweet potatoes.', price: 1099, tags:["wet", "grain-free"]},
	{name: 'Halo Spot\'s Stew', category_id: 2, imageURL: '/images/food/halo.png', description: 'Wholesome, pure, and simple recipe for dogs. A complete and balanced formula.', price: 1099, tags:["wet", "grain-free"]},
	{name: 'Nutro', category_id: 2, imageURL: '/images/food/nutro.jpeg', description: 'Provides a wholesome and delicious taste. Enhances skin and coat quality', price: 1099, tags:["wet", "grain-free"]},

	{name: 'Gray scarf', category_id: 3, imageURL: '/images/accessories/grayscarf.jpg', description: 'Gray scarf. Made in America', price: 2899, tags:["outerwear"]},
	{name: 'Dog blanket', category_id: 3, imageURL: '/images/accessories/dogblanket.jpg', description: 'Blue wool dog blanket. Keeps your puppy warm on cold winter nights. Made in America', price: 2899, tags:["blanket", "wool"]},
	{name: 'Double leash', category_id: 3, imageURL: '/images/accessories/doubleleash.jpg', description: 'Double leather leash. Made in America', price: 1899, tags:["leather"]},
	{name: 'Santa beard', category_id: 3, imageURL: '/images/accessories/santabeard.jpg', description: 'Santa beard. Made in America', price: 1899, tags:["holiday", "costume"]},
	{name: 'Snow hat', category_id: 3, imageURL: '/images/accessories/snowhat.jpg', description: 'Snow hat. Made in America', price: 2399, tags:["holiday", "costume"]},
	{name: 'Dog tie', category_id: 3, imageURL: '/images/accessories/tie.jpg', description: 'Plaid tie. Made in America', price: 1899, tags:["costume"]}

	], product => db.model('products').create(product));


db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedCategories)
  .then(categories => console.log(`Seeded ${categories.length} categories OK`))
  .then(seedProducts)
  .then(products => console.log(`Seeded ${products.length} products OK`))

  .catch(error => console.error(error))
  .finally(() => db.close())
