export default function Menu() {
    const weeklyMenu = [
      {
        day: "Monday",
        breakfast: "☕ Tea/Coffee, 🥚 Boiled Eggs, 🍞 Bread",
        dinner: "Chapati, Coconut Beans Curry, Mung Beans Curry (Ndengu), Cabbage",
      },
      {
        day: "Tuesday",
        breakfast: "☕ Tea/Coffee, 🍞 Bread",
        dinner: "🍛 Turmeric Rice, 🍗 Beef Stew, Cumin Curry Green Peas, 🥗 Vegetable Salad",
      },
      {
        day: "Wednesday",
        breakfast: "☕ Tea/Coffee, Mahamri",
        dinner: "Ugali, Kales/Spinach, 🍗 Chicken Stew",
      },
      {
        day: "Thursday",
        breakfast: "☕ Tea/Coffee, 🍞 Bread, Sausages",
        dinner: "Mashed Potatoes, 🍗 Beef Stew, 🍉 Watermelon",
      },
      {
        day: "Friday",
        breakfast: "☕ Tea/Coffee, Pancakes",
        dinner: "🍟 Fries, Smoked Sausages, Kachumbari",
      },
      {
        day: "Saturday",
        breakfast: "☕ Tea/Coffee, 🍞 Bread",
        dinner: "🍛 Pilau, 🥗 Vegetable Salad",
      },
      {
        day: "Sunday",
        breakfast: "☕ Tea/Coffee, Mahamri",
        dinner: "Spaghetti, Minced Meat, 🍊 Fruits (Oranges)",
      },
    ];
  
    return (
      <div id="menu" className="bg-gradient-to-br from-pink-100 via-purple-50 to-purple-200 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-10">Weekly Meal Plan</h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {weeklyMenu.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-purple-200 rounded-2xl shadow-sm p-6 transition hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-purple-800 mb-2">{item.day}</h3>
              <div className="mb-2">
                <p className="text-gray-600 font-semibold">Breakfast:</p>
                <p className="text-gray-800">{item.breakfast}</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Dinner:</p>
                <p className="text-gray-800">{item.dinner}</p>
              </div>
            </div>
          ))}
  
          {/* Filler note to balance row and add lunch info */}
          <div className="bg-white border border-dashed border-purple-200 rounded-2xl shadow-sm p-6 flex items-center justify-center text-center text-sm text-gray-700 italic">
            🍽️ Lunch is also provided on weekends and public holidays.
          </div>
        </div>
      </div>
    );
  }
  