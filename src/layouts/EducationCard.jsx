import React from "react";

const EducationCard = () => {
  return (
   <div>
     <div className=" flex flex-col lg:flex-row py-4">
      <div className=" w-full lg:w-2/4">
        <h2 className=" font-semibold">(equivalent to) <br></br>MSc CS </h2>
        <div className="mt-2">
          <p>Marks: 72%</p>
          <p>2016 - 2018</p>
        </div>
      </div>
      <div>
        <h2 className=" font-semibold mt-2 lg:mt-0"> PGD in Computer Science (Bahauddin zakariya university)</h2>
        <p className=" mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          dolor incidunt quo, nulla dolore molestiae esse animi hic, placeat
          velit omnis quasi officia suscipit. Natus dignissimos reiciendis ut
          assumenda corrupti?
        </p>
        <div className=" bg-slate-500 w-full h-0.5 mt-2"></div>
      </div>
    </div>



    <div className=" flex flex-col lg:flex-row py-4">
      <div className=" w-full lg:w-2/4">
        <h2 className=" font-semibold">MERN Stack </h2>
        <div className="mt-2">
          <p>CGPA ( 3.5/4 )</p>
          <p>2018 - 2020</p>
        </div>
      </div>

      <div>
        <h2 className=" font-semibold mt-2 lg:mt-0">Mern Programming (Nexux Berry Pakistan) </h2>
        <p className=" mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          dolor incidunt quo, nulla dolore molestiae esse animi hic, placeat
          velit omnis quasi officia suscipit. Natus dignissimos reiciendis ut
          assumenda corrupti?
        </p>
        <div className=" bg-slate-500 w-full h-0.5 mt-2"></div>
      </div>
    </div>
   </div>
  );
};

export default EducationCard;
