import React, { useContext, useEffect } from "react";
import Image from "../assets/Success/propic.png";
import BlogImage from "../assets/Blogs/Image.png";
import StateContext from "../context/StateContext";
import Phone from "../assets/Blogs/Rectangle.png";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { blogData } = useContext(StateContext);

  const { id } = useParams();
  const blog = blogData.find((blog) => blog.id === Number(id));
  console.log(blog);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="blog">
      <div className="display__desktop">
        <div className=" ch firstw">
          <div className="blog__top">
            <div className="blog__heading__component">
              <h1>
                Looking to manage your
                <br />
                data more efficiently
              </h1>
              <p>
                The data pipeline divides each data stream into smaller chunks
                that it processes in parallel, conferring extra computing power.
              </p>
              <div className="gap"></div>
              <div className="gap"></div>
              <div className="gap"></div>
            </div>
            <div className="rating__peoplee">
              <img src={Image} alt="" />
              <div className="ratinginfo">
                <h6 className="ratingnamee">Michu Miras</h6>
                <p className="ratingrolee">Front-end Developer</p>
                <p className="small">04 May, 2023 . 5mins read</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" ch firstw">
          <img className="bigimg" src={BlogImage} alt="" />
          <div className="blog__detail">
            <div className="bdl">
              <h6>Benefits of access control why should you implement it?</h6>
            </div>
            <div className="bdr">
              <p>
                Access control is the process of limiting who can read and write
                in your data warehouse. It can be as simple as only giving
                business users permission to view data rather than write it or
                as complex as masking the values in certain data columns. Access
                control is also closely related to data democratization, the
                practice of making data accessible to all employees and
                stakeholders. Governance and security measures such as access
                control allow the data team to feel safe and secure in the
                quality of their data while having the power to let other
                (selected) teams see what is available to use. By controlling
                who can read and write queries in the data warehouse and keeping
                stakeholders who may not have data warehousing experience at
                bay, the risk of compromising your data’s integrity is
                minimized.
              </p>
            </div>
          </div>
          <div className="blog__detail">
            <div className="bdl">
              <h6>Benefits of access control why should you implement it?</h6>
            </div>
            <div className="bdr">
              <p>
                Access control is the process of limiting who can read and write
                in your data warehouse. It can be as simple as only giving
                business users permission to view data rather than write it or
                as complex as masking the values in certain data columns. Access
                control is also closely related to data democratization, the
                practice of making data accessible to all employees and
                stakeholders. Governance and security measures such as access
                control allow the data team to feel safe and secure in the
                quality of their data while having the power to let other
                (selected) teams see what is available to use. By controlling
                who can read and write queries in the data warehouse and keeping
                stakeholders who may not have data warehousing experience at
                bay, the risk of compromising your data’s integrity is
                minimized.
              </p>
            </div>
          </div>
          <div className="blog__detail">
            <div className="bdl">
              <h6></h6>
            </div>
            <div className="bdr">
              <img src={BlogImage} alt="" />
            </div>
          </div>
          <div className="blog__detail">
            <div className="bdl">
              <h6>Benefits of access control why should you implement it?</h6>
            </div>
            <div className="bdr">
              <p>
                Access control is the process of limiting who can read and write
                in your data warehouse. It can be as simple as only giving
                business users permission to view data rather than write it or
                as complex as masking the values in certain data columns. Access
                control is also closely related to data democratization, the
                practice of making data accessible to all employees and
                stakeholders. Governance and security measures such as access
                control allow the data team to feel safe and secure in the
                quality of their data while having the power to let other
                (selected) teams see what is available to use. By controlling
                who can read and write queries in the data warehouse and keeping
                stakeholders who may not have data warehousing experience at
                bay, the risk of compromising your data’s integrity is
                minimized.
              </p>
            </div>
          </div>
          <h1 className="similar__heading">Similar articles</h1>
          <div className="articles__container">
            {blogData.map((blog, index) => {
              if (index < 3) {
                return (
                  <div className="article__box" key={index}>
                    <img src={blog.img} alt="" />
                    <div className="article__box__">
                      <div className="article__top__header">
                        <div className="tag__box">
                          <span>{blog.tagName}</span>
                        </div>
                        <p>5 min read</p>
                      </div>
                      <div className="article__content">
                        <h3>{blog.title}</h3>
                        <p>{blog.short_content}</p>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="lets__talk">
            <div className="lefttt">
              <div className="tlc">
                <h6>Get in Touch</h6>
                <h2>Let’s talk about what we can make build, scale together</h2>
              </div>
              <div className="tli">
                <img src={Phone} alt="" />
              </div>
            </div>
            <div className="form">
              <input type="text" rows="3" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Contact Number" />
              <textarea rows="4" placeholder="Message" />
              <div className="submit">
                <a href="hi">Submit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="display__mobile">
        <div className="banner__component">
          <div className="banner__component__content blog__content__mobile">
            <h1 className="banner__heading">
              unlock The value of your data at 10x advantage
            </h1>
            <p>
              Upgrade your data analytics scaling now! Our advanced platform
              centralizes all your data into one source and offers easy access
              for data consumers. With an open architecture, it ensures faster,
              reliable, and scalable data solution deployment.
            </p>

            <div className="rating__peoplee">
              <img src={Image} alt="" />
              <div className="ratinginfo">
                <h6 className="ratingnamee">Michu Miras</h6>
                <p className="ratingrolee">Front-end Developer</p>
                <p className="small">04 May, 2023 . 5mins read</p>
              </div>
            </div>

            <img className="bigimgg" src={BlogImage} alt="" />

            <div className="ch blog__text">
              <h2>Benefits of access control why should you implement it?</h2> </div>
              <p>
                Access control is the process of limiting who can read and write
                in your data warehouse. It can be as simple as only giving
                business users permission to view data rather than write it or
                as complex as masking the values in certain data columns. Access
                control is also closely related to the data and if  nothing democratization, the
                practice of making data accessible to all employees and
                stakeholders. Governance and security measures such as access
                control allow the data team to feel safe and secure in the
                quality of their data while having the power to let other
                (selected) teams see what is available to use. By controlling
                who can read and write queries in the data warehouse and keeping
                stakeholders who may not have data warehousing experience at
                bay, the risk of compromising your data’s integrity is
                minimized.
              </p>
           
            <div className="ch blog__text">
              <h2>Benefits of access control why should you implement it?</h2></div>
              <p>
              Access control is the process of limiting who can read and write
                in your data warehouse. It can be as simple as only giving
                business users permission to view data rather than write it or
                as complex as masking the values in certain data columns. Access
                control is also closely related to the data and if  nothing democratization, the
                practice of making data accessible to all employees and
                stakeholders. Governance and security measures such as access
                control allow the data team to feel safe and secure in the
                quality of their data while having the power to let other
                (selected) teams see what is available to use. By controlling
                who can read and write queries in the data warehouse and keeping
                stakeholders who may not have data warehousing experience at
                bay, the risk of compromising your data’s integrity is
                minimized.
              </p>
            

            <img className="bigimgg" src={BlogImage} alt="" />

            <div className="ch blog__text">
              <h2>Benefits of access control why should you implement it?</h2>
            </div>
              <p>
              Access control is the process of limiting who can read and write
                in your data warehouse. It can be as simple as only giving
                business users permission to view data rather than write it or
                as complex as masking the values in certain data columns. Access
                control is also closely related to the data and if  nothing democratization, the
                practice of making data accessible to all employees and
                stakeholders. Governance and security measures such as access
                control allow the data team to feel safe and secure in the
                quality of their data while having the power to let other
                (selected) teams see what is available to use. By controlling
                who can read and write queries in the data warehouse and keeping
                stakeholders who may not have data warehousing experience at
                bay, the risk of compromising your data’s integrity is
                minimized.
              </p>
            <div className="articles ch">
              <h1 style={{ margin: "0" }}>Similar articles</h1>
            </div>
            <div className="articles__container">
              {blogData.map((blog, index) => {
                if (index < 3) {
                  return (
                    <div className="article__box" key={index}>
                      <img src={blog.img} alt="" />
                      <div className="article__box__">
                        <div className="article__top__header">
                          <div className="tag__box">
                            <span>{blog.tagName}</span>
                          </div>
                          <p>5 min read</p>
                        </div>
                        <div className="article__content">
                          <h3>{blog.title}</h3>
                          <p>{blog.short_content}</p>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="form">
          <div>
            <div className="tlc">
              <h6>Get in Touch !</h6>
              <h2>Let’s talk about what we can make build, scale together</h2>
            </div>
            <div className="tli">
              <img src={Phone} alt="" />
            </div>
          </div>
          <div className="tlc">
              <h6>Write to us</h6>
            </div>
            <input type="text" rows="3" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Contact Number" />
              <textarea rows="4" placeholder="Message" />
              <div className="submit">
                <a href="hi">Submit</a>
              </div>


        </div>
      </div>
    </div>
  );
};

export default Blog;
