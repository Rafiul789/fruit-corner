import React from 'react';

const Blogs = () => {
    return (
        <div  className="md:flex  md:mx-2 md:gap-2 items-center border border-solid border-blue-400 rounded-md">
            <div className="p-2"> <h1  className="text-3xl font-bold">What is Context Api?</h1> <br></br>  <p>Context API is a function that allows one to share states scross the entire app.It returns consumer and provider.Provider provides states to its children.Consumer is a component that consumes and uses the state.Context API solves major problem of prop drilling .It helps to pass data from parent component to all child component.</p>   </div>

            <div  className="p-2"> <h1 className="text-3xl font-bold" >What is Semantic Tags?  </h1> <br></br> <p>Semantic tag means meaningful tag that is used to present the web pages.Such as paragraph tag is semantic  and presentational .People know what paragraphs are and browser also know how to display them.Semantic makes it clear to the browser what is the meaning of a page and its content.The pages which is made with semantic tags are much easier ot read.Semantic tags offer better user experience.  Example: article,header,footer,aside etc 

 </p>   </div>
        </div>
    );
};

export default Blogs;