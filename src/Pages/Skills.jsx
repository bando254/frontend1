import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-page">
      <h1 className="skills-title">Skills</h1>
      <p className="skills-subtitle">
        A national portfolio forum for<br />
        Freelancers & agencies.
      </p>

      <div className="intro-block">
        <p className="intro-line">Hello, I'm Bando.</p>
        <p className="intro-title">Filmmaker & Full-Stack Dev,</p>
        <p className="intro-question">How can I help you?</p>
      </div>

      <div className="code-snippet">
        <code>
          <pre>
<span className="keyword">const</span> skills = <span className="brace">&#123;</span>
  <br />&nbsp;&nbsp;<span className="prop">technical</span>: [
  <br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"React"</span>, 
  <span className="string">"Node.js"</span>, 
  <span className="string">"Express"</span>,
  <br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"MySQL"</span>, 
  <span className="string">"JavaScript"</span>, 
  <span className="string">"HTML/CSS"</span>
  <br />&nbsp;&nbsp;],
  <br />&nbsp;&nbsp;<span className="prop">creative</span>: [
  <br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Canva"</span>, 
  <span className="string">"Photography"</span>,
  <br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Video Editing"</span>
  <br />&nbsp;&nbsp;],
  <br /><span className="brace">&#125;</span>;
          </pre>
        </code>
      </div>

      <p className="signature">Hugo Brihlin</p>
    </div>
  );
};

export default Skills;