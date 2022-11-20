import { useState } from "react";

import { css } from "@emotion/react";
import { BsFillPlayFill } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function Home() {
  const [showPlayer, setShowPlayer] = useState(false);

  const clickHandler = () => {
    setShowPlayer(true);
  };

  return (
    <section
      css={css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      })}
    >
      <h2
        css={css({
          textAlign: "center",
          margin: "1.5rem 0",
        })}
      >
        Reel
      </h2>

      <div
        onClick={clickHandler}
        css={css({
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "546px",
        })}
      >
        {!showPlayer && (
          <div
            css={css({
              width: "75vw",
              height: "546px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            })}
          >
            <IconContext.Provider
              value={{
                color: "white",
                size: "100px",
              }}
            >
              <div
                css={css({
                  zIndex: "3",
                  position: "absolute",
                  justifyContent: "center",
                })}
              >
                <BsFillPlayFill
                  css={css({
                    zIndex: "3",
                  })}
                />
              </div>
            </IconContext.Provider>
            {/* <img
              css={css({
                position: "absolute",
                zIndex: "2",
              })}
              src="https://firebasestorage.googleapis.com/v0/b/film-portfolio-28f4b.appspot.com/o/Screen%20Shot%202022-11-17%20at%205.17.56%20PM.png?alt=media&token=939fcb8c-aa0d-4ea3-a9c9-438095c3745a"
              width="1080px"
              height="454px"
            /> */}
          </div>
        )}

        <iframe
          css={css({
            position: "absolute",
            width: "1300px",
            height: "546px",
          })}
          src="https://player.vimeo.com/video/556691314?h=2ad5ab1954"
          width="1300px"
          height="546px"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
