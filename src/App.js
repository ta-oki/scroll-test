import "./styles.css";

const columnWidth = 200;
const columnHeight = 800;
const sidebarWidth = 80;

const viewportWidth = 500;
const viewportHeight = 400;

const CalendarSidebar = () => {
  return (
    <div>
      <div
        style={{
          height: `${viewportHeight}px`,
          overflow: "scroll"
        }}
      >
        <div
          style={{
            width: `${sidebarWidth}px`,
            height: `${columnHeight}px`,
            background: "#ffcc33"
          }}
        >
          test
        </div>
      </div>

      <table style={{ width: `${sidebarWidth}px`, background: "#6666ff" }}>
        <tbody>
          <tr>
            <th>test</th>
          </tr>
          <tr>
            <th>test</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Calendar = () => {
  const titles = ["a", "b", "c", "d", "e"];

  return (
    <div
      style={{
        width: `${viewportWidth}px`,
        overflow: "scroll"
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            height: `${viewportHeight}px`,
            overflow: "scroll"
          }}
        >
          {titles.map((title) => (
            <div key={title}>
              <div
                style={{
                  width: `${columnWidth}px`,
                  height: `${columnHeight}px`,
                  background: "#66ff66",
                  borderStyle: "solid",
                  borderWidth: "0 1px 0 0",
                  borderColor: "gray",
                  boxSizing: "border-box"
                }}
              >
                {title}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            width: `${viewportWidth}px`,
            overflow: "scroll"
          }}
        >
          {titles.map((title) => (
            <div key={title}>
              <table
                style={{
                  width: `${columnWidth}px`,
                  background: "#ff6666",
                  borderStyle: "solid",
                  borderWidth: "0 1px 0 0",
                  borderColor: "gray",
                  boxSizing: "border-box"
                }}
              >
                <tbody>
                  <tr>
                    <td>test</td>
                  </tr>
                  <tr>
                    <td>test</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Container = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <CalendarSidebar />
        <Calendar />
      </div>
    </>
  );
};

export const App = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Container />
    </div>
  );
};
