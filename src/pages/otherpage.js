import { Fragment, useState, useRef } from "react";
import { Button } from "@mui/material";
import { names } from "../data/names";

const OtherPage = (props) => {
  const listInnerRef = useRef();

  const [showModal, setShowModal] = useState(false);
  const [showSeeAllFollowers, setShowSeeAllFollowers] = useState(true);
  const [followers, setFollowers] = useState([
    { name: "Alpha", status: "Following" },
    { name: "Bravo", status: "Following" },
    { name: "Charlie", status: "Following" },
  ]);

  const displayAllFollowers = () => {
    setShowSeeAllFollowers(false);
    setFollowers((prev) => {
      const newFollowers = [
        { name: "Delta", status: "Follow" },
        { name: "Echo", status: "Follow" },
        { name: "Foxtrot", status: "Follow" },
      ];
      const updatedFollowers = [...prev, ...newFollowers];
      return updatedFollowers;
    });
  };

  const updateStatus = (updateIndex) => {
    // console.log(updateIndex);
    setFollowers(
      followers.map((follower, index) => {
        if (updateIndex === index) {
          return {
            name: follower.name,
            status: "Following",
          };
        } else {
          return follower;
        }
      })
    );
  };

  const showMoreFollowers = () => {
    console.log("showMoreFollowers", followers);
    const index = Math.floor(Math.random() * names.length);
    const newNames = names.slice(index, index + 4);
    // console.log(newNames);
    const newFollowers = newNames.map((name) => {
      return {
        name: name,
        status: index % 2 ? "Follow" : "Following",
      };
    });
    setFollowers((prev) => {
      return [...prev, ...newFollowers];
    });
  };

  const onScroll = () => {
    // console.log("listInnerRef.current", listInnerRef["current"]);
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight > scrollHeight - 50) {
        console.log("reached bottom");
        showMoreFollowers();
      }
    }
  };

  return (
    <Fragment>
      {/* <h1>Other Page</h1> */}
      {/* <h2>Followers</h2> */}
      {/* <div onClick={() => setShowModal(!showModal)}>more</div> */}
      <Button
        color="primary"
        variant="contained"
        type="submit"
        style={{ textTransform: "none" }}
        onClick={() => setShowModal(!showModal)}
      >
        <div>more</div>
      </Button>
      {/* <br /> */}
      {showModal && (
        <div>
          <div>Followers Dialog</div>

          <div role="presentation">
            <div role="dialog">
              <div id="#1">
                <div id="#2">
                  <div id="#2.1" style={{ border: "1px solid gray" }}>
                    Followers
                  </div>
                  <div
                    id="#2.2"
                    style={{
                      overflowY: "scroll",
                      height: "200px",
                      border: "1px solid black",
                    }}
                    onScroll={onScroll}
                    ref={listInnerRef}
                  >
                    <ul id="#2.2.1">
                      {followers.map((follower, index) => (
                        <li
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                          }}
                          key={index}
                        >
                          <div>{follower.name}&nbsp;</div>
                          <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                            onClick={() => updateStatus(index)}
                            style={{ textTransform: "none" }}
                          >
                            <div>{follower.status}</div>
                          </Button>
                        </li>
                      ))}
                    </ul>
                    {showSeeAllFollowers && (
                      <div id="#2.2.2" style={{ border: "1px solid gray" }}>
                        //{" "}
                        <a onClick={displayAllFollowers}>See All Followers</a>
                        <Button
                          color="primary"
                          variant="contained"
                          type="submit"
                          style={{ textTransform: "none" }}
                          onClick={displayAllFollowers}
                        >
                          <a onClick={displayAllFollowers}>See All Followers</a>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default OtherPage;
