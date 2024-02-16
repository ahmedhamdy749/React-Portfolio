import { useState } from "react";
import "./main.css";
import {myProjects} from "./myProjects"
import { AnimatePresence, motion } from "framer-motion"



export default function Main() {
  const [CurrentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const HandleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);
    const newArr = myProjects.filter((item) => {
      const zzz = item.category.find((items) => {
        return items === buttonCategory;
      });
      return zzz === buttonCategory;
    });
    setArr(newArr);
  };

  return (
    <main className="flex ">
      <section className="flex left">
        <button
          onClick={() => {
            setCurrentActive("all");
            setArr(myProjects);
          }}
          className={CurrentActive === "all" ? "active" : null}
        >
          All Projects
        </button>

        <button
          onClick={() => {
            HandleClick("css");
          }}
          className={CurrentActive === "css" ? "active" : null}
        >
          HTML&CSS
        </button>
        <button
          onClick={() => {
            HandleClick("python");
          }}
          className={CurrentActive === "python" ? "active" : null}
        >
          python
        </button>
        <button
          onClick={() => {
            HandleClick("bootStrap");
          }}
          className={CurrentActive === "bootStrap" ? "active" : null}
        >
          bootStrap
        </button>
        <button
          onClick={() => {
            HandleClick("javaScript");
          }}
          className={CurrentActive === "javaScript" ? "active" : null}
        >
          javaScript
        </button>



      </section>
      <section className="flex right">
        <AnimatePresence>
        {arr.map((item) => {
          return (
            <motion.article 
            layout
            initial = {{transform:"scale(0)"}}
            animate = {{transform:"scale(1)"}}
            transition={{type:"spring",damping:8,stiffness:50}}



            
            key={item.imgPath} className="card">
              <img width={266} src={item.imgPath} alt="" />
              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="subtitle">
                  {" my projects in all applications well be like that "}
                </p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>
                  <a className="link flex" href={item.link}>
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
        </AnimatePresence>
      </section>
    </main>
  );
}
