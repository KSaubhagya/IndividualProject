import React from "react";
import { BlogGrid, BlogCard } from "../styles/ModulesBlogsPageStyles";
import CardOne from "../assests/images1.jpeg";
import CardTwo from "../assests/img2.PNG";
import CardThree from "../assests/img3.png";

const UpcomingBlogStd = () => {
  return (
    <BlogGrid>
      <BlogCard>
        <img src={CardOne} />
        <h4>Upcoming</h4>
        <p>
          Routines don’t have to be boring — they can give your day structure
          and reduce stress
        </p>
        <h3>A Routine That Works</h3>
        <small>Sandesha Gunh</small>
      </BlogCard>

      <BlogCard>
        <img src={CardTwo} />
        <h4>Upcoming</h4>
        <p>
          Staying focused can feel tricky with ADHD, but small changes can make
          studying easier
        </p>
        <h3>Study Hacks for Better Focus</h3>
        <small>Sryandini Kahar Faisal</small>
      </BlogCard>

      <BlogCard>
        <img src={CardThree} />
        <h4>Upcoming</h4>
        <p>
          ADHD brains are curious, but that also means distractions sneak in
          easily. Here’s how to take control
        </p>
        <h3>Managing Distractions in Daily Life</h3>
        <small>Helen Kart</small>
      </BlogCard>
    </BlogGrid>
  );
};
export default UpcomingBlogStd;
