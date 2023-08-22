import React, { useState } from "react";
import Union from "../../assets/Union.svg";

const FAQs = () => {
  const faqsData = [
    { sl: "01", question: "How does Dview fit within my data stack?", answer: "Dview is a data intelligence platform that powers both ingestion and query computes." },
    { sl: "02", question: "Is it necessary to relocate or substitute my data?", answer: "Our platform auto detects the existing data and profile it. Then it understands the data attributes and behaviour and smartly ingests them from diverse sources, enabling you to query them according to your preferences." },
    { sl: "03", question: "Are modifications to my existing data pipelines required?", answer: "Unless you wish to consolidate your data pipelines into a unified destination for the purpose of enhancing your data consumer use cases, there is no requirement to modify the existing pipelines." },
    { sl: "04", question: "Is it necessary for me to change the BI/Reporting Tools/SQL IDEs that my teams currently utilize?", answer: "Dview offers seamless integration with a wide range of BI platforms such as Tableau, Power BI, Superset, Metabase, and more. Our query platform empowers these BI tools and automatically scales according to demand." },
    { sl: "05", question: "Is there a need for me to modify or redevelop my queries, reports, views or dashboards?", answer: "There is no need for any effort or migration when it comes to copying and pasting existing queries. It can be done effortlessly." },
    { sl: "06", question: "What is the approach of Dview in managing data governance rules?", answer: "Dview provides access control mechanisms and employs data encryption techniques to restrict the accessibility of personally identifiable information (PII) within an organization." },
    { sl: "07", question: "What is the deployment process for Dview like? Is it complex,\nand do I require DevOps expertise to deploy it?", answer: "To deploy our components, we require minimum details about your private cloud. Your team can effortlessly deploy the necessary data infrastructure using a no/low code approach." },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div>
      <div className="display__desktop">
        <div className="first">
          <div className="faqs">
            <div className="faqcontent">
              <h2 className="fheading">Frequently Asked Questions</h2>
              <div className="faqcontent">

                {faqsData.map((faq, index) => (
                  <div className="faq" key={index}>
                    <h4 className="sl">{faq.sl}</h4>
                    <div className="qna">
                      <div className="topelement cp"
                      onClick={() => handleToggle(index)}
                      >
                          <h5>{faq.question}</h5>{" "}
                       
                        <div
                          className={` ${
                            expandedIndex === index
                              ? "closebtn"
                              : "closebtn__closed"
                          }`}
                        >
                          <img src={Union} alt="" />
                        </div>
                      </div>
                      {expandedIndex === index && <p>{faq.answer}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="display__mobile">
        <div className="faq__mob">
          <h2>Frequently Asked Questions</h2>
          <div className="mob__faq__content">
            {faqsData.map((faq, index) => (
              <div className="mob__faq" key={index}>
                <div className="mob__top cp"
                onClick={() => handleToggle(index)}
                >
                  <div className="mob__q">
                    <h4>{faq.question}</h4>
                  </div>
                  <div
                    className={` ${
                      expandedIndex === index ? "closebtn" : "closebtn__closed"
                    }`}
                    
                  >
                    <img src={Union} alt="" />
                  </div>
                </div>
                {expandedIndex === index && <p>{faq.answer}</p>}
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
