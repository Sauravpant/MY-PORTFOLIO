import React from "react";

const SkillSection = () => {
  return (
    <div className="px-6 sm:px-20">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-semibold mb-5">
          My Tech Stacks
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1">
        <div className="flex flex-col items-center p-4 border-2 border-black w-full sm:w-72 md:w-64 lg:w-56 h-auto min-h-[320px]">
          <h3 className="text-3xl font-semibold mb-4">Languages</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <img
              src="images/c-logo.png"
              alt="C"
              className="w-16 h-16 object-contain"
            />
            <img
              src="images/cpp-logo.png"
              alt="C++"
              className="w-16 h-16 object-contain"
            />
            <img
              src="images/java-logo.png"
              alt="Java"
              className="w-16 h-16 object-contain"
            />
            <img
              src="images/js-logo.png"
              alt="JavaScript"
              className="w-16 h-16 object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col items-center p-4 border-2 border-black w-full sm:w-72 md:w-64 lg:w-56 h-auto min-h-[320px]">
          <h3 className="text-3xl font-semibold mb-4">Front-End</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <img
              src="images/html-logo.png"
              alt="HTML"
              className="w-16 h-16 object-contain"
            />
            <img
              src="images/css-logo.png"
              alt="CSS"
              className="w-16 h-16 object-contain"
            />
            <img
              src="images/bootstrap-logo.png"
              alt="Bootstrap"
              className="w-16 h-16 object-contain"
            />
            <img
              src="images/tailwind-logo.png"
              alt="Tailwind"
              className="w-16 h-16 object-contain"
            />
            <img
              src="images/react-logo.png"
              alt="React"
              className="w-16 h-16 object-contain"
            />
            <img
              src="images/sass-logo.png"
              alt="SASS"
              className="w-16 h-16 object-contain"
            />
            <img
              src="images/js-logo.png"
              alt="JavaScript"
              className="w-16 h-16 object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col items-center p-4 border-2 border-black w-full sm:w-72 md:w-64 lg:w-56 h-auto min-h-[320px]">
          <h3 className="text-3xl font-semibold mb-4">Back-End</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <img
              src="images/nodejs-logo.png"
              alt="Node.js"
              className="w-16 h-16 object-contain"
            />
            <img
              src="images/mysql-logo.png"
              alt="MySQL"
              className="w-16 h-16 object-contain"
            />
            <img
              src="images/postgresql-logo.png"
              alt="PostgreSQL"
              className="w-16 h-16 object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col items-center p-4 border-2 border-black w-full sm:w-72 md:w-64 lg:w-56 h-auto min-h-[320px]">
          <h3 className="text-3xl font-semibold mb-4">Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <img
              src="images/git-logo.png"
              alt="Git"
              className="w-16 h-16 object-contain"
            />
            <img
              src="images/github-logo.png"
              alt="GitHub"
              className="w-16 h-16 object-contain"
            />
            <img
              src="images/vs-logo.png"
              alt="Visual Studio"
              className="w-16 h-16 object-contain"
            />
            <img
              src="images/vscode-logo.png"
              alt="VS Code"
              className="w-16 h-16 object-contain"
            />
          </div>
        </div>
      </div>
      <div className="mb-12"></div>
    </div>
  );
};

export default SkillSection;
