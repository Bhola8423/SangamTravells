import React from "react";
import { FaCompass } from "react-icons/fa";
import EmptyState from "../components/common/EmptyState";

const NotFound: React.FC = () => {
  return (
    <EmptyState
      title="Lost in the Divine Journey?"
      description="The path you are looking for seems to have vanished like clouds at sunrise. Don't worry, even the greatest travelers take a wrong turn sometimes."
      icon={<FaCompass className="text-5xl text-primary" />}
      type="error"
      actionLabel="Back to Home"
      actionLink="/"
    />
  );
};

export default NotFound;
