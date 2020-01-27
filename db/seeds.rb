require 'open-uri'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
demo_user = User.create({email: 'demo@demo.com', password: 'password', first_name: 'Demo', last_name: 'Demo'})
hbh = User.create({email: 'hbh@hbh.com', password: '12345678', first_name: 'Scott', last_name: 'Calvin'})

Category.destroy_all
cat1 = Category.create({title: "Beef"})
cat2 = Category.create({title: "Breakfast"})
cat3 = Category.create({title: "Chicken"})
cat4 = Category.create({title: "Fish"})
cat5 = Category.create({title: "Pork"})
cat6 = Category.create({title: "Vegetarian"})
cat7 = Category.create({title: "Vegan"})

Event.destroy_all
event_1 = Event.create({ 
    title: 'Crispy Korean Chicken', 
    description: 'korean fried chicken tacos with sweet slaw, crunchy noodles + queso fresco
If there’s something you’re going to fry, it needs to be these Korean Fried Chicken Tacos.
And this is coming from someone who does everything she can not to fry. Oddly though, I have now fried three things this week.

Huh, maybe I secretly love it?


Seriously though, this chicken is special. When I saw it over on one of my favorite blogs, The Tart Tart a few weeks ago I knew it was something I really wanted to try. It’s all about two important things. One, it’s double fried, and two, the sauce. The sauce is amazing and it’s due to Gochujang sauce. A word I have not a clue how to say, but I do know that it’s Korean hot chile paste and it MAKES this chicken.

I could not find it at my local store (surprise, surprise), but I just ordered it on Thrive Market, which for me is actually easier than going to the store.', 
    date: Date.new(2020, 5, 9), 
    time: Time.new(2020, 5, 9, 5, 0), 
    end_date: Date.new(2020, 5, 9), 
    end_time: Time.new(2020, 5, 9, 9, 0), 
    organizer_id: hbh.id, 
    organizer_name: 'Half Baked Harvest',
    loc_ln_one: '1947 Center St, Berkeley, CA',
    loc_lat: 37.870486, 
    loc_long: -122.271381,
    tix_title: 'Early Bird',
    tix_qty: 50,
    tix_price: 5.00,
    category_id: cat3.id})

event_2 = Event.create({
    title: 'Grilled Chicken Tacos with Pico', 
    description: 'We have tacos at least once a week because of how easy they are to make and how flavorful they are. The spicy meat, fresh zesty toppings, and sauces make tacos the ultimate dinner.  These spicy grilled chicken tacos with pico de gallo and creamy cilantro sauce are our absolute favorite tacos. The combo of flavors dances on the taste buds and will keep you coming back for more. The entire family loves them and they can be prepared and served or you can serve them as a taco bar and have everyone customize their own tacos.

All good tacos begin with a batch of freshly cooked chicken. These tacos are made with my favorite grilled taco chicken. I like to use boneless skinless chicken thighs rather than breasts because they are always tender and won’t dry out. Chicken breasts will also work for the tacos but be sure not to over-cook them or they will dry out.

The secret to making tacos is simplicity. Traditional street tacos are served on corn tortillas and topped with just chopped onion, tomato, cilantro, salsa and a squeeze of fresh lime. No cheese, avocado, sour cream or any of that other stuff. But who are we kidding? I honestly NEED my favorite sour-cream cilantro sauce on my tacos. The creaminess of the sauce compliments the spicy chicken and zesty pico perfectly. You can top the tacos off with your favorite salsa, sour-cream or my quick creamy cilantro sauce (recipe in notes). 

You can have these yummy tacos with just the pico and sour-cream or cilantro sauce, or you can load them up American style and add chopped romaine lettuce, avocado or guacamole, or cheese. Don’t forget a squeeze of fresh lime and enjoy these tasty grilled chicken tacos any way you like!', 
    date: (Date.today + 5), 
    time: Time.new(2020, 5, 9, 5, 0), 
    end_date: (Date.today + 5), 
    end_time: Time.new(2020, 5, 9, 9, 0), 
    organizer_id: hbh.id, 
    organizer_name: 'GIMME DELICIOUS',
    loc_ln_one: '1824 Irving St, San Francisco, CA',
    loc_lat: 37.775809, 
    loc_long: -122.471273,
    tix_title: 'RSVP',
    tix_qty: 50,
    tix_price: 5.00,
    category_id: cat3.id})

event_4 = Event.create({ 
    title: 'Ground Beef', 
    description: 'Our favorite seasoned ground beef for tacos is here! This is what I prep on super busy weeknights – and I even prep it ahead of time too. In 15 minutes this seasoned beef will be done and you’ll want to eat a taco or nacho every single night.
    
In case you don’t want to already.

(If you don’t, how are we friends?)
I grew up eating ground beef tacos almost every single week.

IF YOU WERE A KID OF THE 90S, DID THESE KIND OF TACOS MAKE THEIR WAY ON TO YOUR WEEKLY MENU?
My mom used the grocery store spice packets to season the beef and served them with both soft tortillas and hard shells, tons of lettuce, tomato and sour cream. Just like you’d think in the 90s.

I loved them then. But now?

Those seasoning packets taste like straight cumin + salt. They are actually the reason I don’t love cumin. I don’t enjoy side dishes or meals that are heavily flavored with cumin. Because all I can taste is those old school tacos! Not into it at all. It may just be my weird taste buds, but the overwhelming cumin flavor and scent is permanently etched in my senses.

My control freak ways probably play a part in wanting to use my own seasoning blend. So there’s that.

I’ve been seasoning my own ground beef for tacos and enchiladas for years. Week in and week out, I don’t measure a thing because I’ve been making them for so long that I can eyeball the spices and judge by tasting. I have a ground beef seasoning in these enchiladas and it’s how I do it for tacos too!

IT’S THE MOST BASIC RECIPE EVER – ANOTHER EMBARRASSINGLY EASY ONE!
But here’s the thing. In my family, there are two very distinct camps when it comes to ground beef. Some people like it to be saucy. You know? I think that with the old school seasoning packet, you’d fill it up with water or something and dump it in – and the seasoning would have a thickener already added. As a result, you’d end up with super saucy taco meat. That’s how we grew up eating it!

I’ve seen some recipes add tomato sauce or even a can of salsa.

These days, however, I prefer a slightly “drier” ground beef. I hate to even use the word dry because that is not exactly what I mean. It’s just not… saucy. It’s a seasoned, crumbled beef. It almost reminds me of a chorizo!

When I make these in our house, each dish can be a little different. The beef and the seasonings stay the same, but sometimes I add a diced sweet onion and bell pepper. That stretches the beef a bit and also makes it a bit juicier. I also use this exact same recipe with ground turkey. And often, I mixed ground beef and ground turkey to double it!

While it may not be authentic at all, it’s the way we love to eat ground beef tacos best!

IT’S THE PERFECT WEEKNIGHT MEAL.
This seasoned beef freezes well. It lasts a few days in the fridge. I absolutely LOVE it over taco salads. If I make this for dinner, I often use it up for lunch leftovers, throwing it on top of lettuce, some avocado, any extra pico and a few crumbled tortilla chips. Those are key.

And another reason that this non-saucy beef is so delicious? You can use lettuce leaves for it too. If it’s not overly saucy, that means it isn’t as heavy and will sit nicely in an iceberg or butter lettuce leave, leaving room for toppings. It’s incredible!

Finally, it’s also the beef that I use for nachos, any sort of quesadilla and to stuff those mini sweet peppers. Adore it.

With these weeknight chicken tacos being one of our most used recipes (and one of your favorites too!), I’ve wanted to share our beef version for a long time. Of course, if we ever have shredded pork or beef on hand, we love to make tacos with that too. Same with seafood, usually going with shrimp or cod.

THE RECIPE FOR GROUND BEEF TACOS BELOW IS AS BASIC AS IT GETS.', 
    date: Date.new(2020,3,1), 
    time: Time.new(2020, 3, 1, 0), 
    end_date: Date.new(2020, 3, 1), 
    end_time: Time.new(2020, 3, 1, 5, 0), 
    organizer_id: hbh.id, 
    organizer_name: 'How Sweet Eats', 
    organizer_description: 'I’m so much more of a cook than a baker because, let’s be real: I hate to follow instructions of any kind. I was a kid of the internet generation: I get way too bored and end up doing what I want nearly all of the time. This is great for an entrepreneur; this is not so great for interacting in life with other humans.', 
    loc_ln_one: '1115 Bridgeway, Sausalito, CA',
    loc_lat: 37.859153,
    loc_long:  -122.484726,
    tix_title: 'General Admission',
    tix_qty: 50,
    tix_price: 15.00,
    category_id: cat1.id})

