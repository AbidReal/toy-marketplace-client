import { useEffect } from "react";

const Blogs = () => {
  //dynamic title
  const pageName = "Blogs";

  useEffect(() => {
    document.title = `${pageName} | AceFig`;
  }, [pageName]);

  return (
    <div className="custom-container">
      <div>
        <ul className="m-20 custom-container list-disc">
          <li>
            <h5 className="text-3xl font-bold pb-5">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h5>
            <p className="border-b pb-5 mb-10 text-xl px-6 ">
              An access token is a credential used to authenticate and authorize
              a client to access protected resources on a server. It is obtained
              through authentication and grants time-limited access to specific
              resources. A refresh token is also given during authentication and
              is used to obtain a new access token when the current one expires
              without requiring re-authentication. On the client-side, the
              access token is typically stored in memory or secure storage
              mechanisms like cookies or local storage for easy retrieval.{" "}
              <br /> The refresh token should be securely stored, preferably in
              an HTTP-only cookie or a secure token storage solution like .env.
            </p>
          </li>

          <li>
            <h5 className="text-3xl font-bold pb-5">
              Compare SQL and NoSQL databases?
            </h5>
            <p className="border-b pb-5 mb-10 text-xl px-6 ">
              SQL databases are structured and use a tabular format with fixed
              schemas, while NoSQL databases are unstructured and do not rely on
              fixed schemas. <br /> SQL databases use structured query language
              for data manipulation and retrieval, while NoSQL databases use
              various data models like key-value, document, or graph. <br /> SQL
              databases are better for complex queries and relationships between
              data, while NoSQL databases are better in handling large amounts
              of unstructured data and providing high scalability and
              flexibility. <br /> SQL databases guarantee ACID (Atomicity,
              Consistency, Isolation, Durability) properties for data integrity,
              whereas NoSQL databases prioritize scalability and availability
              over strict consistency.
            </p>
          </li>
          <li>
            <h5 className="text-3xl font-bold pb-5">
              What is express js? What is Nest JS?
            </h5>
            <p className="border-b pb-5 mb-10 text-xl px-6 ">
              Express.js is a popular web application framework for Node.js that
              simplifies the development of server-side applications. It
              provides an easy and flexible approach for building web servers
              and APIs, making it easy to handle HTTP requests, routing,
              middleware, and other web-related tasks. <br />
              Nest.js, is a progressive Node.js framework built with TypeScript.
              It is designed to create scalable and efficient server-side
              applications by leveraging modern JavaScript features and
              architectural patterns inspired by Angular. Nest.js combines
              elements of both functional and object-oriented programming to
              provide a modular and extendable framework for building strong and
              maintainable applications.
            </p>
          </li>
          <li>
            <h5 className="text-3xl font-bold pb-5">
              What is MongoDB aggregate and how does it work?
            </h5>
            <p className="border-b pb-5 mb-10 text-xl px-5 ">
              MongoDB aggregate is a feature for advanced data analysis and
              manipulation. It uses a pipeline of stages to process and
              transform data in a collection. Each stage takes input, processes
              it and passes the result to the next stage. It allows filtering, ,
              sorting, grouping and others operations to perform complex queries
              and aggregations efficiently.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
