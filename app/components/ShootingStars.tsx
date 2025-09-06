export default function ShootingStars() {
  return (
    <>
      {/* Shooting Star Container 1 */}
      <div
        className="shooting-star-1 fixed top-0 right-0 w-screen h-screen pointer-events-none"
        style={{
          position: "fixed",
          overflow: "hidden",
          zIndex: 0,
        }}
      ></div>

      {/* Shooting Star Container 2 */}
      <div
        className="shooting-star-2 fixed top-0 right-0 w-screen h-screen pointer-events-none"
        style={{
          position: "fixed",
          overflow: "hidden",
          zIndex: 0,
        }}
      ></div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
                  .shooting-star-1::before {
                      content: "";
                      position: absolute;
                      top: 20%;
                      right: 0;
                      rotate: -45deg;
                      width: 6em;
                      height: 2px;
                      background: linear-gradient(90deg, #ffffff, #ffffff80, transparent);
                      animation: 3s shootingStar ease-out infinite;
                      animation-delay: 0s;
                      pointer-events: none;
                      z-index: 0;
                      box-shadow: 0 0 10px #ffffff;
                  }
                  
                  .shooting-star-2::before {
                      content: "";
                      position: absolute;
                      top: 60%;
                      right: 0;
                      rotate: -45deg;
                      width: 6em;
                      height: 2px;
                      background: linear-gradient(90deg, #ffffff, #ffffff80, transparent);
                      animation: 3s shootingStar ease-out infinite;
                      animation-delay: 1.5s;
                      pointer-events: none;
                      z-index: 0;
                      box-shadow: 0 0 10px #ffffff;
                  }
                  
                  @keyframes shootingStar {
                      0% {
                          transform: translateX(0) translateY(0);
                          opacity: 0;
                      }
                      5% {
                          opacity: 1;
                      }
                      85% {
                          transform: translateX(-35em) translateY(0);
                          opacity: 1;
                      }
                      100% {
                          transform: translateX(-40em) translateY(0);
                          opacity: 0;
                      }
                  }
              `,
        }}
      />
    </>
  );
}
