import React from "react";

function AssignmentForm() {
  return (
    <div className="my-4 p-2 sm:px-4 py-2 border border-gray-300 border-t-8 border-t-[rgb(12,96,165)]">
      {/* Assignment Heading */}
      <div className="py-2 flex items-center gap-4 border-b border-gray-300">
        <div>
          <p>1</p>
        </div>
        <p className="text-gray-300">|</p>
        <div>
          <b>Your Response</b> due Dec 31, 2028 19:00 EST (in 4 years, 9 months)
        </div>
      </div>

      {/* Assignment Info */}
      <p className="my-2 text-sm sm:text-lg">
        Enter your response to the prompt. You can save your progress and return
        to complete your response at any time before the due date (Sunday, Dec
        31, 2028 19:00 EST).{" "}
        <b>After you submit your response, you cannot edit it.</b>
      </p>

      {/* Assignment Input Section */}
      <div className="bg-gray-100 p-2">
        <p>The prompt for this section</p>
        <div className="my-2 p-4 border-2 bg-white border-gray-300 border-l-8 border-l-gray-300">
          <ul className="flex flex-col gap-4">
            <li>Name your as Assignment30-Q1-Studentname. </li>
            <li>Do it for each problem.</li>
            <li>Save it up in zipClick the Submit button.</li>
          </ul>
        </div>
        <p>Your Response (Required)</p>
        <textarea
          placeholder="Enter your response to the prompt above"
          className=" w-full h-40 my-2 p-4 border-2 bg-white border-gray-300 border-l-8 border-l-gray-300"
        ></textarea>
        <div className="my-2 flex-col sm:flex sm:flex-row items-center gap-4 text-xs">
          <button className="my-2 border border-gray-300 bg-white text-gray-400 text-sm px-4 py-2 rounded">
            Save Your Progress
          </button>
          <div>THIS RESPONSE HAS NOT BEEN SAVED.</div>
        </div>
        <p>File Uploads (Required)</p>
        <div className="my-2 p-2 flex flex-col sm:flex-row items-center justify-between">
          <input className="w-4/5 sm:w-1/5 my-2 sm:my-0" type="file" />
          <p className="text-sm">
            Supported file types: .pdf, .gif, .jpg, .jpgeg, .jfif, .pjpeg, .pjp,
            .png, .zip, .rar, .7z
          </p>
          <button className="border border-gray-300 bg-white text-gray-400 text-sm px-4 py-2 rounded">
            Upload files
          </button>
        </div>

        <hr className="border-[1px] my-2" />
        <p>You may continue to work on your response until you submit it.</p>
      </div>
    </div>
  );
}

export default AssignmentForm;
