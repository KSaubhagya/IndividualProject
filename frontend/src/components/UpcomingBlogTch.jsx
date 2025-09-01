import React from "react";
import { BlogGrid, BlogCard } from "../styles/ModulesBlogsPageStyles";
import CardOne from "../assests/img4.png";
import CardTwo from "../assests/img5.jpg";
import CardThree from "../assests/img6.png";

const UpcomingBlogTch = () => {
  return (
    <BlogGrid>
      <BlogCard>
        <img src={CardOne} />
        <h4>Upcoming</h4>
        <p>
          Small teaching adjustments can help ADHD students feel included and
          succeed
        </p>
        <h3>Classroom Support Strategies</h3>
        <small>Sandesha Gunh</small>
      </BlogCard>

      <BlogCard>
        <img src={CardTwo} />
        <h4>Upcoming</h4>
        <p>
          ADHD students have unique strengths. Creativity, problem-solving,
          energy. Celebrate them!
        </p>
        <h3>Encouraging Strengths, Not Managing</h3>
        <small>Kahar Faisal</small>
      </BlogCard>

      <BlogCard>
        <img src={CardThree} />
        <h4>Upcoming</h4>
        <p>
          Positive communication builds trust and helps ADHD students feel
          understood
        </p>
        <h3>Communication Tips</h3>
        <small>Helen Kart</small>
      </BlogCard>
    </BlogGrid>
  );
};
export default UpcomingBlogTch;
