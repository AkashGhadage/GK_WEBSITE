const JewelleryRepair = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Image Section - Place your image here */}
        <div className="mb-12">
          <img 
            src="/jewellery-repair.jpg" 
            alt="Jewellery Repairing Hero" 
            className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-2xl"
          />
        </div>

        <header className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Jewellery Repairing
          </h1>
          <div className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto space-y-4">
            <p>At Nagesh Touch Lab, we provide professional Jewellery Repairing Services designed to restore the beauty, strength, and value of your precious items. From fixing broken chains and resizing rings to polishing, stone replacement, and detailed restorations, our skilled experts handle every piece with precision and care. Whether you are an individual looking to revive your favourite jewellery or a business seeking reliable repair support, our team ensures fast, trusted, and high-quality service at every step.[file:1]</p>
          </div>
        </header>

        {/* What is Jewellery Repairing */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">What is Jewellery Repairing?</h2>
          <div className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed">
            <p>Jewellery repairing involves restoring damaged, broken, or worn-out jewellery pieces to their original beauty and strength. From fixing clasps and resizing rings to polishing, soldering, and stone replacement, professional repair ensures your precious items remain safe, durable, and visually appealing. It helps maintain the sentimental and financial value of your jewellery while extending its lifespan.[file:1][page:0]</p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20 bg-gray-50 rounded-3xl p-12">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">Why Choose Our Jewellery Repairing Service?</h3>
          <div className="grid md:grid-cols-2 gap-12 text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            <div>
              <p className="mb-6 font-semibold text-2xl">Our experienced technicians handle each piece with precision and care, ensuring every repair is performed with expert workmanship.[file:1]</p>
              <p className="mb-6">We treat your jewellery with utmost responsibility, using professional tools and techniques to protect its structural integrity and shine.[file:1]</p>
              <p className="mb-6">We offer fast turnaround times without compromising on quality, so you can have your favourite jewellery pieces back sooner.[file:1]</p>
            </div>
            <div>
              <p className="mb-6">From ring resizing and chain soldering to stone fixing and polishing, we provide complete repair solutions for all kinds of jewellery.[file:1]</p>
              <p className="mb-6">We assess the repair needs clearly, explain the process, and provide upfront pricing so you always know exactly what to expect.[file:1]</p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <p className="text-2xl md:text-3xl font-semibold text-gray-800 max-w-2xl mx-auto">
              Our Jewellery Repairing Service delivers trusted, high-quality restoration that brings your precious items back to life. With expert craftsmanship, modern tools, and complete transparency, we ensure every piece is repaired with precision and care. At Nagesh Touch Lab, your jewellery is in safe, skilled hands—restored beautifully and built to last.[file:1][page:0]
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">FAQs</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Gold assay testing is the process of analyzing gold to determine its purity and content. It helps verify the exact karat and value of a gold item.[file:1]</h4>
              <p className="text-xl text-gray-700">Assay testing provides accurate information about your gold's purity. It ensures transparency in buying, selling, or exchanging gold, protecting you from fraud or undervaluation.[file:1][page:0]</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Gold purity is typically measured in karats or percentage. We use advanced techniques like XRF (X-Ray Fluorescence) testing and fire assay (if applicable) for precise results.[file:1]</h4>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Most tests take just 5–15 minutes, depending on the item and method used. We aim to provide quick, accurate results while you wait.[file:1]</h4>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Walk-ins are welcome, but we recommend booking an appointment for faster service—especially during peak hours.[file:1]</h4>
              <p className="text-xl text-gray-700">We are located at [Insert Address]. You can also call us at [Insert Phone Number] or WhatsApp for directions and service queries.[file:1]</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Our services are priced affordably, starting from just ₹[Insert price]. We offer transparent pricing with no hidden charges.[file:1]</h4>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Yes, we provide detailed assay reports or certificates showing the karat, purity percentage, and weight of your gold.[file:1]</h4>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default JewelleryRepair;
