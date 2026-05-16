import React from "react";

const Card = () => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title">Puma</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
            voluptatibus quo repudiandae, similique nesciunt recusandae expedita
            tenetur officia quam maxime voluptatum nihil eaque, velit
            voluptates? Qui repellat placeat vero repudiandae.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
