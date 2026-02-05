import { useEffect } from "react";

const GoogleReview = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const addedScript = document.querySelector(`script[src="${script.src}"]`);
      if (addedScript) document.body.removeChild(addedScript);
    };
  }, []);

  return (
    <div className="w-full py-8 px-2 sm:px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6 md:p-8">
        <div
          className="elfsight-app-14f0fe9c-a595-4e7b-9a8d-4a111ff89340 w-full"
          data-elfsight-app-lazy
        />
      </div>
    </div>
  );
};

export default GoogleReview;
