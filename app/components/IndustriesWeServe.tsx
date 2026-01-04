"use client";

type Industry = {
  title: string;
  description: string;
};

export default function IndustriesWeServe() {
 

  const industries: Industry[] = [
    {
      title: "Construction & Infrastructure",
      description: "Handpicked homes, villas, and unique retreats worldwide.",
    },
    {
      title: "Oil and Gas",
      description: "Rated for exceptional stays and hassle-free bookings.",
    },
    {
      title: "Government & Public Sector",
      description:
        "From bustling cities to hidden gems—find your perfect escape.",
    },
    {
      title: "Manufacturing & Industrial",
      description: "Handpicked homes, villas, and unique retreats worldwide.",
    },
    {
      title: "Utilities & Power Plants",
      description: "Rated for exceptional stays and hassle-free bookings.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-container mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            Industries We Serve
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Our outsourced Primavera scheduling services support clients across
            various sectors
          </p>
        </div>

        {/* Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10">
            {industries.map((item, index) => (
              <div key={index} className="text-center px-6 relative">
                {/* ICON PLACEHOLDER */}
                <div className="mb-6 flex justify-center">
                  <div className="w-14 h-14 text-blue-600">{icons[index]}</div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Vertical Divider (Desktop only) */}
                {index !== 2 && index !== 4 && (
                  <div className="hidden lg:block absolute top-0 right-0 h-full border-r border-dashed border-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
 const icons = [
   <svg key="icon-1" xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
  <path d="M17 62.3334V11.3334C17 9.83052 17.597 8.38918 18.6597 7.32648C19.7224 6.26377 21.1638 5.66675 22.6667 5.66675H45.3333C46.8362 5.66675 48.2776 6.26377 49.3403 7.32648C50.403 8.38918 51 9.83052 51 11.3334V62.3334H17Z" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17.0001 34H11.3334C9.83052 34 8.38918 34.597 7.32648 35.6597C6.26377 36.7224 5.66675 38.1638 5.66675 39.6667V56.6667C5.66675 58.1696 6.26377 59.6109 7.32648 60.6736C8.38918 61.7363 9.83052 62.3333 11.3334 62.3333H17.0001" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M51 25.5H56.6667C58.1696 25.5 59.6109 26.097 60.6736 27.1597C61.7363 28.2224 62.3333 29.6638 62.3333 31.1667V56.6667C62.3333 58.1696 61.7363 59.6109 60.6736 60.6736C59.6109 61.7363 58.1696 62.3333 56.6667 62.3333H51" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M28.3333 17H39.6666" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M28.3333 28.3333H39.6666" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M28.3333 39.6667H39.6666" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M28.3333 51H39.6666" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>,
  <svg 
  key="icon-2" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
  <path d="M28.3334 48.3333C30.5436 48.3333 32.6632 47.4554 34.226 45.8926C35.7888 44.3298 36.6667 42.2101 36.6667 40C36.6667 35.4 35.0001 33.3333 33.3334 30C29.7601 22.8567 32.5867 16.4867 40.0001 10C41.6667 18.3333 46.6667 26.3333 53.3334 31.6667C60.0001 37 63.3334 43.3333 63.3334 50C63.3334 53.0642 62.7299 56.0983 61.5573 58.9293C60.3847 61.7602 58.6659 64.3325 56.4992 66.4992C54.3325 68.6659 51.7603 70.3846 48.9294 71.5572C46.0984 72.7298 43.0643 73.3333 40.0001 73.3333C36.9359 73.3333 33.9017 72.7298 31.0708 71.5572C28.2399 70.3846 25.6676 68.6659 23.5009 66.4992C21.3342 64.3325 19.6155 61.7602 18.4429 58.9293C17.2703 56.0983 16.6667 53.0642 16.6667 50C16.6667 46.1567 18.1101 42.3533 20.0001 40C20.0001 42.2101 20.8781 44.3298 22.4409 45.8926C24.0037 47.4554 26.1233 48.3333 28.3334 48.3333Z" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>,
<svg key="icon-3" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
  <path d="M33.3335 60.0001V36.6667" stroke="#1A56DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M37.0665 7.32655C37.9812 6.88225 38.9853 6.65307 40.0022 6.65653C41.019 6.66 42.0216 6.89603 42.9332 7.34655L69.1532 20.1699C70.7399 20.9466 70.1865 23.3332 68.4199 23.3332H11.5799C9.81319 23.3332 9.26319 20.9466 10.8465 20.1699L37.0665 7.32655Z" stroke="#1A56DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M46.6665 60.0001V36.6667" stroke="#1A56DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M60 60.0001V36.6667" stroke="#1A56DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 73.3333H70" stroke="#1A56DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20 60.0001V36.6667" stroke="#1A56DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>,
   <svg key="icon-4" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
  <path d="M40 53.3333H40.0333" stroke="#1A56DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M53.3333 53.3333H53.3666" stroke="#1A56DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 63.3333C10 65.1014 10.7024 66.7971 11.9526 68.0474C13.2029 69.2976 14.8986 70 16.6667 70H63.3333C65.1014 70 66.7971 69.2976 68.0474 68.0474C69.2976 66.7971 70 65.1014 70 63.3333V28.3333C70.0003 28.0343 69.9202 27.7408 69.768 27.4834C69.6159 27.226 69.3973 27.0143 69.1351 26.8705C68.873 26.7266 68.577 26.6559 68.2782 26.6658C67.9794 26.6757 67.6887 26.7658 67.4367 26.9267L52.5633 36.4067C52.3113 36.5675 52.0206 36.6576 51.7218 36.6675C51.423 36.6774 51.127 36.6067 50.8649 36.4629C50.6027 36.319 50.3841 36.1073 50.232 35.8499C50.0798 35.5926 49.9997 35.299 50 35V28.3333C50.0003 28.0343 49.9202 27.7408 49.768 27.4834C49.6159 27.226 49.3973 27.0143 49.1351 26.8705C48.873 26.7266 48.577 26.6559 48.2782 26.6658C47.9794 26.6757 47.6887 26.7658 47.4367 26.9267L32.5667 36.4067C32.3146 36.5684 32.0236 36.6592 31.7242 36.6696C31.4249 36.6799 31.1283 36.6094 30.8656 36.4655C30.603 36.3215 30.384 36.1094 30.2317 35.8516C30.0793 35.5937 29.9993 35.2995 30 35V16.6667C30 14.8986 29.2976 13.2029 28.0474 11.9526C26.7971 10.7024 25.1014 10 23.3333 10H16.6667C14.8986 10 13.2029 10.7024 11.9526 11.9526C10.7024 13.2029 10 14.8986 10 16.6667V63.3333Z" stroke="#1A56DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M26.6667 53.3333H26.7001" stroke="#1A56DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>,
   <svg key="icon-5" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
  <path d="M50 46.6667C50.6667 43.3334 52.3333 41.0001 55 38.3334C58.3333 35.3334 60 31.0001 60 26.6667C60 21.3624 57.8929 16.2753 54.1421 12.5246C50.3914 8.77388 45.3043 6.66675 40 6.66675C34.6957 6.66675 29.6086 8.77388 25.8579 12.5246C22.1071 16.2753 20 21.3624 20 26.6667C20 30.0001 20.6667 34.0001 25 38.3334C27.3333 40.6667 29.3333 43.3334 30 46.6667" stroke="#1A56DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M30 60H50" stroke="#1A56DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M33.3333 73.3333H46.6666" stroke="#1A56DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>,
  ];