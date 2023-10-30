import Button from "./Button";

const TwoColumn = ({
  image_link,
  heading,
  paragraph,
  buttonText,
  imageOnLeft,
  showButton,
}) => {
  const columnOrder = imageOnLeft ? "md:flex-row" : "md:flex-row-reverse";
  return (
    <>
      <div className={`flex flex-col ${columnOrder} bg-gray-100 gap-8 mt-8`}>
        {/* Left Column (Image) */}
        <div className="md:w-1/2 ">
          <img
            src={image_link}
            alt="two_column"
            className={`w-full h-auto rounded-md`}
          />
        </div>

        {/* Right Column (Text Content) */}
        <div className="md:w-1/2 p-4 flex flex-col justify-center">
          <h2 className="text-xl font-medium mb-2 text-left font-sans text-primary md:text-4xl">
            {heading}
          </h2>
          <p className="text-gray-600 mb-4 text-left text-textColor text-lg font-sans">
            {paragraph}
          </p>
          {showButton && (
            <Button
              url={"/"}
              text={buttonText}
              className={
                "bg-primary text-white py-2 px-4 text-left rounded-md hover:bg-hoverColor mr-auto"
              }
            />
          )}
        </div>
      </div>
    </>
  );
};

export default TwoColumn;
