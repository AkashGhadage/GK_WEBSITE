import { useState } from 'react';

const MetalTesting = () => {
  const [openItems, setOpenItems] = useState([1]);

  const toggleItem = (index) => {
    setOpenItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [index]
    );
  };

  const whyChooseItems = [
    {
      id: 1,
      title: 'Precision and Accuracy',
      content:
        'Our commitment to accuracy ensures that you receive reliable results that meet industry standards and regulatory requirements.',
    },
    {
      id: 2,
      title: 'Customized Solutions',
      content:
        'We tailor our metal testing services to suit your specific needs, providing insights and recommendations to support your unique requirements.',
    },
    {
      id: 3,
      title: 'Timely Results',
      content:
        'We understand the urgency of your testing needs. Our streamlined processes enable us to deliver results promptly without compromising on quality.',
    },
    {
      id: 4,
      title: 'Industry Expertise',
      content:
        'With years of experience in metal testing and metallurgy, our team possesses the knowledge and skills needed to handle diverse projects and industries.',
    },
    {
      id: 5,
      title: 'Confidentiality and Data Security',
      content:
        'We prioritize the confidentiality of your samples and testing data, providing a secure environment throughout the entire testing process.',
    },
    {
      id: 6,
      title: 'Certified Testing Standards',
      content:
        'Our procedures follow nationally and internationally recognized standards, giving you lab-tested results that meet quality assurance and industry benchmarks.',
    },
  ];

  return (
    <main className="pt-16 overflow-x-hidden bg-white">
      <div>
        {/* Breadcrumb */}
        <nav className="text-sm hidden md:block max-w-[1000px] mx-auto my-2 py-8 px-3">
          <ol className="flex gap-2">
            <li>
              <a className="text-gray-600 hover:text-red-500 hover:underline" href="/">
                Home
              </a>
            </li>
            <li className="flex items-center">
              <span className="text-gray-600">/</span>
              <a
                className="text-gray-600 capitalize hover:text-red-500 hover:underline px-1"
                href="/services"
              >
                services
              </a>
            </li>
            <li className="flex items-center">
              <span className="text-gray-600">/</span>
              <span className="font-semibold text-gray-800 capitalize px-1">
                metal-testing
              </span>
            </li>
          </ol>
        </nav>

        <div className="py-8 px-3">
          {/* Hero Banner */}
          <div className="banner max-w-[1000px] mx-auto md:h-[350px] mb-8">
            <img
              alt="Metal Test"
              className="w-full h-full rounded-2xl object-cover shadow-2xl"
              src="/about.jpg"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="space-y-5 max-w-[1000px] mx-auto px-3 mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Metal Test
            </h1>

            <p className="text-justify text-gray-700 leading-relaxed text-lg max-w-3xl">
              At Nagesh Touch Lab, we understand the importance of accurate and reliable metal testing. As a trusted metal testing lab in Kalyan, we invest in cutting-edge technology and equipment to ensure the highest level of precision and efficiency in our services.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              What is Metal Test?
            </h2>

            <p className="text-justify text-gray-700 leading-relaxed text-lg max-w-3xl">
              Metal testing in jewellery is the process of checking whether a piece is made of real gold, silver, platinum, or other metals and determining its purity.
            </p>
          </div>

          {/* Why Choose Section */}
          <div className="max-w-[1000px] mx-auto px-3 py-12">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Left - Accordion */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                  Why Choose Our Metal Test Service?
                </h3>

                <div className="space-y-3">
                  {whyChooseItems.map((item) => (
                    <div
                      key={item.id}
                      className="border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-all"
                    >
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full flex justify-between items-center px-5 py-4 text-left"
                      >
                        <span className="text-[16px] font-medium text-gray-800">
                          {item.id}. {item.title}
                        </span>

                        <svg
                          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                            openItems.includes(item.id)
                              ? 'rotate-180'
                              : 'rotate-90'
                          }`}
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                        >
                          <path d="M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z" />
                        </svg>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-500 px-5 ${
                          openItems.includes(item.id)
                            ? 'max-h-40 pb-4 opacity-100'
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Image */}
              <div className="h-[60vh] md:h-[70vh]">
                <img
                  alt="Metal Test Equipment"
                  className="w-full h-full rounded-2xl object-cover shadow-2xl"
                  src="/gold-hero.jpg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="max-w-[1000px] mx-auto px-3 py-12">
            <p className="text-justify text-gray-700 leading-relaxed text-lg bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow">
              At Nagesh Touch Lab, we are dedicated to providing reliable, accurate, and efficient material analysis services. Contact us today to learn more about our Metal Testing Services.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MetalTesting;
