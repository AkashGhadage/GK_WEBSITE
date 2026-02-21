import React, { useState } from 'react';
import { PhoneCall, ShieldCheck, MessageCircle, MapPin, Clock, CheckCircle2 } from "lucide-react";

const bullionData = {
  gold: [
    { id: 1, weight: "5 GM", purity: "999.9 Purity", img: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&q=80&w=400", stock: "Available" },
    { id: 2, weight: "10 GM", purity: "999.9 Purity", img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=400", stock: "Available" },
    { id: 3, weight: "100 GM", purity: "999.9 Purity", img: "https://images.unsplash.com/photo-1618403088890-3d9ff6f4c844?auto=format&fit=crop&q=80&w=400", stock: "Limited Stock" },
    { id: 4, weight: "1 KG", purity: "999.9 Purity", img: "https://images.unsplash.com/photo-1581067723215-641b489f9c91?auto=format&fit=crop&q=80&w=400", stock: "Call for Quote" },
  ],
  silver: [
    { id: 5, weight: "100 GM", purity: "999 Purity", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=400", stock: "Available" },
    { id: 6, weight: "1 KG", purity: "999 Purity", img: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&q=80&w=400", stock: "Available" },
  ]
};

export default function GoldSilver() {
  const [activeTab, setActiveTab] = useState('gold');

  return (
    <div className="min-h-screen bg-gray-100 text-slate-900 pt-28 pb-20">
      
      {/* --- Section Header --- */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-800 uppercase mb-4">
          Investment <span className="text-[#AA771C]">Bullion</span>
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-sm lg:text-base leading-relaxed">
          Physical gold and silver bullion assets. Hand-inspected and purity-certified 
          by Gurukrupa Laboratory standards for Indian investors.
        </p>
      </div>

      {/* --- Category Selector --- */}
      <div className="flex justify-center mb-12">
        <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-gray-200 flex gap-2">
          {['gold', 'silver'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-10 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all
                ${activeTab === cat ? "bg-slate-800 text-white shadow-lg" : "text-slate-400 hover:bg-gray-50"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- Product Cards Grid --- */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bullionData[activeTab].map((item) => (
          <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group">
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden">
              <img src={item.img} alt={item.weight} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                <div className={`w-2 h-2 rounded-full ${item.stock === 'Available' ? 'bg-emerald-500 animate-pulse' : 'bg-orange-500'}`}></div>
                <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-700">{item.stock}</span>
              </div>
            </div>

            {/* Details Section */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-black text-slate-800 italic tracking-tighter">{item.weight}</h3>
                <ShieldCheck className="text-[#AA771C]" size={20} />
              </div>
              <p className="text-[#AA771C] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">{item.purity}</p>
              
              <div className="space-y-2 mb-6 border-t border-gray-50 pt-4">
                <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase font-medium">
                   <CheckCircle2 size={12} className="text-emerald-500" /> BIS Hallmarked
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase font-medium">
                   <CheckCircle2 size={12} className="text-emerald-500" /> Lab Tested Purity
                </div>
              </div>

              {/* Action Button */}
              <button 
                onClick={() => window.location.href = 'tel:+91XXXXXXXXXX'}
                className="w-full bg-slate-800 text-white py-4 rounded-2xl text-[10px] font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2 hover:bg-[#AA771C] transition-colors"
              >
                <PhoneCall size={14} /> Get Live Rate
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- Contact & Availability Details Section --- */}
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="bg-white rounded-[40px] p-8 lg:p-12 shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Availability Info */}
          <div className="space-y-4">
            <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-800 mb-6">
              <Clock size={24} />
            </div>
            <h4 className="text-xl font-bold uppercase tracking-tight">Market Timing</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              Bullion rates fluctuate according to the MCX & International market. 
              Our desk is active from **10:30 AM to 7:30 PM**. Prices are confirmed only at the time of booking.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="w-12 h-12 bg-[#AA771C]/10 rounded-2xl flex items-center justify-center text-[#AA771C] mb-6">
              <PhoneCall size={24} />
            </div>
            <h4 className="text-xl font-bold uppercase tracking-tight">Direct Booking</h4>
            <p className="text-slate-800 font-black text-lg">+91 9075516373 , +91 9975796681</p>
            <p className="text-slate-500 text-sm">Call us for bulk inquiries, live spot rates, and vault collection details.</p>
          </div>

          {/* Lab Verification */}
          <div className="space-y-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700 mb-6">
              <MapPin size={24} />
            </div>
            <h4 className="text-xl font-bold uppercase tracking-tight">Lab Visit</h4>
            <p className="text-slate-500 text-sm">
              Visit Gurukrupa Gold Testing Lab to verify your purchase using our advanced XRF & Fire Assay methods.
            </p>
          </div>

        </div>
      </div>

      {/* WhatsApp Float */}
      <div className="fixed bottom-8 right-8 z-[500]">
        <button 
          onClick={() => window.open('https://wa.me/91XXXXXXXXXX', '_blank')}
          className="bg-[#25D366] text-white p-4 rounded-2xl shadow-2xl hover:scale-110 transition-transform flex items-center gap-3 border-4 border-white"
        >
          <MessageCircle size={28} />
          <div className="hidden md:block text-left">
            <p className="text-[10px] uppercase font-bold opacity-80 leading-none">WhatsApp</p>
            <p className="text-xs font-black uppercase tracking-widest">Bullion Desk</p>
          </div>
        </button>
      </div>
    </div>
  );
}