event_5 = Event.create({ 
    title: 'Bulgogi Beef Tacos', 
    description: 'Just when you thought Beef Bulgogi couldn’t get any more delicious, it becomes exponentially delectable as Beef Bulgogi Korean Tacos!  These Korean Tacos are born out of my love of Asian fusion, especially when it comes to tacos. Pairing rich savory flavorings with refreshing, crunchy salsas or slaws and topping them all with silky cremas creates a symphony of flavors and textures that simply can’t be topped, in my humble opinion.  Mouthfuls of savory, sweet, tangy, fresh, creamy, crunchy all in one bite after bite after bite…

The star of our Korean Tacos is melt-in-your-mouth garlicky, gingery, Beef Bulgogi, because after all, a taco is only as good as the meat it’s loaded with.  If you aren’t familiar with Beef Bulgogi (Korean Beef BBQ), it is one of the most popular Korean dishes. (I’ve detailed more than you ever wanted to know with lots of tips and tricks in my Beef Bulgogi post).

Beef Bulgogi is juicy, thinly sliced, marinated, caramelized beef that is slightly sweet, savory and characteristically seasoned with soy sauce, ginger, garlic, sesame and scallions as well as a freshly grated ripe pear to tenderize the meat.  It is intensely flavorful, and it’s tender, thin slices are just begging to be piled in Korean Tacos with our bright, refreshing Asian Pear Mango Slaw.

Some Korean Tacos are stuffed with Kimchi, but I found our Beef Bulgogi needed a sweet and fresh crunch vs a pickled fermented one.  Enter Asian Pear Mango Slaw. This Slaw was made for these Korean Tacos.  Literally.

I had all sorts of ideas about what I would top my Korean tacos with, but as I savored the caramelized beef, I knew the rich beef needed the fresh, bright, sweet, crunch of this Asian Pear Mango Slaw.  The Slaw is stand alone delicious and really could be served as a salad, so just imagine how crazy delectable it is in these Korean Tacos.  Or better yet, don’t imagine, make them!

The Asian Pear Mango Slaw is a quick tossing together of thinly sliced red cabbage, chopped Asian pear, mangoes, cilantro, green onions and lime juice. We are already using an Asian pear in the Bulgogi marinade, so I thought it was perfect to use in the slaw (and because they are one of my favorite fruits ever).

If you aren’t familiar with Asian pears, they are round and pale yellow.  Essentially, they look like a yellow-ish apple.  To me, they taste like a cross between an apple and pear and are wonderfully sweet and juicy with the firm texture of an apple.  I am excited for you to try this gem of a fruit if you haven’t already!

All tacos need a smooth and silky component to marry all the components together.  For these Korean Tacos, we are going to create a simple Gochujang Crema that is luxuriously silky, slightly tangy with a splash of heat. To make, simply whisk together gochujang, mayo, sour cream, and lime juice – that’s it!  You can control the heat of the Crema by adding more or less gochujang to taste.

If you aren’t familiar with gochujang, it is a delightful flavor bomb.  Gochujang is a Korean BBQ Sauce that’s the perfect blend of savory, sweet and spicy.  I have detailed where to find it below and because we are already using it in our Bulgogi, you will have it on hand for this Crema – winning!', 
    date: (Date.today + 3), 
    time: Time.now, 
    end_date: (Date.today + 3), 
    end_time: Time.now, 
    organizer_id: hbh.id, 
    organizer_name: 'Jen', 
    organizer_description: 'Lover of tacos', 
    loc_ln_one: '3177 16th St, San Francisco, CA',
    loc_lat: 37.765814,
    loc_long: -122.423881,
    tix_title: 'General Admission',
    tix_qty: 50,
    tix_price: 15.00,
    category_id: cat1.id})

event_7 = Event.create({ 
    title: 'Kimchi Egg', 
    description: 'Forget the bacon, egg and cheese sandwich: Jessica Merchant, the blogger behind the always delightful How Sweet Eats, has a better idea. This recipe comes from her just-released second cookbook, The Pretty Dish, which proves that a book doesn\'t have to be all kale salads and juice cleanses to inspire you to change the way you cook.

You can scramble the eggs or fry them here, but whichever route you go, don\'t skimp on the kimchi. It adds a pickled note that balances the creamy avocado, salty bacon and runny egg yolk.

Check out more new cookbooks here and get your copy of The Pretty Dish here.', 
    date: (Date.today + 12), 
    time: Time.new(2020, 1, 1, 11, 0), 
    end_date: (Date.today + 12), 
    end_time: Time.new(2020, 1, 1, 1, 0), 
    organizer_id: hbh.id, 
    loc_ln_one: '5642 College Ave, Oakland, CA',
    loc_lat: 37.848181,
    loc_long: -122.251708,
    tix_title: 'RSVP',
    tix_qty: 50,
    tix_price: 0.00,
    category_id: cat2.id})

