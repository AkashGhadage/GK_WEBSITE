import React, { useState } from 'react';
import { PhoneCall, ShieldCheck, MapPin, Clock, CheckCircle2 } from "lucide-react";

const bullionData = {
  gold: [
    { id: 1, type: "COIN", weight: "5 GM", purity: "999.9 Purity", img: "/fivegram.png", stock: "Available" },
    { id: 2, type: "COIN", weight: "10 GM", purity: "999.9 Purity", img: "/tengram.png", stock: "Available" },
    { id: 3, type: "COIN", weight: "20 GM", purity: "999.9 Purity", img: "/goldcoin20.png", stock: "Available" },
    { id: 4, type: "COIN", weight: "100 GM", purity: "999.9 Purity", img: "/goldcoin100.png", stock: "Limited Stock" },
    { id: 5, type: "BAR", weight: "5 GM", purity: "999.9 Purity", img: "/goldbar5.png", stock: "Available" },
    { id: 6, type: "BAR", weight: "10 GM", purity: "999.9 Purity", img: "/goldbar10.png", stock: "Available" },
    { id: 7, type: "BAR", weight: "20 GM", purity: "999.9 Purity", img: "/goldbar20.png", stock: "Available" },
    { id: 8, type: "BAR", weight: "50 GM", purity: "999.9 Purity", img: "/goldbar50.png", stock: "Available" },
    { id: 9, type: "BAR", weight: "100 GM", purity: "999.9 Purity", img: "/hundreadgram.png", stock: "Available" },
    { id: 10, type: "BAR", weight: "500 GM", purity: "999.9 Purity", img: "/goldbar500.png", stock: "Available" },
    { id: 11, type: "BAR", weight: "1 KG", purity: "999.9 Purity", img: "/onekg.png", stock: "Call for Quote" },
  ],
  silver: [
    { id: 12, type: "COIN", weight: "5 GM", purity: "999 Purity", img: "/silvercoin5.png", stock: "Available" },
    { id: 13, type: "COIN", weight: "10 GM", purity: "999 Purity", img: "/silvercoin10.png", stock: "Available" },
    { id: 14, type: "COIN", weight: "20 GM", purity: "999 Purity", img: "/silvercoin20.png", stock: "Available" },
    { id: 15, type: "COIN", weight: "100 GM", purity: "999 Purity", img: "/silvercoin100.png", stock: "Available" },
    { id: 16, type: "BAR", weight: "5 GM", purity: "999 Purity", img: "/silverbar5.png", stock: "Available" },
    { id: 17, type: "BAR", weight: "10 GM", purity: "999 Purity", img: "/silverbar10.png", stock: "Available" },
    { id: 18, type: "BAR", weight: "20 GM", purity: "999 Purity", img: "/silverbar20.png", stock: "Available" },
    { id: 19, type: "BAR", weight: "50 GM", purity: "999 Purity", img: "/silverbar50.png", stock: "Available" },
    { id: 20, type: "BAR", weight: "100 GM", purity: "999 Purity", img: "/hundreadsilver.png", stock: "Available" },
    { id: 21, type: "BAR", weight: "500 GM", purity: "999 Purity", img: "/silverbar500.png", stock: "Available" },
    { id: 22, type: "BAR", weight: "1 KG", purity: "999 Purity", img: "silveronekg.png", stock: "Available" },
  ]
};

export default function GoldSilver() {
  const [activeTab, setActiveTab] = useState('gold');
  const [activeType, setActiveType] = useState('ALL');

  const filteredProducts = bullionData[activeTab].filter(item => 
    activeType === 'ALL' ? true : item.type === activeType
  );

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 pt-16 pb-20">

      {/* --- Section Header --- */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-black tracking-tight text-gray-900 uppercase mb-4">
          Buy
          <span className="text-[#AA771C]"> Gold & Silver</span>
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm lg:text-base leading-relaxed">
          At Gurukrupa Gold, we make owning physical gold and silver simple, secure, and personal. We empower our clients to protect their wealth with tangible assets that stand independently outside the traditional financial system. Explore our full selection below and shop with total confidence — each piece is backed by Gurukrupa Gold’s reputation for integrity, expert education, and personalized service.
        </p>
      </div>

      {/* --- Category Selector --- */}
      <div className="flex justify-center mb-6">
        <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-gray-200 flex gap-2">
          {['gold', 'silver'].map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveTab(cat); setActiveType('ALL'); }}
              className={`px-6 sm:px-10 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all
                ${activeTab === cat ? "bg-[rgb(23,28,32)] text-white shadow-lg" : "text-gray-400 hover:bg-gray-50"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- Type Filter (Sorted: Coins, Bars) --- */}
      <div className="flex justify-center mb-12 gap-3">
        {['ALL', 'COIN', 'BAR'].map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border
              ${activeType === type 
                ? "bg-[#AA771C] text-white border-[#AA771C]" 
                : "bg-white text-gray-400 border-gray-200 hover:border-[#AA771C]"}`}
          >
            {type === 'ALL' ? 'All Products' : `${type}s`}
          </button>
        ))}
      </div>

      {/* --- Product Cards Grid --- */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((item) => (
          <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group">
            
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden">
              <img src={item.img} alt={item.weight} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              
              {/* Type Tag */}
              <div className="absolute top-4 right-4 bg-[rgb(23,28,32)] text-white text-[9px] px-3 py-1 rounded font-bold uppercase tracking-tighter">
                {item.type}
              </div>

              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                <div className={`w-2 h-2 rounded-full ${item.stock === 'Available' ? 'bg-emerald-500 animate-pulse' : 'bg-orange-500'}`}></div>
                <span className="text-[10px] font-bold uppercase tracking-tighter text-gray-700">{item.stock}</span>
              </div>
            </div>

            {/* Details Section */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-serif font-black text-gray-900 italic tracking-tighter">{item.weight}</h3>
                <ShieldCheck className="text-[#AA771C]" size={20} />
              </div>
              <p className="text-[#AA771C] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">{item.purity}</p>

              <div className="space-y-2 mb-6 border-t border-gray-50 pt-4">
                <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase font-medium">
                  <CheckCircle2 size={12} className="text-emerald-500" /> BIS Hallmarked
                </div>
                <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase font-medium">
                  <CheckCircle2 size={12} className="text-emerald-500" /> Lab Tested Purity
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => window.location.href = 'tel:+919075516373'}
                className="w-full bg-[rgb(23,28,32)] text-white py-4 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2 hover:bg-[#AA771C] transition-colors"
              >
                <PhoneCall size={14} /> Get Live Rate
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- Contact & Availability Details Section --- */}
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="bg-white rounded-3xl lg:rounded-[40px] p-5 sm:p-8 lg:p-12 shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* Availability Info */}
          <div className="space-y-4">
            <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-800 mb-6">
              <Clock size={24} />
            </div>
            <h4 className="text-xl font-bold uppercase tracking-tight">Market Timing</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Bullion rates fluctuate according to the MCX & International market.
              Our desk is active from 10:30 AM to 7:30 PM. Prices are confirmed only at the time of booking.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="w-12 h-12 bg-[#AA771C]/10 rounded-2xl flex items-center justify-center text-[#AA771C] mb-6">
              <PhoneCall size={24} />
            </div>
            <h4 className="text-xl font-bold uppercase tracking-tight">Booking Number</h4>
            <p className="text-gray-800 font-black text-base sm:text-lg">
              +91 9075516373<br className="sm:hidden" />
              <span className="hidden sm:inline"> , </span>
              +91 9975796681
            </p>
            <p className="text-gray-500 text-sm">Call us for booking, bulk orders, or any inquiry regarding gold coins and gold bars.</p>
          </div>

          {/* Office Visit */}
          <div className="space-y-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700 mb-6">
              <MapPin size={24} />
            </div>
            <h4 className="text-xl font-bold uppercase tracking-tight">Office Visit</h4>
            <p className="text-gray-500 text-sm">
              Visit GURUKRUPA GOLD for physical delivery  or any inquiry regarding gold coins and gold bars.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}