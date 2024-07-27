import React from "react";

function Blogs() {
  return (
    <>
      <div className="container mt-5">
        <header className="text-center">
          <h2 className="display-4">Latest Blogs</h2>
        </header>
        <section className="mt-4">
          <div className="card mb-3">
            <img
              src="https://via.placeholder.com/300"
              className="card-img-top"
              alt="Blog Thumbnail"
            />
            <div className="card-body">
              <h5 className="card-title">Blog Title 1</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>

          <div className="card mb-3">
            <img
              src="https://via.placeholder.com/300"
              className="card-img-top"
              alt="Blog Thumbnail"
            />
            <div className="card-body">
              <h5 className="card-title">Blog Title 2</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </section>
        <footer className="mt-5 text-muted text-center">
          <p>&copy; 2024 My React App. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default Blogs;
