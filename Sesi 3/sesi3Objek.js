// Bertipe Object

const restaurant = {
    name: "Vanilla",
    city: "Sukabumi",
    favoriteDrink: "Milk Tea",
    favoriteFood: "Ramen",
    isVegan: false,
  };
  
  const { name, city, favoriteDrink, favoriteFood, isVegan } = restaurant;
  console.log("Nama : " + name);
  console.log("Kota : " + city);
  console.log("Minuman Favorit : " + favoriteDrink);
  console.log("Makanan Favorit : " + favoriteFood);
  console.log("Vegan : " + isVegan);