import React, { useState } from "react";
import Client from "./Client";
import UploadClientLogo from "../ImageuploadField/UploadClientLogo";
import { useNavigate } from "react-router-dom";

const ClientparentForm = () => {
  const [currentForm, setCurrentForm] = useState(1);
  const navigate = useNavigate();
  const nextForm = () => {
    setCurrentForm(currentForm + 1);
  };
  const handleClientEdit = () => {
    setCurrentForm(2);
  };
  const handleClientFormSubmit = (action) => {
    if (action === "edit") {
      handleClientEdit();
    } else {
      // handle other form actions here
    }
  };
  return (
    <div>
      <div>
        {currentForm === 1 && (
          <Client nextForm={nextForm} onSubmit={handleClientFormSubmit} />
        )}
        {currentForm === 2 && <UploadClientLogo />}
      </div>
    </div>
  );
};

export default ClientparentForm;
