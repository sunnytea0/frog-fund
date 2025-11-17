<<<<<<< Updated upstream
<<<<<<< Updated upstream
export default function Campaigns() {
  return (
    <main className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Мої банки</h1>
    </main>
  )
}
=======
=======
>>>>>>> Stashed changes
import React, { useState } from 'react';
import avatarImage from '../../res/golub.webp';

const filters = [
  { label: "Усі", value: "all" },
  { label: "Мої збори", value: "my" },
  { label: "Підтримані збори", value: "supported" },
  { label: "Мої закриті збори", value: "closed" }
];

const campaigns = [
  {
    title: "На пшеницю",
    amount: 15.74,
    goal: 50,
    user: "Василь К.",
    from: "від 5₴",
    type: "supported",
    color: "border-red-300",
    highlight: "bg-red-100",
    icon: "🎈"
  },
  {
    title: "На психолога",
    amount: 15.74,
    goal: 50,
    user: "Ви",
    from: "від 10₴",
    type: "my",
    color: "border-green-300",
    highlight: "bg-green-100",
    icon: "🎈"
  },
  {
    title: "На пшеницю",
    amount: 15.74,
    goal: 50,
    user: "Василь К.",
    from: "від 5₴",
    type: "supported",
    color: "border-yellow-300",
    highlight: "bg-yellow-100",
    icon: "🎈"
  },
  {
    title: "На психолога",
    amount: 15.74,
    goal: 50,
    user: "Ви",
    from: "Завершений",
    type: "closed",
    color: "border-gray-300",
    highlight: "bg-gray-100",
    icon: ""
  }
];

const CampaignsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCampaigns = campaigns.filter((c) => {
    if (activeFilter === "all") return true;
    return c.type === activeFilter;
  });

  return (
    <div className="p-6 bg-[#f9f9f9] min-h-screen flex justify-center">
      <div className="w-full max-w-6xl bg-white rounded-3xl p-10 shadow-lg">

        {/* Профіль */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-4">
            <img
              src={avatarImage}
              alt="User Avatar"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold">Денис Голуб</h2>
              <p className="text-gray-500">Баланс: <strong>5 000₴</strong></p>
            </div>
          </div>

          <button className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:opacity-80 transition">
            + Нова банка
          </button>
        </div>

        {/* Заголовок */}
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-3xl font-bold">Усі збори</h2>
          <span className="text-xl text-gray-500">{filteredCampaigns.length}</span>
        </div>

        {/* Фільтри */}
        <div className="flex gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                activeFilter === f.value
                  ? "bg-black text-white"
                  : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Картки зборів */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCampaigns.map((c, i) => (
            <div
              key={i}
              className={`border p-4 rounded-2xl shadow-sm hover:shadow-md transition ${c.color}`}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold">{c.title}</h3>
                <span className="text-lg">{c.icon}</span>
              </div>

              <p className="text-sm text-gray-500 mb-3">
                {c.amount}₴ / {c.goal}₴
              </p>

              <div className="w-full h-2 bg-gray-200 rounded-full mb-3">
                <div
                  className="h-full bg-green-400 rounded-full"
                  style={{ width: `${(c.amount / c.goal) * 100}%` }}
                />
              </div>

              <div className="text-sm flex justify-between text-gray-600">
                <span>{c.user}</span>
                <span>{c.from}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CampaignsPage;
>>>>>>> Stashed changes