event_8 = Event.create({ 
    title: 'Bacon Breakfast Tacos', 
    description: 'If I had to pick one food to eat for the rest of my life it would have to be eggs! 🤩 There are a million things you can do with them and they taste especially good in tacos 🌮Who agrees? Happy Thursday my friends 🤙🏼', 
    date: (Date.today + 12), 
    time: Time.new(2020, 1, 1, 11, 0), 
    end_date: (Date.today + 12), 
    end_time: Time.new(2020, 1, 1, 1, 0), 
    organizer_id: hbh.id, 
    loc_ln_one: '907 Washington St, Oakland, CA ',
    loc_lat: 37.805797, 
    loc_long: -122.275529,
    tix_title: 'RSVP',
    tix_qty: 50,
    tix_price: 0.00,
    category_id: cat2.id})

event_10 = Event.create({ 
    title: 'Broccoli', 
    description: 'Have I completely lost my mind with this one?
    
It seems that I consider anything a viable taco filling at this point, so let’s have some fun today and make delicious broccoli tacos. 
    
Now, I know Mr. Veggie thought I was crazy the first time I informed him that we were having broccoli tacos for dinner. He knew better than to question his heavily pregnant wife of course, and broccoli is his favorite vegetable anyway, but it does sound kind of odd, doesn’t it? 

But it is so, so worth leaving your reservations at the door and trying out these baby broccoli tacos. I promise you they are delicious.

BABY BROCCOLI? IS THAT THE SAME THING AS BROCCOLINI? OR TENDERSTEM BROCCOLI?
Yes and yes. Baby broccoli goes by many names. I have previously posted a recipe for it under the name Tenderstem Broccoli, but today I’m using baby broccoli. Why? Hard to say. But the tacos are teeny. It just felt like the better name.

You could make this with normal broccoli florets too. You would need to roast it a little longer. I personally love baby broccoli for this recipe though, and I believe it is widely available in most parts of the world. 

WHAT’S IN THE BABY BROCCOLI TACOS? 
So, let me explain this rather genius concept to you.

We have baby broccoli, roasted to perfection with garlic, smoked paprika, cumin, lime and toasted pumpkin seeds (pepitas). 

And then we sprinkle some lime juice on it for extra flavor.

We top them with crumbled feta cheese (essential), chopped tomato and avocado. And maybe some more lime squeezes. Lots of lime is a must in this recipe!

If you have access to cojita cheese, you can go ahead and use that but I find feta a great addition here. It’s strong saltiness is quite important in this recipe which is so simple otherwise. 

I also believe that soft corn tortillas are a must. I don’t see these working so well with hard shells or flour tortillas.

So there we have it. Broccoli tacos!

Are you going to join me in this crazy endeavor?', 
    date: (Date.today + 7), 
    time: Time.new(2020,10,3, 6, 0), 
    end_date: (Date.today + 7), 
    end_time: Time.new(2020,10,3, 7, 0), 
    organizer_id: hbh.id,
    organizer_name: 'Happy Veggie Kitchen',
    loc_ln_one: '250 Montgomery St, San Francisco, CA',
    loc_lat: 37.795861,
    loc_long: -122.402503,
    tix_title: 'RSVP',
    tix_qty: 50,
    tix_price: 0.00,
    category_id: cat7.id})


event_11 = Event.create({ 
    title: 'Cauliflour Masala', 
    description: 'I love sitting at the table and enjoying a meal that was created for sharing. Whether it’s a one-pot curry or daal, a hearty salad with warm bread, or these cauliflower and broccoli tacos. With all of the fillings served at the table, this vegan dinner is perfect for assembling as you eat. That way, you can add more or less of whatever you like. The only problem you might have is fitting it all into the one wrap. I’ve made that mistake way more than I care to remember – especially when there’s avocado and coriander sauce involved.

The batter is puffy, light and packed with spices reminiscent of bhajia – a super popular Indian starter. Like fish tacos, the bite-sized vegetables are coated and fried until golden and crispy. It’s best to do this right before serving so they’re hot and delicious for your vegan tacos.
    
Packed with lime, garlic and yoghurt, the creamy sauce is perfectly balanced to douse any heat from the fried green chillies. It’s so tempting to eat it right from the blender with a spoon or maybe some tortilla chips. A crunchy salad of radish, red onion, lime and a few spices tops these tacos off beautifully. The contrast of the hearty fried veggies and fresh salad, lettuce, fruity pineapple chutney and crunchy toasted cashews is so dreamy. Even non-vegans will feel like they’ve eaten a filling meal.

The pineapple chutney is a lovely way to round off the sharp flavours in the dish. It’s quick, easy and perfect not only with these tacos, but also with Jalebi Paratha. Don’t be alarmed by the long list of ingedients here. Most of the prep is super simple and just assembling or blending. The only actual cooking is of the cauliflower and broccoli. The chutney can even be made up to a week in advance. Just store it in the fridge.So this year, take some time to sit around the table with your family and friends and enjoy a meal that was made for sharing.  This one certainly was.', 
    date: Date.new(2020,2,10), 
    time: Time.new(2020, 2, 10, 3, 0), 
    end_date: Date.new(2020,2,10), 
    end_time: Time.new(2020, 2, 10, 5, 0), 
    organizer_id: hbh.id, 
    organizer_name: "sanjana feasts",
    loc_ln_one: 'Ferry Building, San Francisco, CA',
    loc_lat: 37.795867, 
    loc_long: -122.393396,
    tix_title: 'RSVP',
    tix_qty: 50,
    tix_price: 0.00,
    category_id: cat7.id})

event_12 = Event.create({ 
    title: 'Pulled Mushroom Tacos', 
    description: ' How about a plate of deliciously smoky and juicy pulled mushroom tacos this weekend? Pulled what!? Mushrooms! No, I am not pulling your leg (sorry, could not help myself 😉 ), promise. They are a thing and they are blooming delicious! If you’ve been following my blog for a while, you might have guessed that I’m a big fan of young jackfruit, which I have used in many recipes to replicate the texture of meat with great success and I cannot believe I’m about to say this, but… Move over jackfruit, there is a new kid on the block!

I first learned about this trick of shredding King Oyster mushroom stems into a meat-like texture from Derek Sarno’s video and I thought it was genius. I knew that they make convincing vegan scallops, but this was way cooler and I had to give it a go. When I spotted the meaty mushrooms in an Asian store in town I was over the moon – I know, I need to get out more…

I tried a couple of different ways of preparing them, but treating them the same way I prepare the jackfruit turned out to be a clear winner – stew in the spices and condiments first and then bake in a hot oven till the edges get a little charred and crispy.

I tucked my smoky pulled mushroom filling in some small corn tortillas and dressed them with a simple tomato salsa, some cos lettuce, a few strands of sharp quick-pickled onions, a dollop of vegan sour cream and a sprinkle of fresh coriander and I was a very happy bunny indeed.

These meatless ‘meaty’ tacos make for ideal finger food and go hand in hand with some beers in the sun (I’m counting on you this weekend, Bristol!) and some fairly relaxed hosting as you can prepare everything well in advance. I don’t know about you, but since this is a long weekend and the weather is meant to be gorgeous, that’s very much in my weekend plans.',
    date: Date.new(2020,2,10), 
    time: Time.new(2020, 2, 10, 3, 0), 
    end_date: Date.new(2020,2,10), 
    end_time: Time.new(2020, 2, 10, 5, 0), 
    organizer_id: hbh.id, 
    organizer_name: "lazy cat kitchen",
    organizer_description: "This cat loves a good taco!",
    loc_ln_one: 'Ferry Building, San Francisco, CA',
    loc_lat: 37.795867, 
    loc_long: -122.393396,
    tix_title: 'RSVP',
    tix_qty: 50,
    tix_price: 0.00,
    category_id: cat7.id})

