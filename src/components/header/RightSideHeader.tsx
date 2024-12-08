import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export const RightSideHeader = ({
  header_logo,
  token,
  username,
  role,
}: {
  header_logo: string;
  token: string | null;
  username: string | null;
  role: string | null;
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-start">
      <img
        src={header_logo}
        onClick={() => navigate("/")}
        className="w-20 cursor-pointer"
      />
      {token ? (
        <div className="flex justify-start mt-2.5">
          <Button
            onClick={() => navigate("/myRequests")}
            variant="link"
            className="mr-6 cursor-pointer">
            ברוך הבא {username}!
          </Button>
          {role !== "1" && (
            <>
              <Button
                onClick={() => navigate("/myRequests")}
                variant="secondary"
                className="mr-6 cursor-pointer">
                הבקשות שלי
              </Button>
              <Button className="mr-6" variant="secondary">
                בקשה חדשה
              </Button>
            </>
          )}
        </div>
      ) : (
        <Button
          className="mr-6 mt-2.5"
          variant="outline"
          onClick={() => navigate("/login")}>
          התחבר
        </Button>
      )}
    </div>
  );
};

