import React from "react";

function Footer() {
  return (
    <footer className="flex justify-between border border-t-gray-300 p-4 pb-10">
      <div className="flex items-start text-xs text-blue-500">
        Terms of service Indigo theme for Open edX
      </div>
      <div className="flex gap-2">
        <div className="object-contain h-10">
          <img
            className="w-full h-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz-cERhLd49gDDgMBBXNZAH-CTmqjlfj5VvWuLGsIMHDQhir_vE5MsCoUCJozpMzYH_A&usqp=CAU"
            alt="tutor logo"
          />
        </div>
        <div className="object-contain h-10">
          <img
            className="w-full h-full"
            src="https://lh4.googleusercontent.com/T3ub5mpiMi66Xy7K97oZIBM-EHppbSkLcGoeRzMoThVc_90w8ZIyoLNoesFkwO4xpVHQvyrItWGu0lePSX4Y0TGv6GExhFslwQuGbjte7f0_dq_B9ziFVDlQ4oSMmpcdUP67Na9A"
            alt="open edx logo"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