event_13 = Event.create({ 
    title: 'Roasted Veggie + Chipotle Cashew Crema', 
    description: 'reasons you’ll be completely obsessed:

+ totally healthy (helloooo they’re made with sweet potatoes & cauliflower!)
+ sheet pan dinner magic (where my fellow lovers of sheet pan dinners at?!)
+ weeknight friendly (40 minutes start-to-finish!)
+ meal prep friendly (i share some thoughts in the recipe notes, below!)
+ budget friendly (pretty sure you can serve for for less than $10!)
+ four words: chipotle lime cashew crema (???)
+ vegan, but also totally husband approved (i promise!)

i mean…yeah.

i could honestly go on & on & on & on about all the reasons to love these roasted sweet potato + cauliflower tacos, but the short of it is this: i am certain that you will absolutely flip over these roasted sweet potato + cauliflower tacos.

they’re completely good-for-you (which is awesome since we’ve eaten them multiple times every week since i first tested this recipe – pahaha!) & every single bite is completely loaded with flavor, all thanks to 3 super simple components that you can easily throw together on any weeknight.

an easy vegetarian tacos recipe filled with easy roasted cauliflower, roasted sweet potatoes, black beans, topped with vegan chipotle lime cashew crema. these roasted sweet potato + cauliflower tacos are totally weeknight-friendly, made in 40 minutes or less, making this the perfect vegetarian taco recipe for taco tuesday! #tacos #cauliflowertacos #sweetpotatotacos #blackbeantacos #vegetariantacos #vegantacos #healthytacosrecipe #easytacosrecipe #easyvegetarianrecipe #easyveganrecipe #dairyfree

(did i mention it only takes 40 minutes to make these bad boys from start to finish?! meatless monday + taco tuesday = LUV)

easy vegetarian tacos with 3 layers of major flavor
the key to making great meals quickly is to make sure that you’re building tons of incredible flavor into every component that goes into the recipe. these roasted sweet potato + cauliflower tacos are no exception, getting all of their flavor from 3 key layers:

the heartiest filling: roasted sweet potatoes, roasted cauliflower, & black beans.
my fave easy taco fixin: smashed avocado.
& since life it all about the toppings: the easiest vegan chipotle lime crema.
first up, the vegetarian taco filling! these tacos are filled with roasted sweet potatoes, roasted cauliflower & black beans. i borrowed the filling from my vegan taco salad & gave it a couple of tweaks, & i’m freakin’ obsessed with it. so much flavor & texture with so little effort!

to make the filling, you simply toss some cauliflower & sweet potatoes in taco spices with some olive oil & lime juice, then spread ‘em on a pan & let ‘em roast. just before they’re done roasting, add some drained black beans to the pan, & pop it back into the oven for a few minutes to warm up.

that’s it! easy, roasty-toasty veggies = ✔️
an easy vegetarian tacos recipe filled with easy roasted cauliflower, roasted sweet potatoes, black beans, topped with vegan chipotle lime cashew crema. these roasted sweet potato + cauliflower tacos are totally weeknight-friendly, made in 40 minutes or less, making this the perfect vegetarian taco recipe for taco tuesday! #tacos #cauliflowertacos #sweetpotatotacos #blackbeantacos #vegetariantacos #vegantacos #healthytacosrecipe #easytacosrecipe #easyvegetarianrecipe #easyveganrecipe #dairyfree


since the sweet potato & cauliflower filling has such deep flavors from roasting away in taco spices, i love piling them on top of a thick layer of smashed avocado (aka avocado mashed with lemon juice & salt). it couldn’t be easier to throw together, & the creaminess & brightness of avocado balances out the rich, spicy notes from the veggies perfectly.

last up is arguably my favorite part of these roasted sweet potato + cauliflower tacos: the easy vegan chipotle lime cashew crema.
an easy vegetarian tacos recipe filled with easy roasted cauliflower, roasted sweet potatoes, black beans, topped with vegan chipotle lime cashew crema. these roasted sweet potato + cauliflower tacos are totally weeknight-friendly, made in 40 minutes or less, making this the perfect vegetarian taco recipe for taco tuesday! #tacos #cauliflowertacos #sweetpotatotacos #blackbeantacos #vegetariantacos #vegantacos #healthytacosrecipe #easytacosrecipe #easyvegetarianrecipe #easyveganrecipe #dairyfree


this crema is so creamy, so smoky & flavorful, & so vegan since it’s made with cashews instead of any dairy! i tweaked my smoky chipotle cashew queso recipe to have a perfect drizzly consistency for dousing your vegetarian tacos.

it’s so easy to make since all you have to do is pop the ingredients in a blender & let it whirl, & it keeps forever in the fridge so you can use it to top tacos, burrito bowls, as a creamy hot sauce on any dish, or even as a dip for chips. you’ll be obsessed!

making better tacos at home: how to char corn tortillas on the stove or grill
an easy vegetarian tacos recipe filled with easy roasted cauliflower, roasted sweet potatoes, black beans, topped with vegan chipotle lime cashew crema. these roasted sweet potato + cauliflower tacos are totally weeknight-friendly, made in 40 minutes or less, making this the perfect vegetarian taco recipe for taco tuesday! #tacos #cauliflowertacos #sweetpotatotacos #blackbeantacos #vegetariantacos #vegantacos #healthytacosrecipe #easytacosrecipe #easyvegetarianrecipe #easyveganrecipe #dairyfree
if there was a 4th layer of flavor in these roasted sweet potato + cauliflower tacos, i’d say it’s definitely serving them on the perfectly lightly charred corn tortillas.


up until recently, charring corn tortillas at home is something we really struggled with. whenever we did it the tortillas would completely dry out, becoming too crumbly & fragile to hold up as we ate our tacos & becoming too tough to eat & really enjoy.

luckily, we’ve figured it out & it couldn’t be easier. the secret lies in the technique!

to perfectly char corn tortillas at home, turn a gas burner on your stove on high heat. pop a tortilla directly over the open flame. once you see a little smoke coming off the tortilla, rotate it until it’s lightly charred & continue until both sides of the tortillas are evenly charred. it’s very important not to over-do it as this will completely dry the tortillas out – just aim for a little color!

transfer your charred tortillas to a plate, then cover them with a damp paper towel to prevent them from drying out until you’re ready to serve them. just as you’re ready to start assembling your tacos, pop the stack of charred tortillas in the microwave for 30-40 seconds. the moisture on the damp paper towel will steam the tortillas, adding moisture back into them so they’re perfectly pliable for easy assembly & perfectly tender to eat.

taking a couple minutes to char corn tortillas before you assemble tacos for taco night is well worth it: it adds an extra layer of smokiness to your tacos, & as a bonus makes them picture perfect.

my meat-eating husband’s honest review of these roasted sweet potato + cauliflower tacos
an easy vegetarian tacos recipe filled with easy roasted cauliflower, roasted sweet potatoes, black beans, topped with vegan chipotle lime cashew crema. these roasted sweet potato + cauliflower tacos are totally weeknight-friendly, made in 40 minutes or less, making this the perfect vegetarian taco recipe for taco tuesday! #tacos #cauliflowertacos #sweetpotatotacos #blackbeantacos #vegetariantacos #vegantacos #healthytacosrecipe #easytacosrecipe #easyvegetarianrecipe #easyveganrecipe #dairyfree
my unexpectedly favorite part of creating all the recipes for plant-based march is hearing what my husband chris has to say about them. he’s a total meat-lover, so i know i’m on to something when i can create a vegetarian or vegan recipe that he really enjoys.


since plant-based eating may be a new venture for some of your families, i thought it would be really fun to ask chris to write down his honest thoughts about this month’s recipes. here’s what he had to say about these roasted sweet potato + cauliflower tacos!



let’s talk about tacos for a second.

i love tacos, even more than i love quesadillas (which is saying something). pork tacos, ground beef tacos, korean beef tacos, chicken tinga tacos, shrimp tacos, fish tacos…you name it.

however, you will notice all those tacos have some sort of meat (or fish).

so when jess told me she was making me vegan tacos for dinner, i began thinking “okay what can i make after we eat those so i’m full but don’t offend her?”

then i ate these m-effin tacos & holy sh*t did they blow my mind.

i went back for seconds (which means a 4th, 5th, & 6th taco) & i didn’t even feel bad about my gluttonous behavior because they’re vegan!! as someone who absolutely wants big heavy protein in every meal i didn’t even miss the protein in these bad boys.

eat these tacos, as many as your body can handle, because they taste like your doing something bad for your body but you’re really not. (how often do you get that opportunity?)


but really…how often do you get that opportunity?! vegetarian tacos for the win!', 
    date: (Date.today + 4), 
    time: Time.new(2020, 2, 10, 8, 0), 
    end_date: (Date.today + 4), 
    end_time: Time.new(2020, 2, 10, 10, 0), 
    organizer_id: hbh.id, 
    organizer_name: "Plays Well With Butter",
    organizer_description: "If there’s 1 thing to know about me, it’s this: I am head-over-heels in love with food. I’m on a mission to make weeknight cooking flavorful, fast, & fun for other foodies, & PWWB is where I share foolproof recipes that deliver major flavor with minimal effort. Other true loves: pretty shoes, puppies, Grey’s Anatomy, & my cozy kitchen in Minneapolis, MN.",
    loc_ln_one: 'Ferry Building, San Francisco, CA',
    loc_lat: 37.795867, 
    loc_long: -122.393396,
    tix_title: 'RSVP',
    tix_qty: 50,
    tix_price: 0.00,
    category_id: cat7.id})

