import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import TestimonialSkeleton from "./TestimonialSkeleton";

const Testimonials = () => {
  const [loading, setLoading] = useState(true);
  const testimonials = [
    {
      comment:
        "صراحة مبدع وطريقة التعامل مع حضرتك ممتازة وبلنسبة الي انت من افضل الناس الي اشتغلت معهم 💥😍",
      image:
        "https://scontent.fgza2-5.fna.fbcdn.net/v/t39.30808-1/441457721_3491211741168807_4487452360928519782_n.jpg?stp=dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=msEZaccc_awQ7kNvgFOoirL&_nc_ht=scontent.fgza2-5.fna&oh=00_AYARDRe16pPznFAOfnQuip6q79XtYOarDveMuBullKaCZw&oe=66D80A80",
      name: "Mohamed EH Mhana",
      role: "UI/UX designer",
      source:
        "https://www.facebook.com/groups/arabic.frontend/posts/3754724768116727/?comment_id=3755287024727168", // Example link
    },
    {
      comment:
        "بجد دي الناس اللي تشرف والله وسط كل اللي بيمروا بيه و لسه مكمل و راجل ماشي ورا حلمه اتمني الكل يأخذ العبره من القصص اللي زي دي وانا فخور و بكون مبسوط ان في شخص بيحاول تسلم يا صديقي و زي ما قولت ان الله لايضيع عمل عاملا منكم ",
      image:
        "https://scontent.fgza2-5.fna.fbcdn.net/v/t39.30808-1/343948843_782887123430284_6647820097729808240_n.jpg?stp=dst-jpg_s100x100&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=uvcfI_ITbNYQ7kNvgFsFX6u&_nc_ht=scontent.fgza2-5.fna&_nc_gid=AdkoK-BAnX8DT2CEdFLoZtP&oh=00_AYCT_2nr26LAmUM7gJhm582HYzRXYMxpHH134ze47hP37Q&oe=66D7FB43",
      name: "Ahmed Mahmoud Al-Sheikh",
      role: "Front-End developer",
      source:
        "https://www.facebook.com/groups/arabic.frontend/posts/3754724768116727/?comment_id=3755287024727168", // Example link
    },
    {
      comment:
        "العزيمة والاصرار تجسدة فيك .. ماشاء الله فعلا لو استمريت بنفس هي العقلية (عقلية المحارب الي ما يستسلمش) راح توصل وتنجح في هذا المجال وتتميز فيه عن غيرك، ربي يوفقك يابطل وشكرا على مشاركتك هي التجربة معانا، البوست محفز للكثير من الناس الي تستسلم في اول عقبة بيواجهوها ويبحثون عن الاعذار!",
      image:
        "https://scontent.fgza2-5.fna.fbcdn.net/v/t39.30808-1/408926551_246175638553096_5696493256136409832_n.jpg?stp=c0.149.1131.1131a_dst-jpg_s100x100&_nc_cat=107&ccb=1-7&_nc_sid=50d2ac&_nc_ohc=MDlUKrTVGMUQ7kNvgHwR798&_nc_ht=scontent.fgza2-5.fna&oh=00_AYAec4_msht6smY14WwzXJD80-9fQMWLxGF0MOzbktqHsg&oe=66D7F825",
      name: "Soufiane Amama",
      role: "FullStack Developer",
      source:
        "https://www.facebook.com/groups/arabic.frontend/posts/3754724768116727/?comment_id=3754835551438982",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading time
  }, []);

  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
      className="mt-4 bg-background"
    >
      <div className="mx-auto max-w-screen-xl text-center">
        <div className="mx-auto max-w-screen-sm">
          <h2
            className="mb-4 mt-4 text-2xl text-primary font-extrabold"
            id="Testimonials"
          >
            Testimonials
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-1">
          {loading
            ? testimonials.map((_, index) => (
                <>
                  <TestimonialSkeleton key={index} />
                </>
              ))
            : testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  comment={testimonial.comment}
                  image={testimonial.image}
                  role={testimonial.role}
                  name={testimonial.name}
                  source={testimonial.source}
                />
              ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
