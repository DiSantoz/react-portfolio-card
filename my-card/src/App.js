import "./App.css";
import me from "./disantoz.png";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

// contains image
function Avatar() {
  return <img className="avatar" src={me} alt=" DiSantoz" />;
}

// short introduction
function Intro() {
  return (
    <div>
      <h1>DiSantoz</h1>
      <p>
        Full-stack web developer with experience in JavaScript and MERN stack. I
        love constanly learning about the world development. When I'm not coding
        I enjoy playing video games, going out with friends and reading. Let's
        connect!
      </p>
    </div>
  );
}

// displays list of skills
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="🤯" color="cyan" />
      <Skill skill="JavaScript" emoji="🤩" color="yellow" />
      <Skill skill="HTML & CSS" emoji="😌" color="orange" />
      <Skill skill="NodeJS" emoji="😎" color="green" />
    </div>
  );
}

// list your skill set
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

export default App;