event_14 = Event.create({ 
    title: 'Poblano + Cheese', 
    description: 'This is the kind of meal that makes me want to straight up faceplant into my dinner.

Well, scratch that.
It’s not really fair.

Because any form of any taco makes me want to faceplant into dinner. But these ESPECIALLY make me want to faceplant extra-hard, brush burns, broken noses and all. Totally worth it.


AND! Not only that, but I finally got my husband on the Mexican-food train. I picked him up at the station and banned him from ever stepping off that ride again.

Except.

It’s sort of a lie, because he started eating a lot of Tex-Mex while traveling for work and I just happen to ONLY eat a lot of Tex-Mex while he is traveling for work, but now he is so hooked that he doesn’t look at me like I have a third eye when I suggest it for dinner ten days in a row. And he’s eating it up, literally.

These don’t count, because he won’t eat them for dinner since they don’t have chicken, steak, chicken, fish or chicken, buuuuut he would eat them as a side dish. I’m not even lying.
Oh he also tried to tell me about these delicious tacos he had while traveling that were topped with chipotle mayo. Um, mayo? I screamed in his face. No one would put MAYO on a taco!

Clearly you now have an idea about how conversations go in this house. And how… easy… I am to get along with. Cough Cough.

He swore it was mayo though. I swore on my teddy bear that it could seriously NOT have been mayo, and that it had to be sour cream, and hahahaha! – he “hates” sour cream and he ate it anyway! I win! I swore on my freaking teddy bear after all.

But no. He found a link to the place online that clearly said mayo. WHAT. Whomp whomp.

I’m not about to put mayo on my tacos any time soon, but I’m pretty cool with putting just about everything else on there. Like… EVERYTHING ELSE.

No, really.

So this taco was inspired by a recent trip to California with Thermador and my new favorite local taco place here in Pittsburgh. It’s sort of a fusion of both meals I recently ate, and it’s the newest way that I am forcing myself to eat vegetables. Because when vegetables are sauteed in butter, stuffed inside warm corn tortillas (yellow FTW), topped with cold avocado, grated cheese and a crema of choice… it’s like… you’re not even eating vegetables. They don’t even exist. Because it’s just a TACO.  No vegetables allowed.

Dinner? Yes? Yes.', 
    date: Date.new(2020,8,9), 
    time: Time.new(2020, 9, 9, 7, 30), 
    end_date: Date.new(2020,8,9), 
    end_time: Time.new(2020, 9, 9, 10, 30), 
    organizer_id: hbh.id, 
    organizer_name: 'How Sweet Eats',
    organizer_description: 'I’m so much more of a cook than a baker because, let’s be real: I hate to follow instructions of any kind. I was a kid of the internet generation: I get way too bored and end up doing what I want nearly all of the time. This is great for an entrepreneur; this is not so great for interacting in life with other humans.',
    loc_ln_one: '825 Battery St, San Francisco, CA',
    loc_lat: 37.799280,
    loc_long: -122.401384,
    tix_title: 'RSVP',
    tix_qty: 50,
    tix_price: 10.00,
    category_id: cat6.id})

    
