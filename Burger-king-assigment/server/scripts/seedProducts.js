const sequelize = require('../util/database');
const Product = require('../models/product');

const seedProducts = async () => {
  try {
    await sequelize.sync({ force: true }); // Recreate tables
    console.log("Database synced. Seeding products...");

    const productsData = [
      {
        p_name: "Classic Veg Burger",
        isVeg: true,
        title: "Fresh Veggie Delight",
        price: 3.99,
        imageUrl: "https://media.istockphoto.com/id/1323194107/photo/plant-based-black-bean-burger-on-a-sesame-seed-bun.jpg?s=612x612&w=0&k=20&c=m4TXkYuG20dE6ZqRZz8PdVU6HIUWoJqizaxOmf418pQ=",
        description: "A wholesome veggie patty with lettuce, tomato, and creamy mayo."
      },
      {
        p_name: "Spicy Chicken Burger",
        isVeg: false,
        title: "Hot & Crispy Chicken",
        price: 5.49,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdfmrHTF5NgbNodkVk5WJPaR7CC6tHJTMBfQ&s",
        description: "Crispy chicken fillet with spicy sauce and crunchy lettuce."
      },
      {
        p_name: "Cheese Burst Pizza",
        isVeg: true,
        title: "Loaded Cheese Pizza",
        price: 7.99,
        imageUrl: "https://product-assets.faasos.io/eatsure/production/veg-cheese-burst-pizza.jpeg",
        description: "Cheesy pizza with a burst of mozzarella and cheddar."
      },
      {
        p_name: "Grilled Chicken Sub",
        isVeg: false,
        title: "Protein-Packed Sub",
        price: 6.29,
        imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2024/07/grilled-chicken-sandwich-recipe.jpg",
        description: "Grilled chicken breast with fresh veggies in a sub roll."
      },
      {
        p_name: "French Fries",
        isVeg: true,
        title: "Crispy Golden Fries",
        price: 2.49,
        imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/027/536/411/small/delicious-french-fries-on-a-white-background-photo.jpg",
        description: "Classic salted fries, golden and crispy."
      },
      {
        p_name: "Paneer Wrap",
        isVeg: true,
        title: "Indian Style Wrap",
        price: 4.59,
        imageUrl: "https://spicecravings.com/wp-content/uploads/2020/12/Paneer-kathi-Roll-Featured-1.jpg",
        description: "Spicy paneer cubes wrapped with veggies and sauces."
      },
      {
        p_name: "BBQ Chicken Wings",
        isVeg: false,
        title: "Smoky BBQ Wings",
        price: 5.99,
        imageUrl: "https://media.istockphoto.com/id/1330033172/photo/grilled-chicken-wings-with-bbq-sauce-wooden-background-top-view-copy-space.jpg?s=612x612&w=0&k=20&c=k8CsxztqyxA2uL5-K3Czm7VASp4Hmhtmap73I-0TIOE=",
        description: "Tender chicken wings glazed with smoky BBQ sauce."
      },
      {
        p_name: "Chocolate Shake",
        isVeg: true,
        title: "Rich Chocolate Drink",
        price: 3.29,
        imageUrl: "https://www.sugarandsoul.co/wp-content/uploads/2021/04/chocolate-milkshake-8.jpg",
        description: "Thick and creamy chocolate milkshake topped with whipped cream."
      },
      {
        p_name: "Fish Fingers",
        isVeg: false,
        title: "Crunchy Fish Snacks",
        price: 4.79,
        imageUrl: "https://www.shutterstock.com/image-photo/tasty-crispy-fried-fish-fingers-260nw-793755013.jpg",
        description: "Breaded fish sticks served with tartar dip."
      },
      {
        p_name: "Veg Supreme Combo",
        isVeg: true,
        title: "Burger + Fries + Drink",
        price: 6.99,
        imageUrl: "https://www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven-720x480.png",
        description: "Veg burger combo with fries and a soft drink."
      }
    ];

    await Product.bulkCreate(productsData);
    console.log("Products inserted successfully.");
  } catch (err) {
    console.error("Error seeding products:", err);
  } finally {
    await sequelize.close();
  }
};

seedProducts();
