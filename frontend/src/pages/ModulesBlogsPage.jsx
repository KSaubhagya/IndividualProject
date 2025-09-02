import { useState } from "react";
import {
  Container,
  Section,
  SectionTitle,
  SectionSubtitle,
  ModuleGrid,
  BottomCtaBar,
  PillButton,
} from "../styles/ModulesBlogsPageStyles";
import BlogListSection from "../components/BlogListSection";
import UpcomingBlogStd from "../components/UpcomingBlogStd";
import UpcomingBlogTch from "../components/UpcomingBlogTch";
import PomPom from "../components/PomPom";

const ModulesBlogsPage = () => {
  const [activeTab, setActiveTab] = useState("student");

  return (
    <Container>
      <PomPom />

      <Section>
        <SectionTitle>Awareness Modules</SectionTitle>
        <SectionSubtitle>
          These modules are designed to raise awareness of neurodiversity across
          the whole population.
        </SectionSubtitle>
        <ModuleGrid>
          <BlogListSection showAdminControls={false} />
        </ModuleGrid>
      </Section>

      <Section>
        <SectionTitle>New Blogs from us!</SectionTitle>
        <SectionSubtitle>
          These blogs share experiences and tips designed to raise awareness of
          neurodiversity and ADHD.
        </SectionSubtitle>

        {activeTab === "student" && <UpcomingBlogStd />}
        {activeTab === "teacher" && <UpcomingBlogTch />}

        <BottomCtaBar>
          <PillButton onClick={() => setActiveTab("student")}>
            I'm a Student
          </PillButton>
          <PillButton onClick={() => setActiveTab("teacher")}>
            I'm a Teacher
          </PillButton>
        </BottomCtaBar>
      </Section>
    </Container>
  );
};

export default ModulesBlogsPage;
