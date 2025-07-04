// const sequelize = require('../util/database'); // Your DB config
// const Meals = require('../models/meals'); // Path to model

// const seedMeals = async () => {
//      try {
//   await sequelize.sync({ force: true }); // Wipe DB for fresh start (optional)

//   const mealsData = [
//     {
//       m_name: "Whopper",
//       isVeg: false,
//       title: "Flame-Grilled Beef Burger",
//       price: 5.99,
//       imageUrl: "https://example.com/images/whopper.jpg",
//       description: "A juicy flame-grilled beef patty with fresh lettuce, tomato, pickles, and onions.",
//       category: "Burger",
//       calories: 650
//     },
//     {
//       m_name: "Veggie Delight",
//       isVeg: true,
//       title: "Grilled Veg Burger",
//       price: 4.49,
//       imageUrl: "https://example.com/images/veggie-delight.jpg",
//       description: "A delicious grilled veggie patty topped with cheese and fresh vegetables.",
//       category: "Burger",
//       calories: 400
//     },
//     {
//       m_name: "Chicken Royale",
//       isVeg: false,
//       title: "Crispy Chicken Burger",
//       price: 5.79,
//       imageUrl: "https://example.com/images/chicken-royale.jpg",
//       description: "Crispy chicken patty with mayo, lettuce, and soft buns.",
//       category: "Burger",
//       calories: 620
//     },
//     {
//       m_name: "Paneer King",
//       isVeg: true,
//       title: "Indian Style Paneer Burger",
//       price: 4.99,
//       imageUrl: "https://example.com/images/paneer-king.jpg",
//       description: "Grilled paneer patty with spicy Indian sauces and veggies.",
//       category: "Burger",
//       calories: 480
//     },
//     {
//       m_name: "Double Beef Stack",
//       isVeg: false,
//       title: "Double Patty Beef Burger",
//       price: 7.49,
//       imageUrl: "https://example.com/images/double-beef-stack.jpg",
//       description: "Two flame-grilled beef patties stacked with cheese and sauce.",
//       category: "Burger",
//       calories: 890
//     },
//     {
//       m_name: "Cheesy Fries",
//       isVeg: true,
//       title: "Loaded Cheese Fries",
//       price: 2.99,
//       imageUrl: "https://example.com/images/cheesy-fries.jpg",
//       description: "Crispy fries loaded with melted cheese and spices.",
//       category: "Sides",
//       calories: 320
//     },
//     {
//       m_name: "BBQ Bacon Burger",
//       isVeg: false,
//       title: "Bacon & BBQ Beef",
//       price: 6.29,
//       imageUrl: "https://example.com/images/bbq-bacon-burger.jpg",
//       description: "Beef burger topped with smoky bacon and BBQ sauce.",
//       category: "Burger",
//       calories: 700
//     },
//     {
//       m_name: "Crispy Veg Wrap",
//       isVeg: true,
//       title: "Wrap with Crispy Veg Patty",
//       price: 3.99,
//       imageUrl: "https://example.com/images/veg-wrap.jpg",
//       description: "Crunchy veggie patty with lettuce and spicy mayo in a wrap.",
//       category: "Wrap",
//       calories: 410
//     },
//     {
//       m_name: "Fish Fillet",
//       isVeg: false,
//       title: "Fish Sandwich",
//       price: 5.29,
//       imageUrl: "https://example.com/images/fish-fillet.jpg",
//       description: "Crispy fish fillet with tartar sauce and shredded lettuce.",
//       category: "Burger",
//       calories: 580
//     },
//     {
//       m_name: "Veg Supreme",
//       isVeg: true,
//       title: "Supreme Veg Combo",
//       price: 6.49,
//       imageUrl: "https://example.com/images/veg-supreme.jpg",
//       description: "Veg patty burger, fries, and a drink combo meal.",
//       category: "Combo",
//       calories: 780
//     },
//     {
//       m_name: "Spicy Chicken Wrap",
//       isVeg: false,
//       title: "Hot Chicken Wrap",
//       price: 4.99,
//       imageUrl: "https://example.com/images/spicy-chicken-wrap.jpg",
//       description: "Spicy chicken wrap with jalapeños and pepper mayo.",
//       category: "Wrap",
//       calories: 530
//     },
//     {
//       m_name: "Classic Fries",
//       isVeg: true,
//       title: "Regular Salted Fries",
//       price: 1.99,
//       imageUrl: "https://example.com/images/classic-fries.jpg",
//       description: "Golden crispy fries seasoned with salt.",
//       category: "Sides",
//       calories: 290
//     },
//     {
//       m_name: "Zesty Chicken Nuggets",
//       isVeg: false,
//       title: "Spicy Chicken Bites",
//       price: 3.49,
//       imageUrl: "https://example.com/images/chicken-nuggets.jpg",
//       description: "8 pieces of spicy and crispy chicken nuggets.",
//       category: "Sides",
//       calories: 410
//     },
//     {
//       m_name: "Aloo Tikki Burger",
//       isVeg: true,
//       title: "Potato Patty Burger",
//       price: 2.49,
//       imageUrl: "https://example.com/images/aloo-tikki.jpg",
//       description: "Indian-style spiced potato patty in a bun.",
//       category: "Burger",
//       calories: 350
//     },
//     {
//       m_name: "Ultimate Beef Burger",
//       isVeg: false,
//       title: "Triple Beef with Cheese",
//       price: 8.49,
//       imageUrl: "https://example.com/images/ultimate-beef.jpg",
//       description: "Triple-layered beef patties with cheese and sauce.",
//       category: "Burger",
//       calories: 1050
//     },
//     {
//       m_name: "Corn Cheese Poppers",
//       isVeg: true,
//       title: "Cheesy Corn Snacks",
//       price: 3.29,
//       imageUrl: "https://example.com/images/corn-poppers.jpg",
//       description: "Crispy poppers with corn and molten cheese filling.",
//       category: "Sides",
//       calories: 310
//     },
//     {
//       m_name: "Peri Peri Chicken",
//       isVeg: false,
//       title: "Grilled Chicken with Peri Sauce",
//       price: 6.79,
//       imageUrl: "https://example.com/images/peri-chicken.jpg",
//       description: "Grilled chicken fillet with spicy peri peri sauce.",
//       category: "Grilled",
//       calories: 590
//     },
//     {
//       m_name: "Mushroom Melt",
//       isVeg: true,
//       title: "Melted Cheese & Mushroom Burger",
//       price: 4.89,
//       imageUrl: "https://example.com/images/mushroom-melt.jpg",
//       description: "Grilled mushrooms, cheese, and lettuce on a toasted bun.",
//       category: "Burger",
//       calories: 470
//     },
//     {
//       m_name: "King's Feast",
//       isVeg: false,
//       title: "Full Combo Meal",
//       price: 9.99,
//       imageUrl: "https://example.com/images/kings-feast.jpg",
//       description: "Whopper, fries, nuggets, and drink combo.",
//       category: "Combo",
//       calories: 1100
//     },
//     {
//       m_name: "Choco Lava Cake",
//       isVeg: true,
//       title: "Dessert - Molten Choco Cake",
//       price: 2.59,
//       imageUrl: "https://example.com/images/choco-lava.jpg",
//       description: "Warm chocolate cake with a gooey chocolate center.",
//       category: "Dessert",
//       calories: 370
//     }
//   ];

 
//     await Meals.bulkCreate(mealsData);
//     console.log(" Meals seeded successfully.");
//   } catch (error) {
//     console.error("Error seeding");
        
