import React from "react";

const RecipeInfo = ({ description, ingredients }) => {
  return (
    <section className="">
      <article className="flex flex-col lg:w-full w-full gap-4 text-justify mb-12">
        <h3 className="text-xl text-neutral-900">Description</h3>
        <p
          className="text-sm text-neutral-400 leading-6"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </article>
      {/* <div className="w-[1px] rounded-lg h-[225px] relative bg-neutral-300"></div> */}
      <article className="flex flex-col gap-4 text-justify">
        <h3 className="text-xl text-neutral-900">Ingredients</h3>
        <ul className="text-sm text-neutral-400 list-disc leading-6 pl-6">
          {ingredients.map((e, index) => (
            <li key={index}>{e.original}</li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default RecipeInfo;
