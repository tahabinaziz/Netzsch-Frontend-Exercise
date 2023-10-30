const News = (props) => {
  return (
    <>    
      <div className="flex grid-cols-2 gap-8" >
        <div className="col-span-1 flex justify-center items-center">
          <img src={props.image} height={props.height} width={props.width} alt="news_image" className="mb-4"/>
        </div>
        <a href={props.link} >
        <div className="hover:text-hoverColor p-4">
  
          <p className="mb-2 text-lg font-light font-sans  ">
            {props.text1}
          </p>
          <p className="mb-2 text-medium font-light font-sans  ">
            {props.text2}
          </p>
          <p className="mb-2 text-lg font-medium  ">
            {props.text3}
          </p>
        </div>
        </a>
      </div>
    </>
  );
};

export default News;
