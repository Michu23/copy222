import React, { useContext, useEffect, useState } from "react";
import Dot from "../assets/Ellipse.svg";
import { Link } from "react-router-dom";
import StateContext from "../context/StateContext";

import Left from "../assets/Icons/Left.svg";

const Blog = () => {
  const { activeTag, setActiveTag, blogData } = useContext(StateContext);
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  // const numberOfBlogs = blogData.length;
  // const numberOfPages = Math.ceil(numberOfBlogs / 6);

  const filteredBlogs =
    activeTag === "All"
      ? blogData
      : blogData.filter((blog) => blog.tagName === activeTag);

  const numberOfBlogs = filteredBlogs.length;
  const numberOfPages = Math.ceil(numberOfBlogs / 6);

  // Get blogs for the current page
  const blogsForCurrentPage = filteredBlogs.slice((page - 1) * 6, page * 6);

  // Assuming 'page' is the current page number
  const paginationNumbers = Array.from(
    { length: numberOfPages },
    (_, index) => index + 1
  );

  return (
    <div>
      <div className="blogs">
        <div className="display__desktop">
          <div className=" ch first">
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
              <div className="">
                <div className="tags">
                  <div
                    className={
                      "tagsbox cp " + (activeTag === "All" ? "active" : "")
                    }
                    onClick={() => {
                      setActiveTag("All");
                      setPage(1);
                    }}
                  >
                    <p>All</p>
                  </div>
                  <img src={Dot} alt="" />
                  <div
                    className={
                      "tagsbox cp " +
                      (activeTag === "Engineering" ? "active" : "")
                    }
                    onClick={() => {
                      setActiveTag("Engineering");
                      setPage(1);

                    }}
                  >
                    <p>Engineering</p>
                  </div>
                  <img src={Dot} alt="" />
                  <div
                    className={
                      "tagsbox cp " +
                      (activeTag === "Blockchain" ? "active" : "")
                    }
                    onClick={() => {
                      setActiveTag("Blockchain");
                      setPage(1);

                    }}
                  >
                    <p>Blockchain</p>
                  </div>
                  <img src={Dot} alt="" />
                  <div
                    className={
                      "tagsbox cp " +
                      (activeTag === "Announcements" ? "active" : "")
                    }
                    onClick={() => {
                      setActiveTag("Announcements");
                      setPage(1);

                    }}
                  >
                    <p>Announcements</p>
                  </div>
                  <img src={Dot} alt="" />
                  <div
                    className={
                      "tagsbox cp " + (activeTag === "People" ? "active" : "")
                    }
                    onClick={() => {
                      setActiveTag("People");
                      setPage(1);

                    }}
                  >
                    <p>People</p>
                  </div>
                  <img src={Dot} alt="" />
                  <div
                    className={
                      "tagsbox cp " + (activeTag === "NFT" ? "active" : "")
                    }
                    onClick={() => {
                      setActiveTag("NFT");
                      setPage(1);
                    }}
                  >
                    <p>NFT</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="articles headings ch">
              <h1>{activeTag + " Articles"}</h1>
              <div className="articles__container">
                {blogsForCurrentPage.map((blog, index) => {
                  return (
                    <Link to={`/blogcontent/${blog.id}`}>
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
                      </div>{" "}
                    </Link>
                  );
                })}
              </div>
              {/* Render pagination only if numberOfPages is greater than 1 */}
              {numberOfPages > 1 && (
                <div className="firstw">
                  <div className="pagination">
                    <div
                      className="page page__left non-active"
                      onClick={() => {
                        setPage(page - 1);
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      <img src={Left} alt="" />
                    </div>
                    {paginationNumbers.map((pageNumber) => (
                      <div
                        className={`page ${
                          pageNumber === page ? "active" : "non-active"
                        }`}
                        key={pageNumber}
                        onClick={() => {
                          setPage(pageNumber);
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <p>{pageNumber}</p>
                      </div>
                    ))}
                    <div
                      className="page page__right non-active"
                      onClick={() => {
                        setPage(page + 1);
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      <img src={Left} alt="" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="display__mobile">
          {/* <div className="blogsm__first ch">
            <div className="blogsm__content">
              <h1>
                Looking to manage your 
                Data more Efficiently
              </h1>
              <p></p>
            </div>
          </div> */}
          <div className="banner__component">
            <div className="banner__component__content">
              <h1 className="banner__heading">
                unlock The value of your data at 10x advantage
              </h1>
              <p>
                Upgrade your data analytics scaling now! Our advanced platform
                centralizes all your data into one source and offers easy access
                for data consumers. With an open architecture, it ensures
                faster, reliable, and scalable data solution deployment.
              </p>
              <div className="">
                <div className="tags">
                  <div
                    className={
                      "tagsbox cp " + (activeTag === "All" ? "active" : "")
                    }
                    onClick={() => {
                      setActiveTag("All");
                    }}
                  >
                    <p>All</p>
                  </div>
                  <img src={Dot} alt="" />
                  <div
                    className={
                      "tagsbox cp " +
                      (activeTag === "Engineering" ? "active" : "")
                    }
                    onClick={() => {
                      setActiveTag("Engineering");
                    }}
                  >
                    <p>Engineering</p>
                  </div>
                  <img src={Dot} alt="" />
                  <div
                    className={
                      "tagsbox cp " +
                      (activeTag === "Blockchain" ? "active" : "")
                    }
                    onClick={() => {
                      setActiveTag("Blockchain");
                    }}
                  >
                    <p>Blockchain</p>
                  </div>
                  <img src={Dot} alt="" />
                  <div
                    className={
                      "tagsbox cp " +
                      (activeTag === "Announcements" ? "active" : "")
                    }
                    onClick={() => {
                      setActiveTag("Announcements");
                    }}
                  >
                    <p>Announcements</p>
                  </div>
                  <img src={Dot} alt="" />
                  <div
                    className={
                      "tagsbox cp " + (activeTag === "People" ? "active" : "")
                    }
                    onClick={() => {
                      setActiveTag("People");
                    }}
                  >
                    <p>People</p>
                  </div>
                  <img src={Dot} alt="" />
                  <div
                    className={
                      "tagsbox cp " + (activeTag === "Nft" ? "active" : "")
                    }
                    onClick={() => {
                      setActiveTag("Nft");
                    }}
                  >
                    <p>NFT</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="articles headings ch">
              <h1>{activeTag + " Articles"}</h1>
              <div className="articles__container">
                {blogsForCurrentPage.map((blog, index) => {
                  return (
                    <Link to={`/blogcontent/${blog.id}`}>
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
                      </div>{" "}
                    </Link>
                  );
                })}
              </div>
              {numberOfPages > 1 && (
                <div className="firstw">
                  <div className="pagination">
                    <div
                      className="page page__left non-active"
                      onClick={() => {
                        setPage(page - 1);
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      <img src={Left} alt="" />
                    </div>
                    {paginationNumbers.map((pageNumber) => (
                      <div
                        className={`page ${
                          pageNumber === page ? "active" : "non-active"
                        }`}
                        key={pageNumber}
                        onClick={() => {
                          setPage(pageNumber);
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <p>{pageNumber}</p>
                      </div>
                    ))}
                    <div
                      className="page page__right non-active"
                      onClick={() => {
                        setPage(page + 1);
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      <img src={Left} alt="" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