event_15 = Event.create({ 
    title: 'Chickpea', 
    description: 'These roasted chickpea tacos with lime yogurt dressing are so good! They’re also a quick, easy, and affordable way to provide your family with the protein they need. As a family we do eat meat, however, we’ve been cooking plant-based recipes with beans and legumes on a weekly basis. We recently discovered crispy roasted chickpeas and now we can’t get enough! I change the spice blend depending on what’s in the pantry, and though roasted chickpeas are great for eating by the handful as a snack, we love these easy chickpea tacos.', 
    date: (Date.today + 9),
    time: Time.new(2020, 9, 9, 7, 30), 
    end_date: (Date.today + 9),
    end_time: Time.new(2020, 9, 9, 10, 30), 
    organizer_id: hbh.id, 
    organizer_name: 'Kelly Neil',
    organizer_description: 'If you love baking, simple family-friendly recipes, and occasional plant-based dishes, then you are in the right place!',
    loc_ln_one: '1250 Bridgeway, Sausalito, CA',
    loc_lat: 37.859762,
    loc_long: -122.484515,
    tix_title: 'RSVP',
    tix_qty: 50,
    tix_price: 10.00,
    category_id: cat6.id})

    
event_16 = Event.create({ 
    title: 'Mexican Street Corn Tacos', 
    description: 'I’m trying to remember back to the first time I tried Mexican Street Corn … I can’t recall exactly when it was, but I do know that I was instantly hooked! It’s grilled corn that’s slathered in a tangy cream sauce and sprinkled with chili powder, cotija cheese and fresh cilantro. Really, it’s hard for me to eat corn on the cob any other way now.

So, in an effort to get even more Mexican Street Corn into my life I came up with the idea of topping my tacos with a corn mixture that’s got all those same flavors going on. Instead of serving the corn on the cob, in the traditional method, I cut the kernels off and turned them into a corn salad of sorts – preserving all those same great flavors. I wanted a creamy corn mixture, with a good amount of tang and a bit of heat, but I really wanted that fresh corn flavor to shine through too.

Here’s a tip for getting those kernels off the cob – First shuck your corn and then seek out that bundt pan that’s buried way in the back of your cupboard. Place the corn, stalk side down into the hole of the bundt pan and then cut around the cob. The kernels will fall right down into the pan and will make for much easier cleanup – You won’t have to be chasing those kernels all over the place.

Pop those bright yellow kernels into a hot skillet with a bit of olive oil and let them get nice and charred – flipping them once while cooking. Once they’re nice and charred, it’s time to dress them up. I used a tiny bit of mayonnaise (you could also use sour cream or Greek yogurt if you prefer), a good squeeze of lime juice, a bit of jalapeno for heat, garlic, chili powder, and a dash of cilantro at the end to add some freshness. Let those flavors all mingle together while you prepare your chicken.

Using the same skillet for the corn, cook the chicken – less dishes are always appreciated, right? I thin sliced a couple of chicken breasts, seasoned them with a bit of taco seasoning (the kind you find in the packets), and added them to the hot skillet. The chicken cooks up really quickly – just a few minutes on each side is all it should take. ', 
    date: Date.new(2020,8,9), 
    time: Time.new(2020, 9, 9, 7, 30), 
    end_date: Date.new(2020,8,9), 
    end_time: Time.new(2020, 9, 9, 10, 30), 
    organizer_id: demo_user.id, 
    organizer_name: 'Platings + Pairings',
    organizer_description: 'Hi there! Can I pour you a glass of wine? Living in the Pacific NW - My favorite things include great food, vineyard visits, and beach weekends. ♥',
    loc_ln_one: '3906 Judah St, San Francisco, CA',
    loc_lat: 37.769258, 
    loc_long: -122.504214,
    tix_title: 'RSVP',
    tix_qty: 50,
    tix_price: 10.00,
    category_id: cat6.id})

event_17 = Event.create({ 
    title: 'Crispy Potato Tacos', 
    description: 'What’s better than tacos?

Tacos filled with crispy potatoes and topped off with the most delicious green sauce.

Last week I shared the recipe for the Jalapeño Cilantro Sauce and now you have another reason to make it. Not that you needed another reason – because once you try it, you will want to put it on everything.

These Crispy Vegan Potato Tacos with Jalapeño Cilantro Sauce are filled with beans, crispy potatoes, crunchy lettuce and the best sauce | ThisSavoryVegan.com #thissavoryvegan #vegantacos #tacotuesday

To speed up the cooking process, I boiled the potatoes before getting them nice and crispy on the stovetop. Now, the key to getting them crispy is to not mess with them while they’re in the pan. Give them a solid 5-7 minutes of browning time before flipping. ', 
    date: (Date.today + 8), 
    time: Time.new(2020, 9, 9, 7, 30), 
    end_date: (Date.today + 8), 
    end_time: Time.new(2020, 9, 9, 10, 30), 
    organizer_id: demo_user.id, 
    organizer_name: 'The Savory Vegan',
    organizer_description: 'By combining my love for cooking and the many vegan options available these days, I have been able to completely transform my diet and open up my mind to a new way of living.

Whether you’re dabbling with a vegan diet, a life long vegan or no where near either – this is the place for you. There’s no discrimination here at TSV.

I want to show you that eating vegan can be easy, creative and most importantly…tasty! Because what fun is life if you aren’t enjoying the food you eat?',
loc_ln_one: '1045 San Pablo Ave, Albany, CA ',
    loc_lat: 37.887209, 
    loc_long: -122.299939,
    tix_title: 'RSVP',
    tix_qty: 50,
    tix_price: 10.00,
    category_id: cat6.id})

event_18 = Event.create({ 
    title: 'Tacos Al Pastor', 
    description: 'Traditional Tacos Al Pastor start with layers of marinated pork that are slowly grilled on a spit, reminiscent of shawarma for gyros. My version is done in the kitchen, and I’m sharing four ways to make it. One method slow roasted in the oven, another on the grill, the other in a Slow Cooker and lastly in the Instant Pot. Just imagine the aroma of marinated pork shoulder, flavored with various chiles, pineapple, onion, garlic and cinnamon slow roasting. Sound good?

I for one don’t see why carnitas needs to get all the attention. Tacos Al Pastor is one to try!

However you choose to make this, know that your house will have the absolute best aroma to entice anyone for a delicious meal. Al Pastor is the new carnitas.', 
    date: (Date.today + 4), 
    time: Time.new(2020, 9, 9, 7, 30), 
    end_date: (Date.today + 4), 
    end_time: Time.new(2020, 9, 9, 10, 30), 
    organizer_id: hbh.id, 
    organizer_name: 'Kevin is Cooking',
    organizer_description: 'However you choose to make this, know that your house will have the absolute best aroma to entice anyone for a delicious meal. Al Pastor is the new carnitas.',
    loc_ln_one: '301 Corte Madera Town Center, Corte Madera, CA',
    loc_lat: 37.936275, 
    loc_long: -122.518824,
    tix_title: 'Early Bird',
    tix_qty: 50,
    tix_price: 25.00,
    category_id: cat5.id})

