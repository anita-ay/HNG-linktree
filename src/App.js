import "./App.css";
import Profile from "./Profile";
import Product from "./Product";
import { Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import Form from "./Form";
const items = [
  {
    href: "https://training.zuri.team/",
    id: "btn__zuri",
    content: "Zuri Team",
    desc: "",
  },
  {
    href: "https://books.zuri.team/",
    id: "books",
    content: "Zuri books",
    desc: "Looking from books about coding and design?- Visit Zuri Books.",
  },
  {
    href: "https://books.zuri.team/python-for-beginners?ref_id=Ayomide-Ajala",
    id: "book__python",
    content: "Python Books",
    desc: "",
  },
  {
    href: "https://background.zuri.team",
    id: "pitch",
    content: "Run a quick background check to know who you are working with.",
    desc: "",
  },
  {
    href: "https://books.zuri.team/design-rules",
    id: "book__design",
    content: "Design Books",
    desc: "",
  },
];
function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Profile />
          {items.map(({ href, id, content, desc }) => {
            return (
              <Product href={href} id={id} content={content} desc={desc} />
            );
          })}
          <Contact />
        </Route>
        <Route path="/contact">
          <Form />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
