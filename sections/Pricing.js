const Pricing = () => {
  return (
    <div className="w-full py-10">
      <div className="relative flex flex-col w-3/4 mx-auto space-y-5">
        <div className="flex flex-col items-center">
          <h6 className="font-bold text-center text-blue-600 uppercase">
            Pricing
          </h6>
          <h2 className="text-4xl font-bold text-center">
            <span className="block">
              The right pricing for you, whoever you are
            </span>
          </h2>
          <p className="text-center text-gray-600">
            It features multiple CSS components based on the Tailwind CSS design
            system
          </p>
        </div>
        <div className="flex flex-row p-10 space-x-5 bg-gray-200 rounded-lg">
          <div className="flex flex-col items-start w-1/2 overflow-hidden bg-white border rounded-lg">
            <div className="w-full p-10 space-y-5">
              <span className="px-5 py-1 text-sm text-blue-600 uppercase bg-blue-100 rounded-full">
                Hobby
              </span>
              <h2 className="space-x-2 text-6xl">
                <span className="font-extrabold">Free</span>
                <small className="text-lg text-gray-400">for life!</small>
              </h2>
            </div>
            <div className="flex flex-col w-full h-full p-10 space-y-5 bg-gray-100 border-t">
              <a
                className="px-10 py-3 text-lg text-center text-blue-600 bg-white rounded shadow hover:bg-blue-50"
                href="#!"
              >
                Get Started with Hobby
              </a>
              <div className="space-y-5">
                <h6 className="uppercase">What&apos;s Included</h6>
                <ul className="leading-10 list-disc list-inside">
                  <li>Fast Page Loading</li>
                  <li>Automatic Friendly URLs</li>
                  <li>Custom Themes</li>
                  <li>SEO</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start w-1/2 overflow-hidden bg-white border rounded-lg">
            <div className="w-full p-10 space-y-5">
              <span className="px-5 py-1 text-sm text-blue-600 uppercase bg-blue-100 rounded-full">
                Premium
              </span>
              <h2 className="space-x-2 text-6xl">
                <span className="font-extrabold">$9</span>
                <small className="text-lg text-gray-400">per month</small>
              </h2>
            </div>
            <div className="flex flex-col w-full h-full p-10 space-y-5 bg-gray-100 border-t">
              <a
                className="px-10 py-3 text-lg text-center text-blue-600 bg-white rounded shadow hover:bg-blue-50"
                href="#!"
              >
                Get Started with Premium
              </a>
              <div className="space-y-5">
                <h6 className="uppercase">What&apos;s Included</h6>
                <ul className="leading-10 list-disc list-inside">
                  <li>Everything in Hobby</li>
                  <li>Custom Domain Name</li>
                  <li>Analytics</li>
                  <li>Publishing Status</li>
                  <li>Custom Favicon</li>
                  <li>Custom Meta Tags</li>
                  <li>Live Site Preview</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