event_19 = Event.create({ 
    title: 'Queso Fundido', 
    description: 'Are you ready for the most weirdly delicious mash-up of two of our favorite things?!  Queso fundido-melty cheese layered with chorizo, cilantro, green onions, etc.- and tacos-which need no further explanation-will meet here to create a cheese-filled double-layered taco.  Seriously, what is going on?!  And how has Taco Bell not created and trademarked this?!
    
I’ve made queso fundido but to put it in a taco?  That’s just crazy.  No, actually that’s just how the mind of Jessica, from How Sweet Eats. works.  I saw it come through my e-mail one day and knew it would be on the menu within the week!  It’s pretty simple to put together too…the cheese sauce only takes a few minutes and you just need to sauté some fresh chorizo and poblano peppers to create the filling.  If you’ve never had a poblano, they’re not super spicy, but do have a little kick.  Definitely try them with this as they’re traditional in a queso fundido and very delicious alongside the chorizo! Serve with any accompaniments you like-I, of course, need green onions, cilantro, cheese and sour cream. 
        
Have I told you that dairy is more greatest foe…but also the one I love the most?  I could never stop eating it.

Have I also told you about how I used to order queso fundido (literally just a big skillet of hot melted cheese) for dinner at a restaurant I frequented when traveling for work?  Like that was all I ate…for dinner…#livingmybestlife.', 
    date: (Date.today + 5), 
    time: Time.new(2020, 9, 9, 7, 30), 
    end_date: (Date.today + 5), 
    end_time: Time.new(2020, 9, 9, 10, 30), 
    organizer_id: hbh.id, 
    organizer_name: 'Never Not Hungry',
    organizer_description: 'Cooking puts a fire in my belly unlike anything I have ever felt before and gives me a place in this world. I have been and continue to be endlessly awed and inspired by other cooks and want to pay it forward for others.  My dream for this site is to inspire others to get into their kitchens and cook for themselves and those they love. I want everyone to learn, experiment, experience and improve, to try new recipes and taste new cultures and for all to believe they are capable of creating delicious and beautiful food in their own kitchens. Please pull up a chair, grab a dog to put on your lap (I’m one dog-lovin’ mother**), and join me as I do something that scares me: share my love with the world.',
    loc_ln_one: '600 Monterey Blvd, San Francisco, CA',
    loc_lat: 37.734427, 
    loc_long: -122.448526,
    tix_title: 'RSVP',
    tix_qty: 50,
    tix_price: 5.00,
    category_id: cat5.id})

event_20 = Event.create({ 
    title: 'Blackened Salmon Tacos', 
    description: 'It’s safe to say salmon and I are having a moment. Crispy fillets, burgers, citrus bakes and now the favorite—my forever love language—tacos are added to the mix. To be honest, I haven’t made a salmon taco before so I wasn’t entirely sure what to expect, but the truth of the matter is, making these was a truly anointed moment and God is gracing us with His goodness in this taco. 

The rub and the coriander in the slaw are what, I think, really make this taco. I imagine the rub would be good on a lot of proteins other than salmon, but I’ll leave that to the grill masters of the universe and I’ll stick with my fish and veggies. It has a bit of coconut sugar in it, so it offers a hint of sweetness to kind of round out some of the spices and flavors. I recommend using coconut sugar, but if you don’t have any you could try halving the amount of sugar and using brown sugar, or honey may be an interesting substitute. I used about half of the rub for 2 3oz fillets (only covering the flesh side), so there was enough leftover for next time. All together this makes about 6-8 tacos depending on how much you want to fill them, and the rub is easily doubled or tripled for a larger meal or group. It would also keep in a jar for a while if you end up wanting to use it often. 

And now we come to the part of the story where I practice some radial candor. The oh so lovely people at Market House sent me a few fillets of salmon to try out there service. At the the sight of their branding, it was basically love at first sight, but having had a touch and go type of relationship with delivery services, I was waiting to see how the quality of the salmon turned out to be. You know I wouldn’t lie to anyone when it comes to matters of food (the heart), love languages, and heaven knows—tacos. So believe me when I say: this salmon rules.

Market House has set up their service to be extremely user friendly, informative, and favors the adamant foodie. If you like to cook, or even more so, like to eat, I would honestly recommend cruising over to their site and seeing what they have to offer. I have a few more fillets in the freezer currently, and already have a dinner and two recipes on the docket. Stay tuned for more salmon, because as we know, we’re having a moment. ', 
    date: (Date.today + 2), 
    time: Time.new(2020, 9, 9, 7, 30), 
    end_date: (Date.today + 2), 
    end_time: Time.new(2020, 9, 9, 10, 30), 
    organizer_id: hbh.id, 
    organizer_name: 'FEMINISTE',
    organizer_description: 'The most sacred space of my home is my dining room table. People let their guards down, tell stories, share their proudest moments, deepest fears and hopes for the future—food is the universal equalizer, bringing us together.  The Féminsite is simply an extension of those moments, creating fresh, flavorful meals fit for conversation and community, picnics in the park or late wine nights. Our community is what shapes us into who we are, and with the help of these recipes, I hope you’re willing to have authentic conversations with the ones you love around your own tables. ',
    loc_ln_one: '401 13th St, San Francisco, CA ',
    loc_lat: 37.829878, 
    loc_long: -122.373756,
    tix_title: 'RSVP',
    tix_qty: 50,
    tix_price: 0.00,
    category_id: cat4.id})

