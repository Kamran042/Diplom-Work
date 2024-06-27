import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import "./BlogArea.scss"
import toast from 'react-hot-toast';
import axios from 'axios';

const BlogArea = () => {
  const [blogs , setBlogs] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/diplomWork/blog");
      setBlogs(response.data);
    } catch (error) {
      toast.error("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [setBlogs]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return (
    <div className="blog-area section-space-bottom-100">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title mb-7">Latest Blog</h2>
          <p className="section-desc">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {blogs.map((blog,index) => (
                <SwiperSlide key={index} className="blog-item">
                  <div className="blog-content">
                    <div className="blog-meta">
                      <ul>
                        <li className="author">
                          <a href="!#">BY: ADMIN</a>
                        </li>
                        <li className="date">{formatDate(blog.createdAt)}</li>
                      </ul>
                    </div>
                    <h2 className="title">
                      <a href="blog.html">{blog.title}</a>
                    </h2>
                    <p className="short-desc mb-7">{blog.comment}</p>
                  </div>
                  <div className="blog-img img-hover-effect">
                    <a href="!#">
                      <img className="img-full" src={`http://localhost:8080/${blog.image}`}alt={blog.alt} />
                    </a>
                    
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArea