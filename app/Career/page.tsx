import React from 'react'
import HeroSection from '../components/HeroSectiondynamic'

function page() {
  return (
    <main>
      <HeroSection
      title='career '
      subtitle=''
      bgImage='/assests/about-us.jpeg'
      />
      <div className="w-full bg-white  py-2 sm:py-12 ">
  <div className="max-container mx-auto px-4 sm:px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">

      {/* LEFT CONTENT */}
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black leading-snug">
          Join IPEC Project Systems Sdn Bhd – a leading Primavera and project
          management solutions provider in Malaysia. Explore careers, growth,
          and freelance opportunities.
        </h2>
      </div>

      {/* RIGHT CONTENT */}
      <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">

        <p>
          At IPEC Project Systems Sdn Bhd, our people are our greatest asset. We
          believe that the strength of our company lies in the expertise,
          dedication, and innovation of our employees. Our success is built on
          their ability to consistently deliver high-quality project management
          solutions to our valued clients.
        </p>

        <p>
          We foster an open, collaborative, and inclusive culture where every
          individual is empowered to contribute ideas, take ownership, and grow
          professionally. At IPEC, employees are encouraged to challenge
          themselves, develop new skills, and explore exciting opportunities in
          the fields of project management, project controls, Primavera P6, risk
          management, and advanced project solutions.
        </p>

      </div>
    </div>
  </div>
  <div className="max-container py-20">

  <h2 className="text-center text-3xl md:text-4xl font-semibold mb-16">
    Why Join IPEC?
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-10 text-center">

    {/* ITEM 1 */}
    <div className="flex flex-col items-center px-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
  <path d="M17 62.3333V11.3333C17 9.8304 17.597 8.38906 18.6597 7.32635C19.7224 6.26365 21.1638 5.66663 22.6667 5.66663H45.3333C46.8362 5.66663 48.2776 6.26365 49.3403 7.32635C50.403 8.38906 51 9.8304 51 11.3333V62.3333H17Z" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.9993 34H11.3327C9.82979 34 8.38845 34.597 7.32574 35.6597C6.26304 36.7224 5.66602 38.1638 5.66602 39.6667V56.6667C5.66602 58.1696 6.26304 59.6109 7.32574 60.6736C8.38845 61.7363 9.82979 62.3333 11.3327 62.3333H16.9993" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M51 25.5H56.6667C58.1696 25.5 59.6109 26.097 60.6736 27.1597C61.7363 28.2224 62.3333 29.6638 62.3333 31.1667V56.6667C62.3333 58.1696 61.7363 59.6109 60.6736 60.6736C59.6109 61.7363 58.1696 62.3333 56.6667 62.3333H51" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M28.334 17H39.6673" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M28.334 28.3334H39.6673" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M28.334 39.6666H39.6673" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M28.334 51H39.6673" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      <h4 className="text-lg font-semibold mb-2">Employee-Centric Culture</h4>
      <p className="text-sm text-gray-600 max-w-xs">
        We respect individuality and create an environment where talent can flourish.
      </p>
    </div>

    {/* ITEM 2 */}
    <div className="flex flex-col items-center px-4 md:border-l md:border-dashed">
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
  <path d="M28.3327 48.3333C30.5428 48.3333 32.6624 47.4554 34.2252 45.8926C35.788 44.3298 36.666 42.2101 36.666 40C36.666 35.4 34.9993 33.3333 33.3327 30C29.7593 22.8567 32.586 16.4867 39.9994 10C41.666 18.3333 46.666 26.3333 53.3327 31.6667C59.9994 37 63.3327 43.3333 63.3327 50C63.3327 53.0642 62.7292 56.0983 61.5565 58.9293C60.3839 61.7602 58.6652 64.3325 56.4985 66.4992C54.3318 68.6659 51.7596 70.3846 48.9286 71.5572C46.0977 72.7298 43.0635 73.3333 39.9994 73.3333C36.9352 73.3333 33.901 72.7298 31.0701 71.5572C28.2391 70.3846 25.6669 68.6659 23.5002 66.4992C21.3335 64.3325 19.6148 61.7602 18.4422 58.9293C17.2695 56.0983 16.666 53.0642 16.666 50C16.666 46.1567 18.1093 42.3533 19.9993 40C19.9993 42.2101 20.8773 44.3298 22.4401 45.8926C24.0029 47.4554 26.1225 48.3333 28.3327 48.3333Z" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      <h4 className="text-lg font-semibold mb-2">Professional Growth</h4>
      <p className="text-sm text-gray-600 max-w-xs">
        Opportunities to expand expertise in cutting-edge project management systems.
      </p>
    </div>

    {/* ITEM 3 */}
    <div className="flex flex-col items-center px-4 md:border-l md:border-dashed">
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
  <path d="M33.334 60V36.6666" stroke="#1A56DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M37.067 7.32667C37.9817 6.88237 38.9858 6.65319 40.0027 6.65665C41.0195 6.66012 42.0221 6.89615 42.9337 7.34667L69.1537 20.17C70.7403 20.9467 70.187 23.3333 68.4203 23.3333H11.5803C9.81367 23.3333 9.26367 20.9467 10.847 20.17L37.067 7.32667Z" stroke="#1A56DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M46.666 60V36.6666" stroke="#1A56DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M60 60V36.6666" stroke="#1A56DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 73.3334H70" stroke="#1A56DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20 60V36.6666" stroke="#1A56DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      <h4 className="text-lg font-semibold mb-2">Challenging & Rewarding Work</h4>
      <p className="text-sm text-gray-600 max-w-xs">
        Be part of impactful projects that drive innovation and transformation.
      </p>
    </div>

    {/* BOTTOM CENTER ROW */}
    <div className="md:col-span-3 flex justify-center gap-16 pt-12 border-t border-dashed">

      {/* ITEM 4 */}
      <div className="flex flex-col items-center px-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
  <path d="M40 53.3334H40.0333" stroke="#1A56DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M53.334 53.3334H53.3673" stroke="#1A56DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 63.3333C10 65.1014 10.7024 66.7971 11.9526 68.0474C13.2029 69.2976 14.8986 70 16.6667 70H63.3333C65.1014 70 66.7971 69.2976 68.0474 68.0474C69.2976 66.7971 70 65.1014 70 63.3333V28.3333C70.0003 28.0343 69.9202 27.7408 69.768 27.4834C69.6159 27.226 69.3973 27.0143 69.1351 26.8705C68.873 26.7266 68.577 26.6559 68.2782 26.6658C67.9794 26.6757 67.6887 26.7658 67.4367 26.9267L52.5633 36.4067C52.3113 36.5675 52.0206 36.6576 51.7218 36.6675C51.423 36.6774 51.127 36.6067 50.8649 36.4629C50.6027 36.319 50.3841 36.1073 50.232 35.8499C50.0798 35.5926 49.9997 35.299 50 35V28.3333C50.0003 28.0343 49.9202 27.7408 49.768 27.4834C49.6159 27.226 49.3973 27.0143 49.1351 26.8705C48.873 26.7266 48.577 26.6559 48.2782 26.6658C47.9794 26.6757 47.6887 26.7658 47.4367 26.9267L32.5667 36.4067C32.3146 36.5684 32.0236 36.6592 31.7242 36.6696C31.4249 36.6799 31.1283 36.6094 30.8656 36.4655C30.603 36.3215 30.384 36.1094 30.2317 35.8516C30.0793 35.5937 29.9993 35.2995 30 35V16.6667C30 14.8986 29.2976 13.2029 28.0474 11.9526C26.7971 10.7024 25.1014 10 23.3333 10H16.6667C14.8986 10 13.2029 10.7024 11.9526 11.9526C10.7024 13.2029 10 14.8986 10 16.6667V63.3333Z" stroke="#1A56DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M26.666 53.3334H26.6993" stroke="#1A56DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        <h4 className="text-lg font-semibold mb-2">Diverse Opportunities</h4>
        <p className="text-sm text-gray-600 max-w-xs">
          Permanent roles, contract positions, and freelance consulting engagements available.
        </p>
      </div>

      {/* ITEM 5 */}
      <div className="flex flex-col items-center px-4">
<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
  <path d="M50 46.6666C50.6667 43.3333 52.3333 41 55 38.3333C58.3333 35.3333 60 31 60 26.6666C60 21.3623 57.8929 16.2752 54.1421 12.5245C50.3914 8.77376 45.3043 6.66663 40 6.66663C34.6957 6.66663 29.6086 8.77376 25.8579 12.5245C22.1071 16.2752 20 21.3623 20 26.6666C20 30 20.6667 34 25 38.3333C27.3333 40.6666 29.3333 43.3333 30 46.6666" stroke="#1A56DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M30 60H50" stroke="#1A56DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M33.334 73.3334H46.6673" stroke="#1A56DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        <h4 className="text-lg font-semibold mb-2">Equal Opportunity Employer</h4>
        <p className="text-sm text-gray-600 max-w-xs">
          We are committed to diversity, inclusion, and fair employment practices.
        </p>
      </div>

    </div>

  </div>
</div>

</div>
<div className="w-full mb-4 bg-white py-1">
  <div className="max-container ">

    {/* TOP SECTION */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">

      {/* IMAGE */}
      <div className="w-full">
        <div className="w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[460px] rounded-2xl overflow-hidden">
          <img
            src="/assests/careeimg.jpg"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
          Career Opportunities at IPEC
        </h2>

        <p className="text-gray-700 text-sm sm:text-base mb-4">
          We welcome applications from:
        </p>

        <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">

          <p>
            <span className="font-semibold text-black">
              Full-time employees –
            </span>{" "}
            Join our core team on permanent roles and grow with us.
          </p>

          <p>
            <span className="font-semibold text-black">
              Contract professionals –
            </span>{" "}
            Work with us on project-based engagements.
          </p>

          <p>
            <span className="font-semibold text-black">
              Freelance consultants –
            </span>{" "}
            Register with your skillset and we’ll connect you with projects that
            match your expertise.
          </p>

        </div>
      </div>
    </div>

    {/* HOW TO APPLY */}
    <div className="mt-14 bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-10">
      <h3 className="text-xl sm:text-2xl font-bold text-black mb-3">
        How to Apply ?
      </h3>

      <p className="text-gray-700 text-sm sm:text-base mb-2">
        If you’re passionate about Primavera P6, project management, and
        innovative project control solutions, we’d love to hear from you.
      </p>

      <p className="text-sm sm:text-base text-gray-700">
        Email your resume to:{" "}
        <span className="text-blue-600 font-medium cursor-pointer">
          sales@ipecsystems.com.my
        </span>
      </p>
    </div>

  </div>
</div>

    </main>
  )
}

export default page
