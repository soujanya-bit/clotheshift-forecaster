import ClosetManager from "@/components/ClosetManager";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Closet = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">My Closet</h1>
          <Link to="/">
            <Button variant="outline">Back to Weather</Button>
          </Link>
        </div>
        <ClosetManager onClothingUpdate={() => {}} />
      </div>
    </div>
  );
};

export default Closet;