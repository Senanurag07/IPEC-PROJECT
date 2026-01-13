import React from "react";
import HeroSection from "../components/HeroSectiondynamic";
import CertificationGallery from "../components/CertificationGallery";
import TrainingCourseCard from "../components/TrainingCourseCard";
import OtherTrainingCourses from "../components/OtherTrainingCourses";
import PrimaveraTrainingFAQ from "../components/PrimaveraTrainingFAQ";

function page() {
  return (
    <main>
      {/* HERO */}
      <HeroSection
        title="Training"
        subtitle="Your trusted Oracle Primavera support partner"
        bgImage="/assests/hero1.jpg"
      />

      {/* CONTENT SECTION */}
      <section className="mx-auto max-container bg-white py-12 md:py-16">
        <div className="space-y-6 text-base leading-relaxed text-gray-700">
          <p>
            Welcome to IPEC Project Systems Sdn Bhd, your trusted partner in
            effective project controls processes and systems implementation. We
            understand the importance of training, user adoption, and change
            management in driving project performance and organizational
            success. That’s why we have developed comprehensive training
            programs designed to enhance the skills of your team members.
          </p>

          <p>
            Our Primavera courses are of the highest quality and delivered by
            industry-experienced consultants who hold specialized implementation
            certification in Oracle Primavera P6 EPPM. These courses are
            accredited by AACE International and are eligible for the SBL Khas
            scheme through the Human Resource Development Fund (HRDF). As a
            registered training provider with HRDF, we ensure compliance with
            all HRDF requirements.
          </p>

          <p>
            At IPEC, we offer a range of Primavera courses tailored to meet your
            specific needs. Our standard and customized training programs cover
            Primavera P6, Primavera Risk Analysis, and Primavera Contract
            Management. In addition, we provide specialized training for
            shutdown, turnaround, and operational projects, addressing the
            unique challenges of these areas.
          </p>

          <p>
            We also offer exam preparation courses for AACE CCP and AACE PSP,
            enabling individuals to attain these prestigious certifications.
          </p>

          <p>
            When you choose IPEC, you can be confident in receiving top-notch
            training delivered by experienced consultants, accredited by AACE
            International, and with the added benefit of being able to claim
            your training investment from HRDF. Join us on this journey to
            elevate your project management capabilities and achieve exceptional
            project outcomes.
          </p>

          <p className="font-medium text-gray-900">
            Contact us today to learn more about our Primavera training programs
            and how we can support your organization.
          </p>
        </div>
        <div className="py-4">
          <CertificationGallery
            logos={[
              "/assests/traininglogo1.png",
              "/assests/traininglogo.jpg",
              "/assests/traininglogo2.png",
            ]}
            images={[
              "/assests/gallery.png",
              "/assests/gallery.png",
              "/assests/gallery.png",
              "/assests/gallery.png",
              "/assests/gallery.png",
            ]}
          />
        </div>{" "}
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <TrainingCourseCard
            image="/assests/hero1.jpg"
            tag="Popular"
            duration="3 Days"
            level="Beginner"
            title="Primavera P6 Professional Fundamentals"
            description="Learn the fundamentals of Primavera P6 Professional, including project setup, scheduling, resource management, and reporting."
          />
          <TrainingCourseCard
            image="/assests/hero1.jpg"
            duration="2 Days"
            level="Intermediate"
            title="Primavera P6 Advanced Scheduling Techniques"
            description="Enhance your scheduling skills with advanced techniques such as critical path analysis, resource leveling, and schedule optimization."
          />
          <TrainingCourseCard
            image="/assests/hero1.jpg"
            duration="2 Days"
            level="Intermediate"
            title="Primavera P6 Advanced Scheduling Techniques"
            description="Enhance your scheduling skills with advanced techniques such as critical path analysis, resource leveling, and schedule optimization."
          />{" "}
          <TrainingCourseCard
            image="/assests/hero1.jpg"
            duration="2 Days"
            level="Intermediate"
            title="Primavera P6 Advanced Scheduling Techniques"
            description="Enhance your scheduling skills with advanced techniques such as critical path analysis, resource leveling, and schedule optimization."
          />{" "}
          <TrainingCourseCard
            image="/assests/hero1.jpg"
            duration="2 Days"
            level="Intermediate"
            title="Primavera P6 Advanced Scheduling Techniques"
            description="Enhance your scheduling skills with advanced techniques such as critical path analysis, resource leveling, and schedule optimization."
          />{" "}
          <TrainingCourseCard
            image="/assests/hero1.jpg"
            duration="2 Days"
            level="Intermediate"
            title="Primavera P6 Advanced Scheduling Techniques"
            description="Enhance your scheduling skills with advanced techniques such as critical path analysis, resource leveling, and schedule optimization."
          />{" "}
          <TrainingCourseCard
            image="/assests/hero1.jpg"
            duration="2 Days"
            level="Intermediate"
            title="Primavera P6 Advanced Scheduling Techniques"
            description="Enhance your scheduling skills with advanced techniques such as critical path analysis, resource leveling, and schedule optimization."
          />{" "}
          <TrainingCourseCard
            image="/assests/hero1.jpg"
            duration="2 Days"
            level="Intermediate"
            title="Primavera P6 Advanced Scheduling Techniques"
            description="Enhance your scheduling skills with advanced techniques such as critical path analysis, resource leveling, and schedule optimization."
          />
        </div>
    <OtherTrainingCourses />
    <PrimaveraTrainingFAQ />
      </section>
    </main>
  );
}

export default page;

