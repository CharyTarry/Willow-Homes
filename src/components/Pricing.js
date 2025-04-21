export default function Pricing() {
    const plans = [
      {
        title: "2 Sharing Room",
        price: "KES 18,500/month",
        includes: [
          "Breakfast & Dinner included",
          "Electricity & Water",
          "WiFi",
          "All utilities",
        ],
      },
      {
        title: "4 Sharing Room",
        price: "KES 18,000/month",
        includes: [
          "Breakfast & Dinner included",
          "Electricity & Water",
          "WiFi",
          "All utilities",
        ],
      },
      {
        title: "6 Sharing Room",
        price: "KES 17,500/month",
        includes: [
          "Breakfast & Dinner included",
          "Electricity & Water",
          "WiFi",
          "All utilities",
        ],
      },
    ];
  
    return (
      <div id="pricing" className="bg-gradient-to-br from-purple-200 via-purple-50 to-pink-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-10">
          Pricing Packages
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white border border-purple-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-purple-800 mb-2">{plan.title}</h3>
              <p className="text-pink-600 font-bold text-lg mb-4">{plan.price}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {plan.includes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
  