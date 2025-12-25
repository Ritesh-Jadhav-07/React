import React from "react";

export const Card = ({username = "Ritesh"}) => {

  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Hr1U0srWAQvQpRJkB4PgO_y33x7eqiH7XUIkf29-Zd5-PHmqIwSPJZaA063bQ2nrwYO8zQ1bQP7wKzTUw4pwRpSpo3zRdZg8rLi_5Q&s=10"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Tailwind CSS is the only framework that I've seen scale on large
              teams. Its easy to customize, adapts to any design, and the build
              size is tiny.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{username}</div>
            <div>Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};
