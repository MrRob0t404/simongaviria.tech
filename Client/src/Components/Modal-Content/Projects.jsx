const Projects = () => {
  return (
    <div id="popup2" className="overlay light">
      <div className="popup">
        <h2>Projects</h2>
        <div className="content">
          <p>Click outside the popup to close.</p>
          <iframe
            title="React CodeSandbox Example"
            style={{
              width: "100%",
              height: 900,
              outline: "1px solid #252525",
              border: 0,
              borderRadius: 8,
              marginBottom: 16,
              zIndex: 100,
            }}
            src="https://6hv3kt.csb.app/"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Projects;