// }finally {
//     await sequelize.close();
//   }

// }

const sequelize = require('../util/database');
const Meals = require('../models/meals');

const seedMeals = async () => {
  try {
    await sequelize.sync({ force: true }); // Drops & recreates tables

   const mealsData = [
    {
      m_name: "Whopper",
      isVeg: false,
      title: "Flame-Grilled Beef Burger",
      price: 5.99,
      imageUrl: "https://example.com/images/whopper.jpg",
      description: "A juicy flame-grilled beef patty with fresh lettuce, tomato, pickles, and onions.",
      category: "Burger",
      calories: 650
    },
    {
      m_name: "Veggie Delight",
      isVeg: true,
      title: "Grilled Veg Burger",
      price: 4.49,
      imageUrl: "https://example.com/images/veggie-delight.jpg",
      description: "A delicious grilled veggie patty topped with cheese and fresh vegetables.",
      category: "Burger",
      calories: 400
    },
    {
      m_name: "Chicken Royale",
      isVeg: false,
      title: "Crispy Chicken Burger",
      price: 5.79,
      imageUrl: "https://example.com/images/chicken-royale.jpg",
      description: "Crispy chicken patty with mayo, lettuce, and soft buns.",
      category: "Burger",
      calories: 620
    },
    {
      m_name: "Paneer King",
      isVeg: true,
      title: "Indian Style Paneer Burger",
      price: 4.99,
      imageUrl: "https://example.com/images/paneer-king.jpg",
      description: "Grilled paneer patty with spicy Indian sauces and veggies.",
      category: "Burger",
      calories: 480
    },
    {
      m_name: "Double Beef Stack",
      isVeg: false,
      title: "Double Patty Beef Burger",
      price: 7.49,
      imageUrl: "https://example.com/images/double-beef-stack.jpg",
      description: "Two flame-grilled beef patties stacked with cheese and sauce.",
      category: "Burger",
      calories: 890
    },
    {
      m_name: "Cheesy Fries",
      isVeg: true,
      title: "Loaded Cheese Fries",
      price: 2.99,
      imageUrl: "https://example.com/images/cheesy-fries.jpg",
      description: "Crispy fries loaded with melted cheese and spices.",
      category: "Sides",
      calories: 320
    },
    {
      m_name: "BBQ Bacon Burger",
      isVeg: false,
      title: "Bacon & BBQ Beef",
      price: 6.29,
      imageUrl: "https://example.com/images/bbq-bacon-burger.jpg",
      description: "Beef burger topped with smoky bacon and BBQ sauce.",
      category: "Burger",
      calories: 700
    },
    {
      m_name: "Crispy Veg Wrap",
      isVeg: true,
      title: "Wrap with Crispy Veg Patty",
      price: 3.99,
      imageUrl: "https://example.com/images/veg-wrap.jpg",
      description: "Crunchy veggie patty with lettuce and spicy mayo in a wrap.",
      category: "Wrap",
      calories: 410
    },
    {
      m_name: "Fish Fillet",
      isVeg: false,
      title: "Fish Sandwich",
      price: 5.29,
      imageUrl: "https://example.com/images/fish-fillet.jpg",
      description: "Crispy fish fillet with tartar sauce and shredded lettuce.",
      category: "Burger",
      calories: 580
    },
    {
      m_name: "Veg Supreme",
      isVeg: true,
      title: "Supreme Veg Combo",
      price: 6.49,
      imageUrl: "https://example.com/images/veg-supreme.jpg",
      description: "Veg patty burger, fries, and a drink combo meal.",
      category: "Combo",
      calories: 780
    },
    {
      m_name: "Spicy Chicken Wrap",
      isVeg: false,
      title: "Hot Chicken Wrap",
      price: 4.99,
      imageUrl: "https://example.com/images/spicy-chicken-wrap.jpg",
      description: "Spicy chicken wrap with jalapeños and pepper mayo.",
      category: "Wrap",
      calories: 530
    },
    {
      m_name: "Classic Fries",
      isVeg: true,
      title: "Regular Salted Fries",
      price: 1.99,
      imageUrl: "https://example.com/images/classic-fries.jpg",
      description: "Golden crispy fries seasoned with salt.",
      category: "Sides",
      calories: 290
    },
    {
      m_name: "Zesty Chicken Nuggets",
      isVeg: false,
      title: "Spicy Chicken Bites",
      price: 3.49,
      imageUrl: "https://example.com/images/chicken-nuggets.jpg",
      description: "8 pieces of spicy and crispy chicken nuggets.",
      category: "Sides",
      calories: 410
    },
    {
      m_name: "Aloo Tikki Burger",
      isVeg: true,
      title: "Potato Patty Burger",
      price: 2.49,
      imageUrl: "https://example.com/images/aloo-tikki.jpg",
      description: "Indian-style spiced potato patty in a bun.",
      category: "Burger",
      calories: 350
    },
    {
      m_name: "Ultimate Beef Burger",
      isVeg: false,
      title: "Triple Beef with Cheese",
      price: 8.49,
      imageUrl: "https://example.com/images/ultimate-beef.jpg",
      description: "Triple-layered beef patties with cheese and sauce.",
      category: "Burger",
      calories: 1050
    },
    {
      m_name: "Corn Cheese Poppers",
      isVeg: true,
      title: "Cheesy Corn Snacks",
      price: 3.29,
      imageUrl: "https://example.com/images/corn-poppers.jpg",
      description: "Crispy poppers with corn and molten cheese filling.",
      category: "Sides",
      calories: 310
    },
    {
      m_name: "Peri Peri Chicken",
      isVeg: false,
      title: "Grilled Chicken with Peri Sauce",
      price: 6.79,
      imageUrl: "https://example.com/images/peri-chicken.jpg",
      description: "Grilled chicken fillet with spicy peri peri sauce.",
      category: "Grilled",
      calories: 590
    },
    {
      m_name: "Mushroom Melt",
      isVeg: true,
      title: "Melted Cheese & Mushroom Burger",
      price: 4.89,
      imageUrl: "https://example.com/images/mushroom-melt.jpg",
      description: "Grilled mushrooms, cheese, and lettuce on a toasted bun.",
      category: "Burger",
      calories: 470
    },
    {
      m_name: "King's Feast",
      isVeg: false,
      title: "Full Combo Meal",
      price: 9.99,
      imageUrl: "https://example.com/images/kings-feast.jpg",
      description: "Whopper, fries, nuggets, and drink combo.",
      category: "Combo",
      calories: 1100
    },
    {
      m_name: "Choco Lava Cake",
      isVeg: true,
      title: "Dessert - Molten Choco Cake",
      price: 2.59,
      imageUrl: "https://example.com/images/choco-lava.jpg",
      description: "Warm chocolate cake with a gooey chocolate center.",
      category: "Dessert",
      calories: 370
    }
  ];

    await Meals.bulkCreate(mealsData);
    console.log("✅ Meals inserted successfully.");

  } catch (err) {
    console.error("❌ Error seeding meals:", err);
  } finally {
    await sequelize.close();
  }
};