event_21 = Event.create({ 
    title: 'Marinated Ahi Tuna', 
    description: 'These Marinated Ahi Tuna Tacos put me right into another overstuffed taco situation! It was inevitable with tender, citrusy tuna nestled on crunchy Asian Slaw and drizzled with Cilantro Pistachio Pesto. 

My kids never tire of watching me overstuff or overfill things to the point of no return. I’d be much better off with a knife and fork, but what fun would that be? Having seam-splitting tortillas and pesto running down my arm is by far the preferred m.o. 🙂

Bathing the tuna in an Asian-inspired marinade gives it a deliciously subtle sweet and tangy flavor. Sweet Cara Cara orange combines with lemon, shallots, garlic, grated ginger, fresh parsley, soy sauce, and sesame and olive oil.', 
    date: (Date.today + 5), 
    time: Time.new(2020, 9, 9, 7, 30), 
    end_date: (Date.today + 5), 
    end_time: Time.new(2020, 9, 9, 10, 30), 
    organizer_id: hbh.id, 
    organizer_name: 'Give it Some Thyme',
    organizer_description: 'I’m self-taught and inspired by a vast collection of food magazines, cookbooks, and three generations of recipe binders. My initial interest in cooking started when Mom had to pull a chair up to the counter so I could see in the bowl. As I grew, so did a passion for great food. I’ve always loved food television, from PBS syndication of Julia Child and Graham Kerr to present day Food Network with Bobby, Ina, Rachael, and of course, Emeril. In full disclosure, we watched so much Emeril Live when my now 17-year-old son was a baby, one of his first words was ‘BAM!’. ',
    loc_ln_one: '2167 Meeker Ave, Richmond, CA',
    loc_lat: 37.934318, 
    loc_long: -122.344833,
    tix_title: 'Early Bird',
    tix_qty: 50,
    tix_price: 5.00,
    category_id: cat4.id})

event_22 = Event.create({ 
    title: 'Salmon Poke Sushi Tacos', 
    description: 'Gimme sushi any day and I am a happy woman! Okay, so this is not really a taco, but it’s a fun way to serve sushi. If your rolling skills are not very good or you don’t have the patience for it, this is an easier way to serve it. You will just need a 9 cm mold to make the round nori sheets. To the salmon poke, I added a bit of chili oil and a sprinkle of togarashi for some heat.', 
    date: (Date.today + 11), 
    time: Time.new(2020, 9, 9, 7, 30), 
    end_date: (Date.today + 11), 
    end_time: Time.new(2020, 9, 9, 10, 30), 
    organizer_id: hbh.id, 
    organizer_name: 'Cravings in Amsterdam',
    organizer_description: 'As long as I can remember my life has revolved around food. I love recipes that evoke memories. From helping my mom cook, watching cooking shows, to finally embarking on a mini culinary adventure on my own. Right after I finished hospitality management, I moved to Lyon for four months to take a cooking course at L’Institut Paul Bocuse. Those months were a feast for my taste buds.',
    loc_ln_one: '629 San Mateo Ave, San Bruno, CA',
    loc_lat: 37.627138, 
    loc_long: -122.410888,
    tix_title: 'RSVP',
    tix_qty: 50,
    tix_price: 10.00,
    category_id: cat4.id})

event_23 = Event.create({ 
    title: 'Crunchy Seaweed Tacos', 
    description: 'These crunchy, fiber-packed tacos use roasted seaweed snacks as taco shells. Stuffed with heart-healthy avocado and smoked salmon, they are perfect for a guilt-free late-night snack. ', 
    date: (Date.today + 5), 
    time: Time.new(2020, 9, 9, 7, 30), 
    end_date: (Date.today + 5), 
    end_time: Time.new(2020, 9, 9, 10, 30), 
    organizer_id: hbh.id, 
    organizer_name: 'Food',
    loc_ln_one: '343 Clement St, San Francisco, CA',
    loc_lat: 37.799720, 
    loc_long: -122.460877,
    tix_title: 'RSVP',
    tix_qty: 50,
    tix_price: 10.00,
    category_id: cat4.id})

event_1.photo.attach(io: open("https://tacobrite-seeds.s3-us-west-1.amazonaws.com/chicken/korean-krispy.jpg"), filename: "korean-krispy.jpg")
event_2.photo.attach(io: open("https://tacobrite-seeds.s3-us-west-1.amazonaws.com/chicken/20-min.jpg"), filename: "20-min.jpg")

event_4.photo.attach(io: open("https://tacobrite-seeds.s3-us-west-1.amazonaws.com/beef/ground-beef.jpg"), filename: "ground-beef.jpg")
event_5.photo.attach(io: open("https://tacobrite-seeds.s3-us-west-1.amazonaws.com/beef/korean-beef.jpg"), filename: "korean-beef.jpg")

event_7.photo.attach(io: open("https://tacobrite-seeds.s3-us-west-1.amazonaws.com/breakfast/kimchi-egg.jpg"), filename: "kimchi-egg.jpg")
event_8.photo.attach(io: open("https://tacobrite-seeds.s3-us-west-1.amazonaws.com/breakfast/bacon.png"), filename: "bacon.jpg")

event_10.photo.attach(io: open("https://tacobrite-seeds.s3-us-west-1.amazonaws.com/vegan/broccoli.jpg"), filename: "broccoli.jpg")
event_11.photo.attach(io: open("https://tacobrite-seeds.s3-us-west-1.amazonaws.com/vegan/Masala-Cauliflower.jpg"), filename: "Masala-Cauliflower.jpg")
event_12.photo.attach(io: open("https://tacobrite-seeds.s3-us-west-1.amazonaws.com/vegan/mushroom.jpg"), filename: "mushroom.jpg")
event_13.photo.attach(io: open("https://tacobrite-seeds.s3-us-west-1.amazonaws.com/vegan/sweet-potato.jpg"), filename: "sweet-potato.jpg")

event_14.photo.attach(io: open("https://tacobrite-seeds.s3-us-west-1.amazonaws.com/vegetarian/poblano-cheese.jpg"), filename: "poblano-cheese.jpg")
event_15.photo.attach(io: open("https://tacobrite-seeds.s3-us-west-1.amazonaws.com/vegetarian/chickpea.jpg"), filename: "chickpea.jpg")
event_16.photo.attach(io: open("https://tacobrite-seeds.s3-us-west-1.amazonaws.com/vegetarian/corn.jpg"), filename: "corn.jpg")
event_17.photo.attach(io: open("https://tacobrite-seeds.s3-us-west-1.amazonaws.com/vegetarian/misc.jpg"), filename: "misc.jpg")

event_18.photo.attach(io: open("https://tacobrite-seeds.s3-us-west-1.amazonaws.com/pork/al-pastor.jpg"), filename: "al-pastor.jpg")
event_19.photo.attach(io: open("https://tacobrite-seeds.s3-us-west-1.amazonaws.com/pork/queso-fundido.jpg"), filename: "queso-fundido.jpg")

event_20.photo.attach(io: open("https://tacobrite-seeds.s3-us-west-1.amazonaws.com/fish/salmon.jpg"), filename: "salmon.jpg")
event_21.photo.attach(io: open("https://tacobrite-seeds.s3-us-west-1.amazonaws.com/fish/tuna.jpg"), filename: "tuna.jpg")
event_22.photo.attach(io: open("https://tacobrite-seeds.s3-us-west-1.amazonaws.com/fish/sushiTacos2.png"), filename: "sushiTacos2.png")
event_23.photo.attach(io: open("https://tacobrite-seeds.s3-us-west-1.amazonaws.com/fish/SeaweedTacosPoke.png"), filename: "SeaweedTacosPoke.png